import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {peopleActions} from "../redux";
import {PeopleDetails} from "../components/PeopleContainer/PeopleDetails";

const PeopleInfoPage = () => {
    const {id}=useParams()
    const dispatch= useDispatch()
    const [info, setInfo]=useState(null)

    useEffect(()=>{
        const fetchMovieInfo = async () => {
            try {
                const response = await dispatch(peopleActions.getInfo({id}));

                setInfo(response.payload)
                console.log(response);
            } catch (error) {
                console.error('Error fetching movie info:', error);
            }
        };

        fetchMovieInfo();
    }, [dispatch])

    return (
        <div>
            {info && <PeopleDetails info={info}/>}


        </div>
    );
};

export {PeopleInfoPage};