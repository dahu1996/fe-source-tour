import { activeEffect } from './effect';

/**
 * 依赖管理
 * {
 *   target: {
 *     key: [effectFn, effectFn]
 *   }
 * }
 */
const bucket = new Set<Function>();

function reactive<T>(target: T): T {
  const obj = new Proxy(target as Object, {
    get(target, key) {
      // 需要直到effect干了啥，收集依赖
      bucket.add(activeEffect);
      return Reflect.get(target, key);
    },
    set(target: object, p: string | symbol, value: any, receiver: any): boolean {
      const result = Reflect.set(target, p, value, receiver);
      bucket.forEach(fn => fn());
      return result;
    }
  });
  return obj as T;
}

export default reactive;
