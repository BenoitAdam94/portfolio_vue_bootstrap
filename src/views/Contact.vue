<template>
  <div>
    <h1 class="mb-5">Contact</h1>
    
    <div class="row">
      <div class="col-md-6">
        <h2>Me contacter</h2>
        <p><EmailGenerator />     

        </p>


        <a href="https://linkedin.com" target="_blank" class="btn btn-primary">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
      
      <!--
      <div class="col-md-6">
        <h2>Formulaire de contact</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required>
          </div>
          
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required>
          </div>
          
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>

      -->
      
    </div>
  </div>
</template>


<script>
import EmailGenerator from '../components/EmailGenerator.vue';

export default {
  name: 'App',
  components: {
    EmailGenerator
  }
}
</script>