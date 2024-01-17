//import {Vue} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import Menu from '../components/Menu.vue'
import About from '../components/About.vue';
import PortfolioGallery from '../components/PortfolioGallery.vue';
import ClientList from '../components/ClientList.vue';
import PricingAddOns from '../components/PricingAddOns.vue';
import Reviews from '../components/Reviews.vue';
import ContactForm from '../components/ContactForm.vue';

//Vue.use(VueRouter);

const routes = [
    { path: '/', component: Menu },
    { path: '/about', component: About },
    { path: '/portfoliogallery', component: PortfolioGallery },
    { path: '/clientlist', component: ClientList },
    { path: '/pricingaddons', component: PricingAddOns },
    { path: '/reviews', component: Reviews },
    { path: '/contactform', component: ContactForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
