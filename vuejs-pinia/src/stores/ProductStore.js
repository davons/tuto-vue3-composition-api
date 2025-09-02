import { acceptHMRUpdate, defineStore } from "pinia";

export const useProductStore =  defineStore('ProductStore', {
    //state
    state: () => {
        return {
            products: [],
        }
    },

    //actions
    actions: {
        async getProducts() {
            this.products = (await import("@/data/products.json")).default;
            //this.products = (await axios.get('somme/en/point)).data
        }
    },

    //getters
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}