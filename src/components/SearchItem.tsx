import React from "react";

const SearchItem: React.FC = ({}) => (

        <div>
            <h4>Search</h4>

            <div id="search_form_box">
                <form id="area_search_form" action="/listing">

                    <label for="searchbox" className="box-label">Area: </label>
                    <input id="searchbox" name="searchbox" className="box-input" type="text" defaultValue=""></input>

                    <button id="search_button"
                        className="Card--button" type="submit">Search</button>

                </form>
            </div>
        </div>
)

export default SearchItem
