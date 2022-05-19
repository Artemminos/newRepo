import React from 'react';

export const NameInput = ({name, label, setName}) => {

    return (
        <div>

            {label}:
            <input
                onBlur={() => {
                    console.log('blur')
                }}
                type="text"
                value={name}
                onChange={(e) => {
                    const val = e.target.value
                    setName(val)
                    if (val.length > 2) {
                        setName((prevValue) => {
                            const newValue = prevValue + 1//добавляем к пребедущему значению еденицу
                            return newValue//возвращяем
                        })
                    }
                }}
            />
            <br/>
        </div>
    );
};
