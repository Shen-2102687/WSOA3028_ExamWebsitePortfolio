/*function navigate(){
    switch(document.getElementById()){
        case "Home":
            console.log("go to games");
            window.location.href = "../../Games/games.html";
            break;
    }
}

$(window).on("click", ".navBar", navigate2());

function navigate2(){
    switch(document.onclick){
        case document.getElementById('Home'):
            console.log("go to home");
            window.location.href = "../index.html";
            break;
    }
}*/

//$(window).on("click", ".navBar", navigate3());

/*function navigate3(){
    switch(document.getElementsByClassName("navBar")){
        case document.getElementById("Home"):
            console.log("go to home");
            window.location.href = "../index.html";
            break;
    }
}*/

/*function navigate2(){
    switch(document.onclick){
        case document.getElementById('Home'):
            console.log("go to home");
            window.location.href = "../index.html";
            break;
        case document.getElementById('Games'):
            window.location.href = "../../Games/games.html";
            break;
    }
}*/




/*function navigate4(){
    window.location.href = "../../Games/games.html";
}*/

/*function navigate5(pages){
    switch(document.getElementById(pages)){
        case pages == "Home":
            window.location.href = "../../Games/games.html";
            break;
    }
}*/

//let p = "x";


function navigate5(pages){
    console.log("running good");
    console.log("pages is equal to:" + pages);
    switch(pages){
        case 1:
            console.log("tostring here");
            window.location.href = "index.html";
            break;
        case 2:
            window.location.href = "Games/games.html";
            break;
        case 3:
            window.location.href = "Code Projects/codeProjects.html";
            break;
        case 4:
            window.location.href = "Blog/blog.html";
            break;
        case 5:
            window.location.href = "Design Doc Page/design.html";//This file referencing style works for java in github
            break;
        case 6:
            window.location.href = "Games/games1.html";
            break;
        case 7:
            window.location.href = "Games/games2.html";
            break;
        case 8:
            window.location.href = "Code Projects/codeProjects1.html";
            break;
        case 9:
            window.location.href = "Code Projects/codeProjects2.html";
            break;
        case 10:
            window.location.href = "Blog/blog1.html";
            break;
        case 11:
            window.location.href = "Blog/blog2.html";
            break;
        case 12:
            window.location.href = "Blog/blog3.html";
            break;
        case 13:
            window.location.href = "Blog/blog4.html";
            break;
        case 14:
            window.location.href = "Blog/blog5.html";
            break;
        case 15:
            window.location.href = "Blog/blog6.html";
            break;
        case 16:
            window.location.href = "Blog/blog7.html";
            break;
    }
}

/*function sortBlogs(){
    document.getElementById("blogs").style.flexDirection = "column-reverse";
}*/



function sortBlogsRecent(){
    document.getElementById("blogs").style.flexDirection = "column-reverse";
}

function sortBlogsOldest(){
    document.getElementById("blogs").style.flexDirection = "column";
}

/*function confirmRedirect(){
    confirm("A new tab will open and take you to the GitHub Repo");
}*/

/*var downloadLink = document.getElementById("gitHubLink");
downloadLink.onclick = confirmRedirect;*/

/*document.getElementById("gitHubLink").addEventListener("click", confirmRedirect);*/

function navMobile(){
    var navTab = document.getElementById("mobileNav");
    if(navTab.style.display == "block"){
        navTab.style.display = "none";
    }else{
        navTab.style.display = "block";
    }
}


