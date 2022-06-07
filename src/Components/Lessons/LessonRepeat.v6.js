import React from 'react';
import {Input, List} from 'antd';

export const LessonRepeatV1 = () => {
    const obj = [
        {
            name: 'art',
            city: 'bel'
        },
        {
            name: 'den',
            city: 'msk'
        },
        {
            name: 'andy',
            city: 'msk'
        },
    ]
    const obj2 = obj.map((item,index)=>{
        return item.city
    })
    const result = new Set(obj2);
    console.log(Array.from(result))

    return (
        <div>

        </div>
    );
};

