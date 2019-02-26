
    var noticeslideIndex = 1;

    noticeshowImage(noticeslideIndex);

    function noticeplusIndex(n){
        noticeshowImage(noticeslideIndex += n);
    }

    function noticecurrentSlide(n){
        noticeshowImage(noticeslideIndex = n);
    }

    function noticeshowImage(n){
        var noticeslide = document.getElementsByClassName("notice-slides");
        var noticedots = document.getElementsByClassName("notice-dots");
        if( n > noticeslide.length){noticeslideIndex = 1};
        if( n < 1){noticeslideIndex = noticeslide.length};

        for (var i = 0; i < noticeslide.length; i++){
            noticeslide[i].style.display = "none";
        };

        noticeslide[noticeslideIndex-1].style.display = "block";
        
        for (var i = 0; i < noticedots.length; i++){
            noticedots[i].className = noticedots[i].className.replace("active", "");
        }

        noticedots[noticeslideIndex-1].className += " notice-active";
    }

    setInterval(function () {
        noticeslideIndex += 1
        noticeshowImage(noticeslideIndex);               
    }, 1000 * 10)
    noticeshowImage(noticeslideIndex);