<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Rotas VueJS</h1>
        <p class="lead">Adicionando rotas com VueJS</p>
      </div>
    </div>
    <div class="container">



      <router-link 
        to="/" 
        class="btn btn-info mb-2 mr-2" 
        exact>
        Home
      </router-link>
      <router-link 
        :to="{ path: '/contatos' }" 
        class="btn btn-info mb-2">
        Contatos
      </router-link>

      <router-view></router-view>
    </div>
  </div>
</template>