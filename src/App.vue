<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Mon Portfolio</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container py-4">
    <router-view></router-view>
  </main>

  <footer class="bg-dark text-light py-4 mt-5">
    <div class="container text-center">
      <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style>
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>