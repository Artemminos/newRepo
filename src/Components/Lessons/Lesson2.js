import React from 'react';


export const Lesson2 = () => {
    const [age, setAge] = React.useState(0);
    const userArray = [
        {
            name: 'artem',
            password: '123',
            surName: 'rus',
            age: 18
        },
        {
            name: 'andy',
            password: '123',
            surName: 'rus',
            age: 10

        },
        {
            name: 'vlad',
            password: '123',
            surName: 'rus',
            age: 10

        },
        {
            name: 'Some',
            password: '123',
            surName: 'rus',
            age: 5

        },
        {
            name: 'Chel',
            password: '123',
            surName: 'rus',
            age: 16

        },
    ]
    const ab = () => {
        return 'ANDY'
    }//функция которая вернет строчку 'ANDY'
    const andy = ab(); //переменная которой будет присвоена строка 'ANDY'
    const obj = {
        name: 'artem',
        location: {
            city: 'belogorod',
            street: 'esenina'
        }
    }
    //console.log(obj['location']['city'])
    const renderList = () => {
        const listArray = [
            {
                name: 'peproni',
                price: '200'
            },
            {
                name: 'carbinara',
                price: '200'
            },
            {
                name: 'margarita',
                price: '600'
            },
        ];

        const res = [];
        for (let i = 0; i < listArray.length; i++) {
            const pizza = listArray[i];
            const elem = <li>
                name: {pizza.name} <br/>
                surName: {pizza.price} <br/>
            </li>
            res.push(elem)
        }
        return res

    }
    return (
        <div>
            <input
                autoFocus={true}
                type="text"
                value={age}
                onChange={(e) => {
                    const value = e.target.value // получение значения
                    //debugger
                    if (value > 20) {
                        setAge(0)
                    } else {
                        setAge(Number(value))
                    }
                }}/>
            {/*<Lesson1/>*/}

            <ul>
                {
                    userArray.map(
                        (user, index) => {
                            //debugger
                            const elem = <li>
                                name: {user.name} <br/>
                                surName: {user.surName} <br/>
                                password: {user.password} <br/>
                            </li>
                            if (user.age >= age) {
                                return elem
                            }
                        }
                    )
                }

            </ul>
            {renderList()}
        </div>
    );
};
//todo сделайте https://codesandbox.io/s/webni0?file=/demo.js https://ant.design/components/form/#header

