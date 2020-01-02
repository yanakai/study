export default {
    state: {  //这里放全局参数
        appName: "闫凯的VUE",  // 应用名称
        themeColor: "#414748",  // 主题颜色
        oldThemeColor: "#14889A",   // 上一次主题颜色
        collapse:false,  // 导航栏收缩状态
        menuRouteLoaded:false    // 菜单和路由是否已经加载
    },
    getters: { //这里是get方法
        collapse(state){// 对应着上面state
            return state.collapse
        }
    },
    mutations: { //这里是set方法
        onCollapse(state){  // 改变收缩状态
            state.collapse = !state.collapse
        },
        setThemeColor(state, themeColor){  // 改变主题颜色
            state.oldThemeColor = state.themeColor
            state.themeColor = themeColor
        },
        menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        }
    },
    actions: {
    }
}