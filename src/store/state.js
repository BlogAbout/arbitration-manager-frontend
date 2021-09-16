const state = {
    error: null,
    loading: false,
    authenticated: localStorage.getItem('AuthState') === 'true',
    ping: null
};

export default state;