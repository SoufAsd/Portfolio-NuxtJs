<template lang="">
    <div class="card-dev" :class="program">
        {{program}}
    </div>
</template>
<script lang="ts">
export default {
    props:{
        program : String
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/components/_portfolioCards.sass'
</style>