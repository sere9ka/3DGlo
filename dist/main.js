(()=>{"use strict";function e({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function r(a){let c=(a-n)/o;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(r)}))}const t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("Верните форму на место! =)");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),r=new FormData(o),a={};var c;n.textContent="Загрузка...",o.append(n),r.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Наш менеджер свяжется с Вами!",o.append(n),e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка"}))})()}))}catch(e){console.log(e.message)}};(e=>{document.getElementById("timer");const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=function(e){return e<10?"0"+e:e},a=()=>{let e=(new Date("20 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:r(Math.floor(e/60/60)),minutes:r(Math.floor(e/60%60)),seconds:r(Math.floor(e%60))}},c=()=>{let e=a();e.timeRemaining<0?(t.textContent=r(0),o.textContent=r(0),n.textContent=r(0)):(t.textContent=e.hours,o.textContent=e.minutes,n.textContent=e.seconds)};a().timeRemaining>0&&setInterval(c,1e3),c()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".close-btn"),o=document.querySelector("body"),n=()=>{e.classList.toggle("active-menu")};o.addEventListener("click",(o=>{o.target.closest(".menu")||o.target===t?n():o.target.closest("menu")?o.target.matches("a")&&n():e.classList.contains("active-menu")&&n()}))})(),(()=>{const t=document.querySelector(".popup"),o=(t.querySelector(".popup-close"),document.querySelectorAll(".popup-btn"),document.querySelector(".service"));let n=!1;o.addEventListener("click",(o=>{o.target.closest(".popup-btn")&&(document.documentElement.clientWidth>=768?(t.style.display="block",t.style.transform="translateX(-100%)",e({duration:500,timing:e=>e,draw(e){t.style.transform=`translateX(${100*e-100}%)`}})):t.style.display="block")})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",n=!1)}))})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");l.textContent=0;const s=(i=()=>{(()=>{const o=+n.options[n.selectedIndex].value,s=+r.value;let i=0,u=1,d=1;a.value>1&&(u+=a.value/10),c.value&&c.value<5?d=2:c.value&&c.value<10&&(d=1.5),i=n.value&&r.value?Math.round(t*o*s*u*d):0,e({duration:1e3,timing:e=>e,draw(e){l.textContent=Math.round(e*i)}})})()},300,function(){var e=this,t=arguments,o=function(){d=null,i.apply(e,t)},n=u;clearTimeout(d),d=setTimeout(o,300),n&&i.apply(e,t)});var i,u,d;o.addEventListener("input",(e=>{e.target!==n&&e.target!==r&&e.target!==a&&e.target!==c||(clearInterval(void 0),s())}))})(100),(()=>{const e=document.querySelectorAll("form[name='user_form']"),t=document.querySelector("input[placeholder='Ваше сообщение']"),o=/([^а-яА-Я-\s]+)/,n=/([^a-zA-Z-\@\_\.\!\~\*\'\s]+)/,r=/([^0-9\(\)\-\+])/;t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),e.forEach((e=>{const t=e.querySelector("input[name='user_name']"),a=e.querySelector("input[name='user_email']"),c=e.querySelector("input[name='user_phone']");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(r,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e==n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,r=0,a=0;const c=()=>{if(a=document.querySelectorAll(".dot"),a.length<t.length){const e=document.createElement("li");e.classList.add("dot"),a.length<1&&e.classList.add("dot-active"),o.append(e),c()}},l=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},i=()=>{l(t,r,"portfolio-item-active"),l(a,r,"dot-active"),r++,r>=t.length&&(r=0),s(t,r,"portfolio-item-active"),s(a,r,"dot-active")},u=(e=1500)=>{c(),n=setInterval(i,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,r,"portfolio-item-active"),l(a,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.matches(".dot")&&a.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),s(t,r,"portfolio-item-active"),s(a,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),u(2e3)})(),document.querySelectorAll("form").forEach(((e,o)=>{e.querySelector("button").addEventListener("click",(async()=>{t({formId:`form${o+1}`,someElem:[{type:"block",id:"total"}]})}))}))})();