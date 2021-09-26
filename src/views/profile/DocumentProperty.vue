<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div class="content-block-inner">
                    <h1>Опись имущества гражданина</h1>
                    <form name="form-passport" action="" method="post" @submit.prevent="submitHandler">
                        <h3 class="mt-50">Недвижимое имущество</h3>
                        <div
                            v-for="(item, index) in documentProperty.notMovableList"
                            :key="'not-movable-' + index"
                            class="row row-wrap row-space row-bottom row-dynamic-generation"
                        >
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-not-movable-type-' + index">Вид имущества</label>
                                    <select
                                        name="documentProperty[notMovableList][type]"
                                        :id="'type-not-movable-type-' + index"
                                        v-model="item.type"
                                    >
                                        <option value="1">Земельные участки</option>
                                        <option value="2">Жилые дома, дачи</option>
                                        <option value="3">Квартиры</option>
                                        <option value="4">Гаражи</option>
                                        <option value="5">Иное недвижимое имущество</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-not-movable-title-' + index">Наименование имущества</label>
                                    <input
                                        :id="'type-not-movable-title-' + index"
                                        type="text"
                                        name="documentProperty[notMovableList][title]"
                                        placeholder="Наименование имущества"
                                        v-model.trim="item.title"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-not-movable-category-' + index">
                                        Вид собственности
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается вид собственности (индивидуальная, долевая, общая); для совместной собственности указываются иные лица (фамилия, имя и отчество (последнее – при наличии) или наименование), в собственности которых находится имущество; для долевой собственности указывается доля гражданина, который составляет опись имущества.</span></span>
                                    </label>
                                    <input
                                        :id="'type-not-movable-category-' + index"
                                        type="text"
                                        name="documentProperty[notMovableList][category]"
                                        placeholder="Вид собственности"
                                        v-model.trim="item.category"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-not-movable-address-' + index">Местонахождение (адрес)</label>
                                    <input
                                        :id="'type-not-movable-address-' + index"
                                        type="text"
                                        name="documentProperty[notMovableList][address]"
                                        placeholder="Местонахождение (адрес)"
                                        v-model.trim="item.address"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-not-movable-area-' + index">Площадь (кв.м)</label>
                                    <input
                                        :id="'type-not-movable-area-' + index"
                                        type="number"
                                        name="documentProperty[notMovableList][area]"
                                        placeholder="Площадь (кв.м)"
                                        min="0"
                                        step="0.01"
                                        v-model.trim="item.area"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label :for="'type-not-movable-base-' + index">
                                        Основания приобретения
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указываются наименование и реквизиты документа, являющегося законным основанием для возникновения права собственности.</span></span>
                                        и стоимость
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается при наличии документов, содержащих сведения о стоимости имущества (например, отчет о стоимости имущества, подготовленный оценщиком, договор купли-продажи, иной документ об оплате (приобретении) имущества).</span></span>
                                    </label>
                                    <input
                                        :id="'type-not-movable-base-' + index"
                                        type="text"
                                        name="documentProperty[notMovableList][base]"
                                        placeholder="Основания приобретения и стоимость"
                                        v-model.trim="item.base"
                                    />
                                </div>
                            </div>
                            <div class="col col-2">
                                <div class="field">
                                    <label :for="'type-not-movable-info-' + index">
                                        Сведения о залоге и залогодержателе
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указываются сведения о договоре залога, иной сделке, на основании которой возникает залог в силу закона, а также наименование юридического лица или фамилия, имя и отчество (последнее – при наличии) физического лица, в залоге у которого находится имущество.</span></span>
                                    </label>
                                    <input
                                        :id="'type-not-movable-info-' + index"
                                        type="text"
                                        name="documentProperty[notMovableList][info]"
                                        placeholder="Сведения о залоге и залогодержателе"
                                        v-model.trim="item.info"
                                    />
                                </div>
                            </div>
                        </div>
                        <p><a href="#" @click.prevent="addNotMovable">Добавить</a></p>
                        <h3 class="mt-50">Движимое имущество</h3>
                        <div
                            v-for="(item, index) in documentProperty.movableList"
                            :key="'movable-' + index"
                            class="row row-wrap row-space row-bottom row-dynamic-generation"
                        >
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-movable-type-' + index">Вид имущества</label>
                                    <select
                                        name="documentProperty[movableList][type]"
                                        :id="'type-movable-type-' + index"
                                        v-model="item.type"
                                    >
                                        <option value="1">Автомобили легковые</option>
                                        <option value="2">Автомобили грузовые</option>
                                        <option value="3">Мототранспортные средства</option>
                                        <option value="4">Сельско-хозяйственная техника</option>
                                        <option value="5">Водный транспорт</option>
                                        <option value="6">Воздушный транспорт</option>
                                        <option value="7">Иные транспортные средства</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-movable-title-' + index">Вид, марка, модель транспортного средства, год изготовления</label>
                                    <input
                                        :id="'type-movable-title-' + index"
                                        type="text"
                                        name="documentProperty[movableList][title]"
                                        placeholder="Вид, марка, модель транспорт¬ного средства, год изготовления"
                                        v-model.trim="item.title"
                                    />
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-movable-number-' + index">
                                        Идентификационный номер
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается при наличии у движимого имущества цифрового, буквенного обозначения или комбинации таких обозначений, которые идентифицируют указанное имущество, в том числе идентификационный номер транспортного средства (VIN).</span></span>
                                    </label>
                                    <input
                                        :id="'type-movable-number-' + index"
                                        type="text"
                                        name="documentProperty[movableList][number]"
                                        placeholder="Идентификационный номер"
                                        v-model.trim="item.number"
                                    />
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-movable-category-' + index">
                                        Вид собственности
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается вид собственности (индивидуальная, долевая, общая); для совместной собственности указываются иные лица (фамилия, имя и отчество (последнее – при наличии) или наименование), в собственности которых находится имущество; для долевой собственности указывается доля гражданина, который составляет опись имущества.</span></span>
                                    </label>
                                    <input
                                        :id="'type-movable-category-' + index"
                                        type="text"
                                        name="documentProperty[movableList][category]"
                                        placeholder="Основания приобретения и стоимость"
                                        v-model.trim="item.category"
                                    />
                                </div>
                            </div>
                            <div class="col col-3">
                                <div class="field">
                                    <label :for="'type-movable-address-' + index">Место нахождения/место хранения (адрес)</label>
                                    <input
                                        :id="'type-movable-address-' + index"
                                        type="text"
                                        name="documentProperty[movableList][address]"
                                        placeholder="Место нахождения/место хранения (адрес)"
                                        v-model.trim="item.address"
                                    />
                                </div>
                            </div>
                            <div class="col col-3">
                                <div class="field">
                                    <label :for="'type-not-movable-cost-' + index">
                                        Стоимость
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается при наличии документов, содержащих сведения о стоимости имущества (например, отчет о стоимости имущества, подготовленный оценщиком, договор купли-продажи, кассовый чек, товарный чек, иной документ об оплате (приобретении) имущества).</span></span>
                                    </label>
                                    <input
                                        :id="'type-not-movable-cost-' + index"
                                        type="text"
                                        name="documentProperty[movableList][cost]"
                                        placeholder="Стоимость"
                                        min="0"
                                        step="0.01"
                                        v-model.trim="item.cost"
                                    />
                                </div>
                            </div>
                            <div class="col col-3">
                                <div class="field">
                                    <label :for="'type-movable-info-' + index">
                                        Сведения о залоге и залогодержателе
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указываются сведения о договоре залога, иной сделке, на основании которой возникает залог в силу закона, а также наименование юридического лица или фамилия, имя и отчество (последнее – при наличии) физического лица, в залоге у которого находится имущество.</span></span>
                                    </label>
                                    <input
                                        :id="'type-movable-info-' + index"
                                        type="text"
                                        name="documentProperty[movableList][info]"
                                        placeholder="Сведения о залоге и залогодержателе"
                                        v-model.trim="item.info"
                                    />
                                </div>
                            </div>
                        </div>
                        <p><a href="#" @click.prevent="addMovable">Добавить</a></p>
                        <h3 class="mt-50">Сведения о счетах в банках и иных кредитных организациях</h3>
                        <div
                            v-for="(item, index) in documentProperty.billList"
                            :key="'bill-' + index"
                            class="row row-wrap row-space row-bottom row-dynamic-generation"
                        >
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-bill-title-' + index">Наименование и адрес банка или иной кредитной организации</label>
                                    <input
                                        :id="'type-bill-title-' + index"
                                        type="text"
                                        name="documentProperty[billList][title]"
                                        placeholder="Наименование и адрес банка или иной кредитной организации"
                                        v-model.trim="item.title"
                                    />
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-bill-currency-' + index">
                                        Вид и валюта счета
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается вид счета (например, депозитный, текущий, расчетный, ссудный) и валюта счета.</span></span>
                                    </label>
                                    <input
                                        :id="'type-bill-currency-' + index"
                                        type="text"
                                        name="documentProperty[billList][currency]"
                                        placeholder="Вид и валюта счета"
                                        v-model.trim="item.currency"
                                    />
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-bill-dateStart-' + index">Дата открытия счета</label>
                                    <input
                                        :id="'type-bill-dateStart-' + index"
                                        type="text"
                                        name="documentProperty[billList][dateStart]"
                                        placeholder="Дата открытия счета"
                                        v-model.trim="item.dateStart"
                                    />
                                </div>
                            </div>
                            <div class="col col-4">
                                <div class="field">
                                    <label :for="'type-bill-total-' + index">
                                        Остаток на счете
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Остаток на счете указывается по состоянию на дату составления описи имущества гражданина. Для счетов в иностранной валюте остаток указывается в рублях по курсу Банка России на дату составления описи имущества гражданина.</span></span>
                                    </label>
                                    <input
                                        :id="'type-bill-total-' + index"
                                        type="text"
                                        name="documentProperty[billList][total]"
                                        placeholder="Остаток на счете "
                                        min="0"
                                        step="0.01"
                                        v-model.trim="item.total"
                                    />
                                </div>
                            </div>
                        </div>
                        <p><a href="#" @click.prevent="addBill">Добавить</a></p>
                        <h3 class="mt-50">Акции и иное участие в коммерческих организациях</h3>
                        <div
                            v-for="(item, index) in documentProperty.securitiesList"
                            :key="'securities-' + index"
                            class="row row-wrap row-space row-bottom row-dynamic-generation"
                        >
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-securities-title-' + index">
                                        Наименование и организационноправовая форма организации
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указываются полное или сокращенное официальное наименование организации и ее организационно-правовая форма (например, акционерное общество, общество с ограниченной ответственностью, полное товарищество, товарищество на вере, производственный кооператив, хозяйственное партнерство).</span></span>
                                    </label>
                                    <input
                                        :id="'type-securities-title-' + index"
                                        type="text"
                                        name="documentProperty[securitiesList][title]"
                                        placeholder="Наименование и организационноправовая форма организации"
                                        v-model.trim="item.title"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-securities-address-' + index">Местонахождение организации (адрес)</label>
                                    <input
                                        :id="'type-securities-address-' + index"
                                        type="text"
                                        name="documentProperty[securitiesList][address]"
                                        placeholder="Местонахождение организации (адрес)"
                                        v-model.trim="item.address"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-securities-capital-' + index">
                                        Уставный, складочный капитал, паевый фонд (руб.)
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается согласно учредительным документам организации по состоянию на дату составления описи имущества гражданина. Суммы, выраженные в иностранной валюте, указываются в рублях по курсу Банка России на дату составления описи имущества гражданина.</span></span>
                                    </label>
                                    <input
                                        :id="'type-securities-capital-' + index"
                                        type="text"
                                        name="documentProperty[securitiesList][capital]"
                                        placeholder="Уставный, складочный капитал, паевый фонд (руб.)"
                                        v-model.trim="item.capital"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-securities-proportion-' + index">
                                        Доля участия
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается доля участия в уставном, складочном капитале, паевом фонде. Для акционерных обществ указываются также номинальная стоимость и количество акций.</span></span>
                                    </label>
                                    <input
                                        :id="'type-securities-proportion-' + index"
                                        type="text"
                                        name="documentProperty[securitiesList][proportion]"
                                        placeholder="Доля участия"
                                        v-model.trim="item.proportion"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-securities-base-' + index">
                                        Основание участия
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указываются основание приобретения доли участия (например, учредительный договор, приватизация, покупка, мена, дарение, наследование), а также реквизиты (дата, номер) соответствующего договора или акта.</span></span>
                                    </label>
                                    <input
                                        :id="'type-securities-base-' + index"
                                        type="text"
                                        name="documentProperty[securitiesList][base]"
                                        placeholder="Основание участия"
                                        v-model.trim="item.base"
                                    />
                                </div>
                            </div>
                        </div>
                        <p><a href="#" @click.prevent="addSecurities">Добавить</a></p>
                        <h3 class="mt-50">Иные ценные бумаги</h3>
                        <div
                            v-for="(item, index) in documentProperty.otherSecuritiesList"
                            :key="'other-securities-' + index"
                            class="row row-wrap row-space row-bottom row-dynamic-generation"
                        >
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-other-securities-title-' + index">
                                        Вид ценной бумаги
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указываются все ценные бумаги по видам (например, облигации, векселя), за исключением акций, указанных в разделе IV "Акции и иное участие в коммерческих организациях".</span></span>
                                    </label>
                                    <input
                                        :id="'type-other-securities-title-' + index"
                                        type="text"
                                        name="documentProperty[otherSecuritiesList][title]"
                                        placeholder="Вид ценной бумаги "
                                        v-model.trim="item.title"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-other-securities-person-' + index">Лицо, выпустившее ценную бумагу</label>
                                    <input
                                        :id="'type-other-securities-person-' + index"
                                        type="text"
                                        name="documentProperty[otherSecuritiesList][person]"
                                        placeholder="Лицо, выпустившее ценную бумагу"
                                        v-model.trim="item.person"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-other-securities-volume-' + index">Номинальная величина обязательства (руб.)</label>
                                    <input
                                        :id="'type-other-securities-volume-' + index"
                                        type="text"
                                        name="documentProperty[otherSecuritiesList][volume]"
                                        placeholder="Номинальная величина обязательства (руб.)"
                                        v-model.trim="item.volume"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-other-securities-count-' + index">Общее количество</label>
                                    <input
                                        :id="'type-other-securities-count-' + index"
                                        type="number"
                                        min="0"
                                        step="1"
                                        name="documentProperty[otherSecuritiesList][count]"
                                        placeholder="Общее количество"
                                        v-model.trim="item.proportion"
                                    />
                                </div>
                            </div>
                            <div class="col col-5">
                                <div class="field">
                                    <label :for="'type-other-securities-cost-' + index">
                                        Общая стоимость (руб.)
                                        <span class="tooltip-help">?<span class="tooltip-help-text">Указывается общая стоимость ценных бумаг данного вида исходя из стоимости их приобретения (если ее нельзя определить – исходя из рыночной стоимости или номинальной стоимости). Для обязательств, выраженных в иностранной валюте, стоимость указывается в рублях по курсу Банка России на дату составления описи имущества гражданина.</span></span>
                                    </label>
                                    <input
                                        :id="'type-other-securities-cost-' + index"
                                        type="text"
                                        name="documentProperty[otherSecuritiesList][cost]"
                                        placeholder="Общая стоимость (руб.)"
                                        v-model.trim="item.base"
                                    />
                                </div>
                            </div>
                        </div>
                        <p><a href="#" @click.prevent="addOtherSecuritiesList">Добавить</a></p>
                        <h3 class="mt-50">Сведения о наличных денежных средствах и ином ценном имуществе</h3>
                        <div class="row row-wrap row-space">

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

export default {
    name: 'DocumentProperty',
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
        /*this.$store.dispatch("infoDocumentPassport", this.currentLogin)
            .then((response) => {
                if (response.status === 200) {
                    this.id = response.data.id || ''
                }
            })*/
    },
    data: () => ({
        id: 0,
        documentProperty: {
            notMovableList: [],
            movableList: [],
            billList: [],
            securitiesList: [],
            otherSecuritiesList: [],
            moneyList: []
        },
        message: ''
    }),
    methods: {
        async submitHandler() {
            this.message = ''

            const formData = {
                id: this.id
            }

            console.log(formData)
        },
        addNotMovable: function() {
            this.documentProperty.notMovableList.push({
                type: 0,
                title: '',
                category: '',
                address: '',
                area: 0,
                base: '',
                info: ''
            })
        },
        addMovable: function() {
            this.documentProperty.movableList.push({
                type: 0,
                title: '',
                number: '',
                category: '',
                address: '',
                cost: '',
                info: ''
            })
        },
        addBill: function() {
            this.documentProperty.billList.push({
                title: '',
                currency: '',
                dateOpen: '',
                total: ''
            })
        },
        addSecurities: function() {
            this.documentProperty.securitiesList.push({
                title: '',
                address: '',
                capital: '',
                proportion: '',
                base: ''
            })
        },
        addOtherSecuritiesList: function() {
            this.documentProperty.otherSecuritiesList.push({
                title: '',
                person: '',
                volume: '',
                count: '',
                cost: ''
            })
        },
        addMoneyList: function() {
            this.documentProperty.moneyList.push({
                type: '',
                title: '',
                cost: '',
                address: '',
                info: ''
            })
        }
    }
}
</script>