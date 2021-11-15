(()=>{"use strict";function e({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function r(a){let l=(a-n)/o;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(r)}))}const t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=o.querySelector(".status"),r=()=>{n.style.display="none"};try{if(!o)throw new Error("Верните форму на место! =)");(()=>{const a=o.querySelectorAll("input"),l=new FormData(o),c={};var s;"form3"===e&&(n.style.color="#19b5fe"),n.textContent="Загрузка...",n.style.display="block",l.forEach(((e,t)=>{c[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?c[e.id]=t.textContent:"input"===e.type&&(c[e.id]=t.value)})),(e=>{let t;const r=o.querySelector('[name="user_email"]'),a=o.querySelector('[name="user_phone"]');return""===r.value?n.textContent="Введите e-mail!":a.value.length<11||a.value.length>16?n.textContent="Введите правильный номер из 11 цифр! Формат ввода: 8(000)000-00-00":t=!0,t})()&&(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.textContent="Спасибо! Наш менеджер свяжется с Вами!",setTimeout(r,8e3),a.forEach((e=>{e.value=""}))})).catch((e=>{"Failed to fetch"===e.message&&(e.message="Данные не отправились, ошибка подключения"),n.textContent=e.message}))})(),setTimeout(r,8e3)}catch(e){}};(e=>{document.getElementById("timer");const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=function(e){return e<10?"0"+e:e},a=()=>{let e=(new Date("20 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:r(Math.floor(e/60/60)),minutes:r(Math.floor(e/60%60)),seconds:r(Math.floor(e%60))}},l=()=>{let e=a();e.timeRemaining<0?(t.textContent=r(0),o.textContent=r(0),n.textContent=r(0)):(t.textContent=e.hours,o.textContent=e.minutes,n.textContent=e.seconds)};a().timeRemaining>0&&setInterval(l,1e3),l()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".close-btn"),o=document.querySelector("body"),n=document.querySelector("main a"),r=()=>{e.classList.toggle("active-menu")};o.addEventListener("click",(o=>{o.target.closest(".menu")?r():o.target===t?(o.preventDefault(),r()):o.target.closest("menu")?(o.preventDefault(),document.querySelector(o.target.hash).scrollIntoView(),o.target.matches("a")&&r()):e.classList.contains("active-menu")?(o.preventDefault(),document.querySelector(o.target.hash).scrollIntoView(),r()):o.target.closest("main a")&&(o.preventDefault(),document.querySelector(n.hash).scrollIntoView())}))})(),(()=>{const t=document.querySelector(".popup"),o=(t.querySelector(".popup-close"),document.querySelectorAll(".popup-btn"),document.querySelector(".service"));let n=!1;o.addEventListener("click",(o=>{o.target.closest(".popup-btn")&&(document.documentElement.clientWidth>=768?(t.style.display="block",t.style.transform="translateX(-100%)",e({duration:500,timing:e=>e,draw(e){t.style.transform=`translateX(${100*e-100}%)`}})):t.style.display="block")})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",n=!1)}))})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.getElementById("total");c.textContent=0;const s=(u=()=>{(()=>{const o=+n.options[n.selectedIndex].value,s=+r.value;let u=0,i=1,d=1;a.value>1&&(i+=a.value/10),l.value&&l.value<5?d=2:l.value&&l.value<10&&(d=1.5),u=n.value&&r.value?Math.round(t*o*s*i*d):0,e({duration:1e3,timing:e=>e,draw(e){c.textContent=Math.round(e*u)}})})()},300,function(){var e=this,t=arguments,o=function(){d=null,u.apply(e,t)},n=i;clearTimeout(d),d=setTimeout(o,300),n&&u.apply(e,t)});var u,i,d;o.addEventListener("input",(e=>{e.target!==n&&e.target!==r&&e.target!==a&&e.target!==l||(clearInterval(void 0),s())}))})(100),(()=>{const e=document.querySelectorAll("form[name='user_form']"),t=document.querySelector("input[placeholder='Ваше сообщение']"),o=/([^а-яА-Я-\s]+)/,n=/([^a-zA-Z-\@\_\.\!\~\*\'\s]+)/,r=/([^0-9\(\)\-\+])/;t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),e.forEach((e=>{const t=e.querySelector("input[name='user_name']"),a=e.querySelector("input[name='user_email']"),l=e.querySelector("input[name='user_phone']");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(r,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e==n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,r=0,a=0;const l=()=>{if(a=document.querySelectorAll(".dot"),a.length<t.length){const e=document.createElement("li");e.classList.add("dot"),a.length<1&&e.classList.add("dot-active"),o.append(e),l()}},c=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},u=()=>{c(t,r,"portfolio-item-active"),c(a,r,"dot-active"),r++,r>=t.length&&(r=0),s(t,r,"portfolio-item-active"),s(a,r,"dot-active")},i=(e=1500)=>{l(),n=setInterval(u,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,r,"portfolio-item-active"),c(a,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.matches(".dot")&&a.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),s(t,r,"portfolio-item-active"),s(a,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),document.querySelectorAll("form").forEach(((e,o)=>{const n=document.createElement("div");n.classList.add("status"),e.append(n),e.addEventListener("submit",(e=>{e.preventDefault(),t({formId:`form${o+1}`,someElem:[{type:"block",id:"total"}]})}))}))})();