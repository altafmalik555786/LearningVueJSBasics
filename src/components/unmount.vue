<template>
    <div>
        <h1 ref="data">Life Cylc of Component beforeUnmount() and unmounted()</h1>
    </div>
</template>

<script>
export default {
    name: "Unmount",
    
    beforeUnmount() {
        console.warn("beforeUnmounted", this.$refs['data']);
    },
    unmounted() {
        console.warn("unmounted", this.$refs['data']);
    }
}
</script>