import React from "react"
import {Link} from "react-router-dom"
import ImagesDisplay from "./ImagesDisplay"
import styles from "../assets/main.module.scss"

type Props = {
    item: IItem,
    idx: number
}

const SearchListingRow: React.FC<Props> = ({item, idx}) => {

    return (
        <React.Fragment key={item.itemId}>
            <div className={styles.cardListingRowItem} key={item.itemId}>
                <span>{item.name}</span>
                <div className="Card--item-details" id={item.itemId}>
                    <div className="Card--text__heading">
                        <h4>Description: {item.description}</h4>
                        <p>Price: {item.price}</p>
                        <p>
                            <Link to={'/item/' + item.itemId}>
                                Item id: {item.itemId}
                            </Link>
                        </p>
                    </div>
                    <div className="Card--text__content">
                        <p>{idx+1} - {item.fullDescription.slice(0,200)}</p>
                    </div>
                </div>

                debug: images: {item?.thumbnails}

                <Link to={`/item/${item.itemId}`}>
                    <ImagesDisplay images={item?.thumbnails} />
                </Link>
            </div>
        </React.Fragment>
    )
}

export default SearchListingRow
