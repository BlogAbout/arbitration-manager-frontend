export default {
    state: {
        documentPassport: null,
        documentInfo: null
    },
    getters: {
        getDocumentPassport(state) {
            return state.documentPassport
        },
        getDocumentInfo(state) {
            return state.documentInfo
        }
    },
    mutations: {
        setDocumentPassport(state, document) {
            state.documentPassport = document
        },
        setDocumentInfo(state, document) {
            state.documentInfo = document
        }
    },
    actions: {
        infoDocumentPassport({ commit }, login) {
            return new Promise((resolve, reject) => {
                commit('setLoading', true)
                this._vm.$axios.get(`/documents/passport/${login}`)
                    .then((response) => {
                        commit('setDocumentPassport', response.data)
                        commit('setError', null)
                        commit('setLoading', false)
                        resolve(response)
                    })
                    .catch((error) => {
                        commit('setDocumentPassport', null)
                        commit('setError', error.message)
                        commit('setLoading', false)
                        reject()
                    })
            })
        },
        infoDocumentInfo({ commit }, data) {
            return new Promise((resolve, reject) => {
                commit('setLoading', true)
                this._vm.$axios.get(`/documents/info/${data.login}/${data.type}`)
                    .then((response) => {
                        commit('setDocumentInfo', response.data)
                        commit('setError', null)
                        commit('setLoading', false)
                        resolve(response)
                    })
                    .catch((error) => {
                        commit('setDocumentInfo', null)
                        commit('setError', error.message)
                        commit('setLoading', false)
                        reject()
                    })
            })
        },
        addDocumentPassport({ commit }, formData) {
            return new Promise((resolve, reject) => {
                const partsBirth = formData.birthDate.split('.')
                const data = {
                    userId: 0,
                    lastName: formData.lastName,
                    firstName: formData.firstName,
                    middleName: formData.middleName,
                    prevFio: formData.prevFio,
                    birthDate: partsBirth[2] + '-' + partsBirth[1] + '-' + partsBirth[0],
                    birthPlace: formData.birthPlace,
                    snils: formData.snils,
                    inn: formData.inn,
                    documentType: formData.documentType,
                    documentSeries: formData.documentSeries,
                    subject: formData.subject,
                    area: formData.area,
                    city: formData.city,
                    locality: formData.locality,
                    street: formData.street,
                    house: formData.house,
                    hull: formData.hull,
                    apartment: formData.apartment
                }

                commit('setLoading', true)
                if (formData.id === 0) {
                    this._vm.$axios
                        .post('/documents/passport/', data)
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
                } else {
                    this._vm.$axios
                        .put('/documents/passport/' + formData.id, data)
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
                }
            })
        },
        addDocumentInfo({ commit }, formData) {
            return new Promise((resolve, reject) => {
                const data = {
                    userId: 0,
                    type: formData.type,
                    documentInfo: JSON.stringify(formData.documentInfo),
                }

                commit('setLoading', true)
                if (formData.id === 0) {
                    this._vm.$axios
                        .post('/documents/info/', data)
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
                } else {
                    this._vm.$axios
                        .put('/documents/info/' + formData.id, data)
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
                }
            })
        }
    }
}