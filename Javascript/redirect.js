function confirmRedirect(){
    alert("A new tab will open and take you to the GitHub Repo");
}

/*var downloadLink = document.getElementById("gitHubLink");
downloadLink.onclick = confirmRedirect;*/



$(document).ready(function(){
    document.getElementById("gitHubLink").addEventListener("click", confirmRedirect);
});

$(window).resize(function(){
    location.reload();
});
