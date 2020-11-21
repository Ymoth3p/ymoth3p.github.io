function validation(){
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding ="10px";

    if(nom.length <3){
        text= "Veuillez saisir un nom valable";
        error_message.innerHTML = text;
        return false;
    }
    if(prenom.length <3){
        text= "Saisie un prénom valable";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(telephone) || telephone.length != 10){
        text= "Numéro de téléphone invalide";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexof("@")== -1 || email.length < 6){
        text= "Veuillez rentrer un adress mail valide";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 100) {
        text = "Votre message doit contenir 100 caractère ou plus";
        error_message.innerHTML = text;
        return false;
    }

    alert("Formulaire envoyé avec succés !")
    return true;
}