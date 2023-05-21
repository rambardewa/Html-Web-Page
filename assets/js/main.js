function myFun(){
    var nav = document.getElementById("navigation");
    if(nav.className==="navbar")
    {
        nav.className+= " responsive";
    }
    else
    {
        nav.className= "navbar";
    }
}