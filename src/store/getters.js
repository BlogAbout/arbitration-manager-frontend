const getters = {
    appTitle(state) {
        return state.appTitle
    },
    getError(state) {
        return state.error
    },
    getLoading(state) {
        return state.loading
    },
    isAuthenticated() {
        return localStorage.getItem('AuthState') === 'true'
    },
    getPing(state) {
        return state.ping
    }
};

export default getters;