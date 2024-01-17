<script setup>
import { ref } from 'vue';
import Logo from './components/Logo.vue';
import Menu from './components/Menu.vue';
import './style.css';

const handleToggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const fullSite = () => {
  // Your logic to navigate to the 'all-components' route
  // You can use router.push or router.replace, depending on your needs
  // For example, assuming you have access to the router instance:
  // router.push('/all-components');
};

const isOpen = ref(false);
</script>

<template>
  <div id="app">
    <Logo @toggle-dropdown="handleToggleDropdown" @full-site="fullSite" />
    <Menu :isOpen="isOpen" />
    <router-view />
  </div>
</template>


<style scoped>

#app {
  text-align: center;
}
</style>
