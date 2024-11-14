

// function shuffle(){

//     let p1 = Math.floor(Math.random()*5 +1 )
//     let p2 = Math.floor(Math.random()*5 +1 )


//     if(p1>p2){
//         document.querySelector("h1").innerHTML="Player 1 Won"
//     }
//     else if(p2>p1){
//         document.querySelector("h1").innerHTML= "Player 2 Won"
//     }
//     else{
//         document.querySelector("h1").innerHTML="DRAW  BOOOOOO"
//     }


//     if(p1==1)
//         {
//             document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div>";
//         }
    
//         if(p2 ==1)
//         {
//             document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div>";
//         }
    
// }


function shuffle(){
    var p1;
    var p2;
    p1 = Math.random() *5;
    p1 = Math.floor(p1) + 1;
    p2 = Math.random() *5;
    p2 = Math.floor(p2) + 1;


    if(p1>p2){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if(p2>p1)
    {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else
    {
        document.querySelector("h1").innerHTML ="Draw"; 
    }

    if(p1==1)
    {
        document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div>";
    }

    if(p2 ==1)
    {
        document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div>";
    }


    if(p1==2)
    {
        document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div>";
    }

    if(p2 ==2)
    {
        document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div>";
    }


    if(p1==3)
    {
        document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }

    if(p2 ==3)
    {
        document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }


    if(p1==4)
    {
        document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }

    if(p2 ==4)
    {
        document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }


    if(p1==5)
    {
        document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }

    if(p2 ==5)
    {
        document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }

    if(p1==6)
    {
        document.querySelector(".grid1").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }

    if(p2==6)
    {
        document.querySelector(".grid2").innerHTML = "<div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div><div class='gridItem'></div>";
    }
}