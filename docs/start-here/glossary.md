# Glossary

<script>
	function tags(tags, cell) {
		for (var tag of tags) {
			var span = document.createElement('span')
			var tagText = document.createTextNode(tag)
			span.appendChild(tagText)
			span.setAttribute('class', 'tag')
			cell.appendChild(span)
		}
	}

	function links(hrefs, cell) {
		for (var href of hrefs) {
			var span = document.createElement('span')
			var a = document.createElement('a')
			var hrefText = document.createTextNode(href)
			span.style.display = 'block'
			a.href = href
			a.appendChild(hrefText)
			span.appendChild(a)
			cell.appendChild(span)
		}
	}

	function filterGlossary(glossary, heading, filter) {

	}

	function sortGlossary(glossary, heading) {
		glossary.sort(function (a, b) {
		  if (a[heading] > b[heading]) {
        return 1;
	    }
	    
	    if (b[heading] > a[heading]) {
	    	return -1;
	    }

	    return 0;
		})
	}

	// Working with plain document.* in javascript is tedious. So this ain't gonna be efficent.
	function tableize(data) {
		// 0. Set some variables.
		var headings = ['Term', 'Definition', 'Aliases', 'References']

		// 1. Sort data by term name.
		sortGlossary(data, 'term')

		// 2. Get the table DOM Object.
		var table = document.getElementById('data-table');
		var thead = table.createTHead();
  	var row = thead.insertRow();

  	// 3. Create the headings for the table.
  	for (var key of headings) {
	    var th = document.createElement('th')
	    th.appendChild(document.createTextNode(key))
	    row.appendChild(th)
	  }

	  // 4. Now do the same with the data tho.
	  for (var element of data) {
	    var row = table.insertRow();

	    // 4a. Term
	    var cell = row.insertCell();
      var text = document.createTextNode(element.term);
      cell.appendChild(text);

      // 4b. Definition text.
      var cell = row.insertCell();
      var def = document.createElement('span')
      def.innerHTML = marked(element.definition || '')
      // var text = document.createTextNode(element.definition || '');
      cell.appendChild(def);

      // 4c. Aliases array.
      var cell = row.insertCell();
      var aliases = element.aliases || []
      tags(aliases, cell)
      
      // 4d. References array.
      var cell = row.insertCell();
      var refs = element.references || []
      links(refs, cell)
	  }
	}

	function glossaryUrl(url) {
		var json = url.indexOf('.io') > 1
			? 'https://mrpotatoes.github.io/functional-programming-in-js-reference/start-here/glossary.json'
			: 'http://localhost:3000/start-here/glossary.json'

		return json;
	}

	function loadJSON(callback) {
	  var request = new XMLHttpRequest();
		request.open('GET', 
			glossaryUrl(window.location.href),
			true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    callback(JSON.parse(request.response))
		  } else {
		    // We reached our target server, but it returned an error
		  }
		};

		request.onerror = function() {
		  console.log('errored')
		};

		request.send();
	}

	// How to actually add the table is here.
	loadJSON(function(response) {
		tableize(response)
	})
</script>

<!-- Aliases should use the tag -->

<table id="data-table">
<!-- here goes our data! -->
</table>
