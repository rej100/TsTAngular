import { Component, OnInit } from '@angular/core';
import { Canon, CanonBall, Enemy } from "./gClasses";
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-an-game',
  templateUrl: './an-game.component.html',
  styleUrls: ['./an-game.component.css'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})

export class ANGameComponent implements OnInit
{
  canvas: any;
  c: any;
  mousex: number;
  mousey: number;
  key: any = "";
  debugFlag: boolean = false;

  mainCanon: Canon;
  ballz: CanonBall[] = [];
  enemies: Enemy[] = [];

  canShoot: boolean = true;
  score: number = 0;

  constructor()
  {
    this.mousex = 0;
    this.mousey = 0;
  }
  ngOnInit()
  {
    window.addEventListener("mousemove", (event) =>
    {
      this.mousex = event.x;
      this.mousey = event.y;
    });

    this.canvas = document.querySelector("canvas");

    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;

    this.c = this.canvas.getContext("2d");

    console.log(this.c);

    this.constructProps();
    this.animate();
  }

  getDist(ox: number, oy: number, tx: number, ty: number, debugFlag: boolean )
  {
    var temp = 0, bx = 0, by = 0, sx = 0, sy = 0;
    let distance: number = Math.sqrt( Math.pow((ox - tx), 2) + Math.pow((oy - ty), 2) );
    if(debugFlag)
    {
      if(ox > tx)
      {
        bx = ox;
        sx = tx;
      }
      if(tx > ox)
      {
        bx = tx
        sx = ox;
      }
      if(ox === tx)
      {
        bx = ox;
        sx = tx;
      }
      if(oy > ty)
      {
        by = oy;
        sy = ty;
      }
      if(ty > oy)
      {
        by = ty;
        sy = oy;
      }
      if(ty === oy)
      {
        by = oy;
        sy = ty;
      }
      this.c.strokeStyle = "white";
      this.c.beginPath();
      /*this.c.moveTo(ox, oy);
      this.c.lineTo(tx, ty);
      this.c.lineTo(ox - tx, oy - ty);
      this.c.lineTo(ox, oy);
      */
      this.c.moveTo(ox, oy);
      this.c.lineTo(tx, ty);
      this.c.lineTo(bx = sx, by - sy);
      this.c.lineTo(ox, oy);
      this.c.stroke();
      this.c.font = "15px Arial";
      this.c.fillText(distance.toString(), tx, ty);
    }
    return distance; 
  }

  constructProps()
  {
    this.mainCanon = new Canon(800, 850, 50, 80, this.c, 16, 5, "white");
    //console.log(this.getDist(3, 2, 2, 2));
    //this.enemies.push( new Enemy( 500, 250, 16, this.c, 0, 0, "red", 6 ) );
  }


  animate()
  {
    requestAnimationFrame(() => {this.animate()});

    this.c.fillStyle = "rgba(0, 0, 0, 0.2)";
    this.c.fillRect(0, 0, innerWidth, innerHeight);
    this.c.fillStyle = "rgba(255, 255, 255, 1)";
    this.c.font = "30px Arial";

    this.c.fillText("SCORE: " + this.score.toString(), 50, 160);
    this.c.fillText("Press h to shoot and y to enable debug mode", 50, 200);
    this.mainCanon.update(this.mousex);

    //there's a 3 in a 500 chance that an enemy will spawn; The x and the y cords are generated randomly for every enemy.
    if(Math.floor(Math.random() * 500) <= 3)
    {
      if(!this.debugFlag)
      {
      this.enemies.push( new Enemy( (Math.floor( Math.random() * (innerWidth - 200) ) + 100), (Math.floor( Math.random() * (innerHeight - 700) ) + 200), 16, this.c, 0, 0, "red", 6 ) );
      }
    }

    for(var i = 0; i < this.ballz.length; ++i)
    {
      if(this.enemies.length > 0)
      {
        let j: number = 0; 
        while(j < this.enemies.length)
        {
          if(this.getDist(this.ballz[i].x, this.ballz[i].y, this.enemies[j].x, this.enemies[j].y, this.debugFlag) <= ( this.enemies[j].radius + this.ballz[i].radius ))
          {
            this.ballz[i].shouldDraw = false;
            this.enemies[j].shouldDraw = false;
          }
          ++j;
        }
        
      }
      if(this.ballz[i].y <= 0)
      {
        this.ballz[i].shouldDraw = false;
      }

      this.ballz[i].update();
    }
    for(var i = 0; i < this.ballz.length; ++i)
    {
      if(!(this.ballz[i].shouldDraw))
      {
        this.ballz.splice(i, 1);
      }
    }
    for(var i = 0; i < this.enemies.length; ++i)
    {
      this.enemies[i].update();
    }
    for(var i = 0; i < this.enemies.length; ++i)
    {
      if(!this.enemies[i].shouldDraw)
      {
        this.enemies.splice(i, 1);
        ++this.score;
      }
    }
  }

  handleKeyboardEvent(event: KeyboardEvent)
  { 
    if(event.key === "h")
    {
      if(this.canShoot)
      {
        this.ballz.push( new CanonBall( (this.mainCanon.x + ( this.mainCanon.sizex / 2 ) ), this.mainCanon.y, 10, this.c, 0, -10, "lime") );
        this.canShoot = false;
        setTimeout(() =>
        {
          this.canShoot = true;
        }, 250);
      }
    }
    if(event.key === "y")
    {
      this.debugFlag = !this.debugFlag;
    }
  }

}