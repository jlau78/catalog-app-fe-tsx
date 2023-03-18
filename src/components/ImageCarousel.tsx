import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import { useStyles } from '../App';

type CarouselProps = {
    images?: string[] 
}

const ImageCarousel: React.FC<CarouselProps> = ({images}) => {
  const styles = useStyles()
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  console.log('carousel images:%s', images)
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {images?.map((imgsrc: string, i : number) => (
          <li
            style={{
              backgroundColor: 'white',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={imgsrc} className={styles.itemDetail} key={`img_${i}`}/>
          </li>
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <ol style={{ display: 'flex' }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ImageCarousel;

