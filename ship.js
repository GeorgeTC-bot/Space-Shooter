class Ship{
    constructor(x,y,shape){
        
        this.shape = shape;

        if(this.shape === "circle"){
            this.properties = ({
                maxSpeed: 20,
                length: 10,
                defence: 20,
                damage: 5
            });
            this.percent = ({
                circle: 100,
                rectangle: 0,
                triangle: 0
            });
        }
        else if(this.shape === "rectangle"){
            this.properties = ({
                maxSpeed: 10,
                length: 10,
                defence: 10,
                damage: 100
            });
            this.percent = ({
                circle: 0,
                rectangle: 100,
                triangle: 0
            });
        }
        else if(this.shape === "triangle"){
            this.properties = ({
                maxSpeed: 40,
                length: 10,
                defence: 50,
                damage: 1
            });
            this.percent = ({
                circle: 0,
                rectangle: 0,
                triangle: 100
            });
        }
        else if(this.shape === 1){
            this.shape = "circle";
            this.properties = ({
                maxSpeed: 20,
                length: 10,
                defence: 20,
                damage: 5
            });
            this.percent = ({
                circle: 100,
                rectangle: 0,
                triangle: 0
            });
        }
        else if(this.shape === 2){
            this.shape = "rectangle";
            this.properties = ({
                maxSpeed: 10,
                length: 10,
                defence: 10,
                damage: 100
            });
            this.percent = ({
                circle: 0,
                rectangle: 100,
                triangle: 0
            });
        }
        else if(this.shape === 3){
            this.shape = "triangle";
            this.properties = ({
                maxSpeed: 40,
                length: 10,
                defence: 50,
                damage: 1
            });
            this.percent = ({
                circle: 0,
                rectangle: 0,
                triangle: 100
            });
        }

        this.body = createSprite(x, y, 10, 10);
        this.health = 50;
        this.loc = [];
    }

    display(){
        //tail{
            //adds player location to tail
            this.loc.push([this.body.x,this.body.y]);

            //Keeps the length of tail
            if(this.loc.length > this.properties.length){
                this.loc.splice(0,1);
            }

            //draws the tail
            for(var i = 0; i < this.loc.length - 1; i++){
                strokeWeight(i*2);
                line(this.loc[i][0], this.loc[i][1], this.loc[i+1][0], this.loc[i+1][1]);
            }
        //}


        fill("red");
        if(this.shape === "circle"){
            push();
            noStroke();
            ellipse(this.body.x, this.body.y, 15);
            pop();    
        }
        else if(this.shape === "rectangle"){
            push();
            noStroke();
            rectMode(CENTER);
            rect(this.body.x, this.body.y, 10, 10);
            pop();
        }
        else if(this.shape === "triangle"){
            push();
            noStroke();
            triangle(this.body.x - 5, this.body.y + 5, this.body.x, this.body.y - 5, this.body.x + 5, this.body.y + 5);
            pop();
        }

        //keeps maxSpeed
        if(this.body.velocityX > this.properties.maxSpeed){
            this.body.velocityX = this.properties.maxSpeed;
        }
        else if(this.body.velocityX < -this.properties.maxSpeed){
            this.body.velocityX = -this.properties.maxSpeed;
        }

        if(this.body.velocityX > this.properties.maxSpeed){
            this.body.velocityX = this.properties.maxSpeed;
        }
        else if(this.body.velocityY < -this.properties.maxSpeed){
            this.body.velocityY = -this.properties.maxSpeed;
        }

        //slowly slows down player
        //x
        if(this.body.velocityX > 0){
            this.body.velocityX -= 0.5;
        }
        else if(this.body.velocityX < 0){
            this.body.velocityX += 0.5;
        }
        //y
        if(this.body.velocityY > 0){
            this.body.velocityY -= 0.5;
        }
        else if(this.body.velocityY < 0){
            this.body.velocityY += 0.5;
        }
    }
}