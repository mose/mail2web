function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function addTo(el, txt) {
  el.insertAdjacentHTML("beforeend", txt);
}

function build_nav(els) {
  var navitems = document.querySelector('ul.nav');
  if (els.length === 0) {
    addTo(navitems, '<li>' + item + '</li>')
  } else {
    Array.prototype.forEach.call(els, (item, k) => {
      addTo(navitems, '<li>' + item + '</li>')
    });
  }
}

ready( () => {

  fetch('json/dirs.json', { mode: 'no-cors' }).
    then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return [];
      }
    }).
    then(els => {
      build_nav(els);
    })

});
