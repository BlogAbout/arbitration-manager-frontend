<template>
    <div v-if="submitted" class="submit-success">{{ submitted }}</div>
    <div v-else class="feedback-form">
        <div class="form-description">Остались вопросы? Закажите обратный звонок!</div>
        <form name="form-feedback" action="" method="post" @submit.prevent="submitHandler">
            <div class="field">
                <input
                    id="name"
                    type="text"
                    name="name"
                    class="validate"
                    placeholder="Ваше имя"
                    v-model.trim="name"
                    :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
                />
                <span
                    class="helper-text invalid"
                    v-if="$v.name.$dirty && !$v.name.required"
                >Поле Имя не должно быть пустым</span>
            </div>
            <div class="field">
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    class="validate"
                    placeholder="Ваш номер телефона"
                    v-model.trim="phone"
                    v-phone
                    autocomplete="tel"
                    maxlength="18"
                    :class="{invalid: ($v.phone.$dirty && !$v.phone.required)}"
                />
                <span
                    class="helper-text invalid"
                    v-if="$v.phone.$dirty && !$v.phone.required"
                >Поле Телефон не должно быть пустым</span>
            </div>
            <div class="field">
                <input v-if="!loading" type="submit" value="Заказать звонок" />
                <loader v-else />
            </div>
        </form>
        <div v-if="errors" class="errors">{{ errors }}</div>
    </div>
</template>

<script>
import Loader from './Loader'
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/dist/validators.min'

export default {
    name: 'FeedbackForm',
    components: {
        Loader
    },
    computed: {
        ...mapGetters({
            loading: 'getLoading'
        })
    },
    data: () => ({
        name: '',
        phone: '',
        errors: '',
        submitted: ''
    }),
    validations: {
        name: {
            required
        },
        phone: {
            required
        }
    },
    methods: {
        async submitHandler() {
            this.submitted = ''
            this.errors = ''

            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }

            const formData = {
                name: this.name,
                phone: this.phone
            }

            await this.$store.dispatch('callback', formData)
                .then((response) => {
                    this.submitted = response.data
                })
                .catch((error) => {
                    this.errors = error.message
                })
        }
    }
}
</script>