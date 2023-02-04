import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./EmblaCarousel.module.css";

function EmblaCarousel(props) {
    const { options } = props
    const [emblaRef] = useEmblaCarousel(options);
    return (
        <div className={ styles.embla } >
            <div className="embla__container" ref={ emblaRef }>
                <div className={ styles["embla__container"] }>
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default EmblaCarousel;