class Calc {
    constructor(dogs, pnlCanvas) {
        this.dogs = dogs;
        this.w = pnlCanvas.width;
    }
    calcPosition( wolfX,  wolfY) {
        let w = this.w;
        let dogs = this.dogs;
        const offset = 5;
        let x0 = wolfX;
        let y0 = w - wolfY;
        if (x0 > y0) {
            dogs[3].x = x0 - y0;
            dogs[3].y = w - offset;
            dogs[1].y = x0 - y0 - offset; //w-(y0+w-x0)= x0-y0
            dogs[1].x = w - offset;
            if (x0 < w - y0) {
                dogs[2].x = x0 + y0;
                dogs[2].y = w - offset; //
                dogs[0].x = offset;
                dogs[0].y = w - (x0 + y0) - offset;

            }
            else {
                dogs[2].x = w - offset;
                dogs[2].y = 2 * w - x0 - y0; //w-(y0+x0-w)  =2w-x0-y0
                dogs[0].x = x0 + y0 - w;
                dogs[0].y = offset;
            }
        }
        else //x0 <y0
        {
            //for l1
            dogs[3].x = offset;
            dogs[3].y = w - y0 + x0; //x=0 :y = y0 - x0
            dogs[1].x = x0 + w - y0; //y=w: x=x0+w-y0
            dogs[1].y = offset;

            if (x0 < w - y0) {
                dogs[0].x = offset;
                dogs[0].y = w - x0 - y0; // x=0: y=y0+x0
                dogs[2].x = x0 + y0; //y=0: x=x0+y0
                dogs[2].y = w - offset;
            }
            else {
                dogs[0].x = x0 + y0 - w; //y=w: x=x0+y0-w
                dogs[0].y = offset;
                dogs[2].x = w - offset;
                dogs[2].y = 2 * w - x0 - y0;  //x=w: y=w- (y0+x0-w) = 2w-x0-y0
            }
        }
    }

}