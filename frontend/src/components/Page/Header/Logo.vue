<template>
    <img :src="this.src" :alt="this.alt">
</template>

<script>
export default {
    name: 'Logo',

    data(){
        return {
            src : 'google.com',
            alt : 'Logo Shop Image'
        }
    }
}
</script>