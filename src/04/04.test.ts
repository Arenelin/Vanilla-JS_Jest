test('should take old men oldest then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 15, 14];


    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})
test('should take courses cheaper 160', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ];
    const cheapCourses = courses.filter(c => c.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[1].title).toBe('react');
    expect(cheapCourses[0].title).toBe('css');
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Soup', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ];

    const completedTasks = tasks.filter(t => t.isDone);
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Milk');
    expect(completedTasks[1].title).toBe('Sugar');
})
test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Soup', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ];

    const uncompletedTasks = tasks.filter(t => !t.isDone);
    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})