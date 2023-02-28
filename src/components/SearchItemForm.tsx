import React from "react";
import {useStyles} from '../App'

// const styles = useStyles()

const SearchItem: React.FC = ({}) => (

    <div>
        <h4>Search</h4>

        <div id="search_form_box">
            <form id="area_search_form" action="/listing">

                <label className="box-label">Area: 
                    <input id="searchbox" name="searchbox" className="box-input" type="text" defaultValue=""></input>
                </label>

                <button id="search_button"
                    className="Card--button" type="submit">Search</button>

            </form>
        </div>
    </div>
)

export default SearchItem
