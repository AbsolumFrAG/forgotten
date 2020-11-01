let messages = ["Le doigt en mouvement écrit, et ayant, continue", "Demain et demain et demain", "Ca sonne pour toi", "Mene, mene, tekel uphasim",
"Les sables solitaires et plats s'étendent au loin", "Eloi, Eloi, lema sabachthani", "Dans la poussière tu retourneras", "Réconfortez-vous; quel confort y a-t-il en moi?", "Il y aurait eu un temps pour un tel mot"]

function blankify(message) {
    let new_message = "";
    for (let i = 0; i < message.length; i++) {
        let num = Math.floor(Math.random() * 10);
        new_message = new_message + (num > 7 ? [" ", "."][Math.floor(Math.random() * 1)] : message[i]);
    }
    return new_message;
}

export default function getMessage() {
    return blankify(messages[Math.floor(Math.random() * messages.length)])
}
