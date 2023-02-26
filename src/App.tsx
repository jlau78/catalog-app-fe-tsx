import { hot } from "react-hot-loader"
import * as React from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import './App.css';
import "./assets/main.module.scss"

import SearchItem from "./components/SearchItem"
import AppRoutes from "././routes/Routes"
import ItemDetails from './components/ItemDetails';
import ItemListing from './components/SearchListing';
import About from './components/About';

import styles from './assets/main.module.scss'

import { style } from "@mui/system";

const App = () => {

    // Issue: lazy loading of components did not work for the Routes
    // const ItemDetails = React.lazy(() => import ('./components/ItemDetails'));
    // const ItemListing = React.lazy(() => import ('./components/SearchListing'));
    // const About = React.lazy(() => import ('./components/About'));

    return(

      <div id="main">
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

export function useStyles() {
  return styles;
}

export default App
// export default hot(module)(App)
