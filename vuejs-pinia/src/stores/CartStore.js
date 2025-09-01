import { groupBy } from "lodash";
import { defineStore } from "pinia";

export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            items: []
        }
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count)
            for (let i = 1; i<= count ; i++) {
                this.items.push({...item})
            }
        },
        clearitem(elem) {
            this.items = this.items.filter((item) => item.name !== elem)
        },
        setItemCount(item, count) {
            this.clearitem(item.name)
            this.addItems(count, item)
        }
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty: (state) => state.count === 0,
        grouped: state => {
           const grouped = groupBy(state.items, item => item.name)
           const sorted = Object.keys(grouped).sort()
           let inSorted = {}
           sorted.forEach(key => (inSorted[key] = grouped[key]))

           return inSorted;
        },
        groupedCount: state => (name) => state.grouped[name].length,
        total: state => state.items.reduce((sum, item) => sum + item.price, 0)
    }
})