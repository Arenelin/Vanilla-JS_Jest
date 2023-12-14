import {createGreetingMessages, ManType} from './05_01';

let people: Array<ManType>;

beforeEach(() => {
    people = [
        {name: 'Andrew Petrov', age: 42},
        {name: 'Alexander Ivanov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ];
});

test('should get array of greeting messages', () => {
    const messages = createGreetingMessages(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe(`Hello Andrew. Welcome to IT-INCUBATOR!`);
    expect(messages[1]).toBe(`Hello Alexander. Welcome to IT-INCUBATOR!`);
    expect(messages[2]).toBe(`Hello Dmitry. Welcome to IT-INCUBATOR!`);
})