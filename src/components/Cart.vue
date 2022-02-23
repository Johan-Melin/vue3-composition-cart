<template>
    <div>
        <h1>Items in cart: {{ productsInCart.length }}</h1>
        <div v-for="product in productsInCart" :key="product">
            <span>{{product.name}}</span>
            <span> #{{product.amount}}</span>
            <button>+</button>
            <button>-</button>
        </div>
    </div>
</template>

<script>
import useCart from '../utils/useCart'

export default {
    setup() {
        const { productsInCart } = useCart()
        
        return {
            productsInCart
        }
    }
}
</script>
