import { describe, it, expect } from 'vitest';
import {effect, reactive} from '../src';

// interface Foo {
//   name: string;
// }
interface Baz {
  foo: {
    bar: number
  };
}


describe('reactivity test', () => {
  it('should reactive and effect', function () {
    // const foo = reactive<Foo>({name: 'andrewguy'});
    let bar = null;
    // effect(() => {
    //   bar = foo.name;
    // });
    // expect(bar).toBe('andrewguy');
    // foo.name = 'guy';
    // expect(bar).toBe('guy');

    const baz = reactive<Baz>({foo: {bar: 20}});
    console.log(baz.foo);
    effect(() => {
      bar = baz.foo.bar;
    });
    expect(bar).toBe(20);
  });
});
