(()=>{"use strict";(e=>{document.getElementById("timer");const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=function(e){return e<10?"0"+e:e},l=()=>{let e=(new Date("08 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:r(Math.floor(e/60/60)),minutes:r(Math.floor(e/60%60)),seconds:r(Math.floor(e%60))}},s=()=>{let e=l();e.timeRemaining<0?(t.textContent=r(0),n.textContent=r(0),o.textContent=r(0)):(t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds)};l().timeRemaining>0&&setInterval(s,1e3),s()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),o=document.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>{e.addEventListener("click",r)}))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-close"),n=document.querySelectorAll(".popup-btn"),o=()=>{e.style.display="block",e.style.transform="translateX(-100%)";let t=-100,n=e.style.transform;e.style.transform=n,0!=n&&setInterval((()=>{t++,n=`translateX(${t}%)`,e.style.transform=n,console.log(n)}),100)};n.forEach((e=>{e.addEventListener("click",o)})),t.addEventListener("click",(()=>{e.style.display=""}))})()})();