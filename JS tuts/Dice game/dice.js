


function plays(){
    let c=Math.floor(Math.random()*6);
    c=c+1;
    let d=Math.floor(Math.random()*6);
    
    d=d+1;
    document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    let l=document.getElementsByClassName("left");
    let r=document.getElementsByClassName("right");
    b=l[0].firstElementChild.nextElementSibling;
    f=r[0].firstElementChild.nextElementSibling;
    
    if (c==1 && d==1)
    {
        b.setAttribute("src","1.png");
        f.setAttribute("src","1.png");
        document.getElementById("h2").innerHTML="Game is Tie Among both Player";
    
    }
    else if (c==2 && d==2)
    {
        b.setAttribute("src","2.png");
        f.setAttribute("src","2.png");
        document.getElementById("h2").innerHTML="Game is Tie Among both Player";
    }
    else if (c==3 && d==3)
    {
        b.setAttribute("src","3.png");
        f.setAttribute("src","3.png");
        document.getElementById("h2").innerHTML="Game is Tie Among both Player";
    }
    else if (c==4 && d==4)
    {
        b.setAttribute("src","4.png");
        f.setAttribute("src","4.png");
        document.getElementById("h2").innerHTML="Game is Tie Among both Player";
    }
    else if (c==5 && d==5)
    {
        b.setAttribute("src","5.png");
        f.setAttribute("src","5.png");
        document.getElementById("h2").innerHTML="Game is Tie Among both Player";
    }
    else if (c==6 && d==6)
    {
        b.setAttribute("src","6.png");
        f.setAttribute("src","6.png");
        document.getElementById("h2").innerHTML="Game is Tie Among both Player";
    }
    else if(c==1 && d==2)
    { b.setAttribute("src","1.png");
      f.setAttribute("src","2.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==1 && d==3)
    { b.setAttribute("src","1.png");
      f.setAttribute("src","3.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==1 && d==4)
    { b.setAttribute("src","1.png");
      f.setAttribute("src","4.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==1 && d==5)
    { b.setAttribute("src","1.png");
      f.setAttribute("src","5.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==1 && d==6)
    { b.setAttribute("src","1.png");
      f.setAttribute("src","6.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==2 && d==1)
    { b.setAttribute("src","2.png");
      f.setAttribute("src","1.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==2 && d==3)
    { b.setAttribute("src","2.png");
      f.setAttribute("src","3.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==2 && d==4)
    { b.setAttribute("src","2.png");
      f.setAttribute("src","4.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==2 && d==5)
    { b.setAttribute("src","2.png");
      f.setAttribute("src","5.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==2 && d==6)
    { b.setAttribute("src","2.png");
      f.setAttribute("src","6.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==3 && d==1)
    { b.setAttribute("src","3.png");
      f.setAttribute("src","1.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==3 && d==2)
    { b.setAttribute("src","3.png");
      f.setAttribute("src","2.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==3 && d==4)
    { b.setAttribute("src","3.png");
      f.setAttribute("src","4.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==3 && d==5)
    { b.setAttribute("src","3.png");
      f.setAttribute("src","5.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==3 && d==6)
    { b.setAttribute("src","3.png");
      f.setAttribute("src","6.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==4 && d==1)
    { b.setAttribute("src","4.png");
      f.setAttribute("src","1.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==4 && d==2)
    { b.setAttribute("src","4.png");
      f.setAttribute("src","2.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==4 && d==3)
    { b.setAttribute("src","4.png");
      f.setAttribute("src","3.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==4 && d==5)
    { b.setAttribute("src","4.png");
      f.setAttribute("src","5.png");
    
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    }
    else if(c==4 && d==6)
    { b.setAttribute("src","4.png");
      f.setAttribute("src","6.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==6 && d==1)
    { b.setAttribute("src","5.png");
      f.setAttribute("src","1.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==6 && d==2)
    { b.setAttribute("src","6.png");
      f.setAttribute("src","2.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==6 && d==3)
    { b.setAttribute("src","6.png");
      f.setAttribute("src","3.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==6 && d==4)
    { b.setAttribute("src","6.png");
      f.setAttribute("src","4.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==6 && d==5)
    { b.setAttribute("src","6.png");
      f.setAttribute("src","5.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==5 && d==6)
    { b.setAttribute("src","5.png");
      f.setAttribute("src","6.png");
      document.getElementById("h2").innerHTML="Player-2 is the Winner of this Game";
    
    }
    else if(c==5 && d==4)
    { b.setAttribute("src","5.png");
      f.setAttribute("src","4.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==5 && d==3)
    { b.setAttribute("src","5.png");
      f.setAttribute("src","3.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==5 && d==2)
    { b.setAttribute("src","5.png");
      f.setAttribute("src","2.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else if(c==5 && d==1)
    { b.setAttribute("src","5.png");
      f.setAttribute("src","1.png");
      document.getElementById("h2").innerHTML="Player-1 is the Winner of this Game";
    }
    else {
        document.getElementById("h2").innerHTML="You are not Connected to this Game";
    }
}
