<template>
    <main class="main-container">
        <section class="content-block">
            <div class="wrap">
                <div class="content-block-inner">
                    <h1>Контакты</h1>
                    <div class="information-list information-list-one">
                        <div class="param">
                            <span class="param-label">Телефон:</span>
                            <span class="param-value"><a href="tel:+79881554020">+7 (988) 155-40-20</a></span>
                        </div>
                        <div class="param">
                            <span class="param-label">E-mail:</span>
                            <span class="param-value"><a href="mailto:info@arbitration-manager.ru">info@arbitration-manager.ru</a></span>
                        </div>
                        <div class="param">
                            <span class="param-label">Адрес офиса:</span>
                            <span class="param-value">Краснодарский край, г. Сочи, Адлерский район, ул. Свердлова, д. 55, офис 15</span>
                        </div>
                    </div>
                    <h2>Реквизиты</h2>
                    <div class="information-list">
                        <div class="param">
                            <span class="param-label">ИНН:</span>
                            <span class="param-value">032608291300</span>
                        </div>
                        <div class="param">
                            <span class="param-label">ОГРН:</span>
                            <span class="param-value">321237500296050</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <feedback />
    </main>
</template>

<script>
import Feedback from "@/components/Feedback"

export default {
    name: 'Contacts',
    components: {
        Feedback
    }
}
</script>