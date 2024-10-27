<script setup>
const props = defineProps({
    product: Object
})
</script>

<template>
    <h2>상품 상세 정보</h2>
    <p>상품명: {{ product.name }}</p>
    <p>가격: {{ product.price }}</p>
    <p>재고: {{ product.quantity }}</p>
</template>