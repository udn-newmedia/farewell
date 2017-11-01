$(document).ready(function () {

    var SIDdrawStart;
    var SIDdrawEnd;
    var SIDdrawWalk1;
    var SIDdrawWalkBack;
    var SIDdrawCar;
    var SIDdrawRoom;
    var SIDdrawBed;
    var SIDdrawSmoke;
    var SIDdrawMan;
    var SIDdrawWoman;
    var SIDdrawWash;
    var SIDdrawStroll;
    var SIDdrawWave;
    var SIDdrawStrollToFade;
    var SIDdrawKitchen;
    var SIDdrawFoodInfo;
    var SIDdrawFoodSafe;
    var SIDdrawSpeech;
    var SIDdrawDoctor;
    var SIDdrawCpu;
    var animeIndex;
    var toSkip = false;
    var toFire = true;

    var scroll_now;
    var read_progress = 10;
    var isMob = detectmob();
    var platform = isMob == true ? 'Mob' : 'PC';
    var progress = [];
    var movie_progress = [null];

    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    var w = $(window).width();
    var h = $(window).height();

    if (w >= 1024) {
        $("#stage-1").attr("src", "src/image/animate-sprite/stage-1PC.mp4");
        $("#stage-1").attr("poster", "src/image/animate-sprite/stage-1bg-pc.png");  
        $("#movie-1").attr("controls", "true");
    } else {
        $("#stage-1").attr("src", "src/image/animate-sprite/stage-1Mob.mp4");
        $("#stage-1").attr("poster", "src/image/animate-sprite/stage-1bg-mob.png");  
    }

    function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            // supports iOS 2.0 and later: <https://bit.ly/TJjs1V>
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
    }

    ver = iOSversion();

    function isFacebookApp() {
        if(iOS == true){
            var ua = navigator.userAgent || navigator.vendor || window.opera;
            return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
        } else {
            return false;
        }
    }
    function detectIE() {
        var ua = window.navigator.userAgent;
      
        // Test values; Uncomment to check result …
      
        //   IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        
        //   IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        
        //   Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        
        //   Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
      
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
      
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
      
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
      
        // other browser
        return false;
    }
    if(detectIE()){
        $("#stage-1").css({
            "margin-left":"-12.5%"
        })
    }
    function detectmob() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }
    // for FB-app
    if (isFacebookApp()) {
        $(".stage-6-words p").eq(0).css({
            "top" : "15%",
            "left": "-15%",
        })
        $(".cover_Title").css({
            'padding-top': "15%",
        })
        if(w < 768 ){
            $(".section").css({
                "margin-top": "-6%",
            });            
            $(".fixed_pic").css({
                "margin-top": "-98px",
            })     
        }     
        if(ver[0] == 11){
            $(".downArrow").css({
                "bottom": "158px",
            });
            $(".readPaper").css({
                "bottom": "158px",
            });  
            $(".whiteP").css({
                "line-height": "1.5",
            }) 
            $('.intro').css({
                "margin-top": "-25%",
            })  
        } else if (ver[0] == 10){
            $(".whiteP").css({
                "line-height": "1.2",
            })
            $('.intro').css({
                "margin-top": "-15%",
            })                                 
            if(ver[1] <= 2 ){
                $(".downArrow").css({
                    "bottom": "16px",
                });
                $(".readPaper").css({
                    "bottom": "16px",
                });           
            } else {
                $(".downArrow").css({
                    "bottom": "143px",
                });
                $(".readPaper").css({
                    "bottom": "143px",
                });      
            }
        }               
    } 
    function moviePlay(id) {
        $('#movie-' + id).get(0).play();
        if (progress[id - 1] == null) {
            progress[id - 1] = setInterval(function () {
                var curTime = $('#movie-' + id).get(0).currentTime;
                var temp = curTime / $('#movie-' + id).get(0).duration * 100;
                if (temp > 0.6) {
                    $('.video-play[data-target="' + id + '"]').css('opacity', 0);
                }
                if (Math.floor(curTime / 5) > movie_progress) {
                    movie_progress = Math.floor(curTime / 5);
                }

                $('#progress-bar-' + id).css('width', temp + '%');
            }, 600);
        }
    }

    function moviePause(id) {
        $('#movie-' + id).get(0).pause();
        $('.video-play[data-target="' + id + '"]').css('opacity', 1);
        if (progress[id - 1]) {
            clearInterval(progress[id - 1]);
            progress[id - 1] = null;
        }
    }

    function movieReplay(id) {
        $('#movie-' + id).get(0).currentTime = 0;
        $('#movie-' + id).get(0).play();
        $('.progress-bar').css('width', 0);
        clearInterval(progress[id - 1]);
        progress[id - 1] = setInterval(function () {
            var temp = $('#movie-' + id).get(0).currentTime / $('#movie-' + id).get(0).duration * 100;
            $('#progress-bar-' + id).css('width', temp + '%');
        }, 600);
    }

    function movieVolume(id) {
        if ($('#movie-' + id).get(0).muted == true) {
            $('#movie-' + id).get(0).muted = false;
            $('.volume[data-target="' + id + '"]').removeClass('fa-volume-off').addClass('fa-volume-up');
            $('.volume-text[data-target="' + id + '"]').text('點按關聲音');
        } else {
            $('#movie-' + id).get(0).muted = true;
            $('.volume[data-target="' + id + '"]').removeClass('fa-volume-up').addClass('fa-volume-off');
            $('.volume-text[data-target="' + id + '"]').text('點按開聲音');
        }
    }
    function voiceOn() {
        $("#music-main")[0].muted = false;
        $("#music-door")[0].muted = false;
        $("#music-door")[0].volume = 0.6;
        $("#music-walk")[0].muted = false;
        $("#music-walk")[0].volume = 0.6;
        $("#music-cooking")[0].muted = false;
        $("#music-cooking")[0].volume = 0.6;
        $("#music-driving")[0].muted = false;
        $("#music-driving")[0].volume = 0.3;
        $("#music-camera")[0].muted = false;
        $("#music-camera")[0].volume = 0.3;
        $("#music-switch")[0].muted = false;
        $("#music-switch")[0].volume = 0.6;
        $("#music-stroll")[0].muted = false;
        $("#music-stroll")[0].volume = 0.3;
        $("#music-street")[0].muted = false;
        $("#music-street")[0].volume = 0.6;
    }

    function voiceOff() {
        $("#music-main")[0].muted = true;
        $("#music-door")[0].muted = true;
        $("#music-walk")[0].muted = true;
        $("#music-cooking")[0].muted = true;
        $("#music-driving")[0].muted = true;
        $("#music-camera")[0].muted = true;
        $("#music-switch")[0].muted = true;
        $("#music-stroll")[0].muted = true;
        $("#music-street")[0].muted = true;
    }
    function resetAll() {
        clearInterval(SIDdrawStart);
        clearInterval(SIDdrawWalk1);
        clearInterval(SIDdrawWalkBack);
        clearInterval(SIDdrawRoom);
        clearInterval(SIDdrawBed);
        clearInterval(SIDdrawSmoke);
        clearInterval(SIDdrawMan);
        clearInterval(SIDdrawWoman);
        clearInterval(SIDdrawWash);
        clearInterval(SIDdrawStroll);
        clearInterval(SIDdrawWave);
        clearInterval(SIDdrawStrollToFade);
        clearInterval(SIDdrawKitchen);
        clearInterval(SIDdrawFoodInfo);
        clearInterval(SIDdrawFoodSafe);
        clearInterval(SIDdrawSpeech);
        clearInterval(SIDdrawDoctor);
        clearInterval(SIDdrawCpu);
        $("#music-door")[0].pause();
        $("#music-walk")[0].pause();
        $("#music-cooking")[0].pause();
        $("#music-driving")[0].pause();
        $("#music-camera")[0].pause();
        $("#music-switch")[0].pause();
        $("#music-stroll")[0].pause();
        $("#music-street")[0].pause();
    }

    var total_height = $('body').height() - h;
    var headTop = w >= 768 ? '6px' : '4px';
    var title = $('title').text();

    $('a').click(function () {
        ga("send", {
            "hitType": "event",
            "eventCategory": "超連結點擊",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "]"
        });
    });

    $('#scroll-down').click(function () {
        ga("send", {
            "hitType": "event",
            "eventCategory": "ham bar",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [scroll down]"
        });
    });

    $('.line-share').click(function (e) {
        ga("send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [line share]"
        });
        if (detectmob()) {
            //手機
            window.location.href = "//line.me/R/msg/text/?" + title + "%0D%0A%0D%0A" + $('meta[property="og:description"]').attr('content') + "%0D%0A%0D%0A" + window.location.href;
        } else {
            window.open("https://lineit.line.me/share/ui?url=" + window.location.href);
        }
    });                   
    $(".voice-state img").on("click", function () {
        var voiceSrc = $(this).attr("src");
        $(this).removeClass('blink');
        if (voiceSrc == "src/image/off.png") {
            $(this).attr('src', 'src/image/on.png');
            $("#music-main")[0].play();
            voiceOn();
            if (scroll_now > $(".content").eq(0).offset().top) {
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "閱讀時開聲音",
                    "eventAction": "click",
                    "eventLabel": "閱讀時開聲音"
                });
            } else {
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "開聲音",
                    "eventAction": "click",
                    "eventLabel": "開聲音"
                });
            }
        } else {
            $(this).attr('src', 'src/image/off.png');
            voiceOff();
            ga("send", {
                "hitType": "event",
                "eventCategory": "關聲音",
                "eventAction": "click",
                "eventLabel": "關聲音"
            });
        }
    });

    $(window).on('scroll', function () {

        scroll_now = $(window).scrollTop();

        var cur_scroll = scroll_now / total_height * 100;

        for (; read_progress <= Math.floor(cur_scroll); read_progress += 10) {
            ga("send", {
                "hitType": "event",
                "eventCategory": "read",
                "eventAction": "scroll",
                "eventLabel": "[" + platform + "] [" + title + "] [page read " + read_progress + "%]"
            });
        }

        if (scroll_now > h) {
            $('#indicator').css('opacity', 1);
            $('#head').css('top', headTop);
        } else {
            $('#indicator').css('opacity', 0);
            $('#head').css('top', '0');
        }

        $('#indicator-bar').css('width', scroll_now / total_height * 100 + '%');
        if (scroll_now > $(".content").eq(0).offset().top - 0.07 * h && scroll_now < $(".content").eq(0).offset().top) {
            $("#head").removeClass("Bgc-TP");
            $("#indicator").addClass("mainColor");
        }
        if (scroll_now > $(".section").eq(0).offset().top) {
            $(".downArrow").css({
                "display": "none"
            });
            $(".skip").css({
                "display": "none"
            })
        }
        if(scroll_now > $("#movie-1").offset().top - h*0.5 && scroll_now < $("#movie-1").offset().top + h*0.5){
            moviePlay(1);
        }
        if(scroll_now > $("#movie-1").offset().top + h*0.2 || scroll_now <  $("#movie-1").offset().top - h*0.8){
            moviePause(1);
        }
    });
    $('.volume[data-target="1"], .volume-text[data-target="1"]').click(function(){
        movieVolume(1);
        ga("send", {
            "hitType": "event",
            "eventCategory": "文章影片開聲音",
            "eventAction": "click",
            "eventLabel": "開了"
        });        
    })
    $('.replay[data-target="1"]').click(function(){
        movieReplay(1);
        ga("send", {
            "hitType": "event",
            "eventCategory": "文章影片再演一次",
            "eventAction": "click",
            "eventLabel": "重演了"
        });               
    })
    $("#movie-1").click(function(){
        if($("#movie-1")[0].paused){
            moviePlay(1);    
            ga("send", {
                "hitType": "event",
                "eventCategory": "點擊文章影片",
                "eventAction": "click",
                "eventLabel": "開始"
            });                
        } else {
            moviePause(1);
            ga("send", {
                "hitType": "event",
                "eventCategory": "點擊文章影片",
                "eventAction": "click",
                "eventLabel": "暫停"
            });                     
        }
    })  

    //Width and height for our canvas
    var canvasWidth = 375;
    var canvasHeight = 667;

    var canvasWidthPC = 880;
    var canvasHeightPC = 495;

    var canvasWidthPad = 578;
    var canvasHeightPad = 820;

    var canvasWidthRoom = 520;
    var canvasHeightRoom = 667;

    //Getting the canvas 
    // 放在哪個ID的canvas    

    var stage_2 = document.getElementById("stage-2");
    var ctx_2 = stage_2.getContext("2d");
    stage_2.width = canvasWidth;
    stage_2.height = canvasHeight;

    var stage_3 = document.getElementById("stage-3");
    var ctx_3 = stage_3.getContext("2d");

    var stage_3_1 = document.getElementById("stage-3_1");
    var ctx_3_1 = stage_3_1.getContext("2d");
    if (w >= 1024) {
        stage_3.width = canvasWidthPC;
        stage_3.height = canvasHeightPC;
        stage_3_1.width = canvasWidthPC;
        stage_3_1.height = canvasHeightPC;
    }
    if(w >= 768 && w < 1023) {
        stage_3.width = canvasWidthPad;
        stage_3.height = canvasHeightPad;
        stage_3_1.width = canvasWidthPad;
        stage_3_1.height = canvasHeightPad;
    }
    if(w < 768){
        stage_3.width = canvasWidth;
        stage_3.height = canvasHeight;
        stage_3_1.width = canvasWidth;
        stage_3_1.height = canvasHeight;        
    }
    
    var stage_4 = document.getElementById("stage-4");
    var ctx_4 = stage_4.getContext("2d");
    stage_4.width = canvasWidth;
    stage_4.height = canvasHeight;

    var stage_5 = document.getElementById("stage-5");
    var ctx_5 = stage_5.getContext("2d");
    stage_5.width = canvasWidth;
    stage_5.height = canvasHeight;

    var stage_6 = document.getElementById("stage-6");
    var ctx_6 = stage_6.getContext("2d");
    stage_6.width = canvasWidth;
    stage_6.height = canvasHeight;

    var stage_6_1 = document.getElementById("stage-6_1");
    var ctx_6_1 = stage_6_1.getContext("2d");
    stage_6_1.width = canvasWidth;
    stage_6_1.height = canvasHeight;

    var stage_6_2 = document.getElementById("stage-6_2");
    var ctx_6_2 = stage_6_2.getContext("2d");
    stage_6_2.width = canvasWidth;
    stage_6_2.height = canvasHeight;

    var stage_6_3 = document.getElementById("stage-6_3");
    var ctx_6_3 = stage_6_3.getContext("2d");
    stage_6_3.width = canvasWidth;
    stage_6_3.height = canvasHeight;

    var stage_6_3_bg = document.getElementById("stage-6_3_bg");
    var ctx_6_3_bg = stage_6_3_bg.getContext("2d");
    stage_6_3_bg.width = canvasWidth;
    stage_6_3_bg.height = canvasHeight;

    var stage_6_4 = document.getElementById("stage-6_4");
    var ctx_6_4 = stage_6_4.getContext("2d");
    stage_6_4.width = canvasWidth;
    stage_6_4.height = canvasHeight;

    var stage_7 = document.getElementById("stage-7");
    var ctx_7 = stage_7.getContext("2d");
    if (w >= 1024) {
        stage_7.width = canvasWidthRoom;
        stage_7.height = canvasHeightRoom;
    } else {
        stage_7.width = canvasWidth;
        stage_7.height = canvasHeight;
    }

    var stage_8 = document.getElementById("stage-8");
    var ctx_8 = stage_8.getContext("2d");
    stage_8.width = canvasWidth;
    stage_8.height = canvasHeight;

    var stage_9 = document.getElementById("stage-9");
    var ctx_9 = stage_9.getContext("2d");
    stage_9.width = canvasWidth;
    stage_9.height = canvasHeight;

    var stage_9_bg = document.getElementById("stage-9_bg");
    var ctx_9_bg = stage_9_bg.getContext("2d");
    stage_9_bg.width = canvasWidth;
    stage_9_bg.height = canvasHeight;

    var stage_10 = document.getElementById("stage-10");
    var ctx_10 = stage_10.getContext("2d");
    stage_10.width = canvasWidth;
    stage_10.height = canvasHeight;

    var stage_11 = document.getElementById("stage-11");
    var ctx_11 = stage_11.getContext("2d");
    stage_11.width = canvasWidth;
    stage_11.height = canvasHeight;

    var stage_11_1 = document.getElementById("stage-11_1");
    var ctx_11_1 = stage_11_1.getContext("2d");
    stage_11_1.width = canvasWidth;
    stage_11_1.height = canvasHeight;

    var stage_11_2 = document.getElementById("stage-11_2");
    var ctx_11_2 = stage_11_2.getContext("2d");
    stage_11_2.width = canvasWidth;
    stage_11_2.height = canvasHeight;

    var stage_12 = document.getElementById("stage-12");
    var ctx_12 = stage_12.getContext("2d");
    stage_12.width = canvasWidth;
    stage_12.height = canvasHeight;

    var startWidth = 375;
    var startHeight = 667;
    var startCurFrame = 0;
    var startFrameCount = 25;
    var startSrcX = 0;
    var startSrcY = 0;
    var startX = 0;
    var startY = 0;

    var start = new Image();

    /////////////////srage-2

    function drawStart() {
        //Updating the frame index 
        if (startCurFrame == startFrameCount - 1) {
            clearInterval(SIDdrawStart);
        } else if (startCurFrame == 23) {
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
            startCurFrame++;
        } else if (startCurFrame == 13) {
            $(".stage-2-words").css({
                "opacity": 1
            });
            startCurFrame++;
        } else if (startCurFrame == 8) {
            $("#music-door")[0].play();
            startCurFrame++;
        } else {
            startCurFrame++;
        }
        startSrcY = startCurFrame * startHeight;
        ctx_2.clearRect(startX, startY, startWidth + 10, startHeight + 10);
        ctx_2.imageSmoothingEnabled = false;
        ctx_2.globalAlpha = 1;
        ctx_2.drawImage(start, startSrcX, startSrcY, startWidth, startHeight, startX, startY, startWidth, startHeight);
        console.log("start Working")
    }

    // ＥＮＤ

    var endWidth = 375;
    var endHeight = 667;
    var endCurFrame = 0;
    var endFrameCount = 22;
    var endSrcX = 0;
    var endSrcY = 0;
    var endX = 0;
    var endY = 0;

    var end = new Image();
    /////////////////

    function drawEnd() {
        //Updating the frame index 
        endSrcY = endCurFrame * endHeight;
        ctx_2.clearRect(endX, endY, endWidth, endHeight);
        ctx_2.drawImage(end, endSrcX, endSrcY, endWidth, endHeight, endX, endY, endWidth, endHeight);
        if (endCurFrame == endFrameCount - 1) {
            clearInterval(SIDdrawEnd);
            ctx_2.clearRect(0, 0, stage_2.width, stage_2.height);
            endCurFrame = 0
            $("#section-4").css({
                "transition": "1s"
            });
        } else if (endCurFrame == 13) {
            $("#stage-2").css({
                "transform": "translateX(-100px)",
                "opacity": 0
            });
            endCurFrame++;
        } else {
            endCurFrame++;
        }  
        console.log("end Working")
    }

    //////stage-3

    var walk1Width = 75;
    var walk1Height = 112;
    var walk1CurFrame = 0;
    var walk1FrameCount = 36;
    var walk1SrcX = 0;
    var walk1SrcY = 0;
    var walk1X = 0;
    var walk1Y = 0;
    if (w >= 1024) {
        walk1X = 880;
        walk1Y = 425;
    } else if (w >= 768 && w < 1024) {
        walk1X = 550;
        walk1Y = 660;
    } else {
        walk1X = 390;
        walk1Y = 575;
    }

    var walk1 = new Image();
    ctx_3.transform(.7, 0, 0, .7, 0, 0);
    function drawWalk1To() {
        //Updating the frame index 
        console.log("walkTo Working")
        walk1CurFrame = ++walk1CurFrame % walk1FrameCount;
        walk1SrcY = walk1CurFrame * walk1Height;
        ctx_3.clearRect(walk1X, walk1Y, walk1Width, walk1Height);
        ctx_3.drawImage(walk1, walk1SrcX, walk1SrcY, walk1Width, walk1Height, walk1X, walk1Y, walk1Width, walk1Height);
        if (w >= 1024) {
            if (walk1X < 550) {
                ctx_3.clearRect(walk1X, walk1Y, walk1Width, walk1Height);
                clearInterval(SIDdrawWalk1);
                SIDdrawWalkBack = setInterval(drawWalkBack, 83);
            } else {
                if (walk1X < 625) {
                    ctx_3.globalAlpha -= 0.05;
                }
                if (walk1X < 800) {
                    $(".downArrow").css({
                        "display": "block",
                        "color": "black"
                    });
                    $.fn.fullpage.setAllowScrolling(true);
                }
                walk1X -= 5;
            }
        } else if (w >= 768 && w < 1024) {
            if (walk1X < 350) {
                ctx_3.clearRect(walk1X, walk1Y, walk1Width, walk1Height);
                clearInterval(SIDdrawWalk1);
                SIDdrawWalkBack = setInterval(drawWalkBack, 83);
            } else {
                if (walk1X < 400) {
                    ctx_3.globalAlpha -= 0.05;
                }
                if (walk1X < 500) {
                    $(".downArrow").css({
                        "display": "block",
                        "color": "black"
                    });
                    $.fn.fullpage.setAllowScrolling(true);
                }
                walk1X -= 4;
            }     
        } else {
            if (walk1X < 150) {
                ctx_3.clearRect(walk1X, walk1Y, walk1Width, walk1Height);
                clearInterval(SIDdrawWalk1);
                SIDdrawWalkBack = setInterval(drawWalkBack, 83);
            } else {
                if (walk1X > 150 && walk1X < 200) {
                    ctx_3.globalAlpha -= 0.05;
                }
                if (walk1X < 300) {
                    $(".downArrow").css({
                        "display": "block",
                        "color": "black"
                    });
                    $.fn.fullpage.setAllowScrolling(true);
                }
                walk1X -= 4;
            }
        }
    }

    var walkBackWidth = 39;
    var walkBackHeight = 55;
    var walkBackCurFrame = 0;
    var walkBackFrameCount = 36;
    var walkBackSrcX = 0;
    var walkBackSrcY = 0;
    var walkBackX = 0;
    var walkBackY = 0;

    if (w >= 1024) {
        walkBackX = 560;
        walkBackY = 417;
    } else if (w >= 768 && w < 1024) {
        walkBackX = 350;
        walkBackY = 670;        
    } else {
        walkBackX = 180;
        walkBackY = 565;
    }

    var walkBack = new Image();

    function drawWalkBack() {
        //Updating the frame index 
        console.log("walkBack Working")
        walkBackCurFrame = ++walkBackCurFrame % walkBackFrameCount;
        walkBackSrcY = walkBackCurFrame * walkBackHeight;
        ctx_3.clearRect(walkBackX, walkBackY, walkBackWidth, walkBackHeight);
        ctx_3.drawImage(walkBack, walkBackSrcX, walkBackSrcY, walkBackWidth, walkBackHeight, walkBackX, walkBackY, walkBackWidth, walkBackHeight);
        if (w >= 1024) {
            if (walkBackX > 650) {
                ctx_3.clearRect(walkBackX, walkBackY, walkBackWidth, walkBackHeight);
                clearInterval(SIDdrawWalkBack);
                $("#music-walk")[0].pause();
            } else {
                if (walkBackX < 590) {
                    ctx_3.globalAlpha += 0.3;
                } else if (walkBackX > 590 && walkBackX < 600) {
                    ctx_3.globalAlpha = 1;
                } else if (walkBackX > 620) {
                    ctx_3.globalAlpha -= 0.05;
                }
                walkBackX += 3;
            }
        } else if (w >= 768 && w < 1024) {
            if (walkBackX > 420) {
                ctx_3.clearRect(walkBackX, walkBackY, walkBackWidth, walkBackHeight);
                clearInterval(SIDdrawWalkBack);
                $("#music-walk")[0].pause();
            } else {
                if (walkBackX > 350 && walkBackX < 360) {
                    ctx_3.globalAlpha += 0.3;
                } else if (walkBackX > 360 && walkBackX < 280) {
                    ctx_3.globalAlpha = 1;
                } else if (walkBackX > 380 && walkBackX < 420) {
                    ctx_3.globalAlpha -= 0.05;
                }
                walkBackX += 2.5;
            }            
        } else {
            if (walkBackX > 270) {
                ctx_3.clearRect(walkBackX, walkBackY, walkBackWidth, walkBackHeight);
                clearInterval(SIDdrawWalkBack);
                $("#music-walk")[0].pause();
            } else {
                if (walkBackX > 150 && walkBackX < 190) {
                    ctx_3.globalAlpha += 0.3;
                } else if (walkBackX > 190 && walkBackX < 220) {
                    ctx_3.globalAlpha = 1;
                } else if (walkBackX > 220 && walkBackX < 270) {
                    ctx_3.globalAlpha -= 0.05;
                }
                walkBackX += 2;
            }
        }
    }

    var treeWidth = 810;
    var treeHeight = 369;
    var treeSrcX = 0;
    var treeSrcY = 0;
    var treeX = -230;
    var treeY = 230;

    var tree = new Image();
    var padTree = new Image();
    // stage-4

    var kitchenWidth = 375;
    var kitchenHeight = 667;
    var kitchenCurFrame = 0;
    var kitchenFrameCount = 24;
    var kitchenSrcX = 0;
    var kitchenSrcY = 0;
    var kitchenX = 80;
    var kitchenY = 200;

    var kitchenArrow = 0;

    var kitchen = new Image();
    ctx_4.transform(.8, 0, 0, .8, 0, 0);
    function drawKitchen() {
        //Updating the frame index 
        console.log("kitchen Working")
        kitchenCurFrame = ++kitchenCurFrame % kitchenFrameCount;
        kitchenSrcY = kitchenCurFrame * kitchenHeight;
        ctx_4.clearRect(kitchenX, kitchenY, kitchenWidth + 10, kitchenHeight + 10);
        ctx_4.drawImage(kitchen, kitchenSrcX, kitchenSrcY, kitchenWidth, kitchenHeight, kitchenX, kitchenY, kitchenWidth, kitchenHeight);
        kitchenArrow++;
        if (kitchenArrow == 15) {
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
        }
    }
    //////stage-5

    var carWidth = 375;
    var carHeight = 667;
    var carCurFrame = 0;
    var carFrameCount = 24;
    var carSrcX = 0;
    var carSrcY = 0;
    var carX = 0;
    var carY = 0;

    var carArrow = 0;

    var car = new Image();

    function drawCar() {
        //Updating the frame index 
        console.log("car Working")
        carCurFrame = ++carCurFrame % carFrameCount;
        carSrcY = carCurFrame * carHeight;
        ctx_5.clearRect(carX, carY, carWidth + 10, carHeight + 10);
        ctx_5.drawImage(car, carSrcX, carSrcY, carWidth, carHeight, carX, carY, carWidth, carHeight);
        carArrow++;
        if (carArrow == 32) {
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
        } else if (carArrow == 22) {
            $(".stage-5-words h2").css({
                "opacity": "1"
            });
        }
    }
    // stage-6

    var foodInfoWidth = 213;
    var foodInfoHeight = 291;
    var foodInfoCurFrame = 0;
    var foodInfoFrameCount = 24;
    var foodInfoSrcX = 0;
    var foodInfoSrcY = 0;
    var foodInfoX = 130;
    var foodInfoY = 50;

    var foodInfoEnd = 0;

    var foodInfo = new Image();

    function drawFoodInfo() {
        //Updating the frame index 
        console.log("food Working")
        foodInfoCurFrame = ++foodInfoCurFrame % foodInfoFrameCount;
        foodInfoSrcY = foodInfoCurFrame * foodInfoHeight;
        ctx_6.clearRect(foodInfoX, foodInfoY, foodInfoWidth + 10, foodInfoHeight + 10);
        ctx_6.drawImage(foodInfo, foodInfoSrcX, foodInfoSrcY, foodInfoWidth, foodInfoHeight, foodInfoX, foodInfoY, foodInfoWidth, foodInfoHeight);
        if (foodInfoEnd == 29) {
            clearInterval(SIDdrawFoodInfo);
        } else if (foodInfoEnd == 22) {
            foodInfoEnd++;
            $("#stage-6").css({
                "opacity": "0",
                "transform": "translate(0, -100%)"
            });
            foodInfoEnd++;
        } else {
            foodInfoEnd++;
        }
    }

    var foodSafeWidth = 140;
    var foodSafeHeight = 329;
    var foodSafeCurFrame = 0;
    var foodSafeFrameCount = 24;
    var foodSafeSrcX = 0;
    var foodSafeSrcY = 0;
    var foodSafeX = 50;
    var foodSafeY = 240;
    var foodSafeEnd = 0;

    var foodSafe = new Image();

    function drawFoodSafe() {
        //Updating the frame index 
        console.log("foodSafe Working")
        foodSafeCurFrame = ++foodSafeCurFrame % foodSafeFrameCount;
        foodSafeSrcY = foodSafeCurFrame * foodSafeHeight;
        ctx_6_1.clearRect(foodSafeX, foodSafeY, foodSafeWidth + 10, foodSafeHeight + 10);
        ctx_6_1.drawImage(foodSafe, foodSafeSrcX, foodSafeSrcY, foodSafeWidth, foodSafeHeight, foodSafeX, foodSafeY, foodSafeWidth, foodSafeHeight);
        if (foodSafeEnd == 27) {
            clearInterval(SIDdrawFoodSafe);
            $("#stage-6_3, #stage-6_3_bg").css({
                "opacity": "1",
                "transform": "translate(0, 0)"
            });
            SIDdrawCpu = setInterval(drawCpu, 125);
        } else if (foodSafeEnd == 24) {
            $("#stage-6_1").css({
                "opacity": "0",
                "transform": "translate(0, -100%)"
            });
            foodSafeEnd++;
        } else {
            foodSafeEnd++;
        }
    }

    var speechWidth = 269;
    var speechHeight = 398;
    var speechCurFrame = 0;
    var speechFrameCount = 24;
    var speechSrcX = 0;
    var speechSrcY = 0;
    var speechX = 90;
    var speechY = 170;
    var speechEnd = 0;

    var speech = new Image();

    function drawSpeech() {
        //Updating the frame index
        console.log("speech Working") 
        speechCurFrame = ++speechCurFrame % speechFrameCount;
        speechSrcY = speechCurFrame * speechHeight;
        ctx_6_2.clearRect(speechX, speechY, speechWidth + 10, speechHeight + 10);
        ctx_6_2.drawImage(speech, speechSrcX, speechSrcY, speechWidth, speechHeight, speechX, speechY, speechWidth, speechHeight);
        if (speechEnd == 30) {
            clearInterval(SIDdrawSpeech);
            $("#stage-6_4").css({
                "opacity": "1",
                "transform": "translate(0, 0)"
            });
            setTimeout(function () {
                $(".stage-6-words p").eq(1).css({
                    "opacity": "1",
                    "transform": 'translate(0, 0px)'
                });
            }, 888);
            setTimeout(function () {
                $(".downArrow").css({
                    "display": "block",
                    "color": "black"
                });
                $.fn.fullpage.setAllowScrolling(true);
            }, 1888);
            SIDdrawDoctor = setInterval(drawDoctor, 83);
        } else if (speechEnd == 27) {
            $(".stage-6-words p").eq(0).css({
                "opacity": "0",
                "transform": 'translate(0, -50px)'
            });
            $("#music-camera")[0].pause();
            speechEnd++;
        } else if (speechEnd == 26) {
            $("#stage-6_2").css({
                "opacity": "0",
                "transform": "translate(0, -100%)"
            });
            speechEnd++;
        } else {
            speechEnd++;
        }
    }

    var doctorWidth = 128;
    var doctorHeight = 221;
    var doctorCurFrame = 0;
    var doctorFrameCount = 36;
    var doctorSrcX = 0;
    var doctorSrcY = 0;
    var doctorX = 140;
    var doctorY = 310;

    var doctor = new Image();

    var labTool = new Image();

    function drawDoctor() {
        //Updating the frame index 
        console.log("doctor Working") 
        doctorCurFrame = ++doctorCurFrame % doctorFrameCount;
        doctorSrcY = doctorCurFrame * doctorHeight;
        ctx_6_3.clearRect(doctorX, doctorY, doctorWidth, doctorHeight);
        ctx_6_3.drawImage(doctor, doctorSrcX, doctorSrcY, doctorWidth, doctorHeight, doctorX, doctorY, doctorWidth, doctorHeight);
    }

    var cpuWidth = 124;
    var cpuHeight = 177;
    var cpuCurFrame = 0;
    var cpuFrameCount = 24;
    var cpuSrcX = 0;
    var cpuSrcY = 0;
    var cpuX = 70;
    var cpuY = 290;

    var cpu = new Image();

    var labLocker = new Image();

    function drawCpu() {
        //Updating the frame index
        console.log("cpu Working")  
        cpuCurFrame = ++cpuCurFrame % cpuFrameCount;
        cpuSrcY = cpuCurFrame * cpuHeight;
        ctx_6_4.clearRect(cpuX, cpuY, cpuWidth, cpuHeight);
        ctx_6_4.drawImage(cpu, cpuSrcX, cpuSrcY, cpuWidth, cpuHeight, cpuX, cpuY, cpuWidth, cpuHeight);
    }

    /////stage-7
    var roomWidth = 0;
    if (w >= 1024) {
        roomWidth = 520;
    } else {
        roomWidth = 375;
    }
    var roomHeight = 667;
    var roomCurFrame = 0;
    var roomFrameCount = 32;
    var roomSrcX = 0;
    var roomSrcY = 0;
    var roomX = 0;
    var roomY = 20;

    var room = new Image();

    function drawRoom() {
        //Updating the frame index 
        console.log("room Working") 
        roomCurFrame = ++roomCurFrame % roomFrameCount;
        roomSrcY = roomCurFrame * roomHeight;
        ctx_7.clearRect(roomX, roomY, roomWidth + 10, roomHeight + 10);
        ctx_7.drawImage(room, roomSrcX, roomSrcY, roomWidth, roomHeight, roomX, roomY, roomWidth, roomHeight);
        ctx_7.font = "14px Arial";
        if (roomCurFrame > 4) {
            w >= 1024 ? ctx_7.fillText("爸爸進房間囉", 250, 282) : ctx_7.fillText("爸爸進房間囉", 175, 282);
            if (roomCurFrame == 23) {
                $("#music-switch")[0].play(0);
            } else if (roomCurFrame == roomFrameCount - 1) {
                clearInterval(SIDdrawRoom);
                $(".downArrow").css({
                    "display": "block",
                    "color": "white"
                });
                $.fn.fullpage.setAllowScrolling(true);
            }
        }
    }

    //////stage-8

    var bedWidth = 375;
    var bedHeight = 667;
    var bedCurFrame = 0;
    var bedFrameCount = 24;
    var bedSrcX = 0;
    var bedSrcY = 0;
    var bedX = 0;
    var bedY = 0;

    var bed = new Image();

    function drawBed() {
        //Updating the frame index 
        console.log("bed Working") 
        bedCurFrame = ++bedCurFrame % bedFrameCount;
        bedSrcY = bedCurFrame * bedHeight;
        ctx_8.clearRect(bedX, bedY, bedWidth, bedHeight);
        ctx_8.drawImage(bed, bedSrcX, bedSrcY, bedWidth, bedHeight, bedX, bedY, bedWidth, bedHeight);
        if (bedCurFrame == bedFrameCount - 1) {
            clearInterval(SIDdrawBed);
        } else if (bedCurFrame == 18) {
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
        } else if (bedCurFrame == 4) {
            $(".stage-8-words h2").css({
                "transform": "translate(0, 0)",
                "opacity": "1"
            });
        }
    }

    // stage-9

    var smokeWidth = 166;
    var smokeHeight = 148;
    var smokeCurFrame = 0;
    var smokeFrameCount = 25;
    var smokeSrcX = 0;
    var smokeSrcY = 0;
    var smokeX = 120;
    var smokeY = 200;

    var smokeArrow = 0;

    var smoke = new Image();

    var table = new Image();
    ctx_9_bg.transform(.85, 0, 0, .85, 0, 0);

    function drawSmoke() {
        //Updating the frame index 
        console.log("smoke Working") 
        smokeCurFrame = ++smokeCurFrame % smokeFrameCount;
        smokeSrcY = smokeCurFrame * smokeHeight;
        ctx_9.clearRect(smokeX, smokeY, smokeWidth + 10, smokeHeight + 10);
        ctx_9.drawImage(smoke, smokeSrcX, smokeSrcY, smokeWidth, smokeHeight, smokeX, smokeY, smokeWidth, smokeHeight);
        smokeArrow++;
        if (smokeArrow == 14) {
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
        }
    }
    // stage-10

    var toWave = 0;
    var thanksIndex = 0;
    var strollToFade = 1;

    var strollWidth = 168;
    var strollHeight = 290;
    var strollCurFrame = 0;
    var strollFrameCount = 24;
    var strollSrcX = 0;
    var strollSrcY = 0;
    var strollX = 0;
    var strollY = 250;

    var stroll = new Image();

    function drawStroll() {
        //Updating the frame index
        console.log("stroll Working") 
        strollCurFrame = ++strollCurFrame % strollFrameCount;
        strollSrcY = strollCurFrame * strollHeight;
        ctx_10.clearRect(strollX, strollY, strollWidth + 10, strollHeight + 10);
        ctx_10.drawImage(stroll, strollSrcX, strollSrcY, strollWidth, strollHeight, strollX, strollY, strollWidth, strollHeight);
        toWave++;
        if (toWave == 32 && thanksIndex < 2) {
            SIDdrawWave = setInterval(drawWave, 125);
            toWave = 0;
            $(".thanks").eq(thanksIndex).css({
                "opacity": "1",
                "transform": "translateX(0)"
            });
        } else if (toWave == 28) {
            $(".stage-10-words p").css({
                "opacity": 0
            });
        } else if (toWave == 6) {
            $(".stage-10-words p").eq(0).css({
                "opacity": 1,
                "transform": "translate(0, 0)"
            });
        } else if (toWave == 12) {
            $(".stage-10-words p").eq(1).css({
                "opacity": 1,
                "transform": "translate(0, 0)"
            });
        } else if (toWave == 16) {
            if (thanksIndex == 1) {
                SIDdrawWave = setInterval(drawWave, 125);
                toWave = 0;
                $(".thanks").eq(thanksIndex).css({
                    "opacity": "1",
                    "transform": "translateX(0)"
                });
            }
        } else if (toWave == 18) {
            $(".stage-10-words p").eq(2).css({
                "opacity": 1,
                "transform": "translate(0, 0)"
            });
        } else if (toWave == 2) {
            $("#music-stroll")[0].play();
        }
    }

    var waveWidth = 145;
    var waveHeight = 287;
    var waveCurFrame = 0;
    var waveFrameCount = 32;
    var waveSrcX = 0;
    var waveSrcY = 0;
    var waveX = 0;
    var waveY = 250;

    var wave = new Image();

    function drawWave() {
        //Updating the frame index 
        console.log("wave Working") 
        $("#music-stroll")[0].pause();
        waveCurFrame++;
        waveSrcY = waveCurFrame * waveHeight;
        ctx_10.clearRect(waveX, waveY, waveWidth + 10, waveHeight + 10);
        ctx_10.drawImage(wave, waveSrcX, waveSrcY, waveWidth, waveHeight, waveX, waveY, waveWidth, waveHeight);
        clearInterval(SIDdrawStroll);
        if (waveCurFrame == waveFrameCount - 1 && thanksIndex == 0) {
            clearInterval(SIDdrawWave);
            waveCurFrame = 0;
            $(".stage-10-words").css({
                "opacity": 0,
                "tranistion": "translate(0, -50px)"
            });
            SIDdrawStroll = setInterval(drawStroll, 125);
            $(".thanks").eq(thanksIndex).css({
                "opacity": "0",
                "transform": "translateX(-10%)"
            });
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
            thanksIndex++;
        } else if (waveCurFrame == 23 && thanksIndex == 1) {
            clearInterval(SIDdrawWave);
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
        } else if (waveCurFrame == waveFrameCount - 1 && thanksIndex == 1) {
            clearInterval(SIDdrawWave);
        }
    }

    // stage-11

    var manWidth = 375;
    var manHeight = 667;
    var manCurFrame = 0;
    var manFrameCount = 24;
    var manSrcX = 0;
    var manSrcY = 0;
    var manX = 0;
    var manY = 0;

    var man = new Image();

    function drawMan() {
        //Updating the frame index
        console.log("man Working")  
        manCurFrame = ++manCurFrame % manFrameCount;
        manSrcY = manCurFrame * manHeight;
        ctx_11.clearRect(manX, manY, manWidth + 10, manHeight + 10);
        ctx_11.drawImage(man, manSrcX, manSrcY, manWidth, manHeight, manX, manY, manWidth, manHeight);
    }

    var womanWidth = 375;
    var womanHeight = 667;
    var womanCurFrame = 0;
    var womanFrameCount = 24;
    var womanSrcX = 0;
    var womanSrcY = 0;
    var womanX = 0;
    var womanY = 0;

    var woman = new Image();

    function drawWoman() {
        //Updating the frame index
        console.log("woman Working")  
        womanCurFrame = ++womanCurFrame % womanFrameCount;
        womanSrcY = womanCurFrame * womanHeight;
        ctx_11_1.clearRect(womanX, womanY, womanWidth + 10, womanHeight + 10);
        ctx_11_1.drawImage(woman, womanSrcX, womanSrcY, womanWidth, womanHeight, womanX, womanY, womanWidth, womanHeight);
    }

    var present = new Image();

    // stage-12

    var washWidth = 375;
    var washHeight = 667;
    var washCurFrame = 0;
    var washFrameCount = 36;
    var washSrcX = 0;
    var washSrcY = 0;
    var washX = 0;
    var washY = 0;

    var wash = new Image();

    function drawWash() {
        //Updating the frame index 
        console.log("wash Working") 
        washCurFrame = ++washCurFrame % washFrameCount;
        washSrcY = washCurFrame * washHeight;
        ctx_12.clearRect(washX, washY, washWidth + 10, washHeight + 10);
        ctx_12.drawImage(wash, washSrcX, washSrcY, washWidth, washHeight, washX, washY, washWidth, washHeight);
        if (washCurFrame == washFrameCount - 1) {
            clearInterval(SIDdrawWash);
        } else if (washCurFrame == 20) {
            $(".downArrow").css({
                "display": "block",
                "color": "black"
            });
            $.fn.fullpage.setAllowScrolling(true);
        }
    }
    function stageStateReset () {
        ctx_2.clearRect(0, 0, stage_2.width, stage_2.height);
        startCurFrame = 0;
        endCurFrame = 0;
        $("#stage-2").removeAttr('style');
        $(".stage-2-words").removeAttr('style');
        ctx_3.clearRect(0, 0, stage_3.width, stage_3.height);
        ctx_3.globalAlpha = 1;
        if (w >= 1024) {
            walk1X = 880;
            walkBackX = 560;
        } else {
            walk1X = 390;
            walkBackX = 180;
        }
        $(".stage-3-words").removeAttr("style");        
        ctx_4.clearRect(0, 0, stage_4.width, stage_4.height);
        kitchenArrow = 0;
        $(".stage-4-words p").removeAttr('style');
        $("#stage-4").removeAttr('style');
        carArrow = 0;
        ctx_5.clearRect(0, 0, stage_5.width, stage_5.height);
        clearInterval(SIDdrawCar);
        $("#stage-5").removeAttr('style');
        $(".stage-5-words p").removeAttr('style');
        $(".stage-5-words h2").removeAttr('style');    
        ctx_6_1.clearRect(0, 0, stage_6_1.width, stage_6_1.height);
        ctx_6_2.clearRect(0, 0, stage_6_2.width, stage_6_2.height);
        ctx_6_3.clearRect(0, 0, stage_6_3.width, stage_6_3.height);
        ctx_6_4.clearRect(0, 0, stage_6_4.width, stage_6_4.height);
        $("#stage-6").removeAttr('style');
        $("#stage-6_1").removeAttr('style');
        $("#stage-6_2").removeAttr('style');
        $("#stage-6_3").removeAttr('style');
        $("#stage-6_3_bg").removeAttr('style');
        $("#stage-6_4").removeAttr('style');
        $(".stage-6-words p").eq(0).removeAttr('style');
        $(".stage-6-words p").eq(1).removeAttr('style');
        foodInfoEnd = 0;
        foodSafeEnd = 0;
        speechEnd = 0;       
        ctx_7.clearRect(0, 0, stage_7.width, stage_7.height);
        $("#stage-7").removeAttr('style');
        $(".stage-7-words").removeAttr('style');     
        bedCurFrame = 0;
        $(".stage-8-words p").removeAttr('style');
        $(".stage-8-words h2").removeAttr('style');
        $("#stage-8").removeAttr('style');
        ctx_8.clearRect(0, 0, stage_8.width, stage_8.height);   
        smokeArrow = 0;
        ctx_9.clearRect(0, 0, stage_9.width, stage_9.height);
        ctx_9_bg.clearRect(0, 0, stage_9_bg.width + 100, stage_9_bg.height + 100);
        $(".stage-9-words p").removeAttr('style');
        $("#stage-9").removeAttr('style');
        $("#stage-9_bg").removeAttr('style');            
        toWave = 0;
        thanksIndex = 0;
        waveCurFrame = 0;
        ctx_10.clearRect(0, 0, stage_10.width, stage_10.height);
        $(".thanks").removeAttr('style');
        $(".stage-10-words").removeAttr('style');
        $(".stage-10-words p").removeAttr('style');
        ctx_11.clearRect(0, 0, stage_11.width, stage_11.height);
        ctx_11_1.clearRect(0, 0, stage_11_1.width, stage_11_1.height);
        $("#stage-11").removeAttr('style');
        $("#stage-11_1").removeAttr('style');
        $(".stage-11-words p").removeAttr('style');   
        ctx_12.clearRect(0, 0, stage_12.width, stage_12.height);
        washCurFrame = 0;
        $(".stage-12-words p").removeAttr('style');
        $("#stage-12").removeAttr('style');       
        console.log("stageStateClear")     
    }


    $('.fullpage').fullpage({
        // navigation: true,
        recordHistory: false,
        scrollingSpeed: 777,
        lazyLoading: true,
        afterLoad: function (anchorLink, index) {
            animeIndex = index;
            $.fn.fullpage.setAllowScrolling(false);
            $("#section-" + index).css({
                "opacity": "1",
                "z-index": 50
            });
            $("#head").addClass('Bgc-TP');
            bar_witdh = index / ($(".fullpage").children().length - 1) * 100;
            $('#indicator-bar').css('width', bar_witdh + '%');
            $("#indicator").removeClass("mainColor");
            ga("send", {
                "hitType": "event",
                "eventCategory": "插畫(15張)",
                "eventAction": "scroll",
                "eventLabel": "看到第" + index + "張"
            });
            if (index == 1) {
                $.fn.fullpage.setAutoScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
                $.fn.fullpage.setFitToSection(true);
                $.fn.fullpage.setScrollingSpeed(777);                
                $(window).scrollTop(0);   
                $("#stage-1")[0].play();
                $(".fixed_pic").css("opacity", "1");
                $(".fullpage").css({
                    "height": "100%"
                })
                $(".skip").css("display","block")
                start.src = "src/image/animate-sprite/stage-2-start.jpg";
                end.src = "src/image/animate-sprite/stage-2-end.jpg";       
                toSkip = false;     
                $(".downArrow").css({
                    "display": "block",
                    "color": "white"
                });
            }
            if (index == 2) {
                walk1.src = "src/image/animate-sprite/stage-3-walk1.png";
                walkBack.src = "src/image/animate-sprite/stage-3-walkback.png";
                tree.src = 'src/image/animate-sprite/stage-3-bg.png';
                padTree.src = "src/image/animate-sprite/stage-3pod.png";    

                $(".page-black").eq(0).css({
                    "transform": "translate(0, 0)"
                });
                $(".downArrow").css({
                    "display": "block",
                    "color": "white"
                });
                if($('.voice-state img').attr('src') == 'src/image/off.png'){
                    $(".voice-state img").addClass("blink");    
                }
                $.fn.fullpage.setAllowScrolling(true);
            }
            if (index == 3) {
                kitchen.src = "src/image/animate-sprite/stage-4-kitchen.jpg";
                foodInfo.src = "src/image/animate-sprite/stage-6-foodInfo.png";
                foodSafe.src = "src/image/animate-sprite/stage-6-foodSafe.png";
                speech.src = "src/image/animate-sprite/stage-6-speech.png";
                labTool.src = "src/image/animate-sprite/stage-6-lab-bg.png";
                labLocker.src = "src/image/animate-sprite/stage-6-lab-bg2.png";
                $(".voice-state img").removeClass("blink");
                $(".page-black").eq(0).removeAttr('style');

                $(".page-black").eq(1).css({
                    "transform": "translate(0, 0)"
                });
                $(".downArrow").css({
                    "display": "block",
                    "color": "white"
                });
                $.fn.fullpage.setAllowScrolling(true);
            }
            if (index == 4) {
                car.src = "src/image/animate-sprite/stage-5-car.jpg";
                doctor.src = "src/image/animate-sprite/stage-6-doctor.png";
                cpu.src = "src/image/animate-sprite/stage-6-cpu.png";
                table.src = "src/image/animate-sprite/stage-9-bg.png";
                present.src = "src/image/animate-sprite/stage-11-bg.png";
                $(".page-black").eq(1).removeAttr('style');
                $("#stage-2").css({
                    "transform": "translateX(0)",
                    "opacity": "1"
                });
                SIDdrawStart = setInterval(drawStart, 100);
            }
            if (index == 5) {
                if (w >= 1024) {
                    room.src = "src/image/animate-sprite/stage-7-roomW.jpg";
                } else {
                    room.src = "src/image/animate-sprite/stage-7-room.jpg";
                }
                ctx_2.clearRect(0, 0, stage_2.width, stage_2.height);
                startCurFrame = 0;
                endCurFrame = 0;
                $("#stage-2").removeAttr('style');
                $(".stage-2-words").removeAttr('style');

                $(".stage-3-words").css({
                    "transform": "translate(0, 15%)",
                    "opacity": "1"
                });
                $("#music-walk")[0].play();
                if (w >= 1024) {
                    ctx_3_1.drawImage(tree, 0, 0, treeWidth, treeHeight, 35, 126, treeWidth, treeHeight);
                }
                if (w >= 768 && w < 1023) {
                    ctx_3_1.drawImage(padTree, 0, 0, 578, 820, 0, 0, 578, 820);
                }
                if (w < 768){
                   ctx_3_1.drawImage(tree, treeSrcX, treeSrcY, treeWidth, treeHeight, treeX, treeY, treeWidth, treeHeight);
                }
                SIDdrawWalk1 = setInterval(drawWalk1To, 83);
                $.fn.fullpage.setScrollingSpeed(1777);
            }
            if (index == 6) {
                bed.src = "src/image/animate-sprite/stage-8-bed.jpg";
                // reset Stage-3
                ctx_3.clearRect(0, 0, stage_3.width+100, stage_3.height+100);
                ctx_3.globalAlpha = 1;
                if (w >= 1024) {
                    walk1X = 880;
                    walk1Y = 425;
                } else if (w >= 768 && w < 1024) {
                    walk1X = 550;
                    walk1Y = 660;
                } else {
                    walk1X = 390;
                    walk1Y = 575;
                }
                if (w >= 1024) {
                    walkBackX = 560;
                    walkBackY = 417;
                } else if (w >= 768 && w < 1024) {
                    walkBackX = 350;
                    walkBackY = 670;        
                } else {
                    walkBackX = 180;
                    walkBackY = 565;
                }
                $(".stage-3-words").removeAttr("style");

                // do stage-4
                $(".stage-4-words p").css({
                    "transform": "translate(0, 0)",
                    "opacity": "1"
                });
                $("#stage-4").css({
                    "transform": "translate(0, 0)",
                    "opacity": "1"
                });
                $("#music-cooking")[0].play();
                SIDdrawKitchen = setInterval(drawKitchen, 125);
            }
            if (index == 7) {
                smoke.src = "src/image/animate-sprite/stage-9-smoke.png";
                stroll.src = "src/image/animate-sprite/stage-10-stroll.png";
                wave.src = "src/image/animate-sprite/stage-10-wave.png";
                // reset Stage-4
                ctx_4.clearRect(0, 0, stage_4.width, stage_4.height);
                kitchenArrow = 0;
                $(".stage-4-words p").removeAttr('style');
                $("#stage-4").removeAttr('style');

                // do stage-5
                $("#stage-5").css({
                    "transform": "translate(0, 0)",
                    "opacity": "1"
                });
                $(".stage-5-words p").css({
                    "opacity": "1"
                });
                $("#music-driving")[0].play();
                SIDdrawCar = setInterval(drawCar, 125);
            }
            if (index == 8) {
                man.src = "src/image/animate-sprite/stage-11-man.jpg";
                woman.src = "src/image/animate-sprite/stage-11-woman.jpg";
                wash.src = "src/image/animate-sprite/stage-12-wash.jpg";
                //reset Stage-5
                carArrow = 0;
                ctx_5.clearRect(0, 0, stage_5.width, stage_5.height);
                clearInterval(SIDdrawCar);
                $("#stage-5").removeAttr('style');
                $(".stage-5-words p").removeAttr('style');
                $(".stage-5-words h2").removeAttr('style');

                ctx_6.drawImage(foodInfo, foodInfoSrcX, foodInfoSrcY, foodInfoWidth, foodInfoHeight, foodInfoX, foodInfoY, foodInfoWidth, foodInfoHeight);
                ctx_6_1.drawImage(foodSafe, foodSafeSrcX, foodSafeSrcY, foodSafeWidth, foodSafeHeight, foodSafeX, foodSafeY, foodSafeWidth, foodSafeHeight);
                ctx_6_2.drawImage(speech, speechSrcX, speechSrcY, speechWidth, speechHeight, speechX, speechY, speechWidth, speechHeight);
                ctx_6_3_bg.drawImage(labTool, 0, 0, 360, 395, 75, 150, 360, 395);
                ctx_6_4.drawImage(labLocker, 0, 0, 124, 208, 0, 459, 124, 208);

                $("#stage-6").css({
                    "opacity": "1",
                    "transform": "translate(0, 0)"
                });
                setTimeout(function () {
                    $("#stage-6_1").css({
                        "opacity": "1",
                        "transform": "translate(0, 0)"
                    });
                }, 222);
                setTimeout(function () {
                    $("#stage-6_2").css({
                        "opacity": "1",
                        "transform": "translate(0, 0)"
                    });
                }, 555);
                setTimeout(function () {
                    $("#music-camera")[0].play();
                    SIDdrawFoodInfo = setInterval(drawFoodInfo, 83);
                    SIDdrawFoodSafe = setInterval(drawFoodSafe, 83);
                    SIDdrawSpeech = setInterval(drawSpeech, 83);
                }, 1433);
                setTimeout(function () {
                    $(".stage-6-words p").eq(0).css({
                        "opacity": "1",
                        "transform": 'translate(0, 0)'
                    });
                }, 1666);
            }
            if (index == 9) {
                // reset stage-6
                ctx_6.clearRect(0, 0, stage_6.width, stage_6.height);
                ctx_6_1.clearRect(0, 0, stage_6_1.width, stage_6_1.height);
                ctx_6_2.clearRect(0, 0, stage_6_2.width, stage_6_2.height);
                ctx_6_3.clearRect(0, 0, stage_6_3.width, stage_6_3.height);
                ctx_6_4.clearRect(0, 0, stage_6_4.width, stage_6_4.height);
                $("#stage-6").removeAttr('style');
                $("#stage-6_1").removeAttr('style');
                $("#stage-6_2").removeAttr('style');
                $("#stage-6_3").removeAttr('style');
                $("#stage-6_3_bg").removeAttr('style');
                $("#stage-6_4").removeAttr('style');
                $(".stage-6-words p").eq(0).removeAttr('style');
                $(".stage-6-words p").eq(1).removeAttr('style');
                foodInfoEnd = 0;
                foodSafeEnd = 0;
                speechEnd = 0;

                SIDdrawRoom = setInterval(drawRoom, 125);
                $("#stage-7").css({
                    "opacity": "1"
                });
            }
            if (index == 10) {
                // reset stage-7
                ctx_7.clearRect(0, 0, stage_7.width, stage_7.height);
                $("#stage-7").removeAttr('style');
                $(".stage-7-words").removeAttr('style');

                $(".stage-8-words p").eq(0).css({
                    "opacity": "1",
                    "transform": "translate(0, 0)"
                });
                setTimeout(function () {
                    $("#stage-8").css({
                        "opacity": "1",
                        "transform": "translate(0, 0)"
                    });
                    SIDdrawBed = setInterval(drawBed, 125);
                }, 777);
            }
            if (index == 11) {
                // reset stage-8
                bedCurFrame = 0;
                $(".stage-8-words p").removeAttr('style');
                $(".stage-8-words h2").removeAttr('style');
                $("#stage-8").removeAttr('style');
                ctx_8.clearRect(0, 0, stage_8.width, stage_8.height);

                $(".stage-9-words p").css({
                    "opacity": "1",
                    "transform": "translate(0, 0)"
                });
                ctx_9_bg.drawImage(table, 0, 0, 413, 416, 12, 250, 413, 416);
                SIDdrawSmoke = setInterval(drawSmoke, 125);
                setTimeout(function () {
                    $("#stage-9, #stage-9_bg").css({
                        "opacity": "1",
                        "transform": "translate(0, 0)"
                    });
                }, 1222);
            }
            if (index == 12) {
                // reset stage-9
                smokeArrow = 0;
                ctx_9.clearRect(0, 0, stage_9.width, stage_9.height);
                ctx_9_bg.clearRect(0, 0, stage_9_bg.width + 100, stage_9_bg.height + 100);
                $(".stage-9-words p").removeAttr('style');
                $("#stage-9").removeAttr('style');
                $("#stage-9_bg").removeAttr('style');

                $("#music-street")[0].play();
                SIDdrawStroll = setInterval(drawStroll, 125);
            }
            if (index == 13) {
                // reset stage-10
                toWave = 0;
                thanksIndex = 0;
                waveCurFrame = 0;
                ctx_10.clearRect(0, 0, stage_10.width, stage_10.height);
                $(".thanks").removeAttr('style');
                $(".stage-10-words").removeAttr('style');
                $(".stage-10-words p").removeAttr('style');

                $(".stage-11-words p").css({
                    "opacity": '1'
                });

                ctx_11_2.drawImage(present, 0, 0, 302, 322, 36, 180, 302, 322);
                SIDdrawMan = setInterval(drawMan, 125);
                setTimeout(function () {
                    $("#stage-11").css({
                        "opacity": "0"
                    });
                    clearInterval(SIDdrawMan);
                    SIDdrawWoman = setInterval(drawWoman, 125);
                }, 2000);
                setTimeout(function () {
                    $("#stage-11_1").css({
                        "opacity": "0"
                    });
                    clearInterval(SIDdrawWoman);
                }, 4500);
                setTimeout(function () {
                    $(".downArrow").css({
                        "display": "block",
                        "color": "black"
                    });
                    $.fn.fullpage.setAllowScrolling(true);
                }, 4666);
            }
            if (index == 14) {
                // reset stage-11
                ctx_11.clearRect(0, 0, stage_11.width, stage_11.height);
                ctx_11_1.clearRect(0, 0, stage_11_1.width, stage_11_1.height);
                $("#stage-11").removeAttr('style');
                $("#stage-11_1").removeAttr('style');
                $(".stage-11-words p").removeAttr('style');

                $(".stage-12-words p").eq(0).css({
                    "opacity": 1
                });
                setTimeout(function () {
                    $(".stage-12-words p").eq(1).css({
                        "opacity": 1
                    });
                    $("#stage-12").css({
                        "opacity": 1
                    });
                    SIDdrawWash = setInterval(drawWash, 125);
                }, 1000);
                setTimeout(function () {
                    $(".stage-12-words p").eq(2).css({
                        "opacity": 1
                    });
                }, 2000);
            }
            if (index == 15) {
                //reset stage-12
                ctx_12.clearRect(0, 0, stage_12.width, stage_12.height);
                washCurFrame = 0;
                $(".stage-12-words p").removeAttr('style');
                $("#stage-12").removeAttr('style');
                if(toSkip == false) {
                    $(".stage-13").eq(0).css({
                        "opacity": "1"
                    });
                    $(".stage-13-words").css({
                        "transform": "translate(0, -20%)",
                        "opacity": 1
                    });
                    setTimeout(function () {
                        $(".stage-13").eq(1).css({
                            "opacity": "1"
                        });
                        $(".stage-13-words h2").css({
                            "opacity": "1"
                        });
                    }, 1666);
                    setTimeout(function () {
                        $(".stage-13").eq(2).css({
                            "opacity": "1"
                        });    
                        if ($(window).scrollTop() < $(".content").eq(0).offset().top) {
                            $(".readPaper").css({
                                "display": "block",
                            });                        
                        }
                    }, 3333);
                    setTimeout(function(){
                        if ($(window).scrollTop() < $(".content").eq(0).offset().top) {
                            $(".readPaper").css({
                                "opacity": 1,
                            });                        
                        }  
                    }, 3500)              
                }

            }
        },
        onLeave: function (index, nextIndex, direction) {
            console.log("onleave: "+index ,"direction: "+ direction)
            resetAll();
            $(".downArrow").css({
                "display": "none"
            });
            $(".readPaper").css({
                "display": "none",
                "opacity": 0,
            });
            $("#section-" + index).css({
                "opacity": 0,
                "z-index": 0
            });
            if (direction == "up") {
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "動畫回上一頁",
                    "eventAction": "scroll",
                    "eventLabel": "第幾" + index + "張,回頭看"
                });
            }
            if ($("#indicator").css("opacity") != 1) {
                $("#indicator").css({
                    "opacity": 1
                });
                $('#indicator-bar').css('width', '0');
            }
            if (index == 1) {
                $(".fixed_pic").css("opacity", "1");
            }
            if (index == 2) {
                $(".voice-state img").removeClass("blink");
            }
            if (index == 4) {
                if (direction == "up") {
                    startCurFrame = 0;
                    endCurFrame = 0;
                    ctx_2.clearRect(0, 0, stage_2.width, stage_2.height);
                    $(".stage-2-words").removeAttr('style');
                    $("#stage-2").removeAttr('style');
                } else {
                    $("#section-4").css({
                        "transition": "3s"
                    });
                    SIDdrawEnd = setInterval(drawEnd, 100);
                    $.fn.fullpage.setScrollingSpeed(2333);
                }
            }
            if (index == 5) {
                ctx_3.clearRect(0, 0, stage_3.width+100, stage_3.height+100);
                ctx_3.globalAlpha = 1;
                if (w >= 1024) {
                    walk1X = 880;
                    walk1Y = 425;
                } else if (w >= 768 && w < 1024) {
                    walk1X = 550;
                    walk1Y = 660;
                } else {
                    walk1X = 390;
                    walk1Y = 575;
                }
                if (w >= 1024) {
                    walkBackX = 560;
                    walkBackY = 417;
                } else if (w >= 768 && w < 1024) {
                    walkBackX = 350;
                    walkBackY = 670;        
                } else {
                    walkBackX = 180;
                    walkBackY = 565;
                }
            }
            if (index == 6) {
                kitchenArrow = 0;
                ctx_4.clearRect(kitchenX, kitchenY, stage_4.width, stage_4.height);
                $(".stage-4-words p").removeAttr('style');
                $("#stage-4").removeAttr('style');
            }
            if (index == 7) {
                if (direction == "up") {
                    carArrow = 0;
                    clearInterval(SIDdrawCar);
                    ctx_5.clearRect(0, 0, stage_5.width, stage_5.height);
                    $("#stage-5").removeAttr('style');
                    $(".stage-5-words p").removeAttr('style');
                    $(".stage-5-words h2").removeAttr('style');
                } else {
                    $("#stage-5").css({
                        "transform": "translate(75%, 20%)",
                        "opacity": "0"
                    });
                }
            }
            if (index == 8) {
                if (direction == "up") {
                    ctx_6.clearRect(0, 0, stage_6.width, stage_6.height);
                    ctx_6_1.clearRect(0, 0, stage_6_1.width, stage_6_1.height);
                    ctx_6_2.clearRect(0, 0, stage_6_2.width, stage_6_2.height);
                    ctx_6_3.clearRect(0, 0, stage_6_3.width, stage_6_3.height);
                    ctx_6_4.clearRect(0, 0, stage_6_4.width, stage_6_4.height);
                    $("#stage-6").removeAttr('style');
                    $("#stage-6_1").removeAttr('style');
                    $("#stage-6_2").removeAttr('style');
                    $("#stage-6_3").removeAttr('style');
                    $("#stage-6_3_bg").removeAttr('style');
                    $("#stage-6_4").removeAttr('style');
                    $(".stage-6-words p").eq(0).removeAttr('style');
                    $(".stage-6-words p").eq(1).removeAttr('style');
                    foodInfoEnd = 0;
                    foodSafeEnd = 0;
                    speechEnd = 0;
                } else {
                    $("#section-8").css({
                        "transition": "3s"
                    });
                    $("#stage-6_3, #stage-6_3_bg").css({
                        "opacity": "0",
                        "transform": "translate(0, -130px)"
                    });
                    $(".stage-6-words p").eq(1).css({
                        "opacity": "0",
                        "transform": 'translate(0, -70px)'
                    });
                    setTimeout(function () {
                        $("#stage-6_4").css({
                            "opacity": "0",
                            "transform": "translate(0, -140px)"
                        });
                    }, 111);
                }
            }
            if (index == 9) {
                // if (direction == "up") {
                    ctx_7.clearRect(0, 0, stage_7.width, stage_7.height);
                    $("#stage-7").removeAttr('style');
                    $(".stage-7-words").removeAttr('style');
                // }
            }
            if (index == 10) {
                // if (direction == "up") {
                    bedCurFrame = 0;
                    ctx_8.clearRect(0, 0, stage_8.width, stage_8.height);
                    $(".stage-8-words p").removeAttr('style');
                    $(".stage-8-words h2").removeAttr('style');
                    $("#stage-8").removeAttr('style');
                // }
            }
            if (index == 11) {
                // if (direction == "up") {
                    smokeArrow = 0;
                    ctx_9.clearRect(0, 0, stage_9.width, stage_9.height);
                    ctx_9_bg.clearRect(0, 0, stage_9_bg.width + 300, stage_9_bg.height + 300);
                    $(".stage-9-words p").removeAttr('style');
                    $("#stage-9").removeAttr('style');
                    $("#stage-9_bg").removeAttr('style');
                // }
            }
            if (index == 12) {
                if (direction == "up") {
                    toWave = 0;
                    thanksIndex = 0;
                    waveCurFrame = 0;
                    ctx_10.clearRect(0, 0, stage_10.width, stage_10.height);
                    $(".thanks").removeAttr('style');
                    $(".stage-10-words").removeAttr('style');
                    $(".stage-10-words p").removeAttr('style');
                } else {
                    if (thanksIndex == 1 && waveCurFrame > 22) {
                        SIDdrawWave = setInterval(drawWave, 125);
                    }
                    $(".thanks").eq(thanksIndex).css({
                        "opacity": "0",
                        "transform": "translateX(-10%)"
                    });
                }
            }
            if (index == 13) {
                // if (direction == "up") {
                    ctx_11.clearRect(0, 0, stage_11.width, stage_11.height);
                    ctx_11_1.clearRect(0, 0, stage_11_1.width, stage_11_1.height);
                    $("#stage-11").removeAttr('style');
                    $("#stage-11_1").removeAttr('style');
                    $(".stage-11-words p").removeAttr('style');
                // }
            }
            if (index == 14) {
                // if (direction == "up") {
                    washCurFrame = 0;
                    ctx_12.clearRect(0, 0, stage_12.width, stage_12.height);
                    $(".stage-12-words p").removeAttr('style');
                    $("#stage-12").removeAttr('style');
                // }
            }
            if (index == 15) {
                // if (direction == "up") {
                    $(".stage-13-words h2").removeAttr('style');
                    $(".stage-13-words p").removeAttr('style');
                    $(".stage-13").removeAttr('style');
                // }
            }
            if (nextIndex == 3) {
                $(".fixed_pic").css("opacity", "1");
            }
            if (nextIndex == 4) {
                $(".fixed_pic").css("opacity", "0");
            }
        }
    });
    $(".downArrow").click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
        ga("send", {
            "hitType": "event",
            "eventCategory": "下一頁",
            "eventAction": "click",
            "eventLabel": "第幾" + animeIndex + "點了下一頁箭頭"
        });
        if (animeIndex == 15) {
            $("html, body").animate({
                scrollTop: $(".content").eq(0).offset().top
            }, 888);
        }
    });
    $(".skip").click(function (e) {
        toSkip = true;         
        if(toFire == true){
            toFire = false; 
            console.log(toFire)
            setTimeout(function(){
                toFire = true; 
            }, 1222)        
            $(".fullpage").css({
                'height': "0",
            })        
            $(this).css({ "display": "none"});   
            $("html, body").animate({
                scrollTop: $(window).height()
            }, 1000);                    
            ga("send", {
                "hitType": "event",
                "eventCategory": "skip",
                "eventAction": "click",
                "eventLabel": "直接看報導(skip)"
            });
            $(".fixed_pic").css({ "opacity": 0 });
            $.fn.fullpage.setAutoScrolling(false);
            $.fn.fullpage.setFitToSection(false);  
            $("html, body").css({
                 "overflow-x": "hidden",
                 "height": "initail"
            });
            stageStateReset()                     
        }
    });
    $(".readPaper").click(function (e) {
        toSkip = true;
        if(toFire == true){
            toFire = false;
            setTimeout(function(){
                toFire = true; 
            }, 1222)

            $(this).css({ "display": "none","opacity": 0,});         
            $(".fullpage").css({
                'height': "0",
            })                
            $("html, body").animate({
                scrollTop: $(window).height()
            }, 1000);                    
            ga("send", {
                "hitType": "event",
                "eventCategory": "skip",
                "eventAction": "click",
                "eventLabel": "看完動畫看報導(next)"
            });
            $(".fixed_pic").css({ "opacity": 0 });
            $.fn.fullpage.setAutoScrolling(false);
            $.fn.fullpage.setFitToSection(false);   
            $("html, body").css({
                 "overflow-x": "hidden",
                 "height": "initail"
            });           
            stageStateReset()            
        }
    });    
    console.log(toFire)
});