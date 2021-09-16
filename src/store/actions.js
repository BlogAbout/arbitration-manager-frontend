const actions = {
    callback({ commit }, formData) {
        return new Promise((resolve, reject) => {
            const data = {
                name: formData.name,
                phone: formData.phone
            }
            commit('setLoading', true)
            this._vm.$axios
                .post('/helper/callback', data)
                .then(response => {
                    commit('setError', null)
                    commit('setLoading', false)
                    resolve(response)
                })
                .catch(error => {
                    commit('setError', error.message)
                    commit('setLoading', false)
                    reject(error)
                })
        })
    },
    checkPing({ commit, state }) {
        const dateNow = new Date()

        if (state.ping == null) {
            commit('setPing', dateNow)
            this._vm.$axios.get('/helper/ping')
        } else {
            const dateOld = new Date(state.ping)
            const minutes = Math.ceil(Math.abs(dateOld.getTime() - dateNow.getTime())) / (1000 * 3600)
            if (minutes > 15) {
                commit('setPing', dateNow)
                this._vm.$axios.get('/helper/ping')
            }
            console.log(minutes)
        }
    }
};

export default actions;