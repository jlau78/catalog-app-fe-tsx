import React, {useState, useEffect} from 'react'
import { URLSearchParams } from "url";
import {getItem} from "../API"
import {Link, useParams} from "react-router-dom"
import ItemAttributes1 from "../components/ItemAttributes1";
import ImagesDisplay from '../components/ImagesDisplay';

// const ItemDetails: React.FC = () => {
export default function ItemDetails() {

    const params = useParams()
    const itemId = params.itemId

    const [item, setItem] = useState<IItem>()

    useEffect(() => {
        getItem(itemId)
            .then(({status, data}) => {
                if (status !== 200) {
                    throw new Error(`Failed to get item with itemId ${itemId}`)
                }
                setItem(data.item);
            })
            .catch((err: Error) => { console.log(err)});
    }, [])

    return (

        <div className="Card--item-container" key={item?.itemId}>
            <div>
                <ImagesDisplay images={item?.thumbnails} />
            </div>
            <div className="Card--item-details" data-id={item?.itemId} id='item-details'>
                <h1>Item Details for {item?.description}</h1>
                <div>
                    <h2>{item?.description}</h2>
                    <div className="Card--price">
                        {item?.price}
                    </div>

                    <div className="Card-details-content">
                        <div className="Card--text">
                            <p>
                                {item?.fullDescription}
                            </p>
                        </div>
                        <div className="Card-attributes">
                            <ItemAttributes1 features={item?.featureList ?? {} as FeaturesList} />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
