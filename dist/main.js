(()=>{"use strict";(e=>{document.getElementById("timer");const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),c=function(e){return e<10?"0"+e:e},l=()=>{let e=(new Date("08 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:c(Math.floor(e/60/60)),minutes:c(Math.floor(e/60%60)),seconds:c(Math.floor(e%60))}},a=()=>{let e=l();e.timeRemaining<0?(t.textContent=c(0),n.textContent=c(0),r.textContent=c(0)):(t.textContent=e.hours,n.textContent=e.minutes,r.textContent=e.seconds)};l().timeRemaining>0&&setInterval(a,1e3),a()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),r=document.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),r.forEach((e=>{e.addEventListener("click",c)}))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-close"),n=document.querySelectorAll(".popup-btn");let r,c=!1;const l=()=>{document.documentElement.clientWidth>=768?(()=>{e.style.display="block",e.style.transform="translateX(-100%)";let t=-100;c?clearInterval(r):r=setInterval((()=>{let n=(t+=2,{count:t});n.count<=0?e.style.transform=`translateX(${n.count}%)`:(c=!0,clearInterval(r))}),10)})():e.style.display="block"};n.forEach((e=>e.addEventListener("click",l))),t.addEventListener("click",(()=>{e.style.display="none",c=!1}))})(),document.querySelector(".calc-block").querySelectorAll("input").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),(()=>{const e=document.querySelectorAll("form[name='user_form']"),t=document.querySelector("input[placeholder='Ваше сообщение']"),n=/([^а-яА-Я-\s]+)/,r=/([^a-zA-Z-\@\_\.\!\~\*\'\s]+)/,c=/([^0-9\(\)\-])/;t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")})),e.forEach((e=>{const t=e.querySelector("input[name='user_name']"),l=e.querySelector("input[name='user_email']"),a=e.querySelector("input[name='user_phone']");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(r,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(c,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e==r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();