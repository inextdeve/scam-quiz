import { useEffect, useState } from "react";
import Quiz from "./Quiz";
const Main = () => {
  const [rest, setRest] = useState("جاري التحميل ...");
  const [timer, setTimer] = useState({
    minutes: 0,
    seconds: 0,
  });
  let timeleft = 300000;
  useEffect(() => {
    const countDown = setInterval(() => {
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      timeleft -= 1000;
      setTimer({ minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(countDown);
    };
  }, []);

  useEffect(() => {
    let i = 187;
    const countDown = setInterval(() => {
      setRest(i);
      i--;
    }, 10000);
    return () => {
      clearInterval(countDown);
    };
  }, []);

  return (
    <main className="mt-20 container mx-auto px-3">
      <div className="flex justify-center">
        <img className="w-80" src="./images/apple.png" />
      </div>
      <div className="px-3 leading-8">
        <h2 className="text-2xl my-3">
          مرحبا بك في مسابقة ابل لربح iphone 13 pro max
        </h2>
        <p className="py-2">
          قم بالاجابة على الاسئلة في الاسفل . سيستغرق الأمر دقيقة واحدة فقط
          وستحصل على جائزة رائعة : iphone-13-pro-max !
        </p>
        <p className="py-2">
          هده المسابقة تقدمها شركة رسميا . هناك اكتر من 30 الف هاتف بمناسبة
          احتفالها بالدكرى السنوي
        </p>
        <p className="py-2">
          يهدف هذا الاستطلاع إلى تحسين جودة الخدمة لمستخدمينا وسيتم مكافأة
          مشاركتك بنسبة 100٪.
        </p>
        <p className="countdown py-2">
          انت فقط لديك{" "}
          <span className="text-red-500 font-bold">{timer.minutes}</span> دقائق
          و <span className="text-red-500 font-bold">{timer.seconds}</span>{" "}
          ثوانى , للإجابة على هذا الاستطلاع!
        </p>
        <p className="font-bold">أسرع ، عدد الجوائز المتاحة محدود!</p>
      </div>
      <div className="rest-gift">
        <div className="gradient-bg-blue  text-white font-bold py-3 px-4 my-3  rounded text-center ">
          الهدايا المتبقية {rest}
        </div>
      </div>
      <Quiz />
    </main>
  );
};
export default Main;
