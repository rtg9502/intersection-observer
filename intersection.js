const last = document.querySelector('#last');

function load(count) {
  for(let i = count - 10 + 1; i <= count; i++) {
    const el = document.createElement('div');
    el.style.cssText = 'height: 100px; border: solid 1px; margin: 10px';
    el.className = 'el';
    el.innerText = i;
    el.setAttribute('ord', i);

    last.before(el);
  }
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.0
}

load(10);

const observer = new IntersectionObserver((entries, observe) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio) {
      const elements = document.querySelectorAll('.el');
      const lastEl = Array.from(elements).pop();
      const ord = parseInt(lastEl.getAttribute('ord'), 10);

      load(ord + 10);
    }
  })
}, options);

observer.observe(last);



