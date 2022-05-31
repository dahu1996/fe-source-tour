// fn执行，收集依赖

export let activeEffect = null;
function effect(fn: Function) {
  activeEffect = fn;
  fn();
}

export default effect;
