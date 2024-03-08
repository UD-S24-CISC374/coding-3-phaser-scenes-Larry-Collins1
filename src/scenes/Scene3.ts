import Phaser from "phaser";
import FpsText from "../objects/fpsText";

export interface Scene3Data {
    score: number;
}

export class Scene3 extends Phaser.Scene {
    fpsText: FpsText;
    score: number;

    constructor() {
        super({ key: "scene3" });
    }

    init(data: Scene3Data) {
        this.score = data.score;
    }

    create() {
        this.add.image(400, 300, "blackboard");
        this.add.text(400, 200, "You Win", {
            color: "white",
            fontSize: "32px",
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let scoreText = this.add.text(50, 50, "Score: " + this.score, {
            fontSize: "30px",
            color: "black",
        });
    }
}
