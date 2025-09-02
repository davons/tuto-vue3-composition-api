<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "./stores/ProductStore";
import { useCartStore } from "./stores/CartStore";
import { reactive, ref } from "vue";

const productStore = useProductStore()
const cartStore = useCartStore()
const history = reactive([])
const doingHistory = ref(false)
const future = reactive([])

productStore.getProducts()

history.push(JSON.stringify(cartStore.$state))

const redo = () => {

  const lastState = future.pop()

  if (!lastState) return

  doingHistory.value = true 
  history.push(lastState)
  cartStore.$state = JSON.parse(lastState)
  doingHistory.value = false

}

const undo = () => {

  if (history.length === 1) return

  doingHistory.value = true

  future.push(history.pop())
  cartStore.$state = JSON.parse(history.at(-1))

  doingHistory.value = false
}

cartStore.$subscribe((mutation, state) => {
  //console.log({mutation})
  //console.log({state})
  if (!doingHistory.value) {
    history.push(JSON.stringify(state))
    future.splice(0, future.length)
  }

})

cartStore.$onAction(({ name, store, args, after, onError}) => {
   if(name === 'addItems') {
     after((result) => { 
      console.log('aflter: ', result)
     })
     onError((error) => {
      console.log('Error:', error.message)
     })
   }
})

</script>

<template>
  <div class="container">
    <TheHeader />

    <div class="mb-5 flex justify-end">
      <AppButton @click="undo">Undo</AppButton>
       <AppButton @click="redo">Redo</AppButton>
    </div>
 
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart = "cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
