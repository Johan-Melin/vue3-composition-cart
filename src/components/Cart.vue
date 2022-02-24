<template>
    <div>
        <h1>Items in cart: {{ productsInCart.length }}</h1>
        <div v-for="product in productsInCart" :key="product">
            <button @click="removeProduct(product)">remove</button>
            <span>{{product.name}}</span>
            <span> #{{product.amount}}</span>
            <button @click="addProduct(product)">+</button>
            <button @click="subtractProduct(product)">-</button>
        </div>
    </div>
</template>

<script>
import useCart from '../utils/useCart'

export default {
    setup() {
        const { productsInCart } = useCart()
        const { addProduct, subtractProduct, removeProduct } = useCart()
        
        return {
            productsInCart,
            addProduct,
            removeProduct,
            subtractProduct
        }
    }
}
</script>
