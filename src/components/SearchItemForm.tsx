import React from "react";
import {useStyles} from './../App'
import { useSearchParams } from "react-router-dom";

type Props = {
    title?: string,
}

const DEFAULT_PAGE_NUM = '1'
const DEFAULT_PAGE_SIZE = '10'

const SearchItem: React.FC<Props> = ({title : string}) => {
    const styles = useStyles()
    let [params, setParams] = useSearchParams()
    const pageSizeParam = params.get('pagesize') || '10'
    let pageSize = pageSizeParam ? DEFAULT_PAGE_SIZE : pageSizeParam

    return (
    <div className={styles.searchFormBox}>
        <h4>Search</h4>

        <div id="search_form_box">
            <form id="area_search_form" action="/listing" method="GET">

                <div>
                    <label className="box-label">Area: 
                        <input name="query" className="box-input" type="text" />
                    </label>
                </div>
                <div style={{
                    minHeight: "20px"
                }}>

                </div>

                <div style={{
                    marginTop: "5px",
                    marginBottom: "5px"
                }}>
                    <button id="search_button"
                        className={styles.genericButton} type="submit">Search</button>
                </div>

                <input name="page" type="hidden" value={DEFAULT_PAGE_NUM} />
                <input name="pageSize" type="hidden" value={pageSize} />
            </form>
        </div>
    </div>
    )
}

export default SearchItem
