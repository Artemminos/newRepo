import React from 'react';
import {Input, List} from 'antd';

export const LessonRepeatV1 = () => {
    const arr1 = [
        {
            name: 'artem',
            age: 25,
            content: [
                {
                    likes: 'any',
                    mapps: 'yandex'
                },
                {
                    likes: 'bool',
                    mapps: 'href'
                },
                {
                    likes: 'string',
                    mapps: 'todo'
                },

            ]
        },
        {
            name: 'andy',
            age: 21,
            content: [
                {
                    likes: 'any',
                    mapps: 'yandex'
                },
                {
                    likes: 'bool',
                    mapps: 'href'
                },
                {
                    likes: 'string',
                    mapps: 'todo'
                },

            ]

        },
        {
            name: 'dima',
            age: 29,
            content: [
                {
                    likes: 'any',
                    mapps: 'yandex'
                },
                {
                    likes: 'bool',
                    mapps: 'href'
                },
                {
                    likes: 'string',
                    mapps: 'todo'
                },

            ]
        },
        {
            name: 'leo',
            age: 45,
            content: [
                {
                    likes: 'any',
                    mapps: 'yandex'
                },
                {
                    likes: 'bool',
                    mapps: 'href'
                },
                {
                    likes: 'string',
                    mapps: 'todo'
                },

            ]
        },
        {
            name: 'georg',
            age: 67,
            content: [
                {
                    likes: 'any',
                    mapps: 'yandex'
                },
                {
                    likes: 'bool',
                    mapps: 'href'
                },
                {
                    likes: 'string',
                    mapps: 'todo'
                },

            ]
        },
    ];


    return (
        <div>
            {arr1.map((item, index) => {
                return <div>
                    {item.name} <br/>
                    {item.age} <br/>
                    {item.content.map((elem, key) => {
                        return (
                            <div>
                                {elem.likes} <br/>
                                {elem.mapps}
                            </div>
                        )
                    })}
                    <br/>
                </div>
            })}
        </div>
    );
};

