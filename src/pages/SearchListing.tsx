import React, {useState, useEffect} from "react";
import {Routes, Route, Link, useParams} from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import {Card} from "@mui/material"
import SearchListingRow from "../components/SearchListingRow";
import Pagination from "./../components/Pagination" 
import {getItems, getItemsByQuery} from "../API"

import {useStyles} from '../App'


export default function ItemListing() {
    const styles = useStyles()

    const [items, setItems] = useState < IItem[] > ([])

    let [searchParams, setSearchParams] = useSearchParams()
    let [searchTerm, setSearchTerm] = useState("")

    // const queryParams = new URLSearchParams(window.location.search)
    const queryParam = searchParams.get('query')
    const pageParam = searchParams.get('page')
    const searchParam = searchParams.get('searchterm')
    const pageSizeParam = searchParams.get('pageSize')
    const query = queryParam ? queryParam : ''
    const curpage = pageParam ? Number(pageParam) : 1
    const totalItems = items.length
    const curPageSize = pageSizeParam ? Number(pageSizeParam) : 10

    let [pagesize, setPageSize] = useState<number>(curPageSize)

    useEffect(() => {
        handleGetItems(query)
    }, []);

    function handleGetItems(query: string) {
        console.log(`Search for items with query:${query}`)
        if (queryParam === undefined ) {
            getItems().then(({status, data}) => {
                if (status !== 200) {
                    throw new Error("Error. Failed to getItems");
                }
                setItems(data.items)
            }).catch((err) => console.error(err))
        } else {
            getItemsByQuery(query).then( ({status, data}) => {
                if (status !== 200) {
                    throw new Error(`Error. Failed to getItems for query:${query}`)
                }
                setItems(data.items)
            })
        }
    }

    const onPagesizeChange = (event) => {
        const value = event.target.value
        setPageSize(Number(value))
    }

    return (
        <div id='search-listing-box' className={styles.pageListingBox}>

            <div id='pagination-group'>
                <h3 className='heading-pagination'>Results for {query}</h3>

                <Pagination curPage={curpage} pageSize={pagesize} totalItems={totalItems} />
                <div id="pagination-page-size">
                        Page size: 
                        <select onChange={onPagesizeChange} className='form-select' id="page-size-select">
                            <option value="10">10</option>
                            <option value="30">30</option>
                            <option value="100">100</option>
                        </select>
                </div>

            </div>
            <div className={styles.cardListingBox}>
            {
                items.slice(curpage, pagesize).map((item : IItem, idx : number) => (
                    <>
                        <SearchListingRow item={item} 
                            idx={idx + pagesize} />
                    </>
                ))
            } 
            </div>

        </div>
    )
}
