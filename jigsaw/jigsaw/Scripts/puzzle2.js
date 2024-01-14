
/**
 * grrd's Puzzle
 * Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net
 * @license MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
!function(){"use strict";var e,t,n,o,a,s,i,r,g,l,c,d,m,A,u,h,f,b,v,y,p,w,E,_,I,P,k,L=!!window.HTMLCanvasElement,T=new Kinetic.Layer({name:"g_layer"}),B=new Kinetic.Layer({name:"g_back_g_layer"}),S=new Kinetic.Stage({container:"container",width:document.getElementById("container").width,height:document.getElementById("container").height}),D=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),R=!1,x=0,Q=0,M=!1,C=2,F=new Image,Y="",N=4,X=6,z=0,G=!1,H=!1,O=!1,K=!0,U=!0,q=!0,j=!1,W=!0,Z=!1,V=function(e){return document.getElementById(e)},J=V("select_theme_img"),$=V("b_back_g_grid"),ee=V("b_back_g_image"),te=V("b_rotate"),ne=V("b_sound"),oe=V("container"),ae=V("b_gold"),se=V("b_gold_enabled"),ie=V("b_gold_disabled"),re=V("b_prev"),ge=V("b_next"),le=V("bt_easy"),ce=V("bt_med"),de=V("bt_hard"),me=V("bt_close"),Ae=V("b_image_input"),ue=V("iPopupInfo"),he=V("iPopupSettings"),fe=V("iFullscreen"),be=V("iPopupHelp"),ve=V("img_help"),ye=V("lb_help"),pe=V("game"),we=V("title"),Ee=function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}();function _e(e){document.getElementsByTagName("FIELDSET")[0].disabled=!0,document.activeElement.blur(),e.classList.remove("popup-init"),e.classList.remove("popup-hide"),e.classList.add("popup-show")}function Ie(e){document.getElementsByTagName("FIELDSET")[0].disabled=!1,e.classList.remove("popup-show"),e.classList.add("popup-hide"),setTimeout((function(){e.scrollTop=0}),1050)}function Pe(){document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?V("img_fullscreen").src="Images/escfullscreen.svg":V("img_fullscreen").src="Images/fullscreen.svg"}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",err)}))}));const ke=new Promise((e,t)=>{const n=new Image;n.onload=()=>{e(1===n.naturalWidth)},n.onerror=t,n.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z"});function Le(){H=!0,G=!1}function Te(){var e;Ie(be),setTimeout((function(){V("iCloseHelp").classList.remove("dn"),ve.style.height=null,ve.style.padding=null}),500),document.getElementsByTagName("FIELDSET")[0].disabled=!0,we.classList.remove("swipe-out-right"),pe.classList.remove("swipe-in-left"),we.classList.add("swipe-out"),pe.classList.add("swipe-in"),setTimeout((function(){var t=T.getChildren();for(e=0;e<t.length;e+=1)t[e].setZIndex(Math.floor(Math.random()*X*N));for(e=0;e<t.length;e+=1)O?new Kinetic.Tween({node:t[e],x:Math.floor(Math.random()*I*(X-1))+I/2,y:Math.floor(Math.random()*P*(N-1))+P/2,rotation:.5*Math.PI*Math.floor(4*Math.random()),duration:1,onFinish:Le()}).play():new Kinetic.Tween({node:t[e],x:Math.floor(Math.random()*I*(X-1))+I/2,y:Math.floor(Math.random()*P*(N-1))+P/2,duration:1,onFinish:Le()}).play()}),2e3)}function Be(e,t,n,o){var a,s;(s=new Kinetic.Shape({drawFunc:function(o){o.beginPath(),o.moveTo(E,_),0===t?o.lineTo(E+I,_):(o.bezierCurveTo(E+.8*I,_+.1*P*n,E,_-.25*P*n,E+I/2,_-.25*P*n),o.bezierCurveTo(E+I,_-.25*P*n,E+.2*I,_+.1*P*n,E+I,_)),e===X-1?o.lineTo(E+I,_+P):(o.bezierCurveTo(E+I+.1*I*n,_+.8*P,E+I-.25*I*n,_,E+I-.25*I*n,_+P/2),o.bezierCurveTo(E+I-.25*I*n,_+P,E+I+.1*I*n,_+.2*P,E+I,_+P)),t===N-1?o.lineTo(E,_+P):(o.bezierCurveTo(E+.2*I,_+P-.1*P*n,E+I,_+P+.25*P*n,E+I/2,_+P+.25*P*n),o.bezierCurveTo(E,_+P+.25*P*n,E+.8*I,_+P-.1*P*n,E,_+P)),0===e?o.lineTo(E,_):(o.bezierCurveTo(E-.1*I*n,_+.2*P,E+.25*I*n,_+P,E+.25*I*n,_+P/2),o.bezierCurveTo(E+.25*I*n,_,E-.1*I*n,_+.8*P,E,_)),o.closePath(),o.fillStrokeShape(this)},fillPatternImage:o,fillPatternOffset:[e*I,t*P],stroke:"black",strokeWidth:4})).toImage({width:I+.6*I,height:P+.6*P,x:.3*-I,y:.3*-P,callback:function(n){Ne(a=new Kinetic.Image({image:n,x:e*I+I/2,origX:e*I+I/2,y:t*P+P/2,origY:t*P+P/2,row:t,col:e,offset:[I/2+.3*I,P/2+.3*P],draggable:!0,dragBoundFunc:function(e){var t=e.y,n=e.x;return n<0&&(n=0),n>c&&(n=c),t<0&&(t=0),t>d&&(t=d),{x:n,y:t}},name:"part_z"+t+"_s"+e})),a.createImageHitRegion((function(){T.drawHit()}))}}),s.setStrokeWidth(null),s.setStroke(null),s.toImage({width:I+.6*I,height:P+.6*P,x:.3*-I,y:.3*-P,callback:function(n){v[t][e]=n}})}function Se(){var e,t;for(v=[],e=0;e<N;e+=1)v[e]=[];z=0,T.removeChildren(),B.removeChildren(),S.removeChildren(),S.setWidth(c),S.setHeight(d),E=0,_=0,I=c/X,P=d/N,1,S.add(T);var n=c,o=d;D&&(o/=function(e,t){var n=document.createElement("canvas");n.width=1,n.height=t;var o=n.getContext("2d");o.drawImage(e,0,0);for(var a=o.getImageData(0,0,1,t).data,s=0,i=t,r=t;r>s;)0===a[4*(r-1)+3]?i=r:s=r,r=i+s>>1;var g=r/t;return 0===g?1:g}(F,F.naturalHeight));0!==k.getPos()||5!==r&&6!==r&&7!==r&&8!==r||(n=d,o=c);var a=new Kinetic.Image({width:n,height:o,crop:{x:0,y:0,width:F.width,height:F.height},Image:F});0!==k.getPos()||5!==r&&6!==r||(a.setRotationDeg(90),a.setX(c)),0!==k.getPos()||3!==r&&4!==r||(a.setRotationDeg(180),a.setX(c),a.setY(d)),0!==k.getPos()||7!==r&&8!==r||(a.setRotationDeg(270),a.setY(d)),a.toImage({width:c,height:d,callback:function(n){(K||U)&&function(e){var t,n,o,a;if(U&&(t=new Kinetic.Image({x:0,y:0,width:c,height:d,Image:e,opacity:.1}),B.add(t),B.draw()),K)for(n=0;n<N;n+=1)for(o=0;o<X;o+=1)a=new Kinetic.Rect({x:o*I,y:n*P,width:I,height:P,stroke:"#333333",strokeWidth:2}),B.add(a);S.add(B),B.moveToBottom()}(n),a.toImage({width:c,height:d,callback:function(n){for(t=0;t<N;t+=1)for(e=0;e<X;e+=1)Be(e,t,t%2!=0&&e%2!=0||t%2==0&&e%2==0?1:-1,n);T.draw(),Te()}})}})}function De(){if(p=k.getPos(),y=parseInt(V("nav"+p).getElementsByClassName("selected")[0].getAttribute("data-num"),10),!G)return void 0===y||void 0===a&&0===p?(ve.src="Images/photo.svg",ye.innerHTML=document.webL10n.get("lb_choose"),void _e(be)):void(p>0&&V("image"+p+"-"+y).classList.contains("locked")||(G=!0,ve.src="Images/loading.svg",ve.style.height="70px",ve.style.padding="5px",ye.innerHTML=document.webL10n.get("lb_load"),V("iCloseHelp").classList.add("dn"),_e(be),K=$.checked,U=ee.checked,O=te.checked,q=ne.checked,Ee&&(localStorage.setItem("s_back_g_grid",$.checked?"on":"off"),localStorage.setItem("s_backg_image",ee.checked?"on":"off"),localStorage.setItem("s_rotate",te.checked?"on":"off"),localStorage.setItem("s_sound",ne.checked?"on":"off")),document.getElementById("container").width=g,document.getElementById("container").height=l,d=l,c=g,A=Y,0!==p?(i=void 0!==window.devicePixelRatio?window.devicePixelRatio:1,s=Math.min(l,g)*i<=270?"s":Math.min(l,g)*i>1080?"l":"",o="Images/b.jpg"):o=a,F.addEventListener("load",Se),F.src=o))}function Re(e,t,n,o){var a,s,i,r,g,l,m;if("g_layer"===e.getParent().attrs.name)if("g_layer"===t.getParent().attrs.name){t.setX(n),t.setY(o);var A=new Kinetic.Group({draggable:!0,dragBoundFunc:function(e){var t=e.y,n=e.x;return n<0&&(n=0),n>c&&(n=c),t<0&&(t=0),t>d&&(t=d),{x:n,y:t}}});e.moveTo(A),t.moveTo(A),e.setDraggable(!1),t.setDraggable(!1),T.add(A)}else r=e.getX(),g=e.getY(),t.getParent().setX(t.getParent().getX()+n-t.getAbsolutePosition().x),t.getParent().setY(t.getParent().getY()+o-t.getAbsolutePosition().y),e.moveTo(t.getParent()),e.setRotationDeg(t.getRotationDeg()),l=r-e.getAbsolutePosition().x,m=g-e.getAbsolutePosition().y,0===e.getParent().getRotationDeg()&&(e.setX(e.getX()+l),e.setY(e.getY()+m)),90===e.getParent().getRotationDeg()&&(e.setY(e.getY()-l),e.setX(e.getX()+m)),180===e.getParent().getRotationDeg()&&(e.setX(e.getX()-l),e.setY(e.getY()-m)),270===e.getParent().getRotationDeg()&&(e.setY(e.getY()+l),e.setX(e.getX()-m)),e.setDraggable(!1);else if("g_layer"===t.getParent().attrs.name)t.moveTo(e.getParent()),t.setAbsolutePosition(n,o),t.setRotationDeg(e.getRotationDeg()),t.setDraggable(!1);else{s=t.getParent().getChildren();for(var u=n-t.getAbsolutePosition().x,h=o-t.getAbsolutePosition().y;s.length>0;)void 0!==s[0]&&(r=(i=s[0]).getAbsolutePosition().x,g=i.getAbsolutePosition().y,i.moveTo(e.getParent()),i.setRotationDeg(e.getRotationDeg()),l=r-i.getAbsolutePosition().x+u,m=g-i.getAbsolutePosition().y+h,0===e.getParent().getRotationDeg()&&(i.setX(i.getX()+l),i.setY(i.getY()+m)),90===e.getParent().getRotationDeg()&&(i.setY(i.getY()-l),i.setX(i.getX()+m)),180===e.getParent().getRotationDeg()&&(i.setX(i.getX()-l),i.setY(i.getY()-m)),270===e.getParent().getRotationDeg()&&(i.setY(i.getY()+l),i.setX(i.getX()-m)))}var f=(s=e.getParent().getChildren())[0].getAbsolutePosition().x,b=s[0].getAbsolutePosition().x,v=s[0].getAbsolutePosition().y,y=s[0].getAbsolutePosition().y;for(a=0;a<s.length;a+=1)s[a].getAbsolutePosition().x<f&&(f=s[a].getAbsolutePosition().x),s[a].getAbsolutePosition().x>b&&(b=s[a].getAbsolutePosition().x),s[a].getAbsolutePosition().y<v&&(v=s[a].getAbsolutePosition().y),s[a].getAbsolutePosition().y>y&&(y=s[a].getAbsolutePosition().y);r=e.getAbsolutePosition().x,g=e.getAbsolutePosition().y,e.getParent().setOffset(0,0),e.getParent().setX((f+b)/2),e.getParent().setY((v+y)/2),l=r-e.getAbsolutePosition().x,m=g-e.getAbsolutePosition().y,0===e.getParent().getRotationDeg()&&e.getParent().setOffset(-1*l,-1*m),90===e.getParent().getRotationDeg()&&e.getParent().setOffset(-1*m,l),180===e.getParent().getRotationDeg()&&e.getParent().setOffset(l,m),270===e.getParent().getRotationDeg()&&e.getParent().setOffset(m,-1*l),"g_layer"===t.getParent().attrs.name?t.moveToTop():t.getParent().moveToTop(),T.draw(),q&&document.getElementById("click_sound").play()}function xe(e){var t,n,o,a,s=[-1,1,0,0],i=[0,0,-1,1];for(h="g_layer"===e.getParent().attrs.name?e.getRotationDeg():(e.getRotationDeg()+e.getParent().getRotationDeg())%360,t=0;t<s.length;t+=1)(a=S.get(".part_z"+(e.attrs.row+i[t])+"_s"+(e.attrs.col+s[t]))).length>0&&(f="g_layer"===a[0].getParent().attrs.name?a[0].getRotationDeg():(a[0].getRotationDeg()+a[0].getParent().getRotationDeg())%360,0===h&&(n=e.getAbsolutePosition().x+I*s[t],o=e.getAbsolutePosition().y+P*i[t]),90===h&&(n=e.getAbsolutePosition().x-P*i[t],o=e.getAbsolutePosition().y+I*s[t]),180===h&&(n=e.getAbsolutePosition().x-I*s[t],o=e.getAbsolutePosition().y-P*i[t]),270===h&&(n=e.getAbsolutePosition().x+P*i[t],o=e.getAbsolutePosition().y-I*s[t]),Math.abs(n-a[0].getAbsolutePosition().x)<15&&Math.abs(o-a[0].getAbsolutePosition().y)<15&&h===f&&("g_layer"===e.getParent().attrs.name||"g_layer"===a[0].getParent().attrs.name||e.getParent()!==a[0].getParent())&&Re(e,a[0],n,o))}function Qe(e){void 0!==e&&(e.setX(e.attrs.origX),e.setY(e.attrs.origY),e.setRotationDeg(0),e.moveToBottom(),e.setStrokeWidth(null),e.setStroke(null),e.setDraggable(!1),e.setImage(v[e.attrs.row][e.attrs.col]),T.draw(),e.disableShadow(),q&&document.getElementById("click_sound").play(),document.body.style.cursor="default",setTimeout((function(){(z+=1)===X*N&&(me.classList.add("dn"),q&&document.getElementById("ding_sound").play(),good())}),500))}function Me(){Ee&&localStorage.setItem("s_gold",ae.checked?"on":"off"),!0===ae.checked?(j=!0,V("img_easy").src="Images/easy_gold.svg",V("img_med").src="Images/medium_gold.svg",V("img_hard").src="Images/hard_gold.svg"):(j=!1,V("img_easy").src="Images/easy.svg",V("img_med").src="Images/medium.svg",V("img_hard").src="Images/hard.svg")}function Ce(){var e,n,o,a,s=0;for(e=1;e<5;e+=1)for(n=1;n<4;n+=1)o=Ee&&localStorage.getItem(t+e+Y+n)||0,s+=parseInt(o),o>0?((a=V("medal"+e+"-"+n)).classList.remove("dn"),a.src="Images/medal"+o+".svg",n<3&&(V("image"+e+"-"+(n+1)).classList.remove("locked"),V("lock"+e+"-"+(n+1)).classList.add("dn"))):(V("medal"+e+"-"+n).classList.add("dn"),n<3&&(V("image"+e+"-"+(n+1)).classList.add("locked"),V("lock"+e+"-"+(n+1)).classList.remove("dn")));36===s?(se.style.display="block",ae.checked=!0,Me(),ie.style.display="none"):(ie.style.display="block",ae.checked=!1,Me(),se.style.display="none")}function Fe(){var e,o;if(l=document.documentElement.clientHeight,g=document.documentElement.clientWidth,Y="",l>g&&(Y="p"),navigator.onLine){for(e=1;e<C+1;e+=1)for(o=1;o<4;o+=1)V("image"+e+"-"+o).src="Images/b.jpg";for(let e of document.querySelectorAll(".offline"))e.style.display="none";for(let e of document.querySelectorAll(".online"))e.style.display="block"}else{for(let e of document.querySelectorAll(".offline"))e.style.display="block";for(let e of document.querySelectorAll(".online"))e.style.display="none";k.slide(0,0)}t===n&&Y===m||(n=t,m=Y,Ce())}function Ye(e){var n;me.classList.remove("dn"),e&&(n=Ee&&localStorage.getItem(t+p+A+y)||0,parseInt(w)>parseInt(n)&&(Ee&&localStorage.setItem(t+p+A+y,w),Ce(),q&&document.getElementById("ding_sound").play())),document.getElementsByTagName("FIELDSET")[0].disabled=!1,we.classList.remove("swipe-out"),pe.classList.remove("swipe-in"),we.classList.add("swipe-out-right"),pe.classList.add("swipe-in-left"),Fe(),setTimeout((function(){Fe()}),500)}function Ne(e){var t;e.on("mouseover",(function(){(e.getDraggable()||e.getParent().getDraggable())&&H&&(document.body.style.cursor="pointer")})),e.on("click tap",(function(){!1!==Z&&((e.getDraggable()||e.getParent().getDraggable())&&H&&O&&u===T.getChildren().length-1?"g_layer"===e.getParent().attrs.name?(t=e.getRotation(),H=!1,new Kinetic.Tween({node:e,duration:.5,rotation:t+Math.PI/2,onFinish:function(){H=!0,360===e.getRotationDeg()&&e.setRotationDeg(0),e.fire("dragend")}}).play()):(t=e.getParent().getRotation(),H=!1,new Kinetic.Tween({node:e.getParent(),duration:.5,rotation:t+Math.PI/2,onFinish:function(){H=!0,360===e.getParent().getRotationDeg()&&e.getParent().setRotationDeg(0),e.fire("dragend")}}).play()):z===X*N?(H=!1,Ye(!0)):e.fire("dragend"))})),e.on("mousedown touchstart",(function(){Z=!0,setTimeout((function(){Z=!1}),500),b=e,(e.getDraggable()||e.getParent().getDraggable())&&H&&("g_layer"===e.getParent().attrs.name?(u=e.getZIndex(),e.moveToTop()):(u=e.getParent().getZIndex(),e.getParent().moveToTop()))})),e.on("dragend",(function(){(e.getDraggable()||e.getParent().getDraggable())&&H?function(e){var t,n,o;if(h="g_layer"===e.getParent().attrs.name?e.getRotationDeg():(e.getRotationDeg()+e.getParent().getRotationDeg())%360,Math.abs(e.getAbsolutePosition().x-e.attrs.origX)<15&&Math.abs(e.getAbsolutePosition().y-e.attrs.origY)<15&&0===h)if("g_layer"===e.getParent().attrs.name)Qe(e);else for(n=e.getParent().getChildren();n.length>0;)(o=n[0]).moveTo(T),Qe(o);else if("g_layer"===e.getParent().attrs.name)xe(e);else for(n=e.getParent().getChildren(),t=0;t<n.length;t+=1)xe(n[t])}(e):z===X*N&&(H=!1,Ye(!0))})),e.on("mouseout",(function(){document.body.style.cursor="default"})),T.add(e),T.draw(),S.draw()}function Xe(e){var t;if("Safari,5.1.7"===navigator.sayswho||"MSIE,9.0"===navigator.sayswho)return ve.src="Images/photo.svg",ye.innerHTML=document.webL10n.get("lb_own_img"),void _e(be);if((t=e.target.files[0]).type.match("image.*")){var n=new FileReader;n.onload=function(t){r=0,a=t.target.result,EXIF.getData("Images/b.jpg",(function(){ke||(r=EXIF.getTag(this,"Orientation"))})),V("image0-1").src="Images/b.jpg",V("imageOff").src="Images/b.jpg",Fe(),setTimeout((function(){Fe()}),500)},n.readAsDataURL(t)}}function ze(e){t=e,J.src="Images/b.jpg",R&&(V("select_theme").innerHTML=document.webL10n.get("lb_"+t)),Ee&&localStorage.setItem("s_theme",e),Fe()}function Ge(e){V("bullets0").src=0===e?"Images/bullets1o.svg":"Images/bullets0o.svg",1===e?V("bullets1").src="Images/bullets1.svg":(V("bullets1").src="Images/bullets0.svg",C=4,Fe()),V("bullets2").src=2===e?"Images/bullets1.svg":"Images/bullets0.svg",V("bullets3").src=3===e?"Images/bullets1.svg":"Images/bullets0.svg",V("bullets4").src=4===e?"Images/bullets1.svg":"Images/bullets0.svg",Array.from(V("slider_container").getElementsByTagName("BUTTON")).forEach((function(e){e.disabled=!0})),Array.from(V("nav"+k.getPos()).getElementsByTagName("BUTTON")).forEach((function(e){e.disabled=!1}))}function He(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return null!==t&&t[1]}var Oe,Ke,Ue,qe;oe.addEventListener("mouseup",(function(){void 0!==b&&"g_layer"!==b.getParent().attrs.name&&setTimeout((function(){b.fire("dragend")}),350)}),!1),oe.addEventListener("touchend",(function(){void 0!==b&&"g_layer"!==b.getParent().attrs.name&&setTimeout((function(){b.fire("dragend")}),350)}),!1),Array.from(document.getElementsByClassName("own-nav")).forEach((function(e){e.addEventListener("click",(function(){if("Safari,5.1.7"===navigator.sayswho||"MSIE,9.0"===navigator.sayswho)return ve.src="Images/photo.svg",ye.innerHTML=document.webL10n.get("lb_own_img"),void _e(be);"file"!==Ae.type?window.MozActivity&&(new MozActivity({name:"pick",data:{type:"image/jpeg"}}).onsuccess=function(){a=window.URL.createObjectURL(this.result.blob),V("image0-1").src=a,V("imageOff").src=a,Fe(),setTimeout((function(){Fe()}),500)}):Ae.click()}))})),window.onload=function(){W&&(W=!1,V("iInfo").addEventListener("click",(function(){_e(ue)})),V("iInfoClose").addEventListener("click",(function(){Ie(ue)})),V("iSettings").addEventListener("click",(function(){M||(M=!0,V("t_europe").src="Images/b.jpg",V("t_africa").src="Images/b.jpg",V("t_asia").src="Images/b.jpg",V("t_america").src="Images/b.jpg",V("t_animals").src="Images/b.jpg",V("t_flowers").src="Images/b.jpg",V("t_tricky").src="Images/b.jpg",V("t_mascha").src="Images/b.jpg",V("t_mascha2").src="Images/b.jpg",V("t_mascha3").src="Images/b.jpg",V("t_mascha4").src="Images/b.jpg",V("t_shrek").src="Images/b.jpg"),_e(he)})),V("iSettingsClose").addEventListener("click",(function(){Ie(he)})),fe.addEventListener("click",(function(){var e,t,n,o;e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,o=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen,e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?o.call(e):n.call(t)})),(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)||!0===navigator.standalone||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&fe.parentNode.removeChild(fe),V("iCloseHelp").addEventListener("click",(function(){Ie(be)})),be.addEventListener("click",(function(){V("iCloseHelp").classList.contains("dn")||Ie(be)})),V("bt_theme").addEventListener("click",(function(){document.getElementsByClassName("dropdown")[0].classList.toggle("show"),document.getElementsByClassName("icon")[0].classList.toggle("rotate")})),ae.addEventListener("change",e=>{Me()}),k=new Swipe(document.getElementById("image_slider"),{startSlide:1,callback:function(e,t){Ge(t)}}),document.getElementById("b_image_input").addEventListener("change",Xe,!1),Array.from(document.getElementsByClassName("list-button-33-sel")).forEach((function(e){e.addEventListener("click",(function(){event,Array.from(event.target.parentNode.getElementsByClassName("list-button-33-sel")).forEach((function(e){e.classList.remove("selected")})),event.target.classList.add("selected")}))})),re.addEventListener("click",(function(e){k.prev(),e.preventDefault()})),ge.addEventListener("click",(function(e){k.next(),e.preventDefault()})),le.addEventListener("click",(function(){w="1",l>g?j?(N=9,X=6):(N=3,X=2):j?(N=6,X=9):(N=2,X=3),De()})),ce.addEventListener("click",(function(){w="2",l>g?j?(N=12,X=8):(N=6,X=4):j?(N=8,X=12):(N=4,X=6),De()})),de.addEventListener("click",(function(){w="3",l>g?j?(N=18,X=12):(N=8,X=5):j?(N=12,X=18):(N=5,X=8),De()}))
,
setTimeout(() =>{ce.click()}, 10),
setTimeout(() =>{localStorage.removeItem(e)}, 10)
,me.addEventListener("click",(function(){})),V("s_mascha").addEventListener("click",(function(){(x+=1)>2&&(Array.from(document.getElementsByClassName("t_mascha")).forEach((function(e){e.classList.remove("dn")})),Ee&&localStorage.setItem("s_mascha","true"))})),V("s_grrd").addEventListener("click",(function(){(Q+=1)>5&&(V("t_shrek").parentNode.classList.remove("dn"),V("favicon").href="Images/favicon_dark.ico",Ee&&localStorage.setItem("s_shrek","true"))})),Array.from(document.getElementsByClassName("dropdown"))[0].childNodes.forEach((function(e){e.addEventListener("click",(function(){ze(e.getElementsByTagName("img")[0].getAttribute("alt")),document.getElementsByClassName("dropdown")[0].classList.remove("show"),document.getElementsByClassName("icon")[0].classList.remove("rotate")}))})),Ee?(null===localStorage.getItem("s_back_g_grid")?$.checked=!0:$.checked="on"===localStorage.getItem("s_back_g_grid"),null===localStorage.getItem("s_backg_image")?ee.checked=!0:ee.checked="on"===localStorage.getItem("s_backg_image"),null===localStorage.getItem("s_rotate")?te.checked=!1:te.checked="on"===localStorage.getItem("s_rotate"),null===localStorage.getItem("s_sound")?ne.checked=!0:ne.checked="on"===localStorage.getItem("s_sound"),null===localStorage.getItem("s_gold")?(ae.checked=!1,Me()):(ae.checked="on"===localStorage.getItem("s_gold"),Me()),null===localStorage.getItem("s_theme")?ze("animals"):ze(localStorage.getItem("s_theme"))):($.checked=!0,ee.checked=!0,te.checked=!1,ne.checked=!0,ae.checked=!1,Me(),ze("animals")),("true"===(e=He("mascha"))||Ee&&"true"===localStorage.getItem("s_mascha"))&&(Array.from(document.getElementsByClassName("t_mascha")).forEach((function(e){e.classList.remove("dn")})),Ee&&localStorage.setItem("s_mascha","true")),("true"===(e=He("shrek"))||Ee&&"true"===localStorage.getItem("s_shrek"))&&(V("t_shrek").parentNode.classList.remove("dn"),V("favicon").href="Images/favicon_dark.ico",Ee&&localStorage.setItem("s_shrek","true")),(e=He("theme"))&&ze(e),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(re.style.display="none",ge.style.display="none"),Ge(1),Fe(),setTimeout((function(){Fe()}),500))},window.addEventListener("resize",(function(){Fe()})),document.addEventListener("fullscreenchange",(function(){Pe()})),document.addEventListener("mozfullscreenchange",(function(){Pe()})),document.addEventListener("webkitfullscreenchange",(function(){Pe()})),document.addEventListener("msfullscreenchange",(function(){Pe()})),document.onkeydown=function(e){switch(e.key){case"ArrowLeft":0===document.getElementsByClassName("popup-show").length&&k.prev();break;case"ArrowRight":0===document.getElementsByClassName("popup-show").length&&k.next();break;case"Escape":document.getElementsByClassName("popup-show").length>0?(Ie(ue),Ie(he),Ie(be)):!0===pe.classList.contains("swipe-in")&&(H=!1,Ye(!1))}},navigator.sayswho=(Oe=navigator.appName,Ke=navigator.userAgent,Ue=Ke.match(/version\/([.\d]+)/i),(qe=Ke.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i))&&null!==Ue&&(qe[2]=Ue[1]),qe=qe?[qe[1],qe[2]]:[Oe,navigator.appVersion,"-?"]),document.webL10n.ready((function(){R=!0,(e=He("lang"))&&e!==document.webL10n.getLanguage()&&(document.webL10n.setLanguage(e),R=!1)})),document.addEventListener("localized",(function(){R&&(document.documentElement.lang=document.webL10n.getLanguage().substr(0,2),document.querySelector("meta[name='description']").setAttribute("content",document.webL10n.get("lb_desc")),document.querySelector("link[rel='manifest']").href="Manifest/appmanifest_"+document.webL10n.getLanguage().substr(0,2)+".json",document.querySelector("link[rel='canonical']")&&(document.querySelector("link[rel='canonical']").href="https://github/?lang="+document.webL10n.getLanguage().substr(0,2)),V("select_theme").innerHTML=document.webL10n.get("lb_"+t),V("imageOff").setAttribute("alt",document.webL10n.get("lb_image")),V("image0-1").setAttribute("alt",document.webL10n.get("lb_image")),L||(ve.src="Images/piece_gold.svg",ye.innerHTML=document.webL10n.get("lb_html5"),_e(be)),setTimeout((function(){new Date("05/01/2020")>new Date&&"africa"!==t&&Ee&&"africa"!==localStorage.getItem("s_new_theme")&&(ve.src="Images/b.jpg",ye.innerHTML=document.webL10n.get("lb_new_theme")+" "+document.webL10n.get("lb_africa"),_e(be),localStorage.setItem("s_new_theme","animals"))}),500)),R=!0}))}();
function good(){
let timmr2 = 1;
sessionStorage.setItem("timmrj", JSON.stringify(timmr2));
localStorage.setItem("timmrj", JSON.stringify(timmr2));
//alert ("8")
let saveg =JSON.parse(localStorage.getItem("saveg"));


setTimeout(function(){

document.querySelector(".popup-image").style.display = "block";
       document.querySelector(".popup-image img").style.width = "100%";
document.querySelector(".popup-image img").style.height = "100%";  document.querySelector(".popup-image img").src = "../b3.png";
document.querySelector(".popup-image span").onclick = () =>{
   location=("../saw/index.html"); document.querySelector(".popup-image").style.display = "none";
}
  },100)
}


function ovrpop(){


    
}