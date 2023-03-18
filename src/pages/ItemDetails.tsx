import React, {useState, useEffect} from 'react'
import { URLSearchParams } from "url";
import {getItem} from "../API"
import {Link, useParams, useLocation} from "react-router-dom"
import ItemAttributes1 from "../components/ItemAttributes1";
import ImageCarousel from '../components/ImageCarousel';

// const ItemDetails: React.FC = () => {
export default function ItemDetails() {

    // const ImageCarousel = React.lazy(() => import ('../components/ImageCarousel'))
    const curPath = useLocation().pathname
    console.log('useLocation.pathname:$s', curPath)
    const {itemId} = useParams()

    const [item, setItem] = useState<IItem>()

    console.log('itemDetails - itemId: %s', itemId)
    console.log('thumbnails: %s', item?.thumbnails)

    useEffect(() => {
        getItem(itemId)
            .then(({status, data}) => {
                if (status !== 200) {
                    throw new Error(`Failed to get item with itemId ${itemId}`)
                }
                setItem(data.item);
                console.log('item with itemId %s: %s', itemId, item)
            })
            .catch((err: Error) => { console.log(err)});
    }, [])

    return (

        <div className="Card--item-container" key={item?.itemId}>
            <div>
                <ImageCarousel images={item?.thumbnails} />
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
