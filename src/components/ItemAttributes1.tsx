import React from "react";

type Props = {
    features: FeaturesList, 
}

const ItemAttributes1: React.FC<Props> = ({features}) => {

    return (
        <div className="Card-attributes">
            <div>
                <span className="attributes-title" id="attributes">Attributes:</span>
                <ul>
                    <li>
                        <span className="attributes-key">Deposit: </span>
                        <span className="attributes-value">{features?.Deposit}</span>
                    </li>
                    <li>
                        <span className="attributes-key">Available: </span>
                        <span className="attributes-value">{features?.Available}</span>
                    </li>
                    <li>
                        <span className="attributes-key">Minimum Term: </span>
                        <span className="attributes-value">{features["Minimum term"]}</span>
                    </li>
                    <li>
                        <span className="attributes-key">Maximum Term: </span>
                        <span className="attributes-value">{features["Maximum Term"]}</span>
                    </li>
                    <li>
                        <span className="attributes-key">Number of Flatmates: </span>
                        <span className="attributes-value">{features["#flatmates"]}</span>
                    </li>
                    <li>
                        <span className="attributes-key">Number of Rooms: </span>
                        <span className="attributes-value">{features["Total # Rooms"]}</span>
                    </li>



                </ul>
            </div>
        </div>

    )

}

export default ItemAttributes1