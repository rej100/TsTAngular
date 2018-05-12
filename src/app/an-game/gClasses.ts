export class Canon
{
  x: number;
  y: number;
  sizex: number;
  sizey: number;
  cnx: any;
  
  vx: number;
  vy: number
  color: string;
  //cnx is the 2d context of a canvas element
  constructor(x: number, y: number, sizex: number, sizey: number, cnx: any, vx: number, vy: number, color: string)
  {
    this.x = x;
    this.y = y;
    this.sizex = sizex;
    this.sizey = sizey;
    this.cnx = cnx;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }
  draw()
  {
    this.cnx.fillStyle = this.color;
    this.cnx.fillRect(this.x, this.y, this.sizex, this.sizey);
  }
  update(toFollowX: number)
  {
    this.draw();
    if( !((this.x  + (this.sizex / 2)) == toFollowX) )
    {
      if( (this.x  + (this.sizex / 2)) > toFollowX )
      {
        if(this.vx > 0)
        {
          this.vx = -this.vx
        }
      }
      else if( (this.x  + (this.sizex / 2)) < toFollowX )
      {
        if(this.vx < 0)
        {
          this.vx = -this.vx
        }
      }

      if(this.vx > 0)
      {
        for(var i = 0; i < this.vx; ++i)
        {
          if( ((this.x  + (this.sizex / 2)) == toFollowX) )
          {
            break;
          }
          this.x += 1;
        }
      }
      else if(this.vx < 0)
      {
        for(var i = 0; i < -this.vx; ++i)
        {
          if( ((this.x  + (this.sizex / 2)) == toFollowX) )
          {
            break;
          }
          this.x -= 1;
        }
      }
    }
  }
}

export class CanonBall
{
  x: number;
  y: number;
  radius: number;
  cnx: any;
  shouldDraw: boolean;
  
  vx: number;
  vy: number;
  color: string;
  //cnx is the 2d context of a canvas element
  constructor(x: number, y: number, radius: number, cnx: any, vx: number, vy: number, color: string)
  {
    this.shouldDraw = true;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.cnx = cnx;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }
  draw()
  {
    if(this.shouldDraw)
    {
      this.cnx.fillStyle = this.color;
      this.cnx.beginPath();
      this.cnx.arc(this.x, this.y, this.radius, 0 , 2*Math.PI);
      this.cnx.fill();
    }
  }
  update()
  {
    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
}

export class Enemy
{
  x: number;
  y: number;
  radius: number;
  cnx: any;
  shouldDraw: boolean;
  
  vx: number;
  vy: number;
  color: string;
  lineWidth: number;
  //cnx is the 2d context of a canvas element
  constructor(x: number, y: number, radius: number, cnx: any, vx: number, vy: number, color: string, lineWidth: number)
  {
    this.shouldDraw = true;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.cnx = cnx;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.lineWidth = lineWidth;
  }
  draw()
  {
    if(this.shouldDraw)
    {
      this.cnx.lineWidth = this.lineWidth;
      this.cnx.strokeStyle = this.color;
      this.cnx.beginPath();
      this.cnx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
      this.cnx.stroke();
    }
  }
  update()
  {
    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
}