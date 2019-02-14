const getters = {
    token: state => state.user.token,
    role: state => state.user.role,
    userInfo: state => state.user.userInfo,
    menu: state => state.user.menu,
    isCollapse: state => state.common.isCollapse,
    tagList: state => state.common.tagList,
    keepAlive: state => state.common.keepAlive,
    isFullScreen: state => state.common.isFullScreen
}
export default getters
