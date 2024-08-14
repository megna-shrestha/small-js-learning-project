

function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0)" ;

    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("open").style.backgroundColor = "#ffffff"; 
}

function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-250px)";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("open").style.backgroundColor = "black"; 
}


