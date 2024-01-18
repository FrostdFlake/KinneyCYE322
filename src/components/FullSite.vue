<script setup>
import About from './About.vue';
import PortfolioGallery from './PortfolioGallery.vue';
import ClientList from './ClientList.vue';
import PricingAddOns from './PricingAddOns.vue';
import Reviews from './Reviews.vue';
import ContactForm from './ContactForm.vue';
import { ref, watch } from 'vue';

const isOpen = ref(false);

watch(isOpen, (newVal) => {
    console.log('Full visibility:', newVal);
});

</script>
<template>
    <div v-if="isOpen">
        <About/>
        <Reviews/>
        <ClientList/>
        <PortfolioGallery/>
        <PricingAddOns/>
        <ContactForm/>
    </div>
</template>