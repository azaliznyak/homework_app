import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {peopleActions} from "../../redux";

const PeopleDetails = ({info}) => {
    const {name, gender,height,mass,hair_color,skin_color,eye_color,birth_year,species,starshipsa}=info
    // console.log(films)

    const dispatch=useDispatch()
    const {films}=useSelector(state => state.people)

    useEffect(()=>{
        dispatch(peopleActions.getAllFilm())
    },[])


    return (
        <div>
            <div>{name}</div>
            <div>{gender}</div>



        </div>
    );
};

export {PeopleDetails};