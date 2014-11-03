// Washi
//
// by Viget
// https://github.com/vigetlabs/washi
// https://viget.com
//
// Washi is a DOM utility library with inspirations from Backbone, Underscore,
// and React. You build washi components by constructing objects with a given
// pattern, then invoking Washi upon that object.

var _      = require('./src/util');
var result = _.result;

var Washi = function() {
  // Construct a new object, building from a given prototype
  var assembled = Object.create(Washi.prototype);

  // Fold in all "mixins"
  _.extend.apply(null, [ assembled ].concat(_.toArray(arguments)));

  // Verify our element exists
  assembled.el = _.query(result(assembled, 'el', document.body));

  // Bind events. Taken the target `el` and assign `events` to it, using `ui` when running
  // the `template` function upon the event declarations.
  _.mapEvents(assembled.el, result(assembled, 'events'), result(assembled, 'ui'), assembled);

  // Next, reassign the UI object using `mapSelections` to construct getters that return
  // query selections.
  assembled.ui = _.mapSelections(assembled.el, result(assembled, 'ui'));

  // Setup a selector helper method, a short hand similar to Backbone's `View.$`
  assembled.$ = _(assembled.el);

  // Call the initialize method on the object. This is useful as a pseudo
  // replacement for the constructor function
  result(assembled, 'initialize');

  return assembled;
};

// Expose the utility helpers. Assigned to $ for familiarity with Backbone Views.
Washi.$ = _;

module.exports = Washi;
