
class MouseMoveHandler {


    constructor(canvas, offset) {
        //this._pen = { color: color, lineWidth: lineWidth };
        this.canvas = canvas;
        this.offset = offset;
        this.canvas.addEventListener('mousedown', (evt) => this.handle_MouseDown(evt));
        this.canvas.addEventListener('mousemove', (evt) => this.handle_MouseMove(evt));
        this.canvas.addEventListener('mouseup', (evt) => this.handle_MouseUp(evt));
        this.strokes = [];
    }

    handle_MouseDown(event) {
        //console.log("handle_MouseDown")
        this.isDrawing = true;
        
    };

    handle_MouseMove(event) {
        if (this.isDrawing) {
            const rect = this.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            let stroke = new Point(x, y);
            this.strokes.push(stroke);
            if (this.wolf != null) {
                this.wolf.x = x;
                this.wolf.y = y;

            }
            this.clearAll();
            this.wolf.draw();
            
            //draw wolf advance from last position to current one
            const ctx = this.canvas.getContext("2d");
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.beginPath();
            for (var i = 0; i < this.strokes.length; i++) {
                ctx.lineTo(this.strokes[i].x, this.strokes[i].y);
                ctx.stroke();
            }
            this.drawWolfBorder();
            this.calc.calcPosition(this.wolf.x, this.wolf.y);
            for (let i = 0; i < 4; i++)
            {
                this.dogs[i].draw();
            }
            if (chkTip.checked) {
                let point1 = new Point(this.dogs[0].x, this.dogs[0].y);
                let point2 = new Point(this.dogs[2].x, this.dogs[2].y);
                this.drawAuxilliaryLine(point1, point2);
                let point3 = new Point(this.dogs[1].x, this.dogs[1].y);
                let point4 = new Point(this.dogs[3].x, this.dogs[3].y);
                this.drawAuxilliaryLine(point3, point4);
            }
        }
    };

    handle_MouseUp(event) {
       // console.log("handle_MouseUp")
        const ctx = this.canvas.getContext("2d");
        ctx.closePath();
        this.wolf.draw();

        this.isDrawing = false;
    };



    drawWolfBorder() {
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        let w = canvas.width;
        let offset = this.offset;
        ctx.strokeStyle = 'black';        
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(offset, w - offset);
        ctx.lineTo(offset, offset);
        ctx.lineTo(w - offset, offset);
        ctx.lineTo(w - offset, w - offset);
        ctx.lineTo(offset, w - offset);
        // Close the path to create a border
        //ctx.closePath();
        // Diagonals
        ctx.moveTo(offset, w - offset);
        ctx.lineTo(w - offset, offset);
        ctx.moveTo(offset, offset);
        ctx.lineTo(w - offset, w - offset);
        ctx.stroke();
        ctx.closePath();
    }
    drawAuxilliaryLine(point1,point2)
    {
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = 'black';
        ctx.setLineDash([2, 3])
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.stroke();
        ctx.closePath();
    }
    clearAll() {
        const canvas = document.getElementById('pnlCanvas');
        const width = pnlCanvas.clientWidth;
        const height = pnlCanvas.clientHeight;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

