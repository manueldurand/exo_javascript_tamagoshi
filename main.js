function quest_genre(){
    let rep_genre = prompt("Quel est le genre de votre Tamagoshi ?", "réponse ici");
    rep_genre = rep_genre.toLowerCase();
    if (rep_genre == "femelle" || rep_genre == "male" || rep_genre == "mâle"){
        alert("merci pour votre réponse. C'est noté.")
    }
    else {
        alert("Je n'ai pas compris votre réponse.")
    }
}
// alternative avec switch, possibilité de varier les messages...
// 
//     switch (rep_genre){
//         case "femelle":
//             alert("merci pour votre réponse.");
//             break;
//         case "mâle":
//             alert("merci pour votre réponse.");
//             break;
//         case "male":
//             alert("merci pour votre réponse.");
//             break;
//         default:
//             alert("je n'ai pas compris votre réponse");
//             quest_genre();
//     }
// }
