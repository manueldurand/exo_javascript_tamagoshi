function quest_genre(){
    let rep_genre = prompt("Quel est le genre de votre Tamagoshi ?", "réponse ici");
    rep_genre = rep_genre.toLowerCase();
    while (rep_genre != "femelle" && rep_genre != "male" && rep_genre != "mâle"){
        rep_genre = prompt("Quel est le genre de votre Tamagoshi ?", "réponse ici");
    }
}

// correction : avec replace()

// let reponse = prompt("quel sexe pour votre Tama ? ").toLowerCase.replace("â", "a");
// while (reponse != "male" && reponse != "femelle"){
//     reponse = prompt("quel sexe pour votre Tama ? ").toLowerCase.replace("â", "a");
// }

// avec fonction : 
// function traitement(texte){
//     return texte.toLowerCase().replace("â","a");
// } puis 

// let reponse = traitement(prompt("quel est le sexe souhaité ?"));