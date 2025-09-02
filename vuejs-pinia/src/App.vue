<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "./stores/ProductStore";
import { useCartStore } from "./stores/CartStore";


const productStore = useProductStore()
const cartStore = useCartStore()
    productStore.getProducts()

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
      <AppButton @click="cartStore.undo">Undo</AppButton>
       <AppButton @click="cartStore.redo">Redo</AppButton>
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
