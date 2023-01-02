import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiftContext } from "../context/context";

const Quiz = () => {
  const [i, setI] = useState(0);

  const navigate = useNavigate();

  const { setQuestionPassed } = useContext(GiftContext);

  const quizQuestion = [
    {
      question: "السؤال 1 من 4: هل انت ذكر ام انثى ؟",
      answers: ["ذكر", "أنثى"],
    },
    {
      question: "السؤال 2 من 4: كم عمرك ؟",
      answers: ["18-29", "30-39", "40-49", "+50"],
    },
    {
      question: "ما هو تقييمك لخدمات آبل ؟",
      answers: ["جيد جدا", "لا يصدق", "نعم", "ليس جيد جدا"],
    },
    {
      question: "السؤال 4 من 4: ما هو الهاتف الذكي الذي تستخدمه؟",
      answers: ["Android", "Apple"],
    },
  ];

  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimation("fadeIn");
    }, 500);
  }, [])

  const handleClick = () => {
    
    setAnimation("")
    setTimeout(() => {
      setI((prev) => (prev += 1));
      setAnimation("fadeIn");
    }, 500);

    if (i === quizQuestion.length - 1) {
      setI(0);
      setQuestionPassed(true);
      navigate("/randomgift");
    }
  };

  return (
    <div>
      <div className="question">{quizQuestion[i].question}</div>
      <div className="grid my-4">
        {quizQuestion[i].answers.map((answer, index) => (
          <button
            key={index}
            onClick={handleClick}
            className={`qz-hidden ${animation} rounded p-3 my-3 block btn btn__primary`}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
