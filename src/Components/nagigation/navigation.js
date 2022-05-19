import React from 'react';
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <ul>

            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/market">market</Link>
            </li>
            <li>
                <Link to="/profile">profile</Link>
            </li>

        </ul>
    );
};

