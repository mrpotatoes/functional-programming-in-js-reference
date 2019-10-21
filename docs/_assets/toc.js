// Fav so far: https://www.cssscript.com/demo/generating-a-table-of-contents-with-pure-javascript-toc/
//    - Cleanest looking code
//    - Doesn't work right out of the box
//    - Needs some cleanup
// https://hooshmand.net/quick-hack-add-a-dynamic-table-of-contents-to-a-ghost-blog/
//    - Works right out of the box
//    - Not an expression/isn't pure
//    - Doesn't use Document.createElement()
//    - Doens't handle the h1 case
// https://stackoverflow.com/questions/43356176/parse-markdown-headings-to-generate-a-nested-list-in-javascript
// t.ly/E35VB
// t.ly/qvDWD
// https://github.com/jgallen23/toc
// http://loyc.net/2014/javascript-toc.html
// https://codepen.io/lehollandaisvolant/pen/wJgGdR

var defaultOptions = {
  tocMaxLevel: 3,
  target: 'h2, h3',
}

// To collect headings and then add to the page ToC
function pageToC(headings, path) {
  var list = [];
  var toc = ['<div class="page_toc">', '<p class="title">Contents</p>'];
  var headingSelector =  '.markdown-section ' + window.$docsify["page-toc"].target
  console.log(headingSelector)
  headings = document.querySelectorAll(headingSelector);

  if (headings) {
    headings.forEach(function (heading) {
      var item = generateToC(heading.tagName.replace(/h/gi, ""), heading.innerHTML)
      if (item) {
        list.push(item)
      }
    });
  }

  if (list.length > 0) {
    toc = toc.concat(list);
    toc.push("</div>");
    return toc.join("");
  } else {
    return "";
  }
}

// To generate each ToC item
function generateToC(level, html) {
  if (level > 0 && level <= window.$docsify["page-toc"].tocMaxLevel) {
    return ['<div class="lv' + level + '">', html, "</div>"].join("");
  }
  return "";
}

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
      nav.innerHTML = pageToC().trim();
      if (nav.innerHTML == "") {
        window.Docsify.dom.toggleClass(nav, "add", "nothing");
      } else {
        window.Docsify.dom.toggleClass(nav, "remove", "nothing");
      }
    }
  });
}

// Docsify plugin options
window.$docsify["page-toc"] = Object.assign(defaultOptions, window.$docsify["page-toc"]);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);