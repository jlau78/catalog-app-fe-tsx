import * as React from 'react';

import './App.css';
import SearchItem from "./components/SearchItem"
import AppRoutes from "././routes/Routes"
import ItemDetails from './components/ItemDetails';
import ItemListing from './components/SearchListing';
import About from './components/About';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';


export default function App() {

    // Issue: lazy loading of components did not work for the Routes
    // const ItemDetails = React.lazy(() => import ('./components/ItemDetails'));
    // const ItemListing = React.lazy(() => import ('./components/SearchListing'));
    // const About = React.lazy(() => import ('./components/About'));

    return(

      <div id="main">
        <div id="header">
          <h1>Catalog Listing</h1>
        </div>
        <div>
          <SearchItem />
        </div>

        <div id="content">

            <Routes>
              <Route path="/listing" element={<ItemListing />} />
              <Route path="/item/:itemId" element={<ItemDetails />} />
              <Route path="/about" element={<About />} />
            </Routes>

        </div>

      </div>

    )
}
