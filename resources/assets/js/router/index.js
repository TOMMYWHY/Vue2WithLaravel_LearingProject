import Vue from 'vue';
import VueRouter from 'vue-router'
import News from '../components/News'
import Home from '../components/Home'
import Questions from '../components/Questions'
import QuestionDetail from '../components/QuestionDetail'

Vue.use(VueRouter);

const routes=[
    { path:'/', redirect:'/home'},
    {name:'home', path:'/', component:Home},
    {name:'news', path:'/news', component:News},
    {name:'questions', path:'/questions', component:Questions},
    {name:'questionDetail', path:'/questions/:id', component:QuestionDetail},
];


export default new VueRouter({
    saveScrollPosition:true,
    routes:routes
})