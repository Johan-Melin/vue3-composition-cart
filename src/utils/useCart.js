import { ref, computed } from 'vue';

const productsInCart = ref([
    {id: 1, name: 'Banana', price: 20, amount: 1},
])

export default function useCart() {
    function addProduct(product) {
        productsInCart.value.push({...product, amount: 1})
        console.log(productsInCart.value)
    }
    
    return {
        productsInCart: computed(() => productsInCart.value),
        addProduct
    }
}
