import React from 'react';

export const PasswordInput = ({setPassword, password}) => {
    return (
        <div>
            pass:
            <input
                value={password}
                type="text" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <br/>
        </div>

    );
};
