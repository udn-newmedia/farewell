$(document).ready(function(){function e(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function t(e){$("#movie-"+e).get(0).play(),null==se[e-1]&&(se[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime,a=t/$("#movie-"+e).get(0).duration*100;a>.6&&$('.video-play[data-target="'+e+'"]').css("opacity",0),Math.floor(t/5)>re&&(re=Math.floor(t/5)),$("#progress-bar-"+e).css("width",a+"%"),ga("send",{hitType:"event",eventCategory:"看影片幾趴",eventAction:"click",eventLabel:"看到幾"+a+"%"})},600))}function a(e){$("#movie-"+e).get(0).pause(),$('.video-play[data-target="'+e+'"]').css("opacity",1),se[e-1]&&(clearInterval(se[e-1]),se[e-1]=null)}function s(e){$("#movie-"+e).get(0).currentTime=0,$("#movie-"+e).get(0).play(),$(".progress-bar").css("width",0),clearInterval(se[e-1]),se[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime/$("#movie-"+e).get(0).duration*100;$("#progress-bar-"+e).css("width",t+"%")},600)}function r(e){1==$("#movie-"+e).get(0).muted?($("#movie-"+e).get(0).muted=!1,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-off").addClass("fa-volume-up"),$('.volume-text[data-target="'+e+'"]').text("點按關聲音")):($("#movie-"+e).get(0).muted=!0,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-up").addClass("fa-volume-off"),$('.volume-text[data-target="'+e+'"]').text("點按開聲音"))}function o(){$("#music-main")[0].muted=!1,$("#music-door")[0].muted=!1,$("#music-door")[0].volume=.6,$("#music-walk")[0].muted=!1,$("#music-walk")[0].volume=.6,$("#music-cooking")[0].muted=!1,$("#music-cooking")[0].volume=.6,$("#music-driving")[0].muted=!1,$("#music-driving")[0].volume=.3,$("#music-camera")[0].muted=!1,$("#music-camera")[0].volume=.3,$("#music-switch")[0].muted=!1,$("#music-switch")[0].volume=.6,$("#music-stroll")[0].muted=!1,$("#music-stroll")[0].volume=.3,$("#music-street")[0].muted=!1,$("#music-street")[0].volume=.6}function l(){$("#music-main")[0].muted=!0,$("#music-door")[0].muted=!0,$("#music-walk")[0].muted=!0,$("#music-cooking")[0].muted=!0,$("#music-driving")[0].muted=!0,$("#music-camera")[0].muted=!0,$("#music-switch")[0].muted=!0,$("#music-stroll")[0].muted=!0,$("#music-street")[0].muted=!0}function c(){clearInterval(q),clearInterval(B),clearInterval(E),clearInterval(L),clearInterval(P),clearInterval(O),clearInterval(j),clearInterval(D),clearInterval(M),clearInterval(X),clearInterval(z),clearInterval(F),clearInterval(V),clearInterval(H),clearInterval(K),clearInterval(N),clearInterval(G),clearInterval(J),$("#music-door")[0].pause(),$("#music-walk")[0].pause(),$("#music-cooking")[0].pause(),$("#music-driving")[0].pause(),$("#music-camera")[0].pause(),$("#music-switch")[0].pause(),$("#music-stroll")[0].pause(),$("#music-street")[0].pause()}function n(){tt==at-1?clearInterval(q):23==tt?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),tt++):13==tt?($(".stage-2-words").css({opacity:1}),tt++):8==tt?($("#music-door")[0].play(),tt++):tt++,rt=tt*et,he.clearRect(ot,lt,Ze+10,et+10),he.imageSmoothingEnabled=!1,he.globalAlpha=1,he.drawImage(ct,st,rt,Ze,et,ot,lt,Ze,et),console.log("start Working")}function i(){pt=gt*it,he.clearRect(ht,$t,nt,it),he.drawImage(vt,dt,pt,nt,it,ht,$t,nt,it),gt==mt-1?(clearInterval(S),he.clearRect(0,0,pe.width,pe.height),gt=0,$("#section-4").css({transition:"1s"})):13==gt?($("#stage-2").css({transform:"translateX(-100px)",opacity:0}),gt++):gt++,console.log("end Working")}function g(){console.log("walkTo Working"),yt=++yt%ft,It=yt*ut,ve.clearRect(bt,kt,wt,ut),ve.drawImage(Rt,At,It,wt,ut,bt,kt,wt,ut),ne>=1024?bt<550?(ve.clearRect(bt,kt,wt,ut),clearInterval(B),E=setInterval(m,83)):(bt<625&&(ve.globalAlpha-=.05),bt<800&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),bt-=5):ne>=768&&ne<1024?bt<350?(ve.clearRect(bt,kt,wt,ut),clearInterval(B),E=setInterval(m,83)):(bt<400&&(ve.globalAlpha-=.05),bt<500&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),bt-=4):bt<150?(ve.clearRect(bt,kt,wt,ut),clearInterval(B),E=setInterval(m,83)):(bt>150&&bt<200&&(ve.globalAlpha-=.05),bt<300&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),bt-=4)}function m(){console.log("walkBack Working"),Ct=++Ct%Tt,St=Ct*_t,ve.clearRect(Bt,Et,xt,_t),ve.drawImage(Wt,qt,St,xt,_t,Bt,Et,xt,_t),ne>=1024?Bt>650?(ve.clearRect(Bt,Et,xt,_t),clearInterval(E),$("#music-walk")[0].pause()):(Bt<590?ve.globalAlpha+=.3:Bt>590&&Bt<600?ve.globalAlpha=1:Bt>620&&(ve.globalAlpha-=.05),Bt+=3):ne>=768&&ne<1024?Bt>420?(ve.clearRect(Bt,Et,xt,_t),clearInterval(E),$("#music-walk")[0].pause()):(Bt>350&&Bt<360?ve.globalAlpha+=.3:Bt>360&&Bt<280?ve.globalAlpha=1:Bt>380&&Bt<420&&(ve.globalAlpha-=.05),Bt+=2.5):Bt>270?(ve.clearRect(Bt,Et,xt,_t),clearInterval(E),$("#music-walk")[0].pause()):(Bt>150&&Bt<190?ve.globalAlpha+=.3:Bt>190&&Bt<220?ve.globalAlpha=1:Bt>220&&Bt<270&&(ve.globalAlpha-=.05),Bt+=2)}function d(){console.log("kitchen Working"),Ht=++Ht%Kt,Gt=Ht*Vt,fe.clearRect(Jt,Qt,Ft+10,Vt+10),fe.drawImage(Yt,Nt,Gt,Ft,Vt,Jt,Qt,Ft,Vt),15==++Ut&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function p(){console.log("car Working"),ta=++ta%aa,ra=ta*ea,Ie.clearRect(oa,la,Zt+10,ea+10),Ie.drawImage(na,sa,ra,Zt,ea,oa,la,Zt,ea),32==++ca?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):22==ca&&$(".stage-5-words h2").css({opacity:"1"})}function h(){console.log("food Working"),da=++da%pa,$a=da*ma,ke.clearRect(va,wa,ia+10,ma+10),ke.drawImage(ya,ha,$a,ia,ma,va,wa,ia,ma),29==ua?clearInterval(H):22==ua?(ua++,$("#stage-6").css({opacity:"0",transform:"translate(0, -100%)"}),ua++):ua++}function v(){console.log("foodSafe Working"),Ia=++Ia%ba,Ra=Ia*Aa,xe.clearRect(xa,_a,fa+10,Aa+10),xe.drawImage(Ta,ka,Ra,fa,Aa,xa,_a,fa,Aa),27==Ca?(clearInterval(K),$("#stage-6_3, #stage-6_3_bg").css({opacity:"1",transform:"translate(0, 0)"}),J=setInterval(y,125)):24==Ca?($("#stage-6_1").css({opacity:"0",transform:"translate(0, -100%)"}),Ca++):Ca++}function w(){console.log("speech Working"),Ba=++Ba%Ea,La=Ba*Sa,Ce.clearRect(Pa,Oa,qa+10,Sa+10),Ce.drawImage(Da,Wa,La,qa,Sa,Pa,Oa,qa,Sa),30==ja?(clearInterval(N),$("#stage-6_4").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$(".stage-6-words p").eq(1).css({opacity:"1",transform:"translate(0, 0px)"})},888),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1888),G=setInterval(u,83)):27==ja?($(".stage-6-words p").eq(0).css({opacity:"0",transform:"translate(0, -50px)"}),$("#music-camera")[0].pause(),ja++):26==ja?($("#stage-6_2").css({opacity:"0",transform:"translate(0, -100%)"}),ja++):ja++}function u(){console.log("doctor Working"),za=++za%Fa,Ha=za*Xa,qe.clearRect(Ka,Na,Ma,Xa),qe.drawImage(Ga,Va,Ha,Ma,Xa,Ka,Na,Ma,Xa)}function y(){console.log("cpu Working"),Ya=++Ya%Za,ts=Ya*Ua,We.clearRect(as,ss,Qa,Ua),We.drawImage(rs,es,ts,Qa,Ua,as,ss,Qa,Ua)}function f(){console.log("room Working"),ns=++ns%is,ms=ns*cs,Pe.clearRect(ds,ps,ls+10,cs+10),Pe.drawImage(hs,gs,ms,ls,cs,ds,ps,ls,cs),Pe.font="14px Arial",ns>4&&(23==ns?$("#music-switch")[0].play(0):ns==is-1&&(clearInterval(L),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)))}function A(){console.log("bed Working"),ws=++ws%us,fs=ws*vs,je.clearRect(As,Is,$s,vs),je.drawImage(bs,ys,fs,$s,vs,As,Is,$s,vs),ws==us-1?clearInterval(P):18==ws?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):4==ws&&$(".stage-8-words h2").css({transform:"translate(0, 0)",opacity:"1"})}function I(){console.log("smoke Working"),xs=++xs%_s,Ts=xs*Rs,Me.clearRect(qs,Ss,ks+10,Rs+10),Me.drawImage(Es,Cs,Ts,ks,Rs,qs,Ss,ks,Rs),14==++Bs&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function b(){console.log("stroll Working"),Ds=++Ds%Ms,zs=Ds*js,Ve.clearRect(Fs,Vs,Os+10,js+10),Ve.drawImage(Hs,Xs,zs,Os,js,Fs,Vs,Os,js),32==++Ls&&Ps<2?(z=setInterval(k,125),Ls=0,$(".thanks").eq(Ps).css({opacity:"1",transform:"translateX(0)"})):28==Ls?$(".stage-10-words p").css({opacity:0}):6==Ls?$(".stage-10-words p").eq(0).css({opacity:1,transform:"translate(0, 0)"}):12==Ls?$(".stage-10-words p").eq(1).css({opacity:1,transform:"translate(0, 0)"}):16==Ls?1==Ps&&(z=setInterval(k,125),Ls=0,$(".thanks").eq(Ps).css({opacity:"1",transform:"translateX(0)"})):18==Ls?$(".stage-10-words p").eq(2).css({opacity:1,transform:"translate(0, 0)"}):2==Ls&&$("#music-stroll")[0].play()}function k(){console.log("wave Working"),$("#music-stroll")[0].pause(),Us=++Gs*Ns,Ve.clearRect(Ys,Zs,Ks+10,Ns+10),Ve.drawImage(er,Qs,Us,Ks,Ns,Ys,Zs,Ks,Ns),clearInterval(X),Gs==Js-1&&0==Ps?(clearInterval(z),Gs=0,$(".stage-10-words").css({opacity:0,tranistion:"translate(0, -50px)"}),X=setInterval(b,125),$(".thanks").eq(Ps).css({opacity:"0",transform:"translateX(-10%)"}),$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Ps++):23==Gs&&1==Ps?(clearInterval(z),$(".downArrow").css({display:"block",color:"black"})):Gs==Js-1&&1==Ps&&clearInterval(z)}function R(){console.log("man Working"),sr=++sr%rr,lr=sr*ar,Ke.clearRect(cr,nr,tr+10,ar+10),Ke.drawImage(ir,or,lr,tr,ar,cr,nr,tr,ar)}function x(){console.log("woman Working"),dr=++dr%pr,$r=dr*mr,Ge.clearRect(vr,wr,gr+10,mr+10),Ge.drawImage(ur,hr,$r,gr,mr,vr,wr,gr,mr)}function _(){console.log("wash Working"),Ir=++Ir%br,Rr=Ir*Ar,Ye.clearRect(xr,_r,fr+10,Ar+10),Ye.drawImage(Cr,kr,Rr,fr,Ar,xr,_r,fr,Ar),Ir==br-1?clearInterval(M):20==Ir&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function C(){he.clearRect(0,0,pe.width,pe.height),tt=0,gt=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),ve.clearRect(0,0,$e.width,$e.height),ve.globalAlpha=1,ne>=1024?(bt=880,Bt=560):(bt=390,Bt=180),$(".stage-3-words").removeAttr("style"),fe.clearRect(0,0,ye.width,ye.height),Ut=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),ca=0,Ie.clearRect(0,0,Ae.width,Ae.height),clearInterval(W),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),xe.clearRect(0,0,Re.width,Re.height),Ce.clearRect(0,0,_e.width,_e.height),qe.clearRect(0,0,Te.width,Te.height),We.clearRect(0,0,Ee.width,Ee.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ua=0,Ca=0,ja=0,Pe.clearRect(0,0,Le.width,Le.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),ws=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),je.clearRect(0,0,Oe.width,Oe.height),Bs=0,Me.clearRect(0,0,De.width,De.height),ze.clearRect(0,0,Xe.width+100,Xe.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),Ls=0,Ps=0,Gs=0,Ve.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),Ke.clearRect(0,0,He.width,He.height),Ge.clearRect(0,0,Ne.width,Ne.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),Ye.clearRect(0,0,Ue.width,Ue.height),Ir=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),console.log("stageStateClear"),$(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")}function T(){$(".fullpage").fullpage({recordHistory:!1,scrollingSpeed:777,lazyLoading:!0,afterLoad:function(e,t){Q=t,$.fn.fullpage.setAllowScrolling(!1),$("#section-"+t).css({opacity:"1","z-index":50}),$("#head").addClass("Bgc-TP"),bar_witdh=t/($(".fullpage").children().length-1)*100,$("#indicator-bar").css("width",bar_witdh+"%"),$("#indicator").removeClass("mainColor"),ga("send",{hitType:"event",eventCategory:"插畫(15張)",eventAction:"scroll",eventLabel:"看到第"+t+"張"}),1==t&&($.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setScrollingSpeed(777),$(window).scrollTop(0),$("#stage-1")[0].play(),$(".fixed_pic").css("opacity","1"),$(".fullpage").css({height:"100%"}),ct.src="src/image/animate-sprite/stage-2-start.jpg",vt.src="src/image/animate-sprite/stage-2-end.jpg",Y=!1,$(".downArrow").css({display:"block",color:"white"})),2==t&&(Rt.src="src/image/animate-sprite/stage-3-walk1.png",Wt.src="src/image/animate-sprite/stage-3-walkback.png",Xt.src="src/image/animate-sprite/stage-3-bg.png",zt.src="src/image/animate-sprite/stage-3pod.png",$(".page-black").eq(0).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),"src/image/off.png"==$(".voice-state img").attr("src")&&$(".voice-state img").addClass("blink"),$.fn.fullpage.setAllowScrolling(!0)),3==t&&(Yt.src="src/image/animate-sprite/stage-4-kitchen.jpg",ya.src="src/image/animate-sprite/stage-6-foodInfo.png",Ta.src="src/image/animate-sprite/stage-6-foodSafe.png",Da.src="src/image/animate-sprite/stage-6-speech.png",Ja.src="src/image/animate-sprite/stage-6-lab-bg.png",os.src="src/image/animate-sprite/stage-6-lab-bg2.png",$(".voice-state img").removeClass("blink"),$(".page-black").eq(0).removeAttr("style"),$(".page-black").eq(1).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)),4==t&&(na.src="src/image/animate-sprite/stage-5-car.jpg",Ga.src="src/image/animate-sprite/stage-6-doctor.png",rs.src="src/image/animate-sprite/stage-6-cpu.png",Ws.src="src/image/animate-sprite/stage-9-bg.png",yr.src="src/image/animate-sprite/stage-11-bg.png",$(".page-black").eq(1).removeAttr("style"),$(".skip").css({display:"block"}),$("#stage-2").css({transform:"translateX(0)",opacity:"1"}),q=setInterval(n,100)),5==t&&(hs.src=ne>=1024?"src/image/animate-sprite/stage-7-roomW.jpg":"src/image/animate-sprite/stage-7-room.jpg",he.clearRect(0,0,pe.width,pe.height),tt=0,gt=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$(".stage-3-words").css({transform:"translate(0, 15%)",opacity:"1"}),$("#music-walk")[0].play(),ne>=1024&&ue.drawImage(Xt,0,0,Lt,Pt,35,126,Lt,Pt),ne>=768&&ne<1023&&ue.drawImage(zt,0,0,578,820,0,0,578,820),ne<768&&ue.drawImage(Xt,Ot,jt,Lt,Pt,Dt,Mt,Lt,Pt),B=setInterval(g,83),$.fn.fullpage.setScrollingSpeed(1777)),6==t&&(bs.src="src/image/animate-sprite/stage-8-bed.jpg",ve.clearRect(0,0,$e.width+100,$e.height+100),ve.globalAlpha=1,ne>=1024?(bt=880,kt=425):ne>=768&&ne<1024?(bt=550,kt=660):(bt=390,kt=575),ne>=1024?(Bt=560,Et=417):ne>=768&&ne<1024?(Bt=350,Et=670):(Bt=180,Et=565),$(".stage-3-words").removeAttr("style"),$(".stage-4-words p").css({transform:"translate(0, 0)",opacity:"1"}),$("#stage-4").css({transform:"translate(0, 0)",opacity:"1"}),$("#music-cooking")[0].play(),V=setInterval(d,125)),7==t&&(Es.src="src/image/animate-sprite/stage-9-smoke.png",Hs.src="src/image/animate-sprite/stage-10-stroll.png",er.src="src/image/animate-sprite/stage-10-wave.png",fe.clearRect(0,0,ye.width,ye.height),Ut=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),$("#stage-5").css({transform:"translate(0, 0)",opacity:"1"}),$(".stage-5-words p").css({opacity:"1"}),$("#music-driving")[0].play(),W=setInterval(p,125)),8==t&&(ir.src="src/image/animate-sprite/stage-11-man.jpg",ur.src="src/image/animate-sprite/stage-11-woman.jpg",Cr.src="src/image/animate-sprite/stage-12-wash.jpg",ca=0,Ie.clearRect(0,0,Ae.width,Ae.height),clearInterval(W),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),ke.drawImage(ya,ha,$a,ia,ma,va,wa,ia,ma),xe.drawImage(Ta,ka,Ra,fa,Aa,xa,_a,fa,Aa),Ce.drawImage(Da,Wa,La,qa,Sa,Pa,Oa,qa,Sa),Be.drawImage(Ja,0,0,360,395,75,150,360,395),We.drawImage(os,0,0,124,208,0,459,124,208),$("#stage-6").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-6_1").css({opacity:"1",transform:"translate(0, 0)"})},222),setTimeout(function(){$("#stage-6_2").css({opacity:"1",transform:"translate(0, 0)"})},555),setTimeout(function(){$("#music-camera")[0].play(),H=setInterval(h,83),K=setInterval(v,83),N=setInterval(w,83)},1433),setTimeout(function(){$(".stage-6-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"})},1666)),9==t&&(ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Ce.clearRect(0,0,_e.width,_e.height),qe.clearRect(0,0,Te.width,Te.height),We.clearRect(0,0,Ee.width,Ee.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ua=0,Ca=0,ja=0,L=setInterval(f,125),$("#stage-7").css({opacity:"1"})),10==t&&(Pe.clearRect(0,0,Le.width,Le.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),$(".stage-8-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-8").css({opacity:"1",transform:"translate(0, 0)"}),P=setInterval(A,125)},777)),11==t&&(ws=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),je.clearRect(0,0,Oe.width,Oe.height),$(".stage-9-words p").css({opacity:"1",transform:"translate(0, 0)"}),ze.drawImage(Ws,0,0,413,416,12,250,413,416),O=setInterval(I,125),setTimeout(function(){$("#stage-9, #stage-9_bg").css({opacity:"1",transform:"translate(0, 0)"})},1222)),12==t&&(Bs=0,Me.clearRect(0,0,De.width,De.height),ze.clearRect(0,0,Xe.width+100,Xe.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),$("#music-street")[0].play(),X=setInterval(b,125)),13==t&&(Ls=0,Ps=0,Gs=0,Ve.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),$(".stage-11-words p").css({opacity:"1"}),Qe.drawImage(yr,0,0,302,322,36,180,302,322),j=setInterval(R,125),setTimeout(function(){$("#stage-11").css({opacity:"0"}),clearInterval(j),D=setInterval(x,125)},2e3),setTimeout(function(){$("#stage-11_1").css({opacity:"0"}),clearInterval(D)},4500),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},4666)),14==t&&(Ke.clearRect(0,0,He.width,He.height),Ge.clearRect(0,0,Ne.width,Ne.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),$(".stage-12-words p").eq(0).css({opacity:1}),setTimeout(function(){$(".stage-12-words p").eq(1).css({opacity:1}),$("#stage-12").css({opacity:1}),M=setInterval(_,125)},1e3),setTimeout(function(){$(".stage-12-words p").eq(2).css({opacity:1})},2e3)),15==t&&(Ye.clearRect(0,0,Ue.width,Ue.height),Ir=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),0==Y&&($(".stage-13").eq(0).css({opacity:"1"}),$(".stage-13-words").css({transform:"translate(0, -20%)",opacity:1}),setTimeout(function(){$(".stage-13").eq(1).css({opacity:"1"}),$(".stage-13-words h2").css({opacity:"1"})},1666),setTimeout(function(){$(".stage-13").eq(2).css({opacity:"1"}),$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".readPaper").css({display:"block"})},3333),setTimeout(function(){$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".readPaper").css({opacity:1})},3500)))},onLeave:function(e,t,a){console.log("onleave: "+e,"direction: "+a),c(),$(".downArrow").css({display:"none"}),$(".readPaper").css({display:"none",opacity:0}),$("#section-"+e).css({opacity:0,"z-index":0}),"up"==a&&ga("send",{hitType:"event",eventCategory:"動畫回上一頁",eventAction:"scroll",eventLabel:"第幾"+e+"張,回頭看"}),1!=$("#indicator").css("opacity")&&($("#indicator").css({opacity:1}),$("#indicator-bar").css("width","0")),1==e&&$(".fixed_pic").css("opacity","1"),2==e&&$(".voice-state img").removeClass("blink"),4==e&&("up"==a?(tt=0,gt=0,he.clearRect(0,0,pe.width,pe.height),$(".stage-2-words").removeAttr("style"),$("#stage-2").removeAttr("style")):($("#section-4").css({transition:"3s"}),S=setInterval(i,100),$.fn.fullpage.setScrollingSpeed(2333))),5==e&&(ve.clearRect(0,0,$e.width+100,$e.height+100),ve.globalAlpha=1,ne>=1024?(bt=880,kt=425):ne>=768&&ne<1024?(bt=550,kt=660):(bt=390,kt=575),ne>=1024?(Bt=560,Et=417):ne>=768&&ne<1024?(Bt=350,Et=670):(Bt=180,Et=565)),6==e&&"up"==a&&(Ut=0,fe.clearRect(Jt,Qt,ye.width,ye.height),$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style")),7==e&&("up"==a?(ca=0,clearInterval(W),Ie.clearRect(0,0,Ae.width,Ae.height),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style")):$("#stage-5").css({transform:"translate(75%, 20%)",opacity:"0"})),8==e&&("up"==a?(ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Ce.clearRect(0,0,_e.width,_e.height),qe.clearRect(0,0,Te.width,Te.height),We.clearRect(0,0,Ee.width,Ee.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ua=0,Ca=0,ja=0):($("#section-8").css({transition:"3s"}),$("#stage-6_3, #stage-6_3_bg").css({opacity:"0",transform:"translate(0, -130px)"}),$(".stage-6-words p").eq(1).css({opacity:"0",transform:"translate(0, -70px)"}),setTimeout(function(){$("#stage-6_4").css({opacity:"0",transform:"translate(0, -140px)"})},111))),9==e&&"up"==a&&(Pe.clearRect(0,0,Le.width,Le.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style")),10==e&&"up"==a&&(ws=0,je.clearRect(0,0,Oe.width,Oe.height),$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style")),11==e&&"up"==a&&(Bs=0,Me.clearRect(0,0,De.width,De.height),ze.clearRect(0,0,Xe.width+300,Xe.height+300),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style")),12==e&&("up"==a?(Ls=0,Ps=0,Gs=0,Ve.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style")):(1==Ps&&Gs>22&&(z=setInterval(k,125)),$(".thanks").eq(Ps).css({opacity:"0",transform:"translateX(-10%)"}))),13==e&&"up"==a&&(Ke.clearRect(0,0,He.width,He.height),Ge.clearRect(0,0,Ne.width,Ne.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style")),14==e&&"up"==a&&(Ir=0,Ye.clearRect(0,0,Ue.width,Ue.height),$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style")),15==e&&"up"==a&&($(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")),3==t&&$(".fixed_pic").css("opacity","1"),4==t&&$(".fixed_pic").css("opacity","0")}})}var q,S,B,E,W,L,P,O,j,D,M,X,z,F,V,H,K,N,G,J,Q,U,Y=!1,Z=!0,ee=!1,te=10,ae=1==e()?"Mob":"PC",se=[],re=[null],oe=window.navigator.userAgent,le=!!oe.match(/iPad/i)||!!oe.match(/iPhone/i),ce=!!oe.match(/WebKit/i),ne=(le&&ce&&oe.match(/CriOS/i),$(window).width()),ie=$(window).height();ne>=1024?($("#stage-1").attr("src","src/image/animate-sprite/stage-1PC.mp4"),$("#stage-1").attr("poster","src/image/animate-sprite/stage-1bg-pc.png"),$("#movie-1").attr("controls","true")):($("#stage-1").attr("src","src/image/animate-sprite/stage-1Mob.mp4"),$("#stage-1").attr("poster","src/image/animate-sprite/stage-1bg-mob.png")),ver=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}(),function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var s=e.indexOf("Edge/");return s>0&&parseInt(e.substring(s+5,e.indexOf(".",s)),10)}()&&$("#stage-1").css({height:"auto"}),function(){if(1==le){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1}return!1}()&&($(".stage-6-words p").eq(0).css({top:"15%",left:"-15%"}),$(".cover_Title").css({"padding-top":"15%"}),ne<768&&($(".section").css({"margin-top":"-6%"}),$(".fixed_pic").css({"margin-top":"-98px"})),11==ver[0]?($(".downArrow").css({bottom:"158px"}),$(".readPaper").css({bottom:"158px"}),$(".whiteP").css({"line-height":"1.5"}),$(".intro").css({"margin-top":"-25%"})):10==ver[0]&&($(".whiteP").css({"line-height":"1.2"}),$(".intro").css({"margin-top":"-15%"}),ver[1]<=2?($(".downArrow").css({bottom:"16px"}),$(".readPaper").css({bottom:"16px"})):($(".downArrow").css({bottom:"143px"}),$(".readPaper").css({bottom:"143px"}))));var ge=$("body").height()-ie,me=ne>=768?"6px":"4px",de=$("title").text();$("a").click(function(){ga("send",{hitType:"event",eventCategory:"超連結點擊",eventAction:"click",eventLabel:"["+ae+"] ["+de+"] ["+$(this).attr("href")+"]"})}),$("#scroll-down").click(function(){ga("send",{hitType:"event",eventCategory:"ham bar",eventAction:"click",eventLabel:"["+ae+"] ["+de+"] [scroll down]"})}),$(".line-share").click(function(t){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+ae+"] ["+de+"] [line share]"}),e()?window.location.href="//line.me/R/msg/text/?"+de+"%0D%0A%0D%0A"+$('meta[property="og:description"]').attr("content")+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}),$(".voice-state img").on("click",function(){var e=$(this).attr("src");$(this).removeClass("blink"),"src/image/off.png"==e?($(this).attr("src","src/image/on.png"),$("#music-main")[0].play(),o(),U>$(".content").eq(0).offset().top?ga("send",{hitType:"event",eventCategory:"閱讀時開聲音",eventAction:"click",eventLabel:"閱讀時開聲音"}):ga("send",{hitType:"event",eventCategory:"開聲音",eventAction:"click",eventLabel:"開聲音"})):($(this).attr("src","src/image/off.png"),l(),ga("send",{hitType:"event",eventCategory:"關聲音",eventAction:"click",eventLabel:"關聲音"}))}),$(window).on("scroll",function(){for(var e=(U=$(window).scrollTop())/ge*100;te<=Math.floor(e);te+=10)ga("send",{hitType:"event",eventCategory:"read",eventAction:"scroll",eventLabel:"["+ae+"] ["+de+"] [page read "+te+"%]"});U>ie?($("#indicator").css("opacity",1),$("#head").css("top",me)):($("#indicator").css("opacity",0),$("#head").css("top","0")),$("#indicator-bar").css("width",U/ge*100+"%");var s=$(".content").eq(0).offset().top,r=$("#movie-1").offset().top;U>s-.07*ie&&U<s&&($("#head").removeClass("Bgc-TP"),$("#indicator").addClass("mainColor")),U>s&&($(".downArrow").css({display:"none"}),$(".skip").css({display:"none"})),U>r-.5*ie&&U<r+.5*ie&&(t(1),console.log("movie play")),(U>r+.2*ie||U<r-.8*ie)&&(a(1),console.log("movie pause")),0==$(window).scrollTop()&&1==ee&&(T(),$(".fullpage").css({display:"block"}),console.log("reBuild"))}),$('.volume[data-target="1"], .volume-text[data-target="1"]').click(function(){r(1),ga("send",{hitType:"event",eventCategory:"文章影片開聲音",eventAction:"click",eventLabel:"開了"})}),$('.replay[data-target="1"]').click(function(){s(1),ga("send",{hitType:"event",eventCategory:"文章影片再演一次",eventAction:"click",eventLabel:"重演了"})}),$("#movie-1").click(function(){$("#movie-1")[0].paused?(t(1),ga("send",{hitType:"event",eventCategory:"點擊文章影片",eventAction:"click",eventLabel:"開始"})):(a(1),ga("send",{hitType:"event",eventCategory:"點擊文章影片",eventAction:"click",eventLabel:"暫停"}))});var pe=document.getElementById("stage-2"),he=pe.getContext("2d");pe.width=375,pe.height=667;var $e=document.getElementById("stage-3"),ve=$e.getContext("2d"),we=document.getElementById("stage-3_1"),ue=we.getContext("2d");ne>=1024&&($e.width=880,$e.height=495,we.width=880,we.height=495),ne>=768&&ne<1023&&($e.width=578,$e.height=820,we.width=578,we.height=820),ne<768&&($e.width=375,$e.height=667,we.width=375,we.height=667);var ye=document.getElementById("stage-4"),fe=ye.getContext("2d");ye.width=375,ye.height=667;var Ae=document.getElementById("stage-5"),Ie=Ae.getContext("2d");Ae.width=375,Ae.height=667;var be=document.getElementById("stage-6"),ke=be.getContext("2d");be.width=375,be.height=667;var Re=document.getElementById("stage-6_1"),xe=Re.getContext("2d");Re.width=375,Re.height=667;var _e=document.getElementById("stage-6_2"),Ce=_e.getContext("2d");_e.width=375,_e.height=667;var Te=document.getElementById("stage-6_3"),qe=Te.getContext("2d");Te.width=375,Te.height=667;var Se=document.getElementById("stage-6_3_bg"),Be=Se.getContext("2d");Se.width=375,Se.height=667;var Ee=document.getElementById("stage-6_4"),We=Ee.getContext("2d");Ee.width=375,Ee.height=667;var Le=document.getElementById("stage-7"),Pe=Le.getContext("2d");ne>=1024?(Le.width=520,Le.height=667):(Le.width=375,Le.height=667);var Oe=document.getElementById("stage-8"),je=Oe.getContext("2d");Oe.width=375,Oe.height=667;var De=document.getElementById("stage-9"),Me=De.getContext("2d");De.width=375,De.height=667;var Xe=document.getElementById("stage-9_bg"),ze=Xe.getContext("2d");Xe.width=375,Xe.height=667;var Fe=document.getElementById("stage-10"),Ve=Fe.getContext("2d");Fe.width=375,Fe.height=667;var He=document.getElementById("stage-11"),Ke=He.getContext("2d");He.width=375,He.height=667;var Ne=document.getElementById("stage-11_1"),Ge=Ne.getContext("2d");Ne.width=375,Ne.height=667;var Je=document.getElementById("stage-11_2"),Qe=Je.getContext("2d");Je.width=375,Je.height=667;var Ue=document.getElementById("stage-12"),Ye=Ue.getContext("2d");Ue.width=375,Ue.height=667;var Ze=375,et=667,tt=0,at=25,st=0,rt=0,ot=0,lt=0,ct=new Image,nt=375,it=667,gt=0,mt=22,dt=0,pt=0,ht=0,$t=0,vt=new Image,wt=75,ut=112,yt=0,ft=36,At=0,It=0,bt=0,kt=0;ne>=1024?(bt=880,kt=425):ne>=768&&ne<1024?(bt=550,kt=660):(bt=390,kt=575);var Rt=new Image;ve.transform(.7,0,0,.7,0,0);var xt=39,_t=55,Ct=0,Tt=36,qt=0,St=0,Bt=0,Et=0;ne>=1024?(Bt=560,Et=417):ne>=768&&ne<1024?(Bt=350,Et=670):(Bt=180,Et=565);var Wt=new Image,Lt=810,Pt=369,Ot=0,jt=0,Dt=-230,Mt=230,Xt=new Image,zt=new Image,Ft=375,Vt=667,Ht=0,Kt=24,Nt=0,Gt=0,Jt=80,Qt=200,Ut=0,Yt=new Image;fe.transform(.8,0,0,.8,0,0);var Zt=375,ea=667,ta=0,aa=24,sa=0,ra=0,oa=0,la=0,ca=0,na=new Image,ia=213,ma=291,da=0,pa=24,ha=0,$a=0,va=130,wa=50,ua=0,ya=new Image,fa=140,Aa=329,Ia=0,ba=24,ka=0,Ra=0,xa=50,_a=240,Ca=0,Ta=new Image,qa=269,Sa=398,Ba=0,Ea=24,Wa=0,La=0,Pa=90,Oa=170,ja=0,Da=new Image,Ma=128,Xa=221,za=0,Fa=36,Va=0,Ha=0,Ka=140,Na=310,Ga=new Image,Ja=new Image,Qa=124,Ua=177,Ya=0,Za=24,es=0,ts=0,as=70,ss=290,rs=new Image,os=new Image,ls=0;ls=ne>=1024?520:375;var cs=667,ns=0,is=32,gs=0,ms=0,ds=0,ps=20,hs=new Image,$s=375,vs=667,ws=0,us=24,ys=0,fs=0,As=0,Is=0,bs=new Image,ks=166,Rs=148,xs=0,_s=25,Cs=0,Ts=0,qs=120,Ss=200,Bs=0,Es=new Image,Ws=new Image;ze.transform(.85,0,0,.85,0,0);var Ls=0,Ps=0,Os=168,js=290,Ds=0,Ms=24,Xs=0,zs=0,Fs=0,Vs=250,Hs=new Image,Ks=145,Ns=287,Gs=0,Js=32,Qs=0,Us=0,Ys=0,Zs=250,er=new Image,tr=375,ar=667,sr=0,rr=24,or=0,lr=0,cr=0,nr=0,ir=new Image,gr=375,mr=667,dr=0,pr=24,hr=0,$r=0,vr=0,wr=0,ur=new Image,yr=new Image,fr=375,Ar=667,Ir=0,br=36,kr=0,Rr=0,xr=0,_r=0,Cr=new Image;T(),$(".downArrow").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown(),ga("send",{hitType:"event",eventCategory:"下一頁",eventAction:"click",eventLabel:"第幾"+Q+"點了下一頁箭頭"}),15==Q&&$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888)}),$(".skip").click(function(e){Y=!0,ee=!0,c(),1==Z&&(Z=!1,setTimeout(function(){Z=!0},1222),$(this).css({display:"none"}),$("html, body").animate({scrollTop:$(window).height()},1e3),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"直接看報導(skip)"}),$(".fixed_pic").css({opacity:0}),$.fn.fullpage.destroy("all"),$(".fullpage").css({display:"none"}),$("html, body").css({"overflow-x":"hidden",height:"initail"}),C())}),$(".readPaper").click(function(e){Y=!0,ee=!0,c(),1==Z&&(Z=!1,setTimeout(function(){Z=!0},1222),$(this).css({display:"none",opacity:0}),$(".fullpage").css({height:"0"}),$("html, body").animate({scrollTop:$(window).height()},1e3),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"看完動畫看報導(next)"}),$(".fixed_pic").css({opacity:0}),$.fn.fullpage.destroy("all"),$(".fullpage").css({display:"none"}),$("html, body").css({"overflow-x":"hidden",height:"initail"}),C())}),console.log(Z)});