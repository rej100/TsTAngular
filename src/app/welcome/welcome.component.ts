import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit
{

  slideWidth: number = 0;
  id: any;
  pos: any;
  oldPos: any;
  canSlide: boolean = true;
  slideSpeed: number = 25;
  slideCounter: number = 0;

  slides =
  [
    {url: "https://i.imgur.com/rOw0agT.jpg"},
    {url: "https://i.imgur.com/xYnqbAL.jpg"},
    {url: "https://i.imgur.com/0r7qN8U.jpg"},
    {url: "https://i.imgur.com/uGfFixS.jpg"},
    {url: "https://i.imgur.com/aBONniI.jpg"},
    {url: "https://i.imgur.com/9CLFTW2.jpg"},
  ]
  
  constructor() { }
  ngOnInit()
  {
    setTimeout(() => {this.updateSliderWidth();}, 100);
  }

  updateSliderWidth: any = () =>
  {
    let elem = document.getElementsByClassName("slide");
    this.slideWidth = elem[0].width;
    setTimeout(this.updateSliderWidth, 100);
  }

  frame: any = (elem: any, direction: string) =>
  {
    if(direction === "left")
    {
      if(this.pos <= (this.oldPos - this.slideWidth))
      {
        clearInterval(this.id);
        this.pos = this.oldPos - this.slideWidth;
        this.canSlide = true;
      }
      else
      {
        this.pos -= this.slideSpeed;
        elem.style.left = this.pos + "px";
      }
    }
    if(direction === "right")
    {
      if(this.pos >= (this.oldPos + this.slideWidth))
      {
        clearInterval(this.id);
        this.pos = this.oldPos + this.slideWidth;
        this.canSlide = true;
      }
      else
      {
        this.pos += this.slideSpeed;
        elem.style.left = this.pos + "px";
      }
    }
    elem.style.left = this.pos + "px";
    console.log(this.pos, this.oldPos);
  }
  slide(direction: string)
  {
    if( (this.canSlide && (((this.slideCounter - 1) >= 0) && (direction === "right"))) || (this.canSlide && ((this.slideCounter + 1) <= (this.slides.length - 1) && (direction === "left"))))
    {
      this.canSlide = false;
      if(direction === "left")
      {
        ++this.slideCounter;
      }
      if(direction === "right")
      {
        --this.slideCounter;
      }
      let elem = document.getElementById("slider");

      this.oldPos = elem.style.left;
      this.oldPos = Number(this.oldPos.slice(0, -2));
      this.pos = elem.style.left;
      this.pos = Number(this.pos.slice(0, -2));

      this.id = setInterval(this.frame, 1, elem, direction);
    }
  }

}