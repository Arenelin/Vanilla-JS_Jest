import {mult, splitIntoWords, sum} from './01';

let a: number;
let b: number;
let c: number;

//data
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const result = sum(a, b);
    a = 400;
    const result2 = sum(a, c);

    //expect result
    expect(result).toBe(3);
    expect(result2).toBe(403);
})
test('multiply should be correct', () => {
    //action
    const result = mult(a, b);
    const result2 = mult(b, c);

    //expect result
    expect(result).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into words should be correct', () => {
    //data
    const sentense1 = 'Hello my friend!';
    const sentense2 = 'JS - the best  programming language.';

    //action
    const result1 = splitIntoWords(sentense1);
    const result2 = splitIntoWords(sentense2);

    //expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');

})
