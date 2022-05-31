# Reactivity

ES6 新语法

```javascript
const obj1 = {
    _a: null,
};
Object.defineProperty(obj1, 'a', {
  configurable: true,
  enumerable: true,
  get() {
      return obj1._a;
  },
  set(val) {
      return obj1._a = val;
  }
});


```
