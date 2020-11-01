export default class MainScene extends Phaser.Scene {
    create() {
        this.cameras.main.setViewport(0, 0, this.cameras.main.width, this.cameras.main.height + 21);
        this.add.text(20, 10, "Développé par Lou TIGROUDJA", { fontSize: '16px', fill: '#fff' })
        this.add.text(20, 100, "Fait avec Phaser 3", { fontSize: '16px', fill: '#fff' })

        let title = this.add.text(0, 0, "FORGOTTEN", { fontSize: '72px', fill: '#fff' })
        title.setPosition(this.cameras.main.width / 2 - title.width / 2, (this.cameras.main.height / 2 - title.height / 2) - 30)
        let command = this.add.text(0, 0, "Appuyer sur ESPACE pour commencer", { fontSize: '16px', fill: '#fff' })
        command.setPosition(this.cameras.main.width / 2 - command.width / 2, (this.cameras.main.height / 2 - command.height / 2) + 20)

        this.sound_info = this.add.text(0, 0, (this.sound.mute ? "Appuyer sur M pour activer le son" : "Appuyer sur M pour désactiver le son"), { fontSize: '16px', fill: '#fff'})
        this.sound_info.setPosition(this.cameras.main.width - this.sound_info.width - 20, (this.cameras.main.height - this.sound_info.height) - 30)

        this.registry.set("level", 1);

        this.input.keyboard.once('keydown_SPACE', (event) => {
            setTimeout(function() {
                this.scene.start('LevelScene');
            }.bind(this), 800);
        });
    }

    update() {
        this.sound_info.text = (this.sound.mute ? "Appuyer sur M pour activer le son" : "Appuyer sur M pour désactiver le son");
        this.sound_info.setPosition(this.cameras.main.width - this.sound_info.width - 20, this.cameras.main.height - this.sound_info.height - 30)
    }
}
