<template>
    <section class="plans-block">
        <div class="wrap">
            <h2 class="text-center">Варианты участия</h2>
            <div class="row row-stretch">
                <div
                    v-for="(item, index) in plansList"
                    :key="'plan-' + index"
                    class="col col-3"
                >
                    <div class="item row">
                        <div class="item-title">{{ item.title }}</div>
                        <div class="item-description" v-html="item.description" />
                        <div class="item-cost">{{ item.cost | costFormat }} руб.</div>
                        <div class="buttons">
                            <a href="#" class="btn btn-big">
                                <span>Купить</span>
                                <i class="fas fa-fingerprint"></i>
                            </a>
                            <a href="#" class="btn btn-big">
                                <span>В рассрочку</span>
                                <i class="fas fa-fingerprint"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EducationPlans',
    data: () => ({
        plansList: [
            {
                title: '"Серия лекций"',
                description: '<p><strong>В тариф входит:</strong></p><ul class="check"><li>Поиск и заключение договора с клиентом</li><li>Процедура банкротства физ лица</li><li>Процедура банкротства юр лица</li></ul><p><strong>В тариф не входит:</strong></p><ul class="uncheck"><li>Пакет документов</li><li>Возможность дальнейшего сотрудничества</li><li>Процедура банкротства юр лиц</li></ul>',
                cost: 14900
            },
            {
                title: '"От теории к прибыли"',
                description: '<p><strong>В тариф входит:</strong></p><ul class="check"><li>Поиск и заключение договора с клиентом</li><li>Процедура банкротства физ лица</li><li>Процедура банкротства юр лица</li><li>Пакет документов</li><li>Возможность дальнейшего сотрудничества</li></ul><p><strong>В тариф не входит:</strong></p><ul class="uncheck"><li>Процедура банкротства юр лиц</li></ul>',
                cost: 29900
            },
            {
                title: '"Эксперт"',
                description: '<p><strong>В тариф входит:</strong></p><ul class="check"><li>Поиск и заключение договора с клиентом</li><li>Процедура банкротства физ лица</li><li>Процедура банкротства юр лица</li><li>Пакет документов</li><li>Возможность дальнейшего сотрудничества</li><li>Процедура банкротства юр лиц</li></ul>',
                cost: 45900
            }
        ]
    })
}
</script>