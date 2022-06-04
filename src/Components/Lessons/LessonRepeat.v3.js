import React from 'react';
import {Input, List} from 'antd';

export const LessonRepeatV1 = () => {

    const serverArray = [
        {
            name: 'artem',
            age: 25,
            _id: 1,
        },
        {
            name: 'andy',
            age: 21,
            id: 2,
        },
        {
            name: 'dima',
            age: 29,
            id: 3,

        },
        {
            name: 'leo',
            age: 45,
            id: 4,
        },
        {
            name: 'georg',
            age: 67,
            id: 5,
        },
    ];
    const locationArray = [
        {
            id: 1,
            location: {
                city: 'moskow',
                street: 'arbat'
            }
        },
        {
            location: {
                city: 'belgorod',
                street: 'schorsa'
            },
            id: 2,
        },
        {
            id: 3,
            location: {
                city: 'kusrsk',
                street: 'bogdana'
            }
        },
        {
            id: 4,
            location: {
                city: 'kiew',
                street: 'metro'
            }
        },
        {
            id: 5,
            location: {
                city: 'minsk',
                street: 'kartoshca'
            }
        },
    ]
    const newArray = serverArray.map((item, index) => {
        const newItem = {...item};
        newItem.location = locationArray.find(element => element.id === (item.id ? item.id : item._id))
        return newItem
    })
    console.log(newArray)
    return (
        <div>

        </div>
    );
};

