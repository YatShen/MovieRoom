const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    device: state => state.app.device,

    name: state => state.auth.name,

    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,

    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
}
export default getters
