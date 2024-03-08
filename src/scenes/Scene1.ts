import Phaser from "phaser";
import FpsText from "../objects/fpsText";
import MainSceneData from "./mainScene";

export class Scene1 extends Phaser.Scene {
    fpsText: FpsText;
    score: number;
    constructor() {
        super({ key: "scene1" });
    }
    init(data: MainSceneData) {
        this.score = data.score;
    }
    preload() {
        this.load.image("dog", "assets/dog.png");
    }

    create() {
        this.add.image(400, 300, "sky");
        this.fpsText = new FpsText(this);
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        const button = this.add.image(400, 300, "button").setInteractive();
        let scoreText = this.add.text(50, 50, "Score: " + this.score, {
            fontSize: "30px",
            color: "black",
        });

        button.on("pointerup", () => {
            this.score++;
            scoreText.setText("Score: " + this.score);

            if (this.score === 7) {
                this.scene.start("scene2", { score: this.score });
            }
        });
    }
}
