import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {peopleActions} from "../../redux";
import {usePageQuery} from "../../hooks";
import {People} from "./People";

const PeopleAll = () => {
    const dispatch=useDispatch();
    const {peopleAll,count}=useSelector(state => state.people);
    const {page, nextPage, prevPage}=usePageQuery()



    useEffect(()=>{
        dispatch(peopleActions.getAll({page}))
    },[dispatch,page])



    return (
        <div>
            <div>
            {peopleAll &&peopleAll.map(people=><People key={`${people.name}-${people.height}`} people={people}/>)}
            </div>

            <div>
                <button disabled={page==='1'} onClick={prevPage}>prev</button>
                <button disabled={page===`${count}`} onClick={nextPage}>next</button>
            </div>

        </div>
    );
};

export {PeopleAll};