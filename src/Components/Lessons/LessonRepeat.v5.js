import React from 'react';
import {Input, List} from 'antd';

export const LessonRepeatV1 = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const [data, setData] = React.useState([])
    const serverArray = [
        {
            name:'artem',
            city:'belgorod',
        },
        {
            name:'dima',
            city:'moskow',
        },
        {
            name:'andy',
            city:'moskow',
        },
    ];

    React.useEffect(() => {
        //server fetch
        setData(serverArray)
    }, [])
    const filterFn = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        const regEx = new RegExp(value, 'gi');
        setData(serverArray.filter((item) => item.city.match(regEx)))
    }
    return (
        <div>
            <Input
                placeholder={'Город'}
                value={searchValue}
                onChange={filterFn}
                type="text"
            />
            {data.map((item, index) => {
                return <div>{item.name}<br/></div>
            })}
        </div>
    );
};

