import { ref } from '@vue/composition-api';

export default function useProduct() {
    const state = ref({ post: {} })
    return {
        state
    }
}
