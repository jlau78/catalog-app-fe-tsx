import React from "react";
import {Routes, Route} from "react-router-dom"

const AppRoutes = () => {

    const ItemDetails = React.lazy(() => import ('./../components/ItemDetails'));
    const ItemListing = React.lazy(() => import ('./../components/SearchListing'));

    return (
        <Routes>

              <Route path="/"
                  element={<ItemListing/>}/>
              <Route path="/item"
                  element={<ItemDetails/>}/>

          </Routes>

    )
}

export default AppRoutes