import React, {useState, useEffect} from "react";
import {Routes, Route, Link, useParams} from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import {Card} from "@mui/material"
import {useStyles} from "../assets/styles"
import SearchListingRow from "./SearchListingRow";
import {getItems} from "./../API"

import styles from "../assets/main.module.scss"

// const ItemListing: React.FC = () => {

export default function ItemListing() {
    const classes = useStyles()

    const [items, setItems] = useState < IItem[] > ([])

    let [searchParams, setSearchParams] = useSearchParams()
    let [pagesize, setPageSize] = useState<number>(10)
    let [searchTerm, setSearchTerm] = useState("")

    const queryParams = new URLSearchParams(window.location.search)
    const pageParam = searchParams.get('page')
    const searchParam = searchParams.get('searchterm')
    const curpage = pageParam ? Number(pageParam) : 1
    // const pagesize = 10
    const totalpages = items.length

    useEffect(() => {
        handleGetItems()
    }, []);

    const handleGetItems = () => {
        getItems().then(({status, data}) => {
            if (status !== 200) {
                throw new Error("Error. Failed to getItems");
            }
            setItems(data.items)
        }).catch((err) => console.error(err))
    }

    const onPagesizeChange = (event) => {
        const value = event.target.value
        setPageSize(Number(value))
    }

    return (
        <div>
            <div>
                <h3 className='heading-pagination'>Search Results</h3>
                <div>
                    <span className='headingDetails'>
                        <span>
                            <Link to={'/listing?page=' + (curpage === 1 ? 1 :curpage - 1)}>Previous</Link> ... 
                            <Link to={'/listing?page=' + (curpage === (Math.round(items.length/pagesize))? curpage : curpage + 1)}>
                                Next
                            </Link>
                        </span>
                        <span>  </span>
                        <span>
                            Page size: 
                            <select onChange={onPagesizeChange} className='form-select'>
                                <option value="10">10</option>
                                <option value="30">30</option>
                                <option value="100">100</option>
                            </select>
                        </span>
                        <p>Page {curpage} of {Math.round(items.length / pagesize)}</p>
                        <p>Displaying items: {curpage * pagesize}</p>
                    </span>
                </div>
            </div>
            <div className={styles.cardListingContainer}>
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