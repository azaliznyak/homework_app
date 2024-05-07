import React, {useEffect, useState} from 'react';






import {PeopleSearch} from "../components/PeopleContainer/PeopleSearch";



const SearchPage = () => {


    const [query, setQuery] = useState('');




    const handleSearch = async () => {


    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };





    return (
        <div >
                <input  type="text" placeholder={'Search film'} value={query}
                       onChange={handleInputChange}/>

                <button  onClick={handleSearch}>Search</button>


            <PeopleSearch/>

        </div>


    );
};

export {SearchPage};