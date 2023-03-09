import React from "react";
import {Routes, Route} from "react-router-dom"

const AppRoutes = () => {

    const ItemDetails = React.lazy(() => import ('../pages/ItemDetails'));
    const ItemListing = React.lazy(() => import ('../pages/SearchListing'));
    const ItemListingWithQuery = React.lazy(() => import ('../pages/SearchListing'))

    return (
        <Routes>

              <Route path="/"
                  element={<ItemListing />}/>
              <Route path="/items/:query"
                    element={<ItemListingWithQuery />} />
              <Route path="/item"
                  element={<ItemDetails />}/>

          </Routes>

    )
}

export default AppRoutes