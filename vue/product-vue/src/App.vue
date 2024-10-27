<script setup>
import {ref} from 'vue';
import ProductList from './components/ProductList.vue';

const products = ref([
  { id: 1, name: '바나나', price: 1000, quantity: 20 },
  { id: 2, name: '오렌지', price: 2000, quantity: 5 },
  { id: 3, name: '딸기', price: 5000, quantity: 1 },
  { id: 4, name: '블루베리', price: 3000, quantity: 30 },
  { id: 5, name: '사과', price: 3200, quantity: 180 }
])
</script>

<template>
    <ProductList :productList="products" />
</template>
