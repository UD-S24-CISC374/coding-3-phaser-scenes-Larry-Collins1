import Phaser from "phaser";
import FpsText from "../objects/fpsText";

export interface Scene2Data {
    score: number;
}

export class Scene2 extends Phaser.Scene {
    fpsText: FpsText;
    score: number;

    constructor() {
        super({ key: "scene2" });
    }

    init(data: Scene2Data) {
        this.score = data.score;
    }

    preload() {
        this.load.image("blackboard", "assets/blackboard.png");
    }

    create() {
        this.fpsText = new FpsText(this);
        this.add.image(400, 300, "dog");

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        const button = this.add.image(400, 300, "button").setInteractive();
        let score = this.score;
        let scoreText = this.add.text(50, 50, "Score: " + score, {
            fontSize: "30px",
            color: "black",
        });

        button.on("pointerup", () => {
            score++;
            scoreText.setText("Score: " + score);

            if (score === 10) {
                this.scene.start("scene3", { score: this.score });
            }
        });
    }

    update() {
        this.fpsText.update();
    }
}
