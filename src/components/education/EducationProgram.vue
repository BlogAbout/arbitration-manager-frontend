<template>
    <section class="program-block">
        <div class="wrap">
            <h2 class="text-center">Подробная программа курса</h2>
            <div class="program-block-inner">
                <div
                    v-for="(item, index) in programList"
                    :key="'program-' + index"
                    class="item row"
                >
                    <div class="item-number row"><span>{{ index + 1 }}</span></div>
                    <div class="item-content">
                        <h3>Модуль {{ index + 1 }}</h3>
                        <h4>{{ item.title }}</h4>
                        <p v-html="item.description" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EducationProgram',
    data: () => ({
        programList: [
            {
                title: 'Как правильно находить клиентов и заключать с ними договора',
                description: '- Научитесь находить клиента, правильно его консультировать, анализировать дальнейшую процедуру банкротства<br />- Научитесь готовить клиента к процедуре, психологически в том числе <br />- Готовить документы для обращения в суд с заявления о признании должника банкротом<br />- Поймёте задачи, функции, ценность банкротного юриста'
            },
            {
                title: 'Этапы процедуры банкротства физического лица и ИП',
                description: '- Вы узнаете что общего и в чём разница судебного и внесудебного банкротства<br />- Порядок составления документов в суд<br />- Ключевые отличия банкротства граждан и ИП<br />- Ведение процедуры банкротства физического лица на всех стадиях'
            },
            {
                title: 'Этапы процедуры банкротства юридического лица',
                description: '- Научитесь вести процедуры банкротства юридического лица на всех стадиях от А до Я'
            },
            {
                title: 'Сотрудничество',
                description: '- Модели взаимодействия с арбитражным управляющим. Я - помощник. Я - партнёр. Я веду дело сам.<br />- Особенности удалённой работы с другими регионами'
            }
        ]
    })
}
</script>