<template>
    <div>
        <h3>Detalhes sobre o contato com id {{ id }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.id = to.params.id
        next
    },
    // watch: {
    //     '$route'(to) {
    //         this.id = to.params.id
    //     }
    // },
    created() {
        console.log(this.$route.params)
    },
}
</script>