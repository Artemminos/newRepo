import React from 'react';
import {Input, List} from 'antd';
const serverArray = [
    'artem',
    'andrey',
    'dima',
    'vlad',
    'evgeni',
    'dasha',
    'katya',
    'vika'
]
export const LessonRepeatV1 = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const [data, setData] = React.useState(serverArray)

    return (
        <div>
            <Input
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)

                    if (e.target.value.length === 0){
                        setData(serverArray)
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
                }}
                type="text"
            />
            {data.map((item,index)=>{
                return <div>{item}<br/></div>
            })}

        </div>
    );
};

