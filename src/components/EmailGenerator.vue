<template>
    <div>
      <p id="email"></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailGenerator',
    mounted() {
      this.generateEmail();
    },
    methods: {
      generateEmail() {
        // Parties de l'adresse e-mail
        var user = "adam050986";
        var domain = "yahoo";
        var tld = "fr";
  
        // Assembler l'adresse e-mail
        var email = user + "@" + domain + "." + tld;
  
        // Insérer l'adresse e-mail dans l'élément HTML
        document.getElementById("email").innerText = email;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici si nécessaire */
  </style>
  