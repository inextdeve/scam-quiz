import { useEffect, useState, useContext } from "react";
import Loader from "../components/common/Loader";
import Modal from "../components/common/Modal";
import FormModal from "../components/common/formModal";
import QuizGame from "../components/QuizGame";
import { GiftContext } from "../context/context";
import { Navigate } from "react-router-dom";
import "./randomgift.css";

const RandomGift = () => {
  const { giftClick, isWin, questionPassed } = useContext(GiftContext);
  const [showFail, setShowFail] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const ModalContent = [
    {
      title: "تهانينا ، تم حفظ إجاباتك بنجاح!",
      p: [
        "لديك فرصة للفوز بأيفون.",
        "قم بالضغط على احد الصناديق للكشف عن جائزتك.",
        "لديك 3 محاولات. حظا سعيدا!",
      ],
      buttonText: "إبدأ الآن",
      img: "./images/logoamzbox.jpg",
    },
    {
      title: "للأسف...",
      p: ["عذرا ، الصندوق الذي حددته فارغ. مازال لديك 2 فرص! حظا سعيدا!"],
      buttonText: "إعادة المحاولة",
    },
    {
      title: "تهانينا!",
      p: [
        "مبروك عليك! لقد ربحت iphone-12-pro-max-blue",
        "2. أدخل عنوانك وأكمل التسجيل.",
        "3. سيتم تسليم الهاتف في غضون 5-7 أيام",
      ],
      buttonText: "أك",
      img: "./images/iphone.png",
    },
  ];

  const conditions = [
    "لقد أجبت على جميع الأسئلة الأربعة",
    "عنوان IP الخاص بك صالح لهذا الترويج",
    "الهدايا متوفرة ومتوفرة!",
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 6000);//Modify time 6000

    return () => clearTimeout(loader);
  });
  useEffect(() => {
    if (giftClick === 1) {
      setTimeout(() => {
        setShowFail(true)
      }, 2000)
    }

    if (giftClick === 2) {
      setTimeout(() => {
        setShowSuccess(true)
      }, 2000)
    }
  }, [giftClick])
  
  if (!questionPassed) {
    return <Navigate to="/" />;
  }




  return (
    <>
      {loading ? (
        <div className="loading container px-2">
          <Loader />
          <h1 className="my-4 text-center text-2xl">جاري التحقق الآن ...</h1>
          <div className="condition-check">
            {conditions.map((cd, index) => (
              <p className={`condition bold cd${index + 1} my-2 px-2`}>
                {" "}
                ✔️ {cd}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Modal
            title={ModalContent[0].title}
            buttonText={ModalContent[0].buttonText}
            p={ModalContent[0].p}
            img={ModalContent[0].img}
          />

          <QuizGame />

          {showFail ? (
            <Modal
              title={ModalContent[1].title}
              buttonText={ModalContent[1].buttonText}
              p={ModalContent[1].p}
              img={ModalContent[1].img}
            />
          ) : (
            ""
          )}
          {showSuccess ? (
            <Modal
              isWinner={true}
              title={ModalContent[2].title}
              buttonText={ModalContent[2].buttonText}
              p={ModalContent[2].p}
              img={ModalContent[2].img}
            />
          ) : (
            ""
          )}
          {isWin ? (
            <FormModal title="من فضلك إملا الاستمارة" buttonText="OK" />
          ) : (
            "null"
          )}
        </div>
      )}
    </>
  );
};

export default RandomGift;
