<template>
    <div>
        <h1>Store</h1>
        <div v-for="product in products" :key="product.id">
            <span>{{product.name}}</span>
            <span>{{product.price}}</span>
            <button @click="addProduct(product)">+</button>
        </div>
    </div>
</template>

<script>
import useCart from '../utils/useCart'

export default {
    setup() {
        const products = [
            { id: 1, name: 'Banana', price: 20 },
            { id: 2, name: 'Apple', price: 30 },
            { id: 3, name: 'Pear', price: 40 },
        ]
        const { addToQueue, addProduct } = useCart()
        
        return {
            products,
            addToQueue,
            addProduct
        }
    }
}
</script>
