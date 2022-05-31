// fn执行，收集依赖

export let activeEffect: null | Function = null;
function effect(fn: Function) {
  if (typeof fn !== 'function') return false;
  activeEffect = fn;
  fn();
}

/**
 * 依赖管理
 * {
 *   target: {
 *     key: [effectFn, effectFn]
 *   }
 * }
 */

const depsMap = new Map<object, Map<string|symbol, Set<Function>>>();

// 收集依赖
export function track(target: object, key: symbol|string) {
  console.log(depsMap);
  if (!depsMap.has(target)) {
    depsMap.set(target, new Map());
  }
  const keyDepsMap = depsMap.get(target);
  if (!keyDepsMap.has(key)) {
    keyDepsMap.set(key, new Set());
  }
  const fnDepsSet = keyDepsMap.get(key);
  if (activeEffect) fnDepsSet.add(activeEffect);
}
// 执行依赖
export function trigger(target:object, key: symbol|string, value: any): void {
  console.log(depsMap, value);
  if (!depsMap.has(target)) return;
  const keyDepsMap = depsMap.get(target);
  if (!keyDepsMap.has(key)) return;
  const fnDepsList = keyDepsMap.get(key);
  fnDepsList.forEach(fn => fn());
}

export default effect;
