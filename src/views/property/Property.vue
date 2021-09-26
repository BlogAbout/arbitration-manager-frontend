<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div class="content-block-inner">
                    <h1>
                        Имущество с торгов
                        <router-link
                            v-if="isAuthenticated && authorities && authorities.indexOf('ROLE_ADMIN') !== -1"
                            to="/property/add"
                            class="btn btn-right"
                        >Добавить новое</router-link>
                    </h1>
                    <div v-if="property" class="list-items list-property">
                        <div class="row row-stretch row-wrap">
                            <div
                                v-for="(item, index) in property"
                                :key="'property-item-' + index"
                                class="item"
                            >
                                <div
                                    v-if="isAuthenticated && authorities && authorities.indexOf('ROLE_ADMIN') !== -1"
                                    class="property-actions"
                                >
                                    <router-link :to="'/property/' + item.id + '-edit'" class="link-small" title="Редактировать">
                                        <i class="far fa-edit"></i>
                                    </router-link>
                                    <a href="#" class="link-small" title="Удалить" @click.prevent="remove(item.id)">
                                        <i class="far fa-trash-alt"></i>
                                    </a>
                                </div>
                                <div class="item-image">
                                    <img :src="item.image ? '/uploads/property/' + item.image : '/images/noimage.jpg'" :alt="item.name" />
                                </div>
                                <div class="item-title">{{ item.name }}</div>
                                <div class="row row-stretch">
                                    <div class="col col-2 item-cost">{{ item.cost | costFormat }} руб.</div>
                                    <router-link :to="'/property/' + item.id + '-info'" class="col col-2 btn">Подробнее</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <loader v-else-if="loading" />
                    <h2>Инвестирование в реализованное имущество или выкуп объектов недвижимости</h2>
                    <p>В процессе банкротства юридического или физического лица происходит реализация его имущества –продажа на специальных торгах по банкротству. </p>
                    <p>Чтобы стать участником этих торгов, нужно пройти специальную регистрацию на аккредитованном электронном торговом сайте. Проще говоря, приобрести такое имущество удобнее с помощью арбитражного управляющего. Специалист не только может найти для вас лучшие лоты. Мы так же выступаем на торгах от вашего имени и решаем все последующие вопросы по оформлению такой недвижимости.</p>
                    <p>По завершении вы можете получить в свою собственность прекрасные квартиры, дома, машины и прочее имущество намного дешевле рыночной цены в любом регионе России. Уточним, что для оформления вам не нужно будет приезжать в данный регион, все происходит дистанционно.</p>
                    <p>В данном разделе мы предоставили некоторые лоты. Для уточнения недвижимости, актуальной к покупке, обратитесь к нам по телефону или на электронную почту.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Loader from '../../components/Loader'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Property',
    components: {
        Loader
    },
    computed: {
        ...mapState({
            isAuthenticated: state => state.authenticated
        }),
        ...mapGetters({
            property: 'getProperty',
            authorities: 'getAuthorities',
            loading: 'getLoading'
        })
    },
    mounted() {
        this.$store.dispatch("listProperty")
    },
    methods: {
        remove: function(id) {
            this.$store.dispatch('removeProperty', id)
        },
        loadMore: function() {
            this.$store.dispatch('loadPropertyPageAction')
        }
    }
}
</script>