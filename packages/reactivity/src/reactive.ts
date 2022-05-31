import { mutableHandlers } from './baseHandler';


function reactive<T>(target: T): T {
  return createReactive(target as Object, mutableHandlers) as T;
}

export function shalldowReactive(target) {
  return target;
}

const reactiveMap = new Map();
function createReactive(target, proxyHandler) {
  // 需要递归创建reactivity对象
  if (typeof target !== 'object') throw new Error(`target: ${target} is not object`);
  if (!reactiveMap.has(target)) {
    reactiveMap.set(target, new Proxy(target, proxyHandler));
  }
  return reactiveMap.get(target);
}

export default reactive;
