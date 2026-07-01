import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";
import { i18n } from "@/i18n";
import { pathToCamel } from "@/utils/tool";

NProgress.configure({ showSpinner: false });

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("../layout/components/Router/Redirect.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/404",
    component: () => import("../views/404.vue")
  }
];
// @ts-ignore
const t = i18n.global.t
const defaultAsyncChildren = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home.vue"),
    meta: {
      title: i18n.global.t("router.home"),
      affix: true,
      breadcrumb: [] // 补齐结构
    }
  },
  {
    path: "/profile/password",
    name: "ProfilePassword",
    component: () => import("../views/profile/password.vue"),
    meta: {
      title: i18n.global.t("router.profilePassword"),
      cache: true,
      breadcrumb: [] // 补齐结构
    }
  }
];

export const errorRoute: RouteRecordRaw = {
  path: "/:pathMatch(.*)",
  redirect: "/404"
};

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

// 白名单列表
const whiteList = ["/login"];

// 路由加载前
router.beforeEach(async (to, from) => {
  NProgress.start();

  // token存在的情况
  if (store.userStore.token) {
    if (to.path === "/login") {
      return "/home";
    } else {
      // 菜单信息不存在，则重新拉取菜单信息
      if (store.routerStore.menuRoutes.length === 0) {
        await store.userStore.get();
        const menuRoutes = await store.routerStore.getMenuRoutes();

        // 根据后端菜单路由，生成KeepAlive路由
        const keepAliveRoutes = getKeepAliveRoutes(menuRoutes, []);

        // 添加菜单路由
        const currentAsyncRoute: RouteRecordRaw = {
          path: "/",
          component: () => import("../layout/index.vue"),
          redirect: "/home",
          children: [...defaultAsyncChildren, ...keepAliveRoutes]
        };

        router.addRoute(currentAsyncRoute);

        // 错误路由
        router.addRoute(errorRoute);

        // 保存路由数据
        store.routerStore.setRoutes(constantRoutes.concat(currentAsyncRoute));

        // 搜索菜单需要使用
        store.routerStore.setSearchMenu(keepAliveRoutes);

        return { ...to, replace: true };
      } else {
        return true;
      }
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      return true;
    } else {
      return "/login";
    }
  }
});

// 路由加载后
router.afterEach(() => {
  NProgress.done();
});

// 获取扁平化路由，将多级路由转换成一级路由
export const getKeepAliveRoutes = (rs: RouteRecordRaw[], breadcrumb: string[]): RouteRecordRaw[] => {
  const routerList: RouteRecordRaw[] = [];

  rs.forEach((item: any) => {
    const currentBreadcrumb = [...breadcrumb];
    if (item.meta.title) {
      currentBreadcrumb.push(item.meta.title);
    }

    if (item.children && item.children.length > 0) {
      routerList.push(...getKeepAliveRoutes(item.children, currentBreadcrumb));
    } else {
      if (!item.meta.breadcrumb) {
        item.meta.breadcrumb = [];
      }
      item.meta.breadcrumb.push(...currentBreadcrumb);
      routerList.push(item);
    }

    currentBreadcrumb.pop();
  });
  return routerList;
};

// 加载vue组件
const layoutModules = import.meta.glob("/src/views/**/*.vue");

// 根据路径，动态获取vue组件
const getDynamicComponent = (path: string): any => {
  const component = layoutModules[`/src/views/${path}.vue`];
  if (!component) {
    console.error("component error", path);
  }
  return component;
};

// 根据菜单列表，生成路由数据
export const generateRoutes = (menuList: any): RouteRecordRaw[] => {
  const routerList: RouteRecordRaw[] = [];

  menuList.forEach((menu: any) => {
    let component;
    let path;
    if (menu.children && menu.children.length > 0) {
      component = () => import("@/layout/index.vue");
      path = "/p/" + menu.id;
    } else {
      component = getDynamicComponent(menu.url);
      path = "/" + menu.url;
    }
    const route: RouteRecordRaw = {
      path: path,
      name: pathToCamel(path),
      component: component,
      children: [],
      meta: {
        title: menu.name,
        icon: menu.icon,
        id: "" + menu.id,
        cache: true,
        _blank: menu.openStyle === 1,
        breadcrumb: []
      }
    };

    // 有子菜单的情况
    if (menu.children && menu.children.length > 0) {
      route.children?.push(...generateRoutes(menu.children));
    }

    routerList.push(route);
  });

  return routerList;
};
