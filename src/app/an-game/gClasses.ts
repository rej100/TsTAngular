export class Canon
{
  x: number;
  y: number;
  sizex: number;
  sizey: number;
  cnx: any;
  
  vx: number;
  vy: number
  //cnx is the 2d context of a canvas element
  constructor(x: number, y: number, sizex: number, sizey: number, cnx: any, vx: number, vy: number)
  {
    this.x = x;
    this.y = y;
    this.sizex = sizex;
    this.sizey = sizey;
    this.cnx = cnx;
    this.vx = vx;
    this.vy = vy;
  }
  draw()
  {
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
  
  vx: number;
  vy: number;
  //cnx is the 2d context of a canvas element
  constructor(x: number, y: number, radius: number, cnx: any, vx: number, vy: number)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.cnx = cnx;
    this.vx = vx;
    this.vy = vy;
  }
}