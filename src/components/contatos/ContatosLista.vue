<template>
    <div>
        <div>
            <h3 class="font-weight-light">Contatos</h3>

            <ul class="list-group" v-if="contatos.length > 0">
                <contatos-lista-item
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato" />
            </ul>
            <p v-else>Nenhum contato cadastrado</p>

            <button class="btn btn-secondary" @click="voltar">Voltar</button>
        </div>
    </div>
</template>

<script>

import ContatosListaItem from './ContatosListaIten.vue'

export default {
    components: {
        ContatosListaItem
    },
    data() {
        return {
            contatos: [
                { id: 1, nome: 'Gerson', email: 'gersonalifer@hotmail.com' },
                { id: 2, nome: 'Carlos', email: 'gersonalifer@hotmail.com' },
                { id: 3, nome: 'Celta', email: 'gersonalifer@hotmail.com' }
            ]
        }
    },
    methods: {
        voltar() {
            // this.$router.push({path: '/'})
            // this.$router('/')
            // this.$router.replace('/')
            this.$router.back()
        }
    },
}
</script>