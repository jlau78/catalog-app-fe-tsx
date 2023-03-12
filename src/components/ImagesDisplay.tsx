import React, {useState, useEffect} from "react";
import {useSnapCarousel} from 'react-snap-carousel'
import ImageCarousel from "./ImageCarousel";

import {useStyles} from './../App'

type Props = {
    images?: string[]
}

const styles = useStyles()

const ImagesDisplay: React.FC<Props> = ({images}) => {

    const {scrollRef} = useSnapCarousel()

    return (
    <div className="Card-thumnail-box"> 
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
                <div id='images-carousel'>
                    <div>
                    <ul
                        ref={scrollRef} 
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            overflow: 'hidden',
                            position: 'relative',
                            transform: 'translateX(-50%)',
                            scrollSnapType: 'x mandatory',

                        }}
                    >

                    {images?.map((imgsrc : string, idx: number) => (
                        <li
                            style={{
                                backgroundColor: '#fff',
                                width: '250px',
                                height: '250px',
                                flexShrink: 0,
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} 
                            >
                                <img src={imgsrc}
                                    className={styles.thumbnailImg}
                                    alt="Main"
                                    key={'img_'+idx.toString()}/>

                        </li>
                    ))}
                    
                    </ul>
                    </div>
                    <div id="image-carousel">
                        <ImageCarousel images={images} />
                    </div>
                </div>

        } 

    </div>)
}

export default ImagesDisplay