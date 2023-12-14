import React from 'react';
import './App.css';

function App() {

    const users = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Ignat'},
    ];

    const names = users.map(u => <li key={u.id}>{u.name}</li>);

    return (
        <div className="App">
            {names}
        </div>
    );
}

export default App;
