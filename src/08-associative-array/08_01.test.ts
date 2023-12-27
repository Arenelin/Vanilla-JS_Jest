type UserType = {
    [key: string]: { id: number, name: string, stack: string[] }
}
let users: UserType;

beforeEach(() => {
    users = {
        '12345522': {id: 12345522, name: 'Dimych', stack: ['html', 'css', 'js']},
        '124908': {id: 124908, name: 'Natasha', stack: ['react', 'redux']},
        '103': {id: 103, name: 'Valery', stack: ['jest', 'scss']},
        '12341234': {id: 12341234, name: 'Katya', stack: ['MUI', 'svelte']},
    }
});

test('should update corresponding user', () => {
    users[103] = {id: 103, name: 'Valerich', stack: ['jest', 'scss']};
    users[12341234] = {id: 12341234, name: 'Katya', stack: ['react', 'redux', 'MUI', 'svelte']}

    expect(users[103].name).toBe('Valerich');
    expect(users[12341234].stack.length).toBe(4);
})
test('should delete corresponding user', () => {
    delete users[103];

    expect(users[103]).toBeUndefined();
})
test('should added corresponding user', () => {
    const newUser = {id: 34523, name: 'Viktor', stack: ['js', 'react', 'nodeJS']};
    users[newUser.id] = newUser;

    expect(users[34523]).toBeDefined();
    expect(users[34523].stack.length).toBe(3);
})