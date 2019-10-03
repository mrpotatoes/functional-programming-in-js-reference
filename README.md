# functional-programming-in-js-reference

https://mrpotatoes.github.io/functional-programming-in-js-reference/

To fix the tags on the start page later.
```html
<ul class="tags">
  <li><span class="tag">HTML</span></li>
  <li><span class="tag">CSS</span></li>
  <li><span class="tag">JavaScript</span></></li>
</ul>
```

```css
.tags {
  list-style: none;
  margin: 0;
  overflow: hidden; 
  padding: 0;
}

.tags span {
  float: left; 
}

.tag {
  background: #6495ED;
  border-radius: 15px;
  color: #FFF;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag:hover {
  background-color: crimson;
  color: white;
}

```
