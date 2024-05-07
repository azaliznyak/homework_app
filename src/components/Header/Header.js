import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.PeopleCss}>
                <NavLink className={css.Home} to={'/peopleAll'}>People</NavLink>
                <NavLink className={css.Search} to={'/search'}>Search</NavLink>
            </div>
            
        </div>
    );
};

export {Header};