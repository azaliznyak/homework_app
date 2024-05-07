import React, {useState} from 'react';
import css from './People.module.css'
import {useNavigate} from "react-router-dom";

const People = ({people}) => {
    const {name,url}=people
    const navigate=useNavigate()
    const [personId, setPersonId] = useState(null);

    const toDetails = () => {
        const id = url.split('/').slice(-2, -1)[0]; // Отримуємо ID з URL
        setPersonId(id);
        navigate(`/people/${id}`);
    };


    return (
        <div className={css.Box}>
            <div className={css.div}>Name:{name}</div>
            <button onClick={toDetails} className={css.button}>Details</button>

        </div>
    );
};

export {People};