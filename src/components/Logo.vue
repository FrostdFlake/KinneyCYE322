<template>
    <div>
         <router-link @click="fullSite" >
            <img src="../assets/kenlogo.png" class="logo" 
            alt="Crown Yourself Entertainment Logo 
            of colorful head wearing a crown"
            />
        </router-link>
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
        fullSite: Function, // Define the prop for opening all components
    },
    methods: {
        toggleDropdown() {
            this.$emit('toggle-dropdown');
        },
        fullSite() {
            // Call the fullSite function from the prop
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
    background-color: #4c5bddaa;
    
}
</style>
