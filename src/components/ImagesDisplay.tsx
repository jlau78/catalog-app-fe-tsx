import React, {useState, useEffect} from "react";

import {useStyles} from './../App'

type Props = {
    images?: string[]
}

const styles = useStyles()

const ImagesDisplay: React.FC<Props> = ({images}) => {

    return (
    <div className="Card-thumnail-container"> 
        {
            // TODO: Fix data bug
            // Data bug: Only new records have an array of thumbnails. 
            // Hence we test for a long string array of a single thumbnail source (> 50 characters).
            images && images.length > 50 ? 
                (<span>
                    <img src={images}
                        className={styles.thumbnailImg} 
                        alt="Main"/>
                </span>)
                :
                (images?.map((each_image: string) => (
                    <span>
                        <img src={each_image}
                            className={styles.thumbnailImg}
                            alt="Main"/>
                    </span>

                ))) 
                
        } 

    </div>)
}

export default ImagesDisplay