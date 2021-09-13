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
    }
};

export default actions;