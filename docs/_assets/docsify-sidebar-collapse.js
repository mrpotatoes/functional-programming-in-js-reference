log = console.log

var selector = '.markdown-section h1, h2, h3, h4, h5, h6'

var setActive = function(e) {
  var href = window.location.href;
  var end = (href.indexOf('?') !== -1) ? href.indexOf('?') : href.length;
  var url = href.substring(0, end);
  var tags = document.querySelectorAll('.sidebar a')

  for (var i = 0; i < tags.length; i++) {
    if (tags[i].href === url) {
      tags[i].parentNode.setAttribute('class', 'active');
    }
  }
}

var collapse_sidebar = function(hook, vm) {
  // hook.afterEach(function(html) {
  //   var links = document.querySelectorAll('.markdown-section h1, h2, h3, h4, h5, h6')

  //   for (var link of links) {
  //     link.addEventListener('click', setActive)
  //   }
  // });

  // Invoked each time after the data is fully loaded, no arguments
  hook.doneEach(function() {
    var links = document.querySelectorAll(selector)

    for (var link of links) {
      link.addEventListener('click', setActive)
    }

    var elems = document.querySelectorAll('.sidebar .sidebar-nav > ul > li > p')
    var hash = '' + RegExp("#.*").exec(window.location.href);
    var next = hash.indexOf('?');
    var route = hash.substring(0, next != -1 ? next : hash.length);
    

    for (var i = 0; i < elems.length; i++) {
      var parent = elems[i];

      // Ignores if the element has a link
      if (parent.children.length > 0) {
        continue;
      }

      var index = i + 1;
      let children = document.querySelector('.sidebar .sidebar-nav > ul > li:nth-child(' + index + ') > ul');

      // Verifies if any child is opened
      const query = ".sidebar .sidebar-nav > ul > li:nth-child(" + index + ") > ul [href='" + route + "']"
      const is_opened = document.querySelector(query)

      // Sets class for opened and closed items
      if (is_opened) {
        children.style.display = 'block';
        parent.className = 'SideBarCollapse-ItemOpened';
      } else {
        children.style.display = 'none';
        parent.className = 'SideBarCollapse-ItemClosed';
      }

      // Creates link for parent items
      var node = document.createElement('a');
      node.innerText = parent.innerText;
      node.href = "javascript:void(0)";
      parent.innerText = "";
      parent.appendChild(node);

      // Adds click listener
      parent.addEventListener('click',
        function() {
          if (parent.className === "SideBarCollapse-ItemClosed") {
            parent.className = 'SideBarCollapse-ItemOpened';
            children.style.display = "block";
          } else if (parent.classList.contains("SideBarCollapse-ItemOpened")) {
            parent.className = 'SideBarCollapse-ItemClosed';
            children.style.display = "none";
          }
        }
      );
    }
  });
}

// console.log('test 5')
window.$docsify.plugins = [].concat(collapse_sidebar, window.$docsify.plugins)
