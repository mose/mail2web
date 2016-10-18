function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function show_dir(focus) {
  var all_dirs = document.querySelectorAll('ul.nav li ul');
  Array.prototype.forEach.call(all_dirs, (el, k) => {
    el.parentNode.removeChild(el);
  });
  var ulwrap = document.createElement('ul');
  fetch('json/' + focus.id + '.json').
    then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return {};
      }
    }).
    then(els => {
      Array.prototype.forEach.call(Object.keys(els), (item, k) => {
        var it = els[item];
        var itemli = document.createElement('li');
        var itemlink = document.createElement('a');
        itemlink.href = 'mails/' + it.id + '.html';
        itemlink.target = 'content';
        itemlink.textContent = it.subject;
        itemlink.title = it.date + ' from ' + it.from;
        itemli.appendChild(itemlink);
        ulwrap.appendChild(itemli);
      });
      focus.appendChild(ulwrap);
    });
}

function build_nav(els) {
  var navitems = document.querySelector('ul.nav');
  if (els.length === 0) {
    msg = document.createElement('li');
    msg.textContent = 'Nothing yet';
    navitems.appendChild(msg);
  } else {
    Array.prototype.forEach.call(els, (item, k) => {
      var dirlink = document.createElement('li');
      dirlink.id = item;
      dirlink.textContent = item;
      navitems.appendChild(dirlink);
      dirlink.addEventListener('click', (ev) => {
        show_dir(dirlink);
      });
    });
  }
}

ready( () => {

  fetch('json/dirs.json').
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
