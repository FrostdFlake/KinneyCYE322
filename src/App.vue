<script setup>
import { ref } from 'vue';
import Logo from './components/Logo.vue';
import Menu from './components/Menu.vue';
import FullSite from './components/FullSite.vue';
import About from './components/About.vue';
import PortfolioGallery from './components/PortfolioGallery.vue';
import ClientList from './components/ClientList.vue';
import PricingAddOns from './components/PricingAddOns.vue';
import Reviews from './components/Reviews.vue';
import ContactForm from './components/ContactForm.vue';
import './style.css';

const isOpen = ref(false);

const handleToggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const openFullSite = () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div id="app">
    <Logo @toggle-dropdown="handleToggleDropdown" @full-site="openFullSite"/>
    <Menu :isOpen="isOpen" />
    <About v-if="isOpen" />
    <Reviews v-if="isOpen" />
    <ClientList v-if="isOpen" />
    <PortfolioGallery v-if="isOpen" />
    <PricingAddOns v-if="isOpen" />
    <ContactForm v-if="isOpen" />
    <FullSite :isOpen="isOpen" />
    <router-view />
  </div>
</template>


<style scoped>

#app {
  text-align: center;
}
</style>
