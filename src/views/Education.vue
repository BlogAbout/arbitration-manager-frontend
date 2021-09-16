<template>
    <main class="main-container education-profession">
        <education-slogan />
        <section class="advanced-information-block">
            <div class="wrap">
                <div class="advanced-information-block-inner">
                    <p class="text-center">За последний год, в связи с пандемией, <span>количество банкротных дел выросло в 87 раз</span>. И вы сможете стать востребованным специалистом в этом направлении и зарабатывать, помогая людям.</p>
                </div>
            </div>
        </section>
        <education-why />
        <education-program />
        <education-result />
        <education-who />
        <section class="advanced-information-block dark">
            <div class="wrap">
                <div class="advanced-information-block-inner">
                    <p class="text-center">Освой новое востребованное направление и начни зарабатывать от 200 000₽ в месяц удалённо прямо сейчас!</p>
                </div>
            </div>
        </section>
        <education-plans />
        <section class="payment-block">
            <div class="wrap">
                <p>Обучитесь прямо сейчас наиболее востребованной специальности в наше время!<br /><strong>Воспользуйтесь рассрочкой на любой тариф онлайн - курса</strong></p>
                <div class="row">
                    <div class="col col-2">
                        <img src="../assets/images/tinkoff.webp" alt="Tinkoff" />
                    </div>
                    <div class="col col-2">
                        <p>- Без первого взноса<br />- Только для жителей РФ<br />- 18+<br />- На 4/6/10/12 месяцев<br />- Моментальное одобрение банка</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import EducationSlogan from '@/components/education/EducationSlogan'
import EducationWhy from '@/components/education/EducationWhy'
import EducationProgram from '@/components/education/EducationProgram'
import EducationResult from '@/components/education/EducationResult'
import EducationWho from '@/components/education/EducationWho'
import EducationPlans from '@/components/education/EducationPlans'

export default {
    name: 'Education',
    components: {
        EducationSlogan,
        EducationWhy,
        EducationProgram,
        EducationResult,
        EducationWho,
        EducationPlans
    }
}
</script>