import { useEffect, useState } from "react";

const Main = () => {
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

  return (
    <main className="mt-20">
      <div className="flex justify-center">
        <img className="w-80" src="./images/apple.png" />
      </div>
      <div dir="rtl" className="px-3">
        <h2 className="prose-xl">
          مرحبا بك في مسابقة ابل لربح iphone 13 pro max
        </h2>
        <p>
          قم بالاجابة على الاسئلة في الاسفل . سيستغرق الأمر دقيقة واحدة فقط
          وستحصل على جائزة رائعة : iphone-13-pro-max !
        </p>
        <p>
          هده المسابقة تقدمها شركة رسميا . هناك اكتر من 30 الف هاتف بمناسبة
          احتفالها بالدكرى السنوي
        </p>
        <p>
          يهدف هذا الاستطلاع إلى تحسين جودة الخدمة لمستخدمينا وسيتم مكافأة
          مشاركتك بنسبة 100٪.
        </p>
        <p className="countdown" data-count="2022/10/10">
          انت فقط لديك <span className="text-red-500">{timer.minutes}</span>{" "}
          دقائق و <span className="text-red-500">{timer.seconds}</span> ثوانى ,
          للإجابة على هذا الاستطلاع!
        </p>
        <p>أسرع ، عدد الجوائز المتاحة محدود!</p>
      </div>
    </main>
  );
};
export default Main;
