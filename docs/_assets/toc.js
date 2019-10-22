var log = console.log

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

var setAttrs = function(overwrite, prefix) {
  return function(src, target, index) {
    var content = src.innerHTML;

    // Use this to clip text w/ HTML in it.
    // https://github.com/arendjr/text-clipper
    target.innerHTML = content;
    target.href = src.firstChild.href;
    target.setAttribute('class', 'anchor')
  };
};

var buildTOC = function(options) {
  var selector = options.selector;
  var scope = options.scope;
  var ret = document.createElement('ul');
  var wrapper = ret;
  var lastLi = null;

  var _setAttrs = setAttrs(options.overwrite, options.prefix);

  getHeaders(selector, scope).reduce(function(prev, cur, index) {
    var currentLevel = getLevel(cur.tagName);
    var offset = currentLevel - prev;

    if (offset > 0) {
      wrapper = createList(lastLi, offset);
    }

    if (offset < 0) {
      wrapper = jumpBack(wrapper, -offset * 2);
    }

    wrapper = wrapper || ret;

    var li = document.createElement('li');
    var a = document.createElement('a');

    _setAttrs(cur, a, index);

    wrapper.appendChild(li).appendChild(a);

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
    var nav = window.Docsify.dom.find(".nav");

    if (nav) {
    	const toc = initTOC({
		    selector: 'h1, h2, h3, h4, h5, h6',
		    scope: 'body',
		    overwrite: false,
		    prefix: 'toc'
			});

			var title = document.createElement('p');
			title.innerHTML = 'Contents';
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