import {ManType} from './Destructuring';

let props: ManType;
beforeEach(() => {
        props = {
            name: 'Dimych',
            age: 32,
            lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
            technologies: [
                {id: 1, title: 'HTML'},
                {id: 2, title: 'CSS'},
                {id: 3, title: 'JS'},
                {id: 4, title: 'React'}
            ],
            address: {
                street: {
                    title: 'Merlina'
                }
            }
        }
    }
)

test('destructuring props object', () => {
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Merlina');

})

test('destructuring lessons array', () => {
    // const [l1, l2] = props.lessons;
    // const [,,l3] = props.lessons;
    // expect(l1.title).toBe('1');
    // expect(l2.title).toBe('2');
    // expect(l3.title).toBe('3');

    // const [ls1, ...restLessons] = props.lessons;
    // expect(ls1.title).toBe('1');
    // expect(restLessons.length).toBe(2);
    // expect(restLessons[1].title).toBe('3');

    const [, ls2, ...restLessons] = props.lessons;
    expect(ls2.title).toBe('2');
    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');
})
test('destructuring technologies array', () => {
    const [, , t3,] = props.technologies;
    const [t1, ...restTech] = props.technologies;

    expect(t3.title).toBe('JS');
    expect(t1.title).toBe('HTML');
    expect(restTech.length).toBe(3);
    expect(restTech[1].title).toBe('JS');
    expect(restTech[2]).toStrictEqual({id: 4, title: 'React'});
})