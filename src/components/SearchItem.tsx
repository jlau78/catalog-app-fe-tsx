import React from "react";

const SearchItem: React.FC = ({}) => (

        <div>
            <h1>Search for Item</h1>

            <div id="search_form_container">
                <form id="area_search_form" action="/listing">

                    <label >Area
                        <input id="area_search" type="text" defaultValue=""></input>
                    </label>

                    <button id="search_button"
                        className="Card--button" type="submit">Search</button>

                </form>
            </div>
        </div>
)

export default SearchItem
