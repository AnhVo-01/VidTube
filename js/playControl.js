const link1 = document.getElementById("link1"),
      link2 = document.getElementById("link2"),
      server = document.getElementById("myList"),
      playSV = document.getElementsByClassName("play-sv");

function removeItem(){
    server.removeChild(link2);
}


for (let k = 0; k < playSV.length; k++) {
    playSV[k].addEventListener("click", function() {
        var current = document.getElementsByClassName("act");
    
        current[0].className = current[0].className.replace(" act", "");
        this.className += " act";

        if(playSV[0].classList.contains('act')) {
            // server.append(link1);
            // server.removeChild(link2);
            link1.style.display = "block";
            link2.style.display = "none";
        }else{
            // server.removeChild(link1);
            // server.append(link2);
            link1.style.display = "none";
            link2.style.display = "block";
        }

    });
}


// =========================================================================

const eps = document.querySelectorAll(".halim-btn"),
    epsTit = document.getElementById("eps-title");


for (let i = 0; i < eps.length; i++){
    eps[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("select");
        var playls1 = document.getElementsByClassName("active1");
        var playls2 = document.getElementsByClassName("active2");


        var play1 = link1.getElementsByClassName("play-box");
        var play2 = link2.getElementsByClassName("play-box");

        current[0].className = current[0].className.replace(" select", "");
        eps[i].className += " select";

        if(server.contains(link1) == true || server.contains(link2) == true){
            playls1[0].className = playls1[0].className.replace(" active1", "");
            play1[i].className += " active1";
            
            playls2[0].className = playls2[0].className.replace(" active2", "");
            play2[i].className += " active2";
        }
        // else if(server.contains(link1) == true && server.contains(link2) == false){
        //     playls1[0].className = playls1[0].className.replace(" active1", "");
        //     play1[i].className += " active1";
            
        //     playls2[0].className = playls2[0].className.replace(" active2", "");
        //     play2[i].className += " active2";
        // }

        document.title = eps[i].innerHTML + " || Đấu La Đại Lục";
        epsTit.innerHTML = "Tập " + eps[i].innerHTML;
    });
}