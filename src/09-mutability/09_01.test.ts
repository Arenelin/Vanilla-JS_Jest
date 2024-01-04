type UserObjType = {
    name: string
    age: number
    address: { title: string }
}

const increaseAge = (user: UserObjType) => {
    user.age++;
}

test('reference type test', () => {
    const user: UserObjType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user);
    expect(user.age).toBe(33);

    const superman = user; //ссылка на один и тот же объект
    superman.age = 1000; //мы меняем то, на что эта переменная ссылается (на объект в памяти)
    expect(user.age).toBe(1000);
})
test('array reference test', () => {
    const users: UserObjType[] = [
        {
            name: 'Dimych',
            age: 32,
            address: {
                title: 'Minsk'
            }
        },
        {
            name: 'Valera',
            age: 35,
            address: {
                title: 'Minsk'
            }
        },
        {
            name: 'Viktor',
            age: 54,
            address: {
                title: 'Minsk'
            }
        }
    ]

    const admins = users;
    admins.push({name: 'Oleg', age: 40, address: {title: 'Novosibirsk'}}) //Мутирующая операция, как в объекте добавление свойства через точку
    expect(users[3].name).toBe('Oleg')
    increaseAge(users[3]);
    expect(users[3].age).toBe(41);
})
test('value type test', () => {
    const usersCount = 100;
    let adminsCount = usersCount; // У примитивов нет методов, изменяющих их
    adminsCount = adminsCount + 1;
    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
})
test('reference type test2', () => {

    const address = {title: 'Minsk'};

    const user: UserObjType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let addr = user.address;
    const user2: UserObjType = {
        name: 'Natasha',
        age: 35,
        address: addr //addr - {title:'Minsk'}
    }
    user2.address.title = 'Grodno';
    expect(user.address.title).toBe('Grodno');
    expect(user.address).toEqual(user2.address)
})

test('reference type array test', () => {

    const address = {title: 'Minsk'};

    const user: UserObjType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let addr = user.address;
    const user2: UserObjType = {
        name: 'Natasha',
        age: 35,
        address: addr //addr - {title:'Minsk'}
    }

    const users = [user, user2, {name: 'Katya', age: 22, address}]
    //Ссылки на объект Катя нет, к нему можно обратиться только через индекс массива users[2]
    const admins = [user, user2]; //На первый и второй объект всего три ссылки: изначальная константа + обращение через индекс массива users + обращение через индекс массива admins (admins[0].name = 'Dimych')
    admins[0].name = 'Dmitry';
    expect(users[0].name).toBe('Dmitry');
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];
    // letters.sort(); //муттабельное изменение исходного массива
    const newLetters = [...letters].sort(); //иммутабельная работа с исходным массивом
    const resultSorted = passportist(letters);
    expect(letters[0]).toBe('c');
    expect(newLetters[0]).toBe('a');
    expect(resultSorted[2]).toBe('d');
})

function passportist(letters: string[]) {
    // letters.sort() //муттабельное изменение исходного массива, так как в параметры fn пришла ссылка на массив. Мы должны иммутабельно работать с пришедшим массивом.
    const copyLetters = [...letters].sort()
    return copyLetters;
}