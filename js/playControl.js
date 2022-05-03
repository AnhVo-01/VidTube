const link1 = document.getElementById("link1"),
      link2 = document.getElementById("link2"),
      server = document.getElementById("myList"),
      playSV = document.getElementsByClassName("play-sv");

for (let k = 0; k < playSV.length; k++) {
    playSV[k].addEventListener("click", function() {
        var current = document.getElementsByClassName("act");
    
        current[0].className = current[0].className.replace(" act", "");
        this.className += " act";

        if(playSV[0].classList.contains('act')) {
            server.append(link1);
            server.removeChild(link2);
            link1.style.display = "block";
        }else{
            server.removeChild(link1);
            server.append(link2);
            link2.style.display = "block";
        }

    });
}


// =========================================================================

const eps = document.querySelectorAll(".halim-btn"),
    epsTit = document.getElementById("eps-title"),
    svLink1 = document.getElementById("link1"),
    svLink2 = document.getElementById("link2");


for (let i = 0; i < eps.length; i++){
    eps[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("select");
        var playls1 = document.getElementsByClassName("active1");
        var playls2 = document.getElementsByClassName("active2");


        var play1 = svLink1.getElementsByClassName("play-video");
        var play2 = svLink2.getElementsByClassName("play-video");

        current[0].className = current[0].className.replace(" select", "");
        eps[i].className += " select";

        if(server.contains(link1) == true){
            playls1[0].className = playls1[0].className.replace(" active1", "");
            play1[i].className += " active1";
        }

        if(server.contains(link2) == true){
            playls2[0].className = playls2[0].className.replace(" active2", "");
            play2[i].className += " active2";
        }

        if (i < 9){
            epsTit.innerHTML = "Tập 0" + (i+1);
            document.title = "0" + (i+1) + " || Đấu La Đại Lục";
        }else{
            epsTit.innerHTML = "Tập " + (i+1);
        }
    });
}