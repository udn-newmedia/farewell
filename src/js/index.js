$(document).ready(function(){function e(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function t(e){$("#movie-"+e).get(0).play(),null==te[e-1]&&(te[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime,a=t/$("#movie-"+e).get(0).duration*100;a>.6&&$('.video-play[data-target="'+e+'"]').css("opacity",0),Math.floor(t/5)>ae&&(ae=Math.floor(t/5)),$("#progress-bar-"+e).css("width",a+"%")},600))}function a(e){$("#movie-"+e).get(0).pause(),$('.video-play[data-target="'+e+'"]').css("opacity",1),te[e-1]&&(clearInterval(te[e-1]),te[e-1]=null)}function s(e){$("#movie-"+e).get(0).currentTime=0,$("#movie-"+e).get(0).play(),$(".progress-bar").css("width",0),clearInterval(te[e-1]),te[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime/$("#movie-"+e).get(0).duration*100;$("#progress-bar-"+e).css("width",t+"%")},600)}function r(e){1==$("#movie-"+e).get(0).muted?($("#movie-"+e).get(0).muted=!1,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-off").addClass("fa-volume-up"),$('.volume-text[data-target="'+e+'"]').text("點按關聲音")):($("#movie-"+e).get(0).muted=!0,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-up").addClass("fa-volume-off"),$('.volume-text[data-target="'+e+'"]').text("點按開聲音"))}function o(){$("#music-main")[0].muted=!1,$("#music-door")[0].muted=!1,$("#music-door")[0].volume=.6,$("#music-walk")[0].muted=!1,$("#music-walk")[0].volume=.6,$("#music-cooking")[0].muted=!1,$("#music-cooking")[0].volume=.6,$("#music-driving")[0].muted=!1,$("#music-driving")[0].volume=.3,$("#music-camera")[0].muted=!1,$("#music-camera")[0].volume=.3,$("#music-switch")[0].muted=!1,$("#music-switch")[0].volume=.6,$("#music-stroll")[0].muted=!1,$("#music-stroll")[0].volume=.3,$("#music-street")[0].muted=!1,$("#music-street")[0].volume=.6}function l(){$("#music-main")[0].muted=!0,$("#music-door")[0].muted=!0,$("#music-walk")[0].muted=!0,$("#music-cooking")[0].muted=!0,$("#music-driving")[0].muted=!0,$("#music-camera")[0].muted=!0,$("#music-switch")[0].muted=!0,$("#music-stroll")[0].muted=!0,$("#music-street")[0].muted=!0}function c(){clearInterval(T),clearInterval(q),clearInterval(B),clearInterval(E),clearInterval(P),clearInterval(L),clearInterval(j),clearInterval(D),clearInterval(X),clearInterval(F),clearInterval(M),clearInterval(O),clearInterval(z),clearInterval(V),clearInterval(H),clearInterval(K),clearInterval(N),clearInterval(G),$("#music-door")[0].pause(),$("#music-walk")[0].pause(),$("#music-cooking")[0].pause(),$("#music-driving")[0].pause(),$("#music-camera")[0].pause(),$("#music-switch")[0].pause(),$("#music-stroll")[0].pause(),$("#music-street")[0].pause()}function i(){Ze==et-1?clearInterval(T):23==Ze?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Ze++):13==Ze?($(".stage-2-words").css({opacity:1}),Ze++):8==Ze?($("#music-door")[0].play(),Ze++):Ze++,at=Ze*Ye,de.clearRect(st,rt,Ue+10,Ye+10),de.imageSmoothingEnabled=!1,de.globalAlpha=1,de.drawImage(ot,tt,at,Ue,Ye,st,rt,Ue,Ye),console.log("start Working")}function n(){mt=it*ct,de.clearRect(dt,pt,lt,ct),de.drawImage($t,gt,mt,lt,ct,dt,pt,lt,ct),it==nt-1?(clearInterval(S),de.clearRect(0,0,me.width,me.height),it=0,$("#section-4").css({transition:"1s"})):13==it?($("#stage-2").css({transform:"translateX(-100px)",opacity:0}),it++):it++,console.log("end Working")}function g(){console.log("walkTo Working"),vt=++vt%ut,ft=vt*wt,$e.clearRect(At,It,ht,wt),$e.drawImage(bt,yt,ft,ht,wt,At,It,ht,wt),le>=1024?At<550?($e.clearRect(At,It,ht,wt),clearInterval(q),B=setInterval(m,83)):(At<625&&($e.globalAlpha-=.05),At<800&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),At-=5):le>=768&&le<1024?At<350?($e.clearRect(At,It,ht,wt),clearInterval(q),B=setInterval(m,83)):(At<400&&($e.globalAlpha-=.05),At<500&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),At-=4):At<150?($e.clearRect(At,It,ht,wt),clearInterval(q),B=setInterval(m,83)):(At>150&&At<200&&($e.globalAlpha-=.05),At<300&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),At-=4)}function m(){console.log("walkBack Working"),xt=++xt%_t,Tt=xt*Rt,$e.clearRect(St,qt,kt,Rt),$e.drawImage(Bt,Ct,Tt,kt,Rt,St,qt,kt,Rt),le>=1024?St>650?($e.clearRect(St,qt,kt,Rt),clearInterval(B),$("#music-walk")[0].pause()):(St<590?$e.globalAlpha+=.3:St>590&&St<600?$e.globalAlpha=1:St>620&&($e.globalAlpha-=.05),St+=3):le>=768&&le<1024?St>420?($e.clearRect(St,qt,kt,Rt),clearInterval(B),$("#music-walk")[0].pause()):(St>350&&St<360?$e.globalAlpha+=.3:St>360&&St<280?$e.globalAlpha=1:St>380&&St<420&&($e.globalAlpha-=.05),St+=2.5):St>270?($e.clearRect(St,qt,kt,Rt),clearInterval(B),$("#music-walk")[0].pause()):(St>150&&St<190?$e.globalAlpha+=.3:St>190&&St<220?$e.globalAlpha=1:St>220&&St<270&&($e.globalAlpha-=.05),St+=2)}function d(){console.log("kitchen Working"),jt=++jt%Dt,Ft=jt*Lt,ue.clearRect(Mt,Ot,Pt+10,Lt+10),ue.drawImage(Vt,Xt,Ft,Pt,Lt,Mt,Ot,Pt,Lt),15==++zt&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function p(){console.log("car Working"),Nt=++Nt%Gt,Qt=Nt*Kt,fe.clearRect(Ut,Yt,Ht+10,Kt+10),fe.drawImage(ea,Jt,Qt,Ht,Kt,Ut,Yt,Ht,Kt),32==++Zt?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):22==Zt&&$(".stage-5-words h2").css({opacity:"1"})}function h(){console.log("food Working"),sa=++sa%ra,la=sa*aa,Ie.clearRect(ca,ia,ta+10,aa+10),Ie.drawImage(ma,oa,la,ta,aa,ca,ia,ta,aa),29==na?clearInterval(V):22==na?(na++,$("#stage-6").css({opacity:"0",transform:"translate(0, -100%)"}),na++):na++}function w(){console.log("foodSafe Working"),$a=++$a%ha,va=$a*pa,ke.clearRect(ua,ya,da+10,pa+10),ke.drawImage(Aa,wa,va,da,pa,ua,ya,da,pa),27==fa?(clearInterval(H),$("#stage-6_3, #stage-6_3_bg").css({opacity:"1",transform:"translate(0, 0)"}),G=setInterval(y,125)):24==fa?($("#stage-6_1").css({opacity:"0",transform:"translate(0, -100%)"}),fa++):fa++}function v(){console.log("speech Working"),ka=++ka%Ra,_a=ka*ba,xe.clearRect(Ca,Ta,Ia+10,ba+10),xe.drawImage(qa,xa,_a,Ia,ba,Ca,Ta,Ia,ba),30==Sa?(clearInterval(K),$("#stage-6_4").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$(".stage-6-words p").eq(1).css({opacity:"1",transform:"translate(0, 0px)"})},888),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1888),N=setInterval(u,83)):27==Sa?($(".stage-6-words p").eq(0).css({opacity:"0",transform:"translate(0, -50px)"}),$("#music-camera")[0].pause(),Sa++):26==Sa?($("#stage-6_2").css({opacity:"0",transform:"translate(0, -100%)"}),Sa++):Sa++}function u(){console.log("doctor Working"),Ea=++Ea%Pa,ja=Ea*Wa,Ce.clearRect(Da,Xa,Ba,Wa),Ce.drawImage(Fa,La,ja,Ba,Wa,Da,Xa,Ba,Wa)}function y(){console.log("cpu Working"),Va=++Va%Ha,Na=Va*za,Be.clearRect(Ga,Ja,Oa,za),Be.drawImage(Qa,Ka,Na,Oa,za,Ga,Ja,Oa,za)}function f(){console.log("room Working"),es=++es%ts,ss=es*Za,Ee.clearRect(rs,os,Ya+10,Za+10),Ee.drawImage(ls,as,ss,Ya,Za,rs,os,Ya,Za),Ee.font="14px Arial",es>4&&(le>=1024?Ee.fillText("爸爸進房間囉",250,282):Ee.fillText("爸爸進房間囉",175,282),23==es?$("#music-switch")[0].play(0):es==ts-1&&(clearInterval(E),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)))}function A(){console.log("bed Working"),ns=++ns%gs,ds=ns*is,Le.clearRect(ps,$s,cs,is),Le.drawImage(hs,ms,ds,cs,is,ps,$s,cs,is),ns==gs-1?clearInterval(P):18==ns?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):4==ns&&$(".stage-8-words h2").css({transform:"translate(0, 0)",opacity:"1"})}function I(){console.log("smoke Working"),us=++us%ys,As=us*vs,De.clearRect(Is,bs,ws+10,vs+10),De.drawImage(Rs,fs,As,ws,vs,Is,bs,ws,vs),14==++ks&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function b(){console.log("stroll Working"),qs=++qs%Bs,Es=qs*Ss,Oe.clearRect(Ps,Ls,Ts+10,Ss+10),Oe.drawImage(js,Ws,Es,Ts,Ss,Ps,Ls,Ts,Ss),32==++_s&&Cs<2?(M=setInterval(k,125),_s=0,$(".thanks").eq(Cs).css({opacity:"1",transform:"translateX(0)"})):28==_s?$(".stage-10-words p").css({opacity:0}):6==_s?$(".stage-10-words p").eq(0).css({opacity:1,transform:"translate(0, 0)"}):12==_s?$(".stage-10-words p").eq(1).css({opacity:1,transform:"translate(0, 0)"}):16==_s?1==Cs&&(M=setInterval(k,125),_s=0,$(".thanks").eq(Cs).css({opacity:"1",transform:"translateX(0)"})):18==_s?$(".stage-10-words p").eq(2).css({opacity:1,transform:"translate(0, 0)"}):2==_s&&$("#music-stroll")[0].play()}function k(){console.log("wave Working"),$("#music-stroll")[0].pause(),zs=++Fs*Xs,Oe.clearRect(Vs,Hs,Ds+10,Xs+10),Oe.drawImage(Ks,Os,zs,Ds,Xs,Vs,Hs,Ds,Xs),clearInterval(F),Fs==Ms-1&&0==Cs?(clearInterval(M),Fs=0,$(".stage-10-words").css({opacity:0,tranistion:"translate(0, -50px)"}),F=setInterval(b,125),$(".thanks").eq(Cs).css({opacity:"0",transform:"translateX(-10%)"}),$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Cs++):23==Fs&&1==Cs?(clearInterval(M),$(".downArrow").css({display:"block",color:"black"})):Fs==Ms-1&&1==Cs&&clearInterval(M)}function R(){console.log("man Working"),Js=++Js%Qs,Ys=Js*Gs,Ve.clearRect(Zs,er,Ns+10,Gs+10),Ve.drawImage(tr,Us,Ys,Ns,Gs,Zs,er,Ns,Gs)}function x(){console.log("woman Working"),rr=++rr%or,cr=rr*sr,Ke.clearRect(ir,nr,ar+10,sr+10),Ke.drawImage(gr,lr,cr,ar,sr,ir,nr,ar,sr)}function _(){console.log("wash Working"),$r=++$r%hr,vr=$r*pr,Qe.clearRect(ur,yr,dr+10,pr+10),Qe.drawImage(fr,wr,vr,dr,pr,ur,yr,dr,pr),$r==hr-1?clearInterval(X):20==$r&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function C(){de.clearRect(0,0,me.width,me.height),Ze=0,it=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$e.clearRect(0,0,pe.width,pe.height),$e.globalAlpha=1,le>=1024?(At=880,St=560):(At=390,St=180),$(".stage-3-words").removeAttr("style"),ue.clearRect(0,0,ve.width,ve.height),zt=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),Zt=0,fe.clearRect(0,0,ye.width,ye.height),clearInterval(W),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Ce.clearRect(0,0,_e.width,_e.height),Be.clearRect(0,0,qe.width,qe.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),na=0,fa=0,Sa=0,Ee.clearRect(0,0,We.width,We.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),ns=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),Le.clearRect(0,0,Pe.width,Pe.height),ks=0,De.clearRect(0,0,je.width,je.height),Fe.clearRect(0,0,Xe.width+100,Xe.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),_s=0,Cs=0,Fs=0,Oe.clearRect(0,0,Me.width,Me.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),Ve.clearRect(0,0,ze.width,ze.height),Ke.clearRect(0,0,He.width,He.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),Qe.clearRect(0,0,Je.width,Je.height),$r=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),console.log("stageStateClear")}var T,S,q,B,W,E,P,L,j,D,X,F,M,O,z,V,H,K,N,G,J,Q,U=!1,Y=!0,Z=10,ee=1==e()?"Mob":"PC",te=[],ae=[null],se=window.navigator.userAgent,re=!!se.match(/iPad/i)||!!se.match(/iPhone/i),oe=!!se.match(/WebKit/i),le=(re&&oe&&se.match(/CriOS/i),$(window).width()),ce=$(window).height();le>=1024?($("#stage-1").attr("src","src/image/animate-sprite/stage-1PC.mp4"),$("#stage-1").attr("poster","src/image/animate-sprite/stage-1bg-pc.png"),$("#movie-1").attr("controls","true")):($("#stage-1").attr("src","src/image/animate-sprite/stage-1Mob.mp4"),$("#stage-1").attr("poster","src/image/animate-sprite/stage-1bg-mob.png")),ver=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}(),function(){if(1==re){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1}return!1}()&&($(".stage-6-words p").eq(0).css({top:"15%",left:"-15%"}),$(".cover_Title").css({"padding-top":"15%"}),le<768&&($(".section").css({"margin-top":"-6%"}),$(".fixed_pic").css({"margin-top":"-98px"})),11==ver[0]?($(".downArrow").css({bottom:"158px"}),$(".readPaper").css({bottom:"158px"}),$(".whiteP").css({"line-height":"1.5"}),$(".intro").css({"margin-top":"-25%"})):10==ver[0]&&($(".whiteP").css({"line-height":"1.2"}),$(".intro").css({"margin-top":"-15%"}),ver[1]<=2?($(".downArrow").css({bottom:"16px"}),$(".readPaper").css({bottom:"16px"})):($(".downArrow").css({bottom:"143px"}),$(".readPaper").css({bottom:"143px"}))));var ie=$("body").height()-ce,ne=le>=768?"6px":"4px",ge=$("title").text();$("a").click(function(){ga("send",{hitType:"event",eventCategory:"超連結點擊",eventAction:"click",eventLabel:"["+ee+"] ["+ge+"] ["+$(this).attr("href")+"]"})}),$("#scroll-down").click(function(){ga("send",{hitType:"event",eventCategory:"ham bar",eventAction:"click",eventLabel:"["+ee+"] ["+ge+"] [scroll down]"})}),$(".line-share").click(function(t){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+ee+"] ["+ge+"] [line share]"}),e()?window.location.href="//line.me/R/msg/text/?"+ge+"%0D%0A%0D%0A"+$('meta[property="og:description"]').attr("content")+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}),$(".voice-state img").on("click",function(){var e=$(this).attr("src");$(this).removeClass("blink"),"src/image/off.png"==e?($(this).attr("src","src/image/on.png"),$("#music-main")[0].play(),o(),Q>$(".content").eq(0).offset().top?ga("send",{hitType:"event",eventCategory:"閱讀時開聲音",eventAction:"click",eventLabel:"閱讀時開聲音"}):ga("send",{hitType:"event",eventCategory:"開聲音",eventAction:"click",eventLabel:"開聲音"})):($(this).attr("src","src/image/off.png"),l(),ga("send",{hitType:"event",eventCategory:"關聲音",eventAction:"click",eventLabel:"關聲音"}))}),$(window).on("scroll",function(){for(var e=(Q=$(window).scrollTop())/ie*100;Z<=Math.floor(e);Z+=10)ga("send",{hitType:"event",eventCategory:"read",eventAction:"scroll",eventLabel:"["+ee+"] ["+ge+"] [page read "+Z+"%]"});Q>ce?($("#indicator").css("opacity",1),$("#head").css("top",ne)):($("#indicator").css("opacity",0),$("#head").css("top","0")),$("#indicator-bar").css("width",Q/ie*100+"%"),Q>$(".content").eq(0).offset().top-.07*ce&&Q<$(".content").eq(0).offset().top&&($("#head").removeClass("Bgc-TP"),$("#indicator").addClass("mainColor")),Q>$(".section").eq(0).offset().top&&($(".downArrow").css({display:"none"}),$(".skip").css({display:"none"})),Q>$("#movie-1").offset().top-.5*ce&&Q<$("#movie-1").offset().top+.5*ce&&t(1),(Q>$("#movie-1").offset().top+.2*ce||Q<$("#movie-1").offset().top-.8*ce)&&a(1)}),$('.volume[data-target="1"], .volume-text[data-target="1"]').click(function(){r(1)}),$('.replay[data-target="1"]').click(function(){s(1)}),$("#movie-1").click(function(){$("#movie-1")[0].paused?t(1):a(1)});var me=document.getElementById("stage-2"),de=me.getContext("2d");me.width=375,me.height=667;var pe=document.getElementById("stage-3"),$e=pe.getContext("2d"),he=document.getElementById("stage-3_1"),we=he.getContext("2d");le>=1024&&(pe.width=880,pe.height=495,he.width=880,he.height=495),le>=768&&le<1023&&(pe.width=578,pe.height=820,he.width=578,he.height=820),le<768&&(pe.width=375,pe.height=667,he.width=375,he.height=667);var ve=document.getElementById("stage-4"),ue=ve.getContext("2d");ve.width=375,ve.height=667;var ye=document.getElementById("stage-5"),fe=ye.getContext("2d");ye.width=375,ye.height=667;var Ae=document.getElementById("stage-6"),Ie=Ae.getContext("2d");Ae.width=375,Ae.height=667;var be=document.getElementById("stage-6_1"),ke=be.getContext("2d");be.width=375,be.height=667;var Re=document.getElementById("stage-6_2"),xe=Re.getContext("2d");Re.width=375,Re.height=667;var _e=document.getElementById("stage-6_3"),Ce=_e.getContext("2d");_e.width=375,_e.height=667;var Te=document.getElementById("stage-6_3_bg"),Se=Te.getContext("2d");Te.width=375,Te.height=667;var qe=document.getElementById("stage-6_4"),Be=qe.getContext("2d");qe.width=375,qe.height=667;var We=document.getElementById("stage-7"),Ee=We.getContext("2d");le>=1024?(We.width=520,We.height=667):(We.width=375,We.height=667);var Pe=document.getElementById("stage-8"),Le=Pe.getContext("2d");Pe.width=375,Pe.height=667;var je=document.getElementById("stage-9"),De=je.getContext("2d");je.width=375,je.height=667;var Xe=document.getElementById("stage-9_bg"),Fe=Xe.getContext("2d");Xe.width=375,Xe.height=667;var Me=document.getElementById("stage-10"),Oe=Me.getContext("2d");Me.width=375,Me.height=667;var ze=document.getElementById("stage-11"),Ve=ze.getContext("2d");ze.width=375,ze.height=667;var He=document.getElementById("stage-11_1"),Ke=He.getContext("2d");He.width=375,He.height=667;var Ne=document.getElementById("stage-11_2"),Ge=Ne.getContext("2d");Ne.width=375,Ne.height=667;var Je=document.getElementById("stage-12"),Qe=Je.getContext("2d");Je.width=375,Je.height=667;var Ue=375,Ye=667,Ze=0,et=25,tt=0,at=0,st=0,rt=0,ot=new Image,lt=375,ct=667,it=0,nt=22,gt=0,mt=0,dt=0,pt=0,$t=new Image,ht=75,wt=112,vt=0,ut=36,yt=0,ft=0,At=0,It=0;le>=1024?(At=880,It=425):le>=768&&le<1024?(At=550,It=660):(At=390,It=575);var bt=new Image;$e.transform(.7,0,0,.7,0,0);var kt=39,Rt=55,xt=0,_t=36,Ct=0,Tt=0,St=0,qt=0;le>=1024?(St=560,qt=417):le>=768&&le<1024?(St=350,qt=670):(St=180,qt=565);var Bt=new Image,Wt=new Image,Et=new Image,Pt=375,Lt=667,jt=0,Dt=24,Xt=0,Ft=0,Mt=80,Ot=200,zt=0,Vt=new Image;ue.transform(.8,0,0,.8,0,0);var Ht=375,Kt=667,Nt=0,Gt=24,Jt=0,Qt=0,Ut=0,Yt=0,Zt=0,ea=new Image,ta=213,aa=291,sa=0,ra=24,oa=0,la=0,ca=130,ia=50,na=0,ma=new Image,da=140,pa=329,$a=0,ha=24,wa=0,va=0,ua=50,ya=240,fa=0,Aa=new Image,Ia=269,ba=398,ka=0,Ra=24,xa=0,_a=0,Ca=90,Ta=170,Sa=0,qa=new Image,Ba=128,Wa=221,Ea=0,Pa=36,La=0,ja=0,Da=140,Xa=310,Fa=new Image,Ma=new Image,Oa=124,za=177,Va=0,Ha=24,Ka=0,Na=0,Ga=70,Ja=290,Qa=new Image,Ua=new Image,Ya=0;Ya=le>=1024?520:375;var Za=667,es=0,ts=32,as=0,ss=0,rs=0,os=20,ls=new Image,cs=375,is=667,ns=0,gs=24,ms=0,ds=0,ps=0,$s=0,hs=new Image,ws=166,vs=148,us=0,ys=25,fs=0,As=0,Is=120,bs=200,ks=0,Rs=new Image,xs=new Image;Fe.transform(.85,0,0,.85,0,0);var _s=0,Cs=0,Ts=168,Ss=290,qs=0,Bs=24,Ws=0,Es=0,Ps=0,Ls=250,js=new Image,Ds=145,Xs=287,Fs=0,Ms=32,Os=0,zs=0,Vs=0,Hs=250,Ks=new Image,Ns=375,Gs=667,Js=0,Qs=24,Us=0,Ys=0,Zs=0,er=0,tr=new Image,ar=375,sr=667,rr=0,or=24,lr=0,cr=0,ir=0,nr=0,gr=new Image,mr=new Image,dr=375,pr=667,$r=0,hr=36,wr=0,vr=0,ur=0,yr=0,fr=new Image;$(".fullpage").fullpage({recordHistory:!1,scrollingSpeed:777,lazyLoading:!0,afterLoad:function(e,t){J=t,$.fn.fullpage.setAllowScrolling(!1),$("#section-"+t).css({opacity:"1","z-index":50}),$("#head").addClass("Bgc-TP"),bar_witdh=t/($(".fullpage").children().length-1)*100,$("#indicator-bar").css("width",bar_witdh+"%"),$("#indicator").removeClass("mainColor"),ga("send",{hitType:"event",eventCategory:"插畫(15張)",eventAction:"scroll",eventLabel:"看到第"+t+"張"}),1==t&&($.fn.fullpage.setAutoScrolling(!0),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setFitToSection(!0),$.fn.fullpage.setScrollingSpeed(777),$(window).scrollTop(0),$("#stage-1")[0].play(),$(".fixed_pic").css("opacity","1"),$(".fullpage").css({height:"100%"}),$(".skip").css("display","block"),ot.src="src/image/animate-sprite/stage-2-start.jpg",$t.src="src/image/animate-sprite/stage-2-end.jpg",U=!1,$(".downArrow").css({display:"block",color:"white"})),2==t&&(bt.src="src/image/animate-sprite/stage-3-walk1.png",Bt.src="src/image/animate-sprite/stage-3-walkback.png",Wt.src="src/image/animate-sprite/stage-3-bg.png",Et.src="src/image/animate-sprite/stage-3pod.png",$(".page-black").eq(0).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),"src/image/off.png"==$(".voice-state img").attr("src")&&$(".voice-state img").addClass("blink"),$.fn.fullpage.setAllowScrolling(!0)),3==t&&(Vt.src="src/image/animate-sprite/stage-4-kitchen.jpg",ma.src="src/image/animate-sprite/stage-6-foodInfo.png",Aa.src="src/image/animate-sprite/stage-6-foodSafe.png",qa.src="src/image/animate-sprite/stage-6-speech.png",Ma.src="src/image/animate-sprite/stage-6-lab-bg.png",Ua.src="src/image/animate-sprite/stage-6-lab-bg2.png",$(".voice-state img").removeClass("blink"),$(".page-black").eq(0).removeAttr("style"),$(".page-black").eq(1).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)),4==t&&(ea.src="src/image/animate-sprite/stage-5-car.jpg",Fa.src="src/image/animate-sprite/stage-6-doctor.png",Qa.src="src/image/animate-sprite/stage-6-cpu.png",xs.src="src/image/animate-sprite/stage-9-bg.png",mr.src="src/image/animate-sprite/stage-11-bg.png",$(".page-black").eq(1).removeAttr("style"),$("#stage-2").css({transform:"translateX(0)",opacity:"1"}),T=setInterval(i,100)),5==t&&(ls.src=le>=1024?"src/image/animate-sprite/stage-7-roomW.jpg":"src/image/animate-sprite/stage-7-room.jpg",de.clearRect(0,0,me.width,me.height),Ze=0,it=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$(".stage-3-words").css({transform:"translate(0, 15%)",opacity:"1"}),$("#music-walk")[0].play(),le>=1024&&we.drawImage(Wt,0,0,810,369,35,126,810,369),le>=768&&le<1023&&we.drawImage(Et,0,0,578,820,0,0,578,820),le<768&&we.drawImage(Wt,0,0,810,369,-230,230,810,369),q=setInterval(g,83),$.fn.fullpage.setScrollingSpeed(1777)),6==t&&(hs.src="src/image/animate-sprite/stage-8-bed.jpg",$e.clearRect(0,0,pe.width+100,pe.height+100),$e.globalAlpha=1,le>=1024?(At=880,It=425):le>=768&&le<1024?(At=550,It=660):(At=390,It=575),le>=1024?(St=560,qt=417):le>=768&&le<1024?(St=350,qt=670):(St=180,qt=565),$(".stage-3-words").removeAttr("style"),$(".stage-4-words p").css({transform:"translate(0, 0)",opacity:"1"}),$("#stage-4").css({transform:"translate(0, 0)",opacity:"1"}),$("#music-cooking")[0].play(),z=setInterval(d,125)),7==t&&(Rs.src="src/image/animate-sprite/stage-9-smoke.png",js.src="src/image/animate-sprite/stage-10-stroll.png",Ks.src="src/image/animate-sprite/stage-10-wave.png",ue.clearRect(0,0,ve.width,ve.height),zt=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),$("#stage-5").css({transform:"translate(0, 0)",opacity:"1"}),$(".stage-5-words p").css({opacity:"1"}),$("#music-driving")[0].play(),W=setInterval(p,125)),8==t&&(tr.src="src/image/animate-sprite/stage-11-man.jpg",gr.src="src/image/animate-sprite/stage-11-woman.jpg",fr.src="src/image/animate-sprite/stage-12-wash.jpg",Zt=0,fe.clearRect(0,0,ye.width,ye.height),clearInterval(W),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),Ie.drawImage(ma,oa,la,ta,aa,ca,ia,ta,aa),ke.drawImage(Aa,wa,va,da,pa,ua,ya,da,pa),xe.drawImage(qa,xa,_a,Ia,ba,Ca,Ta,Ia,ba),Se.drawImage(Ma,0,0,360,395,75,150,360,395),Be.drawImage(Ua,0,0,124,208,0,459,124,208),$("#stage-6").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-6_1").css({opacity:"1",transform:"translate(0, 0)"})},222),setTimeout(function(){$("#stage-6_2").css({opacity:"1",transform:"translate(0, 0)"})},555),setTimeout(function(){$("#music-camera")[0].play(),V=setInterval(h,83),H=setInterval(w,83),K=setInterval(v,83)},1433),setTimeout(function(){$(".stage-6-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"})},1666)),9==t&&(Ie.clearRect(0,0,Ae.width,Ae.height),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Ce.clearRect(0,0,_e.width,_e.height),Be.clearRect(0,0,qe.width,qe.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),na=0,fa=0,Sa=0,E=setInterval(f,125),$("#stage-7").css({opacity:"1"})),10==t&&(Ee.clearRect(0,0,We.width,We.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),$(".stage-8-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-8").css({opacity:"1",transform:"translate(0, 0)"}),P=setInterval(A,125)},777)),11==t&&(ns=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),Le.clearRect(0,0,Pe.width,Pe.height),$(".stage-9-words p").css({opacity:"1",transform:"translate(0, 0)"}),Fe.drawImage(xs,0,0,413,416,12,250,413,416),L=setInterval(I,125),setTimeout(function(){$("#stage-9, #stage-9_bg").css({opacity:"1",transform:"translate(0, 0)"})},1222)),12==t&&(ks=0,De.clearRect(0,0,je.width,je.height),Fe.clearRect(0,0,Xe.width+100,Xe.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),$("#music-street")[0].play(),F=setInterval(b,125)),13==t&&(_s=0,Cs=0,Fs=0,Oe.clearRect(0,0,Me.width,Me.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),$(".stage-11-words p").css({opacity:"1"}),Ge.drawImage(mr,0,0,302,322,36,180,302,322),j=setInterval(R,125),setTimeout(function(){$("#stage-11").css({opacity:"0"}),clearInterval(j),D=setInterval(x,125)},2e3),setTimeout(function(){$("#stage-11_1").css({opacity:"0"}),clearInterval(D)},4500),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},4666)),14==t&&(Ve.clearRect(0,0,ze.width,ze.height),Ke.clearRect(0,0,He.width,He.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),$(".stage-12-words p").eq(0).css({opacity:1}),setTimeout(function(){$(".stage-12-words p").eq(1).css({opacity:1}),$("#stage-12").css({opacity:1}),X=setInterval(_,125)},1e3),setTimeout(function(){$(".stage-12-words p").eq(2).css({opacity:1})},2e3)),15==t&&(Qe.clearRect(0,0,Je.width,Je.height),$r=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),0==U&&($(".stage-13").eq(0).css({opacity:"1"}),$(".stage-13-words").css({transform:"translate(0, -20%)",opacity:1}),setTimeout(function(){$(".stage-13").eq(1).css({opacity:"1"}),$(".stage-13-words h2").css({opacity:"1"})},1666),setTimeout(function(){$(".stage-13").eq(2).css({opacity:"1"}),$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".readPaper").css({display:"block"})},3333),setTimeout(function(){$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".readPaper").css({opacity:1})},3500)))},onLeave:function(e,t,a){console.log("onleave: "+e,"direction: "+a),c(),$(".downArrow").css({display:"none"}),$(".readPaper").css({display:"none",opacity:0}),$("#section-"+e).css({opacity:0,"z-index":0}),"up"==a&&ga("send",{hitType:"event",eventCategory:"動畫回上一頁",eventAction:"scroll",eventLabel:"第幾"+e+"張,回頭看"}),1!=$("#indicator").css("opacity")&&($("#indicator").css({opacity:1}),$("#indicator-bar").css("width","0")),1==e&&$(".fixed_pic").css("opacity","1"),2==e&&$(".voice-state img").removeClass("blink"),4==e&&("up"==a?(Ze=0,it=0,de.clearRect(0,0,me.width,me.height),$(".stage-2-words").removeAttr("style"),$("#stage-2").removeAttr("style")):($("#section-4").css({transition:"3s"}),S=setInterval(n,100),$.fn.fullpage.setScrollingSpeed(2333))),5==e&&($e.clearRect(0,0,pe.width+100,pe.height+100),$e.globalAlpha=1,le>=1024?(At=880,It=425):le>=768&&le<1024?(At=550,It=660):(At=390,It=575),le>=1024?(St=560,qt=417):le>=768&&le<1024?(St=350,qt=670):(St=180,qt=565)),6==e&&(zt=0,ue.clearRect(Mt,Ot,ve.width,ve.height),$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style")),7==e&&("up"==a?(Zt=0,clearInterval(W),fe.clearRect(0,0,ye.width,ye.height),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style")):$("#stage-5").css({transform:"translate(75%, 20%)",opacity:"0"})),8==e&&("up"==a?(Ie.clearRect(0,0,Ae.width,Ae.height),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Ce.clearRect(0,0,_e.width,_e.height),Be.clearRect(0,0,qe.width,qe.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),na=0,fa=0,Sa=0):($("#section-8").css({transition:"3s"}),$("#stage-6_3, #stage-6_3_bg").css({opacity:"0",transform:"translate(0, -130px)"}),$(".stage-6-words p").eq(1).css({opacity:"0",transform:"translate(0, -70px)"}),setTimeout(function(){$("#stage-6_4").css({opacity:"0",transform:"translate(0, -140px)"})},111))),9==e&&(Ee.clearRect(0,0,We.width,We.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style")),10==e&&(ns=0,Le.clearRect(0,0,Pe.width,Pe.height),$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style")),11==e&&(ks=0,De.clearRect(0,0,je.width,je.height),Fe.clearRect(0,0,Xe.width+300,Xe.height+300),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style")),12==e&&("up"==a?(_s=0,Cs=0,Fs=0,Oe.clearRect(0,0,Me.width,Me.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style")):(1==Cs&&Fs>22&&(M=setInterval(k,125)),$(".thanks").eq(Cs).css({opacity:"0",transform:"translateX(-10%)"}))),13==e&&(Ve.clearRect(0,0,ze.width,ze.height),Ke.clearRect(0,0,He.width,He.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style")),14==e&&($r=0,Qe.clearRect(0,0,Je.width,Je.height),$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style")),15==e&&($(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")),3==t&&$(".fixed_pic").css("opacity","1"),4==t&&$(".fixed_pic").css("opacity","0")}}),$(".downArrow").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown(),ga("send",{hitType:"event",eventCategory:"下一頁",eventAction:"click",eventLabel:"第幾"+J+"點了下一頁箭頭"}),15==J&&$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888)}),$(".skip").click(function(e){U=!0,1==Y&&(Y=!1,console.log(Y),setTimeout(function(){Y=!0},1222),$(".fullpage").css({height:"0"}),$(this).css({display:"none"}),$("html, body").animate({scrollTop:$(window).height()},1e3),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"直接看報導(skip)"}),$(".fixed_pic").css({opacity:0}),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").css({"overflow-x":"hidden",height:"initail"}),C())}),$(".readPaper").click(function(e){U=!0,1==Y&&(Y=!1,setTimeout(function(){Y=!0},1222),$(this).css({display:"none",opacity:0}),$(".fullpage").css({height:"0"}),$("html, body").animate({scrollTop:$(window).height()},1e3),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"看完動畫看報導(next)"}),$(".fixed_pic").css({opacity:0}),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").css({"overflow-x":"hidden",height:"initail"}),C())}),console.log(Y)});