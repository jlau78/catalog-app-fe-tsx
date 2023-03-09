import React from "react"
import {Link} from "react-router-dom"
import {useStyles} from "./../App"

type Props = {
    curPage: number,
    pageSize: number,
    totalSize: number,
}

const Pagination: React.FC<Props> = ({curPage, pageSize, totalSize}) => {

    const styles = useStyles()

    return (
        <React.Fragment>
                <div id='pagination-links' className='pagignation-nav'>
                    <span id='nav-links'>
                        <Link to={'/listing?page=' + (curPage === 1 ? 1 :curPage - 1)}>Previous</Link> ... 
                        <Link to={'/listing?page=' + (curPage === (Math.round(totalSize/pageSize))? curPage : curPage + 1)}>
                            Next
                        </Link>
                    </span>
                    <p>Page {curPage} of {Math.round(totalSize / pageSize)} 
                    , Displaying items: {curPage * pageSize}</p>
                </div>
        </React.Fragment>
    )
}

export default Pagination