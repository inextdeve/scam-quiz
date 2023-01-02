import { useState, useContext, useEffect } from "react"
import { GiftContext } from "../../context/context";

import "./modal.css"

const Modal = ({title, p, buttonText, img, isWinner, titleColor}) => {

    const {winner} = useContext(GiftContext);

    const [hidden, setHidden] = useState(false);
    const [easeFadeOut, setIsFadeOut] = useState(false);

    const [animation, setAnimation] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setAnimation("modalFadeIn")
        }, 100)
    }, [])

    const handleClick = () => {
        if (isWinner) {
            winner()
        }
        setIsFadeOut(true)
        
        setHidden(true)
        
    }
    return <>
  <div className={`${hidden? "hidden":""}  modalContainer fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full`}>
      <div className={`${animation} modal relative w-full h-full max-w-2xl md:h-auto`}>
          
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-1">
              
              <div className="grid justify-center p-4 border-b rounded-t dark:border-gray-600">
                <div className="hero w-90">
                    <img width="100%" src={img}/>
                </div>
                  <h3 className={`text-xl text-center font-semibold  dark:text-white my-4 ${titleColor ? titleColor : "text-gray-900" }`}>
                      {title}
                  </h3>
              </div>
              
              <div className="p-6">
                  {p.map((p, index) => <p key={`${index}-lo`} className="text-base text-gray-500 dark:text-gray-400 my-3">{p}</p>)}
              </div>
              <div className=" p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button onClick={handleClick} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{buttonText}</button>
                  
              </div>
          </div>
      </div>
  </div>
  </>
}

export default Modal