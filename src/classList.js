// A collection of methods for manipulating classes.
import isDOM from 'is-dom'
import tokenize from './tokenize'
import result from './result'

const classList = {
  // Given an element and a string of classes, add those classes if
  // the element is a DOM node
  addClass: function(el, classes) {
    if (isDOM(el)) {
      tokenize(classes).map(function(token) {
        el.classList.add(token)
      })
    }
  },

  // Given an element and a string of classes, remove those classes if
  // the element is a DOM node
  removeClass: function(el, classes) {
    if (isDOM(el)) {
      tokenize(classes).map(function(token) {
        el.classList.remove(token)
      })
    }
  },

  // Given an element and a string of classes, add or remove those classes
  // based upon a boolean
  toggleClass: function(el, classes, keep) {
    if (isDOM(el) && arguments.length === 2) {
      tokenize(classes).map(function(token) {
        el.classList.toggle(token)
      })
    } else {
      if (keep) {
        classList.addClass(el, classes)
      } else {
        classList.removeClass(el, classes)
      }
    }
  }
}

export default classList
