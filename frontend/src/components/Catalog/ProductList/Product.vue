<template>
    <div class="product">

        <div class="image-wrapper">
            <img :src=img_url alt="Product Image">
        </div>
        <div class="info">
            <span>{{name}}</span>
        </div>

        <div class="price-container"> 
            <small class="old-price">Por R$ {{old_price}}</small>
            <strong class="special-price">Em R$ {{special_price}}</strong>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            old_price : 100,
            special_price : 75,
            name : 'Camisa',
            img_url : '#'
        }
    }
}
</script>