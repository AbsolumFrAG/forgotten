export default class EndScene extends Phaser.Scene {
    create(info) {
        this.cameras.main.setViewport(0, 0, this.cameras.main.width, this.cameras.main.height + 21)

        this.add.text(20, 10, "Développé par Lou TIGROUDJA", { fontSize: '16px', fill: '#fff' })
        this.add.text(20, 100, "Fait avec Phaser 3", { fontSize: '16px', fill: '#fff' })

        let title = this.add.text(0, 0, (info.victory ? "Vous avez atteint la fin" : "Vous avez raté, comme tous les autres"), { fontSize: '32px', fill: '#fff' })
        title.setPosition(this.cameras.main.width / 2 - title.width / 2, (this.cameras.main.height / 2 - title.height / 2) - 30)

        let readout = this.add.text(0, 0, "Vous avez rassemblé " + this.registry.get("score") + " pièces", { fontSize: '16px', fill: '#fff' })
        readout.setPosition(this.cameras.main.width / 2 - readout.width / 2, (this.cameras.main.height / 2 - readout.height / 2) + 10)

        let command = this.add.text(0, 0, "Appuyer sur ESPACE pour retourner au menu", { fontSize: '16px', fill: '#fff' })
        command.setPosition(this.cameras.main.width / 2 - command.width / 2, (this.cameras.main.height / 2 - command.height / 2) + 30)

        this.input.keyboard.once('keydown_SPACE', (event) => {
            setTimeout(function() {
                this.registry.reset();
                this.scene.start('MainScene');
            }.bind(this), 800);
        });
    }
}
