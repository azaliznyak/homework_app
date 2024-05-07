import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {PeopleAllPage, SearchPage} from "./pages";
import {PeopleInfoPage} from "./pages";

const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'peopleAll'}/>
            },
            {
                path:'peopleAll', element:<PeopleAllPage/>
            },
            {
                path:'people/:id', element:<PeopleInfoPage/>
            },
            {
                path:'search', element:<SearchPage/>
            }
        ]
    }
])

export {
    router
}