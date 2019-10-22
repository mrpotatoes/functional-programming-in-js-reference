var defaultOptions = {
  selector: '.markdown-section h1, h2, h3, h4, h5, h6',
  scope: 'body',
  overwrite: true,
  prefix: 'toc',

  // To make work
  title: 'Table of Contents',
  listType: 'ul',  
}

var getHeaders = function(selector, scope) {
  var ret = [];
  var target = document.querySelectorAll(scope);

  Array.prototype.forEach.call(target, function(elem) {
    var elems = elem.querySelectorAll(selector);
    ret = ret.concat(Array.prototype.slice.call(elems));
  });

  if (ret.length <= 1) {
    return []
  }

  return ret;
};

var getLevel = function(header) {
  if (typeof header !== 'string') {
    return 0;
  }

  var decs = header.match(/\d/g);
  return decs ? Math.min.apply(null, decs) : 1;
};

var createList = function(wrapper, count) {
  while (count--) {
    wrapper = wrapper.appendChild(
      document.createElement('ul')
    );

    if (count) {
      wrapper = wrapper.appendChild(
        document.createElement('li')
      );
    }
  }

  return wrapper;
};

var jumpBack = function(currentWrapper, offset) {
  while (offset--) {
    currentWrapper = currentWrapper.parentElement;
  }

  return currentWrapper;
};

var tocHeading = function(Title) {
  return document.createElement('h2').appendChild(
  	document.createTextNode(Title)
	)
}

var aTag = function(src) {
  var a = document.createElement('a');
  var content = src.firstChild.innerHTML;

  // Use this to clip text w/ HTML in it.
  // https://github.com/arendjr/text-clipper
  a.innerHTML = content;
  a.href = src.firstChild.href;

  // In order to remove this gotta fix the styles.
  a.setAttribute('class', 'anchor');

  return a
};

var buildTOC = function(options) {
  var selector = options.selector;
  var scope = options.scope;
  var ret = document.createElement('ul');
  var wrapper = ret;
  var lastLi = null;

  getHeaders(selector, scope).reduce(function(prev, curr, index) {
    var currentLevel = getLevel(curr.tagName);
    var offset = currentLevel - prev;

    if (offset > 0) {
      wrapper = createList(lastLi, offset);
    }

    if (offset < 0) {
      wrapper = jumpBack(wrapper, -offset * 2);
    }

    wrapper = wrapper || ret;

    var li = document.createElement('li');

    wrapper.appendChild(li).appendChild(aTag(curr));

    lastLi = li;

    return currentLevel;
  }, getLevel(selector));

  return ret;
};

var initTOC = function(options) {
  var defaultOpts = {
    selector: '.markdown-section h1, h2, h3, h4, h5, h6',
    scope: 'body',
    overwrite: true,
    prefix: 'toc',

    // To make work
    title: 'Table of Contents',
    listType: 'ul',
  };

  // Do this better.
  options = defaultOpts

  // options = extendObj(defaultOpts, options);

  var selector = options.selector;

  if (typeof selector !== 'string') {
    throw new TypeError('selector must be a string');
  }

  // This check shouldn't matter.
  // if (!selector.match(/^(?:h[1-6],?\s*)+$/g)) {
  //   throw new TypeError('selector must contains only h1-6');
  // }

  var currentHash = location.hash;

  if (currentHash) {
    setTimeout(function() {
      var anchor = document.getElementById(currentHash.slice(1));
      if (anchor) anchor.scrollIntoView();
    }, 0);
  }

  return buildTOC(options);
};

// Docsify plugin functions
function plugin(hook, vm) {
  hook.mounted(function () {
    var content = window.Docsify.dom.find(".content");
    if (content) {
      var nav = window.Docsify.dom.create("aside", "");
      window.Docsify.dom.toggleClass(nav, "add", "nav");
      window.Docsify.dom.before(content, nav);
    }
  });

  hook.doneEach(function () {
    var nav = document.querySelectorAll('.nav')[0]

    if (nav) {
    	const toc = initTOC({
		    selector: 'h1, h2, h3, h4, h5, h6',
		    scope: 'body',
		    overwrite: false,
		    prefix: 'toc',
			});

      // Just unset it for now.
      if (!toc.innerHTML) {
        nav.innerHTML = null
        return;
      }

      // Fix me in the future
			var title = document.createElement('p');
			title.innerHTML = 'Table of Contents';
			title.setAttribute('class', 'title');

			var container = document.createElement('div');
			container.setAttribute('class', 'page_toc');
			
			container.appendChild(title);
			container.appendChild(toc);

      nav.innerHTML = container.outerHTML;
    }
  });
}

// Docsify plugin options
window.$docsify['toc'] = Object.assign(defaultOptions, window.$docsify['toc']);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);