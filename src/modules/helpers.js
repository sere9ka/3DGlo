function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

function getFormId(e) {
  const forms = document.querySelectorAll('form')

  forms.forEach(form => {
    if (e.id === form.id) {
      let formId = form.id
      return formId
    }
  })
}

export { animate, getFormId }