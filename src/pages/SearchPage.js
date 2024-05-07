import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useSearchParams} from "react-router-dom";

import css from "../components/MoviesContainer/MoviesList.module.css";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux";
import {MovieSearch} from "../components";
import {PeopleSearch} from "../components/PeopleContainer/PeopleSearch";



const SearchPage = () => {
    const dispatch = useAppDispatch()

    const [query, setQuery] = useState('');




    const handleSearch = async () => {


    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };





    return (
        <div className={css.SearchPage}>
                <input className={css.input} type="text" placeholder={'Search film'} value={query}
                       onChange={handleInputChange}/>

                <button className={css.button} onClick={handleSearch}>Search</button>


            <PeopleSearch/>

        </div>


    );
};

export {SearchPage};