import { stringify } from "querystring";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Map } from "typescript";

type Props = {
    features: FeaturesList 
}

const ItemAttributes: React.FC<Props> = ({features}) => {

    // const [featuresList, setFeaturesList] = useState<Map<string, string>>(new Map())

    // useEffect(() => {
    //     getFeaturesMap
    // }, [])

    // TODO: Bug Not working - Map appears to be undefined when running getMapKey .forEach
    const getFeaturesMap = (features: FeaturesList) => {
        const m = new Map<string, string>()
        console.log('features:%s', features)
        for (const [k, v] of Object.entries(features)) {
            console.log('getFeaturesMap: from features:%s key:%s, value:%s', features, k, v)
            m.set(k, v)
        }
        return m
    }

    const featuresMap = getFeaturesMap(features)

    const getMapKeys = () => {
        let c: string[] = []; 
        getFeaturesMap?.prototype.forEach((value: string, key: string) => c.push(key));
        return c;
    } 

    return (
        <div className="Card-attributes">
            <div>
                <span className="attributes-title" id="attributes">Attributes:</span>
                <ul>
                    {getMapKeys().map((key) => 
                         <li>
                            <span className="attributes-key">{key}: </span>
                            <span className="attributes-value">{getFeaturesMap?.prototype.get(key)}</span>
                        </li>
                   
                    )}
                </ul>

            </div>
        </div>
    )
}

export default ItemAttributes