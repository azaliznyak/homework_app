import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";
import css from './Layout.module.css'

const MainLayout = () => {
    return (
        <div className={css.Layout}>
            <Header/>
            <Outlet/>

        </div>
    );
};

export {MainLayout};