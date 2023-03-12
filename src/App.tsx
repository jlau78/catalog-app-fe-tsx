import * as React from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import "./assets/main.module.scss"

import SearchItemForm from "./components/SearchItemForm"
import ItemDetails from './pages/ItemDetails';
import ItemListing from './pages/SearchListing';
import About from './components/About';

import styles from './assets/main.module.scss'


const App = () => {

    // Issue: lazy loading of components did not work for the Routes
    // const ItemDetails = React.lazy(() => import ('./components/ItemDetails'));
    // const ItemListing = React.lazy(() => import ('./components/SearchListing'));
    // const About = React.lazy(() => import ('./components/About'));

    return(

      <div id="main" className={styles.mainPageBox}>
        <div id="search-form" className={styles.leftNav}>
          <SearchItemForm />
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
