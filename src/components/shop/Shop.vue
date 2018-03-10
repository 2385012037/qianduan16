<template>
    <div>
        <!-- 公共头部 -->
        <appHeader></appHeader>
        <!-- 变化主体 -->
        <router-view></router-view>
        <!-- 公共底部 -->
        
    </div>
</template>

<script>
    import appHeader from "./subcom/Header.vue";
    export default {
        components: {
            appHeader
        }
    }
</script>

<style scoped>

</style>