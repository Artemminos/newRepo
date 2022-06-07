import React from 'react';
import {Route} from "react-router-dom";
import {Lesson1} from "../Lessons/Lesson1";
import {Lesson2} from "../Lessons/Lesson2";
import {LessonRepeatV1} from "../Lessons/LessonRepeat.v6";


export const Routes = () => {
    return (
        <div>
            <Route path="/about">
                <Lesson1/>
            </Route>
            <Route path="/users">
                <Lesson2/>
            </Route>
            <Route path="/repeat">
                <LessonRepeatV1/>
            </Route>
            <Route path="/profile">
                profile
            </Route>
            <Route path="/customUrl">
                custom
            </Route>
        </div>
    );
};
