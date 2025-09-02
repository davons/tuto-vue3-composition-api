import { acceptHMRUpdate, defineStore } from "pinia";

export const useAuthUserStore = defineStore('AuthUserStore', {
    state: () => {
        return {
            //username: "rakoto"
        }
    },
    getters: {
        username: () => "rakoto"
    },
    actions: {
        visitTwitterProfile(){
            window.open(`https://twitter.com/${this.username}`)
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthUserStore, import.meta.hot));
}