import { createContext, useState } from "react";

export const GiftContext = createContext()

const GiftProvider = ({children}) => {

    const [giftClick, setGiftClick] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [winnerName, setWinnerName] = useState("");
    const [passed, setPassed] = useState(false);

    const incClick = () => {
        setGiftClick(prev => prev + 1 )
    }

    const winner = () => {
        setIsWin(true)
    }

    const giftState = {
        giftClick,
        incClick,
        isWin,
        winner,
        winnerName,
        setWinnerName,
        passed,
        setPassed
    }

    return <GiftContext.Provider value={giftState}>{children}</GiftContext.Provider>
}

export default GiftProvider;