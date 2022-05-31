import { describe, it, expect } from 'vitest';
import {effect, reactive} from '../src';

interface FooData {
  name: string;
}

describe('reactivity test', () => {
  it('should reactive and effect', function () {
    const foo = reactive<FooData>({name: 'andrewguy'});
    let bar = null;
    effect(() => {
      console.log(foo.name);
      bar = foo.name;
    });
    expect(bar).toBe('andrewguy');
    foo.name = 'guy';
    console.log(foo.name);
    expect(bar).toBe('guy');
  });
});
