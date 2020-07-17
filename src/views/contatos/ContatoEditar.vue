<template>
    <div>
        <h3>Editar {{ $route.params.id }}</h3>
        <button 
            class="btn btn-success"
            @click="$router.back()">Voltar
        </button>
    </div>
</template>