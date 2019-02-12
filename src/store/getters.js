const getters = {
    token: state => state.user.token,
    isCollapse: state => state.common.isCollapse,
    tagList: state => state.common.tagList,
    keepAlive: state => state.common.keepAlive,
    isFullScreen: state => state.common.isFullScreen
}
export default getters
