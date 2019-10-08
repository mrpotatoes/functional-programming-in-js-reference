let collapse_sidebar = function(hook, vm) {
  // Invoked each time after the data is fully loaded, no arguments
  hook.doneEach(function() {
    let elems = document.querySelectorAll('.sidebar .sidebar-nav > ul > li > p')
    let url = '' + RegExp("#.*").exec(window.location.href)
    let next = url.indexOf('?')
    url = url.substring(0, next != -1 ? next : url.length)

    for (var i = 0; i < elems.length; i++) {
      let parent = elems[i];

      // Ignores if the element has a link
      if (parent.children.length > 0) {
        continue;
      }

      let index = i + 1;
      let children = document.querySelector('.sidebar .sidebar-nav > ul > li:nth-child(' + index + ') > ul');

      // Verifies if any child is opened
      const query = ".sidebar .sidebar-nav > ul > li:nth-child(" + index + ") > ul [href='" + url + "']"
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
