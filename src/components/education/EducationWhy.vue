<template>
    <section class="why-block">
        <div class="wrap">
            <h2 class="text-center">Этот курс для вас, если</h2>
            <div class="row row-stretch row-space row-wrap">
                <div
                    v-for="(item, index) in whyList"
                    :key="'why-' + index"
                    class="col col-3"
                >
                    <div class="item row">
                        <div class="item-icon">
                            <img :src="item.icon" alt="Этот курс для Вас" />
                        </div>
                        <div class="item-text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
            <div class="buttons text-center">
                <a href="#" class="btn btn-big">
                    <span>Записаться на курс</span>
                    <i class="fas fa-fingerprint"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EducationWhy',
    data: () => ({
        whyList: [
            {
                icon: '/images/icon-why-001.webp',
                text: 'Вы недовольны своим уровнем дохода и хотите заметно его увеличить'
            },
            {
                icon: '/images/icon-why-002.webp',
                text: 'Вы хотите уйти из пыльного офиса и перейти на удалённую работу'
            },
            {
                icon: '/images/icon-why-003.webp',
                text: 'Вы выпускник ВУЗа экономического или юр факультета и хотите выбрать максимально востребованное направление'
            },
            {
                icon: '/images/icon-why-004.webp',
                text: 'Вы находитесь в декрете, но в прошлом были юристом, бухгалтером или экономистом'
            },
            {
                icon: '/images/icon-why-005.webp',
                text: 'Вы руководитель бизнеса и хотите обучить свой персонал ведению банкротных дел'
            }
        ]
    })
}
</script>