const mutations = {
    setError(state, error) {
        state.error = error
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setAuth(state, auth) {
        localStorage.setItem('AuthState', auth)
        state.authenticated = auth
    },
    setPing(state, date) {
        state.ping = date
    }
};

export default mutations;