<template>
    <div>
        <h3>Detalhes sobre o contato com id {{ id }}</h3>
        <router-link 
            :to="`/contatos/${id}/editar`">Editar</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
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