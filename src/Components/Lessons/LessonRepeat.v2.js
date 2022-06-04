import React from 'react';
import {Input, List} from 'antd';

export const LessonRepeatV1 = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const [data, setData] = React.useState([])
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
    React.useEffect(() => {
        //server fetch
        setData(serverArray)
    }, [])
    const filterFn = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        const regEx = new RegExp(value, 'gi');
        setData(serverArray.filter((item) => item.match(regEx)))
    }
    return (
        <div>
            <Input
                value={searchValue}
                onChange={filterFn} type="text"/>
            {data.map((item, index) => {
                return <div>{item}<br/></div>
            })}

        </div>
    );
};

