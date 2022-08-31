import { defineStore } from "pinia";
import { ITheme } from "@/store/theme/interface";
import storage from "@/storage";

export const appStore = defineStore("appStore", {
  state: () => ({
    // sidebar 是否展开
    sidebarOpened: storage.getSidebarOpened(),
    // 国际化
    language: storage.getLanguage(),
    // 组件大小
    componentSize: storage.getComponentSize(),
    // 主题
    theme: storage.getTheme()
  }),
  actions: {
    setSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened;
      storage.setSidebarOpened(this.sidebarOpened);
    },
    setLanguage(locale: string) {
      this.language = locale;
      storage.setLanguage(locale);
    },
    setComponentSize(size: string) {
      this.componentSize = size;
      storage.setComponentSize(size);
    },
    setTheme(theme: ITheme) {
      this.theme = theme;
      storage.setTheme(theme);
    }
  }
});
