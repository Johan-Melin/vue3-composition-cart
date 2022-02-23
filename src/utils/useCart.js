import { ref, computed } from 'vue';

const productsInCart = ref([
    {id: 1, name: 'Banana', price: 20, amount: 1},
])

export default function useCart() {
    function addProduct(product) {
        if(productsInCart.value.some(item => item.id === product.id)){
            console.log('Product already in cart')
        }else{
            productsInCart.value.push({...product, amount: 1})
        }
    }

    function removeProduct(product) {
        productsInCart.value = productsInCart.value.filter(item => item.id !== product.id)
    }
    
    return {
        productsInCart: computed(() => productsInCart.value),
        addProduct,
        removeProduct
    }
}
