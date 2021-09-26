<template>
    <section class="entity-block">
        <div class="wrap">
            <div class="row row-stretch">
                <div class="col col-2">
                    <div class="text-container">
                        <h2>Банкротство юридических лиц</h2>
                        <p>Длительная процедура. Ее необходимо грамотно организовать, чтобы удовлетворить претензии кредиторов и сохранить по максимуму имущество, насколько это возможно. Управляющий организовывает весь процесс и отвечает за организацию в рамках закона.</p>
                        <p><router-link to="/bankruptcy-entities">Подробнее</router-link></p>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="background-block">
                        <div class="background-block-inner"><strong>Евгения Марченко</strong><br />Арбитражный управляющий</div>
                    </div>
                </div>
            </div>
            <div class="row row-stretch">
                <div
                    v-for="(item, index) in entityList"
                    :key="'entity-item-' + index"
                    class="col col-4"
                >
                    <div class="item">
                        <div class="item-image"><i :class="item.icon"></i></div>
                        <div class="item-content">
                            <h3 class="item-title">{{ item.title }}</h3>
                            <div class="item-description">{{ item.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EntityList',
    data: () => ({
        entityList: [
            {
                title: 'Низкие цены',
                description: 'Я приверженец такого подхода, что любое сотрудничество должно быть взаимовыгодным, именно поэтому при формировании цены на свои услуги я с большим вниманием подхожу к интересам клиента.',
                icon: 'fas fa-headset'
            },
            {
                title: 'Индивидуальный подход',
                description: 'Каждый случай уникален, поэтому в своей работе я всесторонне оцениваю шансы на успех дела, обсуждаю с клиентом все возможные пути развития ситуации. Формирую индивидуальные предложения.',
                icon: 'fas fa-ruble-sign'
            },
            {
                title: 'Работа без посредников',
                description: 'Я работаю напрямую со своими клиентами, без посредников. Всю ответственность я всегда беру на себя. Благодаря прямой работе с клиентом формируется приятная цена.',
                icon: 'fas fa-user-shield'
            },
            {
                title: 'Большой опыт',
                description: `- Более 350 000 000₽ удовлетворённых требований кредиторов, когда мы выступаем на стороне кредитора. На 100% требования кредиторов удовлетворены по 8 делам.<br />- Свыше 2000 судебных заседаний в 17 арбитражных судах РФ<br />- Более 42 000 000₽ списано задолженности физических лиц должников`,
                icon: 'fas fa-file-invoice-dollar'
            }
        ]
    })
}
</script>