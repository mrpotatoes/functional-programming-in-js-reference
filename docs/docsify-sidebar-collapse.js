let collapse_sidebar = function(hook, vm) {

  // Invoked each time after the data is fully loaded, no arguments
  hook.doneEach(function() {
    let elems = document.querySelectorAll('.sidebar-nav > ul > li > p');

    for (var i = 0; i < elems.length; i++) {
      let parent = elems[i];

      // Ignores if the element has a link
      if (parent.children.length > 0) {
        continue;
      }

      let index = i + 1;
      let children = document.querySelector('.sidebar-nav > ul > li:nth-child(' + index + ') > ul');

      // Verifies if any child is opened
      const current_url = RegExp("#.*").exec(window.location.href);
      // const query = ".sidebar-nav > ul > li:nth-child(" + index + ") > ul [href='" + current_url + "']"
      const query = ".sidebar-nav [href='" + current_url + "']"
      const is_opened = document.querySelector(query)

      console.log(is_opened.innerText)

      // Sets class for opened and closed items
      if (!is_opened) {
        children.style.display = "block";
        parent.className = 'SideBarCollapse-ItemOpened';
      } else {
        children.style.display = "none";
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

window.$docsify.plugins = [].concat(collapse_sidebar, window.$docsify.plugins)