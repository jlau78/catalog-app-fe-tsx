import React from "react"
import {Link} from "react-router-dom"
import ImagesDisplay from "./ImagesDisplay"

import {useStyles} from './../App'

type Props = {
    item: IItem,
    idx: number
}

const SearchListingRow: React.FC<Props> = ({item, idx}) => {

    const styles = useStyles()

    return (
        <React.Fragment key={item.itemId}>
            <div id={`item-${item.itemId}`} className={styles.cardListingRowItem} key={item.itemId}>
                <span>{item.name}</span>
                <div className="Card--item-details" id={item.itemId}>
                    <div className="rowHeadingBox" id="short-desc">
                        <h4>Description: {item.description}</h4>
                        <p id="price">Price: {item.price}</p>
                        <p>
                            <Link to={'/item/' + item.itemId} id='link-item-details'>
                                Item id: {item.itemId}  
                            </Link>
                        </p>
                    </div>
                    <div className="fullDescription" id="full-desc">
                        <p>{idx+1} - {item.fullDescription.slice(0,200)}</p>
                    </div>
                </div>

                <Link to={`/item/${item.itemId}`} id='imglink-item-details'>
                    <ImagesDisplay images={item?.thumbnails} />
                </Link>
            </div>
        </React.Fragment>
    )
}

export default SearchListingRow
