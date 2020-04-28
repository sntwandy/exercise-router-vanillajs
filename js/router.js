class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoutes();
    }

    _matchUrlToRoute(urlSegs) {
        const matchedRoute = this.routes.find(route => {
            const routePathSegs = route.path.split('/').slice(1);

            if (routePathSegs.length !== urlSegs.length) {
                return false;
            }

            return routePathSegs
                .every((routePathSeg, i) => routePathSeg === urlSegs[i]);
        });
        return matchedRoute;
    }

    _loadInitialRoutes() {
        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit(1) : '';
        this.loadRoutes(...pathSegs);
    }
}