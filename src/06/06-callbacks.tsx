import React, {ChangeEvent, MouseEvent} from 'react'

// const callback = ()=>{
//    alert('Hey')
// }
//
// window.setTimeout(callback, 1000);

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name);
    }
    const saveUser = () => {
        alert('User have been saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed ${e.currentTarget.value}`)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={deleteUser}>save</button>
        </div>
    )
}