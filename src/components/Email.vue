
<script>
// Fonction pour générer l'adresse e-mail
function generateEmail() {
    // Parties de l'adresse e-mail
    var user = "utilisateur";
    var domain = "example";
    var tld = "com";

    // Assembler l'adresse e-mail
    var email = user + "@" + domain + "." + tld;

    // Insérer l'adresse e-mail dans l'élément HTML
    document.getElementById("email").innerText = email;
}

// Appeler la fonction pour générer l'adresse e-mail
generateEmail();
</script>