<template>
    <header>
        <Logo/>
        <Search/>
        <Contact/>
    </header>
</template>

<script>

import Logo from 'Header/Logo.vue';
import Contact from 'Header/Contact.vue';
import Search from 'Header/Search.vue';

export default {
    name: 'Header',

    data(){
        return {

        }
    },
    
    components : {
        Logo,
        Contact,
        Search
    }
} 
</script>
