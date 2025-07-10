<template>
    <ProductList/>

    <a href="">Ver mais</a>
</template>

<script>

import ProductList from '/components/Catalog/ProductList.vue';

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
