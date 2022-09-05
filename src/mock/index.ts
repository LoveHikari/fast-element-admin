import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/app/common/user/info',
        method: 'get',
        response: () => {
            return {
                "code": 0,
                "msg": "success",
                "data": {
                    "id": 1,
                    "username": "admin",
                    "email": "babamu@126.com",
                    "avatar": "https://cdn.maku.net/images/avatar.png"
                }
            }
        },
    },
    {
        url: '/app/common/user/login',
        method: 'post',
        response: {
            "code": 0,
            "data": {
                "assessToken": "30c94f4b-5094-46ab-b463-09e88be0bca2",
                "token_type": "bearer",
                "refresh_token": "2b367597-dd05-4ed0-a968-56e0e7eabde7",
                "expires_in": 86400,
                "scope": "all"
            }
        }
    },
    {
        url: '/app/common/success',
        method: 'post',
        response: {
            "code": 0,
            "msg": "success",
            "data": null
        }
    },
    {
        url: RegExp('/app/common/del/' + '.*'),
        method: 'delete',
        response: {
            "code": 0,
            "msg": "success",
            "data": null
        }
    },
    {
        url: '/app/common/menu/navList',
        method: 'get',
        response: {
            "code": 0,
            "msg": "success",
            "data": [
                {
                    "id": 1,
                    "name": "系统管理",
                    "url": null,
                    "openStyle": 0,
                    "icon": "icon-setting",
                    "children": [
                        {
                            "id": 11,
                            "name": "菜单管理",
                            "url": "menu/index",
                            "openStyle": 0,
                            "icon": "icon-menu"
                        },
                        {
                            "id": 12,
                            "name": "用户管理",
                            "url": "user/index",
                            "openStyle": 0,
                            "icon": "icon-user"
                        },
                        {
                            "id": 13,
                            "name": "机构管理",
                            "url": "org/index",
                            "openStyle": 0,
                            "icon": "icon-cluster"
                        },
                        {
                            "id": 14,
                            "name": "角色管理",
                            "url": "role/index",
                            "openStyle": 0,
                            "icon": "icon-team"
                        },
                        {
                            "id": 15,
                            "name": "岗位管理",
                            "url": "post/index",
                            "openStyle": 0,
                            "icon": "icon-addteam"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "图表",
                    "url": null,
                    "openStyle": 0,
                    "icon": "icon-barchart",
                    "children": [
                        {
                            "id": 31,
                            "name": "堆叠面积图",
                            "url": "charts/AreaStack",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 32,
                            "name": "虚线柱状图",
                            "url": "charts/CategoryStack",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 33,
                            "name": "上证指数图",
                            "url": "charts/Candlestick",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "编辑器",
                    "url": null,
                    "openStyle": 0,
                    "icon": "icon-edit",
                    "children": [
                        {
                            "id": 41,
                            "name": "富文本编辑器",
                            "url": "editor/WangEditor",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 42,
                            "name": "Markdown编辑器",
                            "url": "editor/MdEditor",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "界面",
                    "url": null,
                    "openStyle": 0,
                    "icon": "icon-windows",
                    "children": [
                        {
                            "id": 51,
                            "name": "Icon 图标",
                            "url": "icons/index",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 52,
                            "name": "二维码生成",
                            "url": "qrcode/index",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 53,
                            "name": "页面打印",
                            "url": "printJs/index",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 54,
                            "name": "图片裁剪",
                            "url": "cropper/index",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        },
                        {
                            "id": 55,
                            "name": "复制文本",
                            "url": "copy/index",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "多级菜单",
                    "url": null,
                    "openStyle": 0,
                    "icon": "icon-unorderedlist",
                    "children": [
                        {
                            "id": 101,
                            "name": "菜单1",
                            "url": null,
                            "openStyle": 0,
                            "icon": "icon-unorderedlist",
                            "children": [
                                {
                                    "id": 1011,
                                    "name": "菜单11",
                                    "url": "menu/menu1/menu11/index",
                                    "openStyle": 0,
                                    "icon": "icon-unorderedlist"
                                },
                                {
                                    "id": 1012,
                                    "name": "菜单13",
                                    "url": null,
                                    "openStyle": 0,
                                    "icon": "icon-unorderedlist",
                                    "children": [
                                        {
                                            "id": 10121,
                                            "name": "菜单121",
                                            "url": "menu/menu1/menu12/menu121/index",
                                            "openStyle": 0,
                                            "icon": "icon-unorderedlist"
                                        },
                                        {
                                            "id": 10122,
                                            "name": "菜单122",
                                            "url": "menu/menu1/menu12/menu122/index",
                                            "openStyle": 0,
                                            "icon": "icon-unorderedlist"
                                        }
                                    ]
                                },
                                {
                                    "id": 1013,
                                    "name": "菜单13",
                                    "url": "menu/menu1/menu13/index",
                                    "openStyle": 0,
                                    "icon": "icon-unorderedlist"
                                }
                            ]
                        },
                        {
                            "id": 102,
                            "name": "菜单2",
                            "url": "menu/menu2/index",
                            "openStyle": 0,
                            "icon": "icon-unorderedlist"
                        }
                    ]
                }
            ]
        }
    },
    {
        url: '/app/common/menu/list',
        method: 'get',
        response: {
            "code": 0,
            "msg": "success",
            "data": [
                {
                    "id": 12,
                    "pid": 0,
                    "children": [
                        {
                            "id": 28,
                            "pid": 12,
                            "children": [
                                {
                                    "id": 29,
                                    "pid": 28,
                                    "children": [],
                                    "name": "查询",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:user:page",
                                    "sort": 0,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 30,
                                    "pid": 28,
                                    "children": [],
                                    "name": "新增",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:user:save,sys:role:list",
                                    "sort": 1,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 31,
                                    "pid": 28,
                                    "children": [],
                                    "name": "修改",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:user:update,sys:user:info,sys:role:list",
                                    "sort": 2,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 32,
                                    "pid": 28,
                                    "children": [],
                                    "name": "删除",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:user:delete",
                                    "sort": 3,
                                    "createTime": null,
                                    "parentName": null
                                }
                            ],
                            "name": "用户管理",
                            "url": "sys/user/index",
                            "type": 0,
                            "openStyle": 0,
                            "icon": "icon-user",
                            "authority": "",
                            "sort": 0,
                            "createTime": null,
                            "parentName": null
                        },
                        {
                            "id": 18,
                            "pid": 12,
                            "children": [
                                {
                                    "id": 19,
                                    "pid": 18,
                                    "children": [],
                                    "name": "查询",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:org:list",
                                    "sort": 0,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 20,
                                    "pid": 18,
                                    "children": [],
                                    "name": "新增",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:org:save",
                                    "sort": 1,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 21,
                                    "pid": 18,
                                    "children": [],
                                    "name": "修改",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:org:update,sys:org:info",
                                    "sort": 2,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 22,
                                    "pid": 18,
                                    "children": [],
                                    "name": "删除",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:org:delete",
                                    "sort": 3,
                                    "createTime": null,
                                    "parentName": null
                                }
                            ],
                            "name": "机构管理",
                            "url": "sys/org/index",
                            "type": 0,
                            "openStyle": 0,
                            "icon": "icon-team",
                            "authority": "",
                            "sort": 1,
                            "createTime": null,
                            "parentName": null
                        },
                        {
                            "id": 13,
                            "pid": 12,
                            "children": [
                                {
                                    "id": 14,
                                    "pid": 13,
                                    "children": [],
                                    "name": "查询",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:post:page",
                                    "sort": 0,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 15,
                                    "pid": 13,
                                    "children": [],
                                    "name": "新增",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:post:save",
                                    "sort": 1,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 16,
                                    "pid": 13,
                                    "children": [],
                                    "name": "修改",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:post:update,sys:post:info",
                                    "sort": 2,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 17,
                                    "pid": 13,
                                    "children": [],
                                    "name": "删除",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:post:delete",
                                    "sort": 3,
                                    "createTime": null,
                                    "parentName": null
                                }
                            ],
                            "name": "岗位管理",
                            "url": "sys/post/index",
                            "type": 0,
                            "openStyle": 0,
                            "icon": "icon-addteam",
                            "authority": "",
                            "sort": 2,
                            "createTime": null,
                            "parentName": null
                        },
                        {
                            "id": 23,
                            "pid": 12,
                            "children": [
                                {
                                    "id": 24,
                                    "pid": 23,
                                    "children": [],
                                    "name": "查询",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:role:page",
                                    "sort": 0,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 25,
                                    "pid": 23,
                                    "children": [],
                                    "name": "新增",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:role:save,sys:role:menu,sys:org:list",
                                    "sort": 1,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 26,
                                    "pid": 23,
                                    "children": [],
                                    "name": "修改",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:role:update,sys:role:info,sys:role:menu,sys:org:list",
                                    "sort": 2,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 27,
                                    "pid": 23,
                                    "children": [],
                                    "name": "删除",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:role:delete",
                                    "sort": 3,
                                    "createTime": null,
                                    "parentName": null
                                }
                            ],
                            "name": "角色管理",
                            "url": "sys/role/index",
                            "type": 0,
                            "openStyle": 0,
                            "icon": "icon-team",
                            "authority": "",
                            "sort": 3,
                            "createTime": null,
                            "parentName": null
                        }
                    ],
                    "name": "权限管理",
                    "url": "",
                    "type": 0,
                    "openStyle": 0,
                    "icon": "icon-safetycertificate",
                    "authority": "",
                    "sort": 0,
                    "createTime": null,
                    "parentName": null
                },
                {
                    "id": 1,
                    "pid": 0,
                    "children": [
                        {
                            "id": 2,
                            "pid": 1,
                            "children": [
                                {
                                    "id": 3,
                                    "pid": 2,
                                    "children": [],
                                    "name": "查看",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:menu:list",
                                    "sort": 0,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 4,
                                    "pid": 2,
                                    "children": [],
                                    "name": "新增",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:menu:save",
                                    "sort": 1,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 5,
                                    "pid": 2,
                                    "children": [],
                                    "name": "修改",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:menu:update,sys:menu:info",
                                    "sort": 2,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 6,
                                    "pid": 2,
                                    "children": [],
                                    "name": "删除",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:menu:delete",
                                    "sort": 3,
                                    "createTime": null,
                                    "parentName": null
                                }
                            ],
                            "name": "菜单管理",
                            "url": "sys/menu/index",
                            "type": 0,
                            "openStyle": 0,
                            "icon": "icon-menu",
                            "authority": null,
                            "sort": 0,
                            "createTime": null,
                            "parentName": null
                        },
                        {
                            "id": 7,
                            "pid": 1,
                            "children": [
                                {
                                    "id": 8,
                                    "pid": 7,
                                    "children": [],
                                    "name": "查询",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:dict:page",
                                    "sort": 0,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 10,
                                    "pid": 7,
                                    "children": [],
                                    "name": "修改",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:dict:update,sys:dict:info",
                                    "sort": 1,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 9,
                                    "pid": 7,
                                    "children": [],
                                    "name": "新增",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:dict:save",
                                    "sort": 2,
                                    "createTime": null,
                                    "parentName": null
                                },
                                {
                                    "id": 11,
                                    "pid": 7,
                                    "children": [],
                                    "name": "删除",
                                    "url": "",
                                    "type": 1,
                                    "openStyle": 0,
                                    "icon": "",
                                    "authority": "sys:dict:delete",
                                    "sort": 3,
                                    "createTime": null,
                                    "parentName": null
                                }
                            ],
                            "name": "数据字典",
                            "url": "sys/dict/type",
                            "type": 0,
                            "openStyle": 0,
                            "icon": "icon-insertrowabove",
                            "authority": "",
                            "sort": 1,
                            "createTime": null,
                            "parentName": null
                        }
                    ],
                    "name": "系统设置",
                    "url": null,
                    "type": 0,
                    "openStyle": 0,
                    "icon": "icon-setting",
                    "authority": null,
                    "sort": 1,
                    "createTime": null,
                    "parentName": null
                }
            ]
        }
    },
    {
        url: RegExp('/app/common/menu/' + '.*'),
        method: 'get',
        response: {
            "code": 0,
            "msg": "success",
            "data": {
                "id": 2,
                "pid": 1,
                "children": [],
                "name": "菜单管理",
                "url": "sys/menu/index",
                "type": 0,
                "openStyle": 0,
                "icon": "icon-menu",
                "authority": null,
                "sort": 0,
                "createTime": null,
                "parentName": "系统设置"
            }
        }
    }
] as MockMethod[]
