<template>
    <div>
            <img src="../assets/kenlogo.png" class="logo" 
            alt="Crown Yourself Entertainment Logo 
            of colorful head wearing a crown"
            @click="openFullSite"
            />
        <h1 @click="toggleDropdown">
            Crown Yourself Entertainment 
        </h1>
        <p>Click to Enter</p>
    </div>
</template>


<script>
export default {
    name: 'Logo',
    props: {
        fullSite: Function, 
    },
    methods: {
        toggleDropdown() {
            this.$emit('toggle-dropdown');
        },
        openFullSite() {
            this.$emit('full-site');
            if (typeof this.fullSite === 'function') {
                this.fullSite();
            }
        },
    },
};
</script>

<style scoped>
.logo {
    height: 300px;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

h1 {
  cursor: pointer;
  margin: 0;
  transition: filter 300ms;
}

h1:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

p {
    color: #4c5bddaa;
    
}
</style>
