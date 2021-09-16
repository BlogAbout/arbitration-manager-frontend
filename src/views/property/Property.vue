<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div class="content-block-inner">
                    <h1>
                        Имущество
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
                    <p>Реализация имущества гражданина – одна из процедур при процедуре банкротства. Имущественные вопросы, возникающие в процессе, решает финансовый или арбитражный управляющий. Его утверждают в делах о банкротстве физических лиц. В зоне его ответственности находится оценка стоимости объектов имущества, организационные моменты по проведению торгов. Кроме того, он может контролировать правильность процесса.</p>
                    <p>Во время реализации объектов имущества он не наблюдает, а распоряжается им в интересах должников. Такой специалист:</p>
                    <ul>
                        <li>распоряжается финансами на счетах должников-банкротов;</li>
                        <li>проводит от имени должников сделки продажи;</li>
                        <li>представляет его интересы в суде.</li>
                    </ul>
                    <h2>Права арбитражного (финансового) управляющего</h2>
                    <p>Управляющий уполномочен:</p>
                    <ol>
                        <li>Информировать каждого контрагента о начале операций по банкротству и ходе процесса.</li>
                        <li>Описывать имущество должников, предотвращать попытки сокрыть и передать собственность какому-то третьему лицу.</li>
                        <li>Оценивать имущественные объекты и создавать конкурсную массу для продажи.</li>
                        <li>Приглашать оценщиков со стороны в случае несогласия собственников с озвученными суммами.</li>
                        <li>Организовывать торги объектов, находящихся в собственности должника, принимая соответственные меры для обеспечения наиболее выгодных для клиента условий.</li>
                        <li>Направлять вырученных финансовые ресурсы для погашения долгов, учитывая их приоритетность для банкротов.</li>
                        <li>Передавать кредиторам неликвиды (не распроданные активы), чтобы компенсировать часть долга. Не принятые объекты возвращать банкротам.</li>
                        <li>Требовать долги с тех, кто задолжал банкроту, и перенаправлять средства для погашения обязательств.</li>
                    </ol>
                    <p>В процедуре реализации имущественных объектов управляющий получает информацию, включая ту, которая должнику своими силами не достать. К примеру, сведения о платежеспособности контрагента, с которыми у должника ранее состоялась сделка.</p>
                    <p>Кредитор вправе инициировать банкротства должника. Но не стоит паниковать и сильно переживать, если:</p>
                    <ul>
                        <li>суммарный долг не космический;</li>
                        <li>нет в собственности 2-3 жилых объектов (квартир, домов);</li>
                        <li>не было сделок с недвижимостью и другим имуществом.</li>
                    </ul>
                    <p>Если кредитор инициирует процесс относительно физического лица, то ему придется оплачивать издержки по процедуре. Ему придется подумать, стоит ли принимать такие меры.</p>
                    <p>Управляющий не просто контролирует, он имеет право на распоряжение имуществом.</p>
                    <h2>Выберите грамотного специалиста</h2>
                    <p>Если нужна помощь профессионала по вопросам банкротства, обращайтесь. Я, опытный арбитражный управляющий Евгения Марченко. Отстаиваю интересы клиентов, вхожу в их положение, оказываю всестороннюю помощь и решаю имущественные вопросы любой сложности.</p>
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