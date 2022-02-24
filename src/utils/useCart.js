import { ref, computed } from 'vue';

const productsInCart = ref([
    {id: 1, name: 'Banana', price: 20, amount: 1},
])

export default function useCart() {
    function addProduct(product) {
        const found = productsInCart.value.find(x => x.id === product.id)
        if(found){
            found.amount++;
        }else{
            productsInCart.value.push({...product, amount: 1})
        }
    }

    function subtractProduct(product) {
        const found = productsInCart.value.find(x => x.id === product.id)
        if(found){
            found.amount--;
            if(found.amount <= 0){
                removeProduct(product)
            }
        }
    }

    function removeProduct(product) {
        productsInCart.value = productsInCart.value.filter(item => item.id !== product.id)
    }
    
    return {
        productsInCart: computed(() => productsInCart.value),
        addProduct,
        subtractProduct,
        removeProduct
    }
}
