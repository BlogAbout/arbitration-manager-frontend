<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div class="content-block-inner">
                    <h1>
                        Вопросы и ответы
                        <router-link
                            v-if="isAuthenticated && authorities && authorities.indexOf('ROLE_ADMIN') !== -1"
                            to="/question/add"
                            class="btn btn-right"
                        >Добавить новый</router-link>
                    </h1>
                    <div v-if="question" class="list-items list-question">
                        <div
                            v-for="(item, index) in question"
                            :key="'question-item-' + index"
                            class="item"
                        >
                            <h3 v-if="isAuthenticated && authorities && authorities.indexOf('ROLE_ADMIN') !== -1">
                                <router-link :to="'/question/' + item.id + '-info'">{{ item.question }}</router-link>
                                <router-link :to="'/question/' + item.id + '-edit'" class="link-small" title="Редактировать">
                                    <i class="far fa-edit"></i>
                                </router-link>
                                <a href="#" class="link-small" title="Удалить" @click.prevent="remove(item.id)">
                                    <i class="far fa-trash-alt"></i>
                                </a>
                            </h3>
                            <h3 v-else><router-link :to="'/question/' + item.id + '-info'">{{ item.question }}</router-link></h3>
                        </div>
                    </div>
                    <loader v-else-if="loading" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Loader from '../../components/Loader'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Question',
    components: {
        Loader
    },
    computed: {
        ...mapState({
            isAuthenticated: state => state.authenticated
        }),
        ...mapGetters({
            question: 'getQuestion',
            authorities: 'getAuthorities',
            loading: 'getLoading'
        })
    },
    mounted() {
        this.$store.dispatch("listQuestion")
    },
    methods: {
        remove: function(id) {
            this.$store.dispatch('removeQuestion', id)
        },
        loadMore: function() {
            this.$store.dispatch('loadQuestionPageAction')
        }
    }
}
</script>