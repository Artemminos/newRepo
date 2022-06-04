import React from 'react';
import {Input, List} from 'antd';

export const LessonRepeatV1 = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const [data, setData] = React.useState([
        'artem',
        'andrey',
        'dima',
        'vlad',
        'evgeni',
        'dasha',
        'katya',
        'vika'
    ])
    const dataArray = [
        'artem',
        'andrey',
        'dima',
        'vlad',
        'evgeni',
        'dasha',
        'katya',
        'vika'
    ]
    return (
        <div>
            <Input
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    if (e.target.value.length === 0){
                        setData(dataArray)
                    }else{
                        setData(prev => {
                            const res = prev.map((value) => {
                                if (value.includes(e.target.value)) {
                                    return value;
                                }
                                return ''
                            })
                            return res
                        })
                    }
                }} type="text"/>
            {data.map((item,index)=>{
                return <div>{item}<br/></div>
            })}

        </div>
    );
};

