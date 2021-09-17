<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div v-if="question" class="content-block-inner">
                    <h1>{{ question.question }}</h1>
                    <p class="text-wrap">{{ question.answer }}</p>
                    <div class="links">
                        <router-link to="/question">Вернуться</router-link>
                    </div>
                </div>
                <loader v-else-if="loading" />
            </div>
        </section>
    </main>
</template>

<script>
import Loader from '../../components/Loader'
import { mapGetters } from 'vuex'

export default {
    name: 'QuestionInfo',
    components: {
        Loader
    },
    data: () => ({
        currentId: 0,
    }),
    computed: {
        ...mapGetters({
            question: 'getCurrentQuestion',
            loading: 'getLoading'
        })
    },
    mounted() {
        this.currentId = this.$route.params.id || 0
        if (this.currentId === 0)
            this.$router.push('/question')
        else
            this.$store.dispatch("infoQuestion", this.currentId)
    },
    methods: {
        remove: function(id) {
            this.$store.dispatch('removeQuestion', id)
        }
    }
}
</script>