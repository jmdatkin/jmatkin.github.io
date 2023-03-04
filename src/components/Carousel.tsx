import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
    imagePaths: string[],
    wrapper: MutableRefObject<HTMLElement | null>
}

function Carousel(props: Props) {

    const [boundingBox, setBoundingBox] = useState<DOMRect | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const floorMod = (a: number, b: number) => ((a % b) + b) % b;

    useEffect(() => {
        const onResize = () => setBoundingBox(props.wrapper.current.getBoundingClientRect());
        onResize();
        window.addEventListener('resize', onResize);
        const iid = window.setInterval(onResize, 300);

        return () => {
            window.removeEventListener('resize', onResize);
            window.clearInterval(iid);
        }
    }, []);

    const increment = function () {
        setImageIndex(floorMod(imageIndex + 1, props.imagePaths.length));
    };

    const decrement = function () {
        setImageIndex(floorMod(imageIndex - 1, props.imagePaths.length));
    };

    return (
        <div className="w-full h-full relative overflow-hidden">
            {boundingBox !== null ?
                <div className="h-full flex relative" style={{ transform: `translateX(${boundingBox.width * imageIndex * -1}px)` }}>
                    {props.imagePaths.map((image, idx) => {
                        // return <Image key={idx} src={image} width={boundingBox.width} height={boundingBox.height} alt="Project screenshot" style={{ objectFit: 'cover', imageRendering: 'auto', height: '100%' }}></Image>
                        return <Image key={idx} src={image} fill alt="Project screenshot" style={{ objectFit: 'cover', imageRendering: 'auto', transform: `translateX(${boundingBox.width*idx}px)`}}></Image>
                    })}
                </div>
                : ''
            }
            <div className="w-full h-full top-0 left-0 absolute grid grid-cols-2 z-[999]">
                <button onClick={decrement} className="block w-full h-full bg-white/60 hover:opacity-100 active:bg-white/70 opacity-0 duration-[0.08s]">
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </button>
                <button onClick={increment} className="block w-full h-full bg-white/60 hover:opacity-100 active:bg-white/70 opacity-0 duration-[0.08s]">
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}

export default Carousel;