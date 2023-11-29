const settings = {
    playingClass: 'playing',
    keys: 'qsdfghjkl'
}


const drumKit = {

    buttons: document.querySelectorAll('.key'),
    play(key) {
        const linkedAudio = document.querySelector(`audio[data-key = ${key}]`);
        linkedAudio.pause();
        linkedAudio.currentTime = 0;
        linkedAudio.play();
        document.body.classList.add(key);
        document.querySelector(`div[data-key=${key}]`).classList.add(settings.playingClass);
        document.body.classList.add(key);
        //key.currentTarget.classList.add('playing');  pose probleme car key est le paramètre de la fct sauf qu'il ne correspond pas a une chaine de caractère...
    },
    init() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                drumKit.play(event.currentTarget.dataset.key);
            });
            button.addEventListener('transitionend', (event) => {
                document.body.classList.remove(event.currentTarget.dataset.key);
                event.currentTarget.classList.remove(settings.playingClass);
            });
        });

        window.addEventListener('keydown', (event) => {
            const k = event.key.toLowerCase();
            if (settings.keys.includes(k)) {
                this.play(k);
            }
        });
    }
}

drumKit.init();

/* Avec un switch :

switch (keyPressed) {
    case 'q':
    case 's':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
        console.log(keyPressed);
        break;
    default :

        break;
}
});*/







