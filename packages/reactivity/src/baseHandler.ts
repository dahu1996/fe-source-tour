// 实现get set delete 等 proxy
import reactive from "./reactive";
import { track, trigger } from './effect';

export const mutableHandlers = {
  get(target, key) {
    track(target, key);
    const result = Reflect.get(target, key);
    return (typeof result === 'object') ? reactive(result) : result;
  },
  set(target, key, value) {
    value = typeof value === 'object' ? reactive(value) : value;
    const result = Reflect.set(target, key, value);
    trigger(target, key, value);
    return result;
  }
};
