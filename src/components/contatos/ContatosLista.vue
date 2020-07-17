<template>
    <div>
        <div>
            <h3 class="font-weight-light">Contatos</h3>

            <div class="form-group">
                <input 
                    type="search" 
                    name="" 
                    id=""
                    placeholder="buscar contatos"
                    @keyup.enter="buscar"
                    :value="$route.query.busca">
            </div>
            <hr>
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
        buscar(event) {
            this.$router.push({
                path: '/contatos',
                query: { busca: event.target.value }
            })
        },
        voltar() {
            // this.$router.push({path: '/'})
            // this.$router('/')
            // this.$router.replace('/')
            this.$router.back()
        }
    },
    // computed: {
    //     contatosFiltrados() {
    //         const busca = this.$route.query.busca
    //         return !busca
    //         ? this.contatos
    //         : this.contatos.filter(conta => conta.nome.toLowerCase().includes(busca.toLowerCase()))
    //     }
    // },
}
</script>