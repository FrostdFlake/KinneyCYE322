<template>
    <nav v-if="isOpen">
        <router-link to="/About">About Us </router-link>
        <router-link to="/Reviews">Our Reviews </router-link>
        <router-link to="/PortfolioGallery">Some of Our Work </router-link>
        <router-link to="/ClientList">Previous Clients </router-link>
        <router-link to="/PricingAddOns">Packages & Services </router-link>
        <router-link to="/ContactForm">Contact Us</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        isOpen: Boolean,
    },
    watch: {
        isOpen(newVal) {
            console.log('Menu visibility:', newVal);
        },
    },
};
</script>


<style>
nav {
    background-color: #333;
    padding: 10px;
    text-align: center;
}

router-link {
    margin: 0 10px;
    color: white;
    text-decoration: none;
}
</style>
