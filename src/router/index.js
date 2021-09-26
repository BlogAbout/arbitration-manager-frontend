import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Арбитражный управляющий',
            description: 'Евгения Марченко – арбитражный управляющий. Такой специалист назначается арбитражным судом с целью проведения процедуры банкротства несостоятельной организации или физического лица.',
            nonRequiresAuth: true
        },
        component: () => import('../views/Main.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Вход',
            description: 'Вход в личный кабинет для юридических и физических лиц',
            nonRequiresAuth: true
        },
        component: () => import('../views/profile/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        meta: {
            title: 'Регистрация',
            description: 'Регистрация личного кабинета для юридических и физических лиц',
            nonRequiresAuth: true
        },
        component: () => import('../views/profile/Registration.vue')
    },
    {
        path: '/forgot',
        name: 'Forgot',
        meta: {
            title: 'Восстановление пароля к личному кабинету для юридических и физических лиц',
            description: 'Восстановление пароля',
            nonRequiresAuth: true
        },
        component: () => import('../views/profile/Forgot.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            title: 'Личный кабинет',
            description: 'Личный кабинет'
        },
        component: () => import('../views/profile/Profile.vue')
    },
    {
        path: '/profile/edit',
        name: 'ProfileEdit',
        meta: {
            title: 'Редактирование личных данных',
            description: 'Редактирование личных данных'
        },
        component: () => import('../views/profile/ProfileEdit.vue')
    },
    {
        path: '/profile/documents/passport',
        name: 'DocumentPassport',
        meta: {
            title: 'Заполнение информации о гражданине',
            description: 'Заполнение информации о гражданине'
        },
        component: () => import('../views/profile/DocumentPassport.vue')
    },
    {
        path: '/profile/documents/property',
        name: 'DocumentProperty',
        meta: {
            title: 'Заполнение информации описи имущества гражданина',
            description: 'Заполнение информации описи имущества гражданина'
        },
        component: () => import('../views/profile/DocumentProperty.vue')
    },
    {
        path: '/bankruptcy-entities',
        name: 'BankruptcyEntities',
        meta: {
            title: 'Банкротство юридических лиц',
            description: 'Банкротство юридических лиц - длительная процедура. Ее необходимо грамотно организовать, чтобы удовлетворить претензии кредиторов и сохранить по максимуму имущество, насколько это возможно.',
            nonRequiresAuth: true
        },
        component: () => import('../views/BankruptcyEntities.vue')
    },
    {
        path: '/bankruptcy-individual',
        name: 'BankruptcyIndividual',
        meta: {
            title: 'Банкротство физических лиц',
            description: 'Процесс банкротства физических лиц',
            nonRequiresAuth: true
        },
        component: () => import('../views/BankruptcyIndividual.vue')
    },
    {
        path: '/property',
        name: 'Property',
        meta: {
            title: 'Имущество с торгов',
            description: 'Распродаваемое имущество с торгов физических и юридических лиц в процессе банкротства',
            nonRequiresAuth: true
        },
        component: () => import('../views/property/Property.vue')
    },
    {
        path: '/property/add',
        name: 'PropertyAdd',
        meta: {
            title: 'Новое имущество с торгов',
            description: 'Новое имущество с торгов'
        },
        component: () => import('../views/property/PropertyAdd.vue'),
    },
    {
        path: '/property/:id-edit',
        name: 'PropertyEdit',
        meta: {
            title: 'Редактировать имущество с торгов',
            description: 'Редактировать имущество с торгов'
        },
        component: () => import('../views/property/PropertyAdd.vue'),
    },
    {
        path: '/property/:id-info',
        name: 'PropertyInfo',
        meta: {
            title: 'Имущество с торгов',
            description: 'Распродаваемое имущество с торгов физических и юридических лиц в процессе банкротства',
            nonRequiresAuth: true
        },
        component: () => import('../views/property/PropertyInfo.vue')
    },
    {
        path: '/question',
        name: 'Question',
        meta: {
            title: 'Вопросы',
            description: 'Вопросы и ответы на часто задаваемые вопросы о банкротстве юридических и физических лиц',
            nonRequiresAuth: true
        },
        component: () => import('../views/question/Question.vue')
    },
    {
        path: '/question/add',
        name: 'QuestionAdd',
        meta: {
            title: 'Новый вопрос',
            description: 'Новый вопрос'
        },
        component: () => import('../views/question/QuestionAdd.vue'),
    },
    {
        path: '/question/:id-edit',
        name: 'QuestionEdit',
        meta: {
            title: 'Редактировать вопрос',
            description: 'Редактировать вопрос',
        },
        component: () => import('../views/question/QuestionAdd.vue'),
    },
    {
        path: '/question/:id-info',
        name: 'QuestionInfo',
        meta: {
            title: 'Вопросы и ответы',
            description: 'Вопросы и ответы на часто задаваемые вопросы о банкротстве юридических и физических лиц',
            nonRequiresAuth: true
        },
        component: () => import('../views/question/QuestionInfo.vue')
    },
    {
        path: '/education',
        name: 'Education',
        meta: {
            title: 'Обучение',
            description: 'Обучение у арбитражного управляющего на банкротство физических и юридических лиц',
            nonRequiresAuth: true
        },
        component: () => import('../views/Education.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        meta: {
            title: 'Контакты',
            description: 'Контакты арбитражного управляющего',
            nonRequiresAuth: true
        },
        component: () => import('../views/Contacts.vue')
    },
    {
        path: '/city',
        name: 'City',
        meta: {
            title: 'Работаем с городами',
            description: 'Работаем с городами',
            nonRequiresAuth: true
        },
        component: () => import('../views/city/City.vue')
    },
    {
        path: '/city/:id-info',
        name: 'CityInfo',
        meta: {
            title: 'Работаем с городами',
            description: 'Работаем с городами',
            nonRequiresAuth: true
        },
        component: () => import('../views/city/CityInfo.vue')
    },
    {
        path: '/policy',
        name: 'Policy',
        meta: {
            title: 'Политика конфиденциальности',
            description: 'Политика конфиденциальности',
            nonRequiresAuth: true
        },
        component: () => import('../views/Policy.vue')
    },
    {
        path: '/terms',
        name: 'Terms',
        meta: {
            title: 'Условия использования',
            description: 'Условия использования',
            nonRequiresAuth: true
        },
        component: () => import('../views/Terms.vue')
    },
    {
        path: '/404',
        alias: '*',
        name: 'NotFound',
        meta: {
            title: '404 - Страница не найдена',
            description: '',
            nonRequiresAuth: true
        },
        component: () => import('../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

router.beforeResolve((to, from, next) => {
    if (to.name)
        NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

router.beforeEach((to, from, next) => {
    const { title, description } = to.meta
    const brand = 'Арбитражный управляющий'

    if (to.matched.some(route => !route.meta.nonRequiresAuth)) {
        if (localStorage.getItem('AuthState')) {
            next()
            document.title = `${title ? title + ' | ' : ''}${brand}`
            document.querySelector('meta[name="description"]').setAttribute("content", `${description ? description : ''}`)
            return
        } else {
            next('/?message=not-auth')
        }
    } else {
        next()
    }

    document.title = `${title ? title + ' | ' : ''}${brand}`
    document.querySelector('meta[name="description"]').setAttribute("content", `${description ? description : ''}`)
})

export default router