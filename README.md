washi
=====

[![Build Status](https://travis-ci.org/vigetlabs/washi.png?branch=master)](https://travis-ci.org/vigetlabs/washi)

### Basic usage

```javascript
var Washi = require('washi');
var $     = Washi.$;

var Sample = {

    ui: {
        title: '.title',
    },

    events: {
        // Use ui helper selectors as aliases with {element}
        'mousedown {title}, touchstart {title}' : 'doSomething',

        // Alternatively, follow the syntax used by Backbone.Marionette
        'click @ui.title': 'doSomethingElse'
    },

    initialize: function(options) {
        this.ui.title.forEach(function(e) {
          e.innerHTML = 'Washi is for Origami';
        });
    },

    doSomething: function() {
      var text = $.pluck(this.ui.title, 'innerHTML').join(' ');
      console.log(text);
    },

    doSomethingElse: function() {
        console.log("Something else");
    }

};

var sample = Washi(Sample, {
    el: "#sample-el"
});
```

Corresponding with:

```html
<div id="sample">
    <h1 class="title">Paper Crane</h1>
</div>
```

## License

`washi` is released under the [MIT License](http://opensource.org/licenses/MIT).
