<template>
    <section class="result-block">
        <div class="wrap">
            <div class="result-block-inner">
                <h2 class="text-center">В результате курса</h2>
                <div
                    v-for="(item, index) in resultList"
                    :key="'result-' + index"
                    class="item row"
                >
                    <div class="item-number row"><span>{{ index + 1 }}</span></div>
                    <div class="item-content">{{ item }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EducationResult',
    data: () => ({
        resultList: [
            'Вы научитесь вести процедуры банкротства физических их юр. лиц на всех стадиях от А до Я.',
            'Поймёте, как находить клиентов и правильно проводить для них продающие консультации',
            'Под руководством наставника найдёте и проведёте консультацию для своего первого клиента',
            'Получите полный пакет шаблонов необходимых документов для процедур банкротства на всех этапах. Их примерно 106',
            'Получите возможность стать партнёром арбитражного управляющего и работать в команде'
        ]
    })
}
</script>