import { useState, useContext, useRef } from "react"
import { GiftContext } from "../../context/context";
import "./giftbox.css";

const GiftBox = () => {

    const [open, setOpen] = useState(false);

    const {giftClick, incClick} = useContext(GiftContext);

    const giftEl = useRef(null)

    const handleClick = (e) => {
        if(giftClick === 1) {
            setOpen(true);
            const Image = document.createElement("img");
            Image.src="./images/iphone.png";
            Image.setAttribute("class", `absolute top-0 gift-img gift-img-open`)
            
            giftEl.current.firstElementChild.after(Image)

        }
        
        incClick();
        setOpen(true);
    }
    return <div className="relative">
                <div ref={giftEl} onClick={handleClick} className={`gift ${open ? "openGift" : ""}`}>
                    <div className="gift-top"></div>
                    
                    <div className="gift-box"></div>
                </div>
            </div>
            
}

export default GiftBox