import { createContext, useState } from "react";

export const GiftContext = createContext();

const GiftProvider = ({ children }) => {
  let init = JSON.parse(localStorage.getItem("player") || "{}");

  if (init?.expiry < new Date().getTime()) {
    localStorage.removeItem("player");
    init = {};
  }

  const [giftClick, setGiftClick] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [winnerName, setWinnerName] = useState(init?.name || "");
  const [passed, setPassed] = useState(false);
  const [questionPassed, setQuestionPassed] = useState(false);
  const [giftPassed, setGiftPassed] = useState(init?.giftPassed || false);

  const incClick = () => {
    setGiftClick((prev) => prev + 1);
  };

  const winner = () => {
    setIsWin(true);
  };

  const giftState = {
    giftClick,
    incClick,
    isWin,
    winner,
    winnerName,
    setWinnerName,
    passed,
    setPassed,
    questionPassed,
    setQuestionPassed,
    giftPassed,
    setGiftPassed,
  };

  return (
    <GiftContext.Provider value={giftState}>{children}</GiftContext.Provider>
  );
};

export default GiftProvider;
