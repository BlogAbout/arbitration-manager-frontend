<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div class="content-block-inner">
                    <h1>Информация о гражданине</h1>
                    <form name="form-passport" action="" method="post" @submit.prevent="submitHandler">
                        <h3 class="mt-50">Личные данные</h3>
                        <div class="row row-wrap row-space">
                            <div class="col col-2">
                                <div class="field">
                                    <label for="lastName">Фамилия *</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        class="validate"
                                        placeholder="Фамилия (обязательно)"
                                        v-model.trim="lastName"
                                        :class="{invalid: ($v.lastName.$dirty && !$v.lastName.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.lastName.$dirty && !$v.lastName.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="firstName">Имя *</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        class="validate"
                                        placeholder="Имя (обязательно)"
                                        v-model.trim="firstName"
                                        :class="{invalid: ($v.firstName.$dirty && !$v.firstName.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.firstName.$dirty && !$v.firstName.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="middleName">Отчество</label>
                                    <input
                                        id="middleName"
                                        type="text"
                                        name="middleName"
                                        placeholder="Отчество (не обязательно)"
                                        v-model.trim="middleName"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="prevFio">В случае изменения фамилии, имени, отчества указать прежние фамилии, имена, отчества</label>
                                    <input
                                        id="prevFio"
                                        type="text"
                                        name="prevFio"
                                        placeholder="Прежние фамилии, имена, отчества"
                                        v-model.trim="prevFio"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="birthDate">Дата рождения *</label>
                                    <input
                                        id="birthDate"
                                        type="text"
                                        name="birthDate"
                                        class="validate"
                                        placeholder="дд.мм.гггг (обязательно)"
                                        v-model.trim="birthDate"
                                        v-date
                                        :class="{invalid: ($v.birthDate.$dirty && !$v.birthDate.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.birthDate.$dirty && !$v.birthDate.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="birthPlace">Место рождения *</label>
                                    <input
                                        id="birthPlace"
                                        type="text"
                                        name="birthPlace"
                                        class="validate"
                                        placeholder="Место рождения (обязательно)"
                                        v-model.trim="birthPlace"
                                        :class="{invalid: ($v.birthPlace.$dirty && !$v.birthPlace.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.birthPlace.$dirty && !$v.birthPlace.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="snils">СНИЛС *</label>
                                    <input
                                        id="snils"
                                        type="text"
                                        name="snils"
                                        class="validate"
                                        placeholder="СНИЛС (обязательно)"
                                        v-model.trim="snils"
                                        :class="{invalid: ($v.snils.$dirty && !$v.snils.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.snils.$dirty && !$v.snils.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="inn">ИНН</label>
                                    <input
                                        id="inn"
                                        type="number"
                                        name="inn"
                                        step="1"
                                        placeholder="ИНН (при наличии)"
                                        v-model.trim="inn"
                                    />
                                </div>
                            </div>
                        </div>
                        <h3 class="mt-50">Документ, удостоверяющий личность</h3>
                        <div class="row row-wrap row-space">
                            <div class="col col-2">
                                <div class="field">
                                    <label for="documentType">Вид документа *</label>
                                    <input
                                        id="documentType"
                                        type="text"
                                        name="documentType"
                                        class="validate"
                                        placeholder="Вид документа (обязательно)"
                                        v-model.trim="documentType"
                                        :class="{invalid: ($v.documentType.$dirty && !$v.documentType.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.documentType.$dirty && !$v.documentType.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="documentSeries">Серия (при наличии) и номер *</label>
                                    <input
                                        id="documentSeries"
                                        type="text"
                                        name="documentSeries"
                                        class="validate"
                                        placeholder="Серия (при наличии) и номер (обязательно)"
                                        v-model.trim="documentSeries"
                                        :class="{invalid: ($v.documentSeries.$dirty && !$v.documentSeries.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.documentSeries.$dirty && !$v.documentSeries.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                        </div>
                        <h3 class="mt-50">
                            Адрес регистрации по месту жительства в Российской Федерации
                            <span class="tooltip-help">?<span class="tooltip-help-text">При отсутствии регистрации по месту жительства в пределах Российской Федерации указать наименование субъекта Российской Федерации по месту пребывания без указания конкретного адреса</span></span>
                        </h3>
                        <div class="row row-wrap row-space">
                            <div class="col col-2">
                                <div class="field">
                                    <label for="subject">Субъект Российской Федерации *</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        class="validate"
                                        placeholder="Субъект Российской Федерации (обязательно)"
                                        v-model.trim="subject"
                                        :class="{invalid: ($v.subject.$dirty && !$v.subject.required)}"
                                    />
                                    <span
                                        class="helper-text invalid"
                                        v-if="$v.subject.$dirty && !$v.subject.required"
                                    >Поле не должно быть пустым</span>
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="area">Район</label>
                                    <input
                                        id="area"
                                        type="text"
                                        name="area"
                                        placeholder="Район (при наличии)"
                                        v-model.trim="area"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="city">Город</label>
                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        placeholder="Город (при наличии)"
                                        v-model.trim="city"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="locality">Населенный пункт (село, поселок и так далее)</label>
                                    <input
                                        id="locality"
                                        type="text"
                                        name="locality"
                                        placeholder="Населенный пункт (село, поселок и так далее) (при наличии)"
                                        v-model.trim="locality"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="street">Улица (проспект, переулок и так далее)</label>
                                    <input
                                        id="street"
                                        type="text"
                                        name="street"
                                        placeholder="Улица (проспект, переулок и так далее) (при наличии)"
                                        v-model.trim="street"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="area">Номер дома (владения)</label>
                                    <input
                                        id="house"
                                        type="text"
                                        name="house"
                                        placeholder="Номер дома (владения) (при наличии)"
                                        v-model.trim="house"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="hull">Номер корпуса (строения)</label>
                                    <input
                                        id="hull"
                                        type="text"
                                        name="hull"
                                        placeholder="Номер корпуса (строения) (при наличии)"
                                        v-model.trim="hull"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label for="apartment">Номер квартиры (офиса)</label>
                                    <input
                                        id="apartment"
                                        type="text"
                                        name="apartment"
                                        placeholder="Номер квартиры (офиса) (при наличии)"
                                        v-model.trim="apartment"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row row-wrap row-space">
                            <div class="col" :class="{'col-2': !loading}">
                                <div class="field">
                                    <input v-if="!loading" type="submit" value="Сохранить данные" />
                                    <loader v-else />
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="id" id="id" v-model="id" />
                    </form>
                    <div v-if="message" class="errors">{{ message }}</div>
                </div>
                <div class="links">
                    <router-link to="/profile">Вернуться</router-link>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Loader from '../../components/Loader'
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/dist/validators.min'

export default {
    name: 'DocumentPassport',
    components: {
        Loader
    },
    computed: {
        ...mapGetters({
            loading: 'getLoading'
        })
    },
    mounted() {
        this.currentLogin = this.$store.getters.getUsername
        this.$store.dispatch("infoDocumentPassport", this.currentLogin)
            .then((response) => {
                if (response.status === 200) {
                    this.id = response.data.id || ''
                    this.lastName = response.data.lastName || ''
                    this.firstName = response.data.firstName || ''
                    this.middleName = response.data.middleName || ''
                    this.prevFio = response.data.prevFio || ''
                    this.birthDate = response.data.birthDate ? this.$options.filters.dateFormat(response.data.birthDate, 'short') : ''
                    this.birthPlace = response.data.birthPlace || ''
                    this.snils = response.data.snils || ''
                    this.inn = response.data.inn || ''
                    this.documentType = response.data.documentType || ''
                    this.documentSeries = response.data.documentSeries || ''
                    this.subject = response.data.subject || ''
                    this.area = response.data.area || ''
                    this.city = response.data.city || ''
                    this.locality = response.data.locality || ''
                    this.street = response.data.street || ''
                    this.house = response.data.house || ''
                    this.hull = response.data.hull || ''
                    this.apartment = response.data.apartment || ''
                }
            })
    },
    data: () => ({
        id: 0,
        currentLogin: '',
        lastName: '',
        firstName: '',
        middleName: '',
        prevFio: '',
        birthDate: '',
        birthPlace: '',
        snils: '',
        inn: '',
        documentType: '',
        documentSeries: '',
        subject: '',
        area: '',
        city: '',
        locality: '',
        street: '',
        house: '',
        hull: '',
        apartment: '',
        message: ''
    }),
    validations: {
        lastName: {
            required
        },
        firstName: {
            required
        },
        birthDate: {
            required
        },
        birthPlace: {
            required
        },
        snils: {
            required
        },
        documentType: {
            required
        },
        documentSeries: {
            required
        },
        subject: {
            required
        }
    },
    methods: {
        async submitHandler() {
            this.message = ''

            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }

            const formData = {
                id: this.id,
                currentLogin: this.currentLogin,
                lastName: this.lastName,
                firstName: this.firstName,
                middleName: this.middleName,
                prevFio: this.prevFio,
                birthDate: this.birthDate,
                birthPlace: this.birthPlace,
                snils: this.snils,
                inn: this.inn,
                documentType: this.documentType,
                documentSeries: this.documentSeries,
                subject: this.subject,
                area: this.area,
                city: this.city,
                locality: this.locality,
                street: this.street,
                house: this.house,
                hull: this.hull,
                apartment: this.apartment
            }

            await this.$store.dispatch('addDocumentPassport', formData)
                .then((response) => {
                    if (response.status === 202)
                        this.message = response.data

                    if (response.status === 200)
                        this.$router.push('/profile')
                })
                .catch((error) => {
                    this.message = error.message
                })
        }
    }
}
</script>