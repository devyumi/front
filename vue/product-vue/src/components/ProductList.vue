<script setup>
import {ref} from 'vue';
import ProductDetail from './ProductDetail.vue';

const props = defineProps({
    productList: Array
})

const visibleDetail = ref(false);
const selectedProduct = ref(null);

function clickItem(product) {
    if(selectedProduct.value !== null) {
        if(selectedProduct.value.id === product.id) {
            visibleDetail.value = false;
            selectedProduct.value = null;
        } else {
            selectedProduct.value = product;
        }
    } else {
        selectedProduct.value = product;
        visibleDetail.value = true;
    } 
}
</script>

<template>
    <h1>상품 목록</h1>
<table>
    <thead>
        <tr>
            <th>제목</th>
            <th>가격</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="product in productList" :key="product.id" @click="clickItem(product)">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
        </tr>
    </tbody>
</table>
<ProductDetail v-if="visibleDetail" :product="selectedProduct" />
</template>

<style scoped>
table {
    width: 400px;
    text-align: center;
    border-top: 1px solid #000000;
}
th, td {
    border-bottom: 1px solid #000000;
    padding: 7px;
}
</style>