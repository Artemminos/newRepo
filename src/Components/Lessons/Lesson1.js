import React from 'react';
import {NameInput} from "../name_input";
import {PasswordInput} from "../password_input";
/**
 const => Неизменяемая ссылка
 let => изменяемая ссылка
 **/
export const Lesson1 = () => {
    //Как создать проект https://create-react-app.dev/docs/getting-started/

    /**

     **/

    /**
     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

     **/

    /**
     name => это переменная
     setName => функция которая меняет переменную
     **/

    /**
     **/

    /**


     **/

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus] = React.useState(false);


    /**
     onBlur
     onFocus
     onClick
     onChange
     **/

    /**
     debugger вызывается в рамках области видимости
     **/
    const handleClick = (event) => {
        if (name.length > 5 && password.length > 5) {
            setStatus(true)
        }
    }
    const fnForUseEffect = function () {
        if (status) {
            alert('cool')
        }
    }
    React.useEffect(fnForUseEffect, [status])//массив зависимостей за которыми мы следим

    React.useEffect(fnForUseEffect, [])//если ничего не передать то вызовется только один раз при маунте компоненты

    React.useEffect(fnForUseEffect)

    return (
        <div>
            <NameInput setName={setName} name={name} label={'Имя'}/>
            <PasswordInput setPassword={setPassword} password={password}/>
            {/*{NameInput(setName)} | <NameInput/> одно и тоже*/}
            <button onClick={handleClick}>
                submit
            </button>

        </div>
    );
};
