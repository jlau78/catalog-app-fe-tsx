import React from "react"
import {Link, useSearchParams} from "react-router-dom"
import {useStyles} from "./../App"

type Props = {
    curPage: number,
    pageSize: number,
    totalItems: number,
}

const Pagination: React.FC<Props> = ({curPage, pageSize, totalItems: totalSize}) => {

    const styles = useStyles()
    const url = window.location.href
    const [searchParams, setSearchParams] = useSearchParams()
    const newParams : URLSearchParams = new URLSearchParams()

    const onClick= (event) => {
        const {tag, value} = event?.target
        console.log(`target:${event?.target}, tag:${event.name}, value:${event.href}`)
        newParams.set("page", event?.name)
        setSearchParams(newParams)
    }

    const createPageNums = (itemsTotal) => {
        let elems = []
        let totalPages = Math.round(itemsTotal/pageSize)
        let start = curPage
        let max = curPage + 5 < totalPages ? curPage + 5 : curPage
        for(let i=start; i < max; i++){
            elems.push(<li id="page-num" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '5px',
                marginRight: '5px'
            }}> 
                    <a name={i.toString()} href="javascript:" onClick={onClick}>
                        {i}
                    </a>
            </li>)
        }
        elems.push(<li>....</li>) 
        elems.push(<li>  {totalPages}</li>)
        return elems;
    }

    return (
        <React.Fragment>
            <div id='pagination-links' className='pagignation-nav'>
                <span id='nav-links'>
                    <ul style={{
                        display: 'flex',
                        overflow: 'auto'
                    }} 
                    id="pagination-page-nums">
                        <Link to={'/listing?page=' + (curPage === 1 ? 1 :curPage - 1)}>Previous</Link> ... 
                        {createPageNums(totalSize)}
                        <Link to={'/listing?page=' + (curPage === (Math.round(totalSize/pageSize))? curPage : curPage + 1)}>
                            Next
                        </Link>

                    </ul>
                </span>
                <p>Page {curPage} of {Math.round(totalSize / pageSize)} 
                , Displaying items: {curPage * pageSize}</p>
            </div>

        </React.Fragment>
    )
}

export default Pagination