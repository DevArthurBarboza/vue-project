<template>
    <div>
        <ul v-for="product in this.products" :key="product.id">
            <li>
                <Product 
                    :name="product.name"
                    :old_price="product.old_price" 
                    :special_price="product.special_price"
                    :img_url="product.img_url"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import Product from './ProductList/Product.vue';

export default {
    name: 'ProductList',
    components: {
        Product
    },
    data() {
        return {
            products : [],
            type : 'list',
            max_qty : 6,
        }
    },

    created(){
        this.products = [
            { id: 1, name: "Produto A", special_price: 50.00, old_price: 75.00, img_url: "media/dev/cesinha"},
            { id: 2, name: "Produto B", special_price: 50.00, old_price: 75.00, img_url: "media/dev/cesinha"},
            { id: 3, name: "Produto C", special_price: 50.00, old_price: 75.00, img_url: "media/dev/cesinha"}
        ]
    }
}
</script>