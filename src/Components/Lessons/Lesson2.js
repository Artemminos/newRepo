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
     let art = {
        name: 'artem'
    };
     let art2 = art;
     console.log(art, '<<<art')
     console.log(art2, '<<<art2')
     art2.name = 'andy'
     console.log(art2, '<<<art2')
     **/

    /**
     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
     const arr = ['artem', () => {
            console.log('andy')
        }]
     const [name, fn] = arr;
     const name1 = arr[0]
     const fn1 = arr[1]
     **/

    /**
     name => это переменная
     setName => функция которая меняет переменную
     **/

    /**    const profile = {
            name: 'artem',
            location: {
                city: 'Belgorod',
                some: {
                    abc: 123
                }
            }
        }
     console.log(profile.location.some.abc)
     console.log(profile['location']['some']['abc'])
     **/

    /**
     function returnProfileStr() {
           //какая то логика получения профайла
       return 'profile'
   }

     const TabsContent = {
       profile: 'content1',
       market: 'content2',
       news: 'content3'
   }
     console.log(TabsContent[returnProfileStr()])
     **/

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus] = React.useState(false);


    /**
     onBlur =>событие скрывания
     onFocus => событие фокусировки
     onClick =>событие клика
     onChange =>событие изменения
     **/

    /**
     debugger вызывается в рамках области видимости
     **/
    const handleClick = (e) => {
        console.log(name, 'name')
        console.log(password, 'password')
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

    React.useEffect(fnForUseEffect)//если ничего не передать то вызовется только один раз при маунте компоненты

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
