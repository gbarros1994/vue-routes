<template>
    <div>
        <h3>Editar {{ id }}</h3>
        <button 
            class="btn btn-success"
            @click="$router.back()">Voltar
        </button>
    </div>
</template>

<script>
export default {
    prop: ['id']
}
</script>