import React, {useState, useEffect} from "react";
import {getItems} from "./../API"
import useStyles from "./../assets/style"
import {Routes, Route, Link} from "react-router-dom"

// const ItemListing: React.FC = () => {

export default function ItemListing() {

    // const classes = useStyles()
    const [items, setItems] = useState<IItem[]>([])

    useEffect(() => {
        handleGetItems()
    }, []);


    const handleGetItems = () => {
        getItems()
            .then(({status, data}) => {
                if (status !== 200) {
                    throw new Error("Error. Failed to getItems");
                }
                setItems(data.items)
            })
            .catch((err) => console.error(err))
    }

    return (
        <div className="Listing--container">
            {items.map((item: IItem, idx: number) => (
                <div className="Card--item-container" key={item.itemId}>
                    <span>{item.name}</span>
                    <div className="Card--item-details" id={item.itemId}>
                        <div className="Card--text__heading">
                            <h3>{item.name}</h3>
                            <h4>{item.description}</h4>
                            <p>{item.price}</p>
                        </div>
                        <div className="Card--text__content">
                            <p>{idx+1} - {item.fullDescription}</p>
                        </div>
                    </div>

                    <Link to={`/item/${item.itemId}`}>
                        <div className="Card--thumbnail__images">
                            <img src={item.thumbnails} className="Card--thumbnail__img"
                                alt="Main"/>

                        </div>
                    </Link>
                </div>
            ))}

        </div>

    )
}

