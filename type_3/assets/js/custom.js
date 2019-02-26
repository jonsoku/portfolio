
/* center부분 slider */

$(document).ready(function() {


    //nav 접기/열기 기능

    //.btn class를 눌렀을때 어떠한(fucntion(){}) 함수를 실행시킨다.
    $(".btn").click(function(e){
        //메뉴눌러도 화면이동되지않게 !
        e.preventDefault();
        /*
        //일반적인 방법 ! 단 접는부분도 지정해줘야한다.
        $('#nav').addClass("show");
        //togleClass 버튼구현!!!오 겁나편해 !
        $("#nav").toggleClass("show");
        */
        //slideToggle....겁나...이런게있었나...
        $("#nav").slideToggle("show");
    });


    //owl gallery(슬라이드부분)
    var time = 4; // time in seconds
    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;
    //Init the carousel
    $("#owl-demo").owlCarousel({
        slideSpeed : 500,
        paginationSpeed : 500,
        singleItem : true,
        afterInit : progressBar,
        afterMove : moved,
        startDragging : pauseOnDragging,
        transitionStyle : "fade"
        // 입맛따라 골라 ~ 삭제, fade, backSlide, goDown, fadeUp
    });
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
        $elem = elem;
        //build progress bar elements
        buildProgressBar();
        //start counting
        start();
    }
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
        $progressBar = $("<div>",{
        id:"progressBar"
        });
        $bar = $("<div>",{
        id:"bar"
        });
        $progressBar.append($bar).prependTo($elem);
    }
    function start() {
        //reset timer
        percentTime = 0;
        isPause = false;
        //run interval every 0.01 second
        tick = setInterval(interval, 10);
    };
    function interval() {
        if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
            width: percentTime+"%"
            });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
            //slide to next item 
            $elem.trigger('owl.next')
        }
        }
    }
    //pause while dragging 
    function pauseOnDragging(){
        isPause = true;
    }
    //moved callback
    function moved(){
        //clear interval
        clearTimeout(tick);
        //start again
        start();
    }
    //uncomment this to make pause on mouseover 
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })
});




/* */
