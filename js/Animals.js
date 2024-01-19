class Animals {
    constructor(x, y, color, radius, speed, canvas) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
        this.canvas = canvas;
        
    }

    

    draw() {
        let lineWidth = 2;
        let cx = this.x;
        let cy = this.y;
        let radius = this.radius;
        const ctx = this.canvas.getContext("2d");
        //ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        //ctx.stroke();
        ctx.fill();
    }

   
}

class Wolf extends Animals {
    constructor(x, y, color, radius, speed, graphics) {
        super(x, y, color, radius, speed, graphics);
    }
}

class Dog extends Animals {
    constructor(x, y, color, radius, speed, graphics) {
        super(x, y, color, radius, speed, graphics);
        this.number = null;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }
}
