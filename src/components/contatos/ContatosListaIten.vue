<template>
    <div>
        <li>{{ contato.nome }}</li>
        <router-link 
            class="btn btn-info btn-sm float-right"
            :to="{ name: 'contato', params: { id: contato.id} }">Detalhes</router-link>
    </div>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    }
}
</script>