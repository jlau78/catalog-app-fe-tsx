import React, {useState, useEffect} from "react";

type Props = {
    images?: string[]
}

const ImagesDisplay: React.FC<Props> = ({images}) => {

    return (
    <div className="Card-thumbnail_images"> 
        {
            // TODO: Fix data bug
            // Data bug: Only new records have an array of thumbnails. 
            // Hence we test for a long string array of a single thumbnail source (> 50 characters).
            images && images.length > 50 ? 
                (<span>
                    <img src={images}
                        className="Card--thumbnail__img"
                        alt="Main"/>
                </span>)
                :
                (images?.map((image_src : string) => (
                    <span>
                        <img src={image_src}
                            className="Card--thumbnail__img"
                            alt="Main"/>
                    </span>

                ))) 
                
        } 
        <p>
            images array length: {images?.length}
        </p>
    </div>)
}

export default ImagesDisplay