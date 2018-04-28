import { Component, OnInit } from '@angular/core';
import { Canon } from "./gClasses";




@Component({
  selector: 'app-an-game',
  templateUrl: './an-game.component.html',
  styleUrls: ['./an-game.component.css']
})

export class ANGameComponent implements OnInit {

  canvas: any;
  c: any;
  mousex: number;
  mousey: number;

  mainCanon: Canon;

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

  constructProps()
  {
    this.mainCanon = new Canon(800, 700, 50, 80, this.c, 16, 5);
  }

  animate()
  {
    requestAnimationFrame(() => {this.animate()});
    this.c.fillStyle = "rgba(0, 0, 0, 0.2)";
    this.c.fillRect(0, 0, innerWidth, innerHeight);
    this.c.fillStyle = "white";
    this.mainCanon.update(this.mousex);
  }

}