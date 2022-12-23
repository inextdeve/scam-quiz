import React from "react";
import { useContext, useState } from "react";
import Modal from "../components/common/Modal";
import { GiftContext } from "../context/context";

const Congratulation = () => {

    const {winnerName, passed, setPassed} = useContext(GiftContext);

    const progressSteps = [{
        step: 30,
        message: false
    },
    {
        step: 50,
        message: false
    },
    {
        step: 52,
        message: true
    },
    {
        step: 60,
        message: false
    },
    {
        step: 60,
        message: true
    },
    {
        step: 65,
        message: false
    },
    {
        step: 70,
        message: true
    },
    {
        step: 80,
        message: false
    },
    {
        step: 85,
        message: false
    },
    {
        step: 90,
        message: false
    },
    {
        step: 96,
        message: false
    },
    {
        step: 98,
        message: false
    }]

    const [progress, setProgress] = useState({step: 0, message: false});
    const [iterator, setIterator] = useState(0);
    const handleWhatsappClick = () => {
        setProgress(progressSteps[iterator]);
        if(iterator < progressSteps.length - 1) {
            setIterator(prev => prev += 1)
        }
        if (iterator === progressSteps.length - 1) {
            setTimeout(() => {
                setPassed(true)
            }, 200)
        }
        
    }
    
    const [showAlert, setShowAlert] = useState(false);

    const handleSendClick = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 6000)
    }

    return (<>{!passed ? (<div className="justify-center container w-full mx-auto px-2">
                <h1 className="text-center text-3xl text-red-400 my-4">تهانينا  {winnerName}</h1>
                <div>
                    <img className="m-auto" src="./images/iphone.png" width={300}/>
                </div>
                <p className="text-center my-4">جائزتك : iphone-12-pro-max-blue , مبروك عليك المرجوا اتباع التعليمات الموجودة في الاسفل لكي يتم ارسال الهاتف اليك !</p>
                <div className="bg-gray-300 text-center rounded p-3">
                    <p className="my-4 font-bold text-xl">***القواعد***</p>
                    <p className="my-4">1 - لم يتبقى لك سوى خطوة للحصول على الهاتف الخاص بك . لكي تستلم الهاتف الخاص بك يجب ان نتاكد انك لست روبوت لدا يجب عليك ان تضغط على الزر الاخضر الموجود في الاسفل (انقر فوق رمز "WhatsApp" أدناه) لمشاركة العرضالتي تقدمه ابل مع اصدقائك لكي تتيح لهم فرصة للفوز ايضا بهاتف ايفون "هده سياسة شركة ابل" حتى تعطي فرصة للجميع لداك وجب عليك نشر الخبر مع 10 اصدقائك او مجموعات على الواتساب قم بالنشر حتى يمتلأ الشريط الازرق</p>
                    <p className="my-2">2. انقر على "ارسال الهاتف" ليتم ارسال لك الهاتف الى عنوانك.</p>
                    <a href={`whatsapp://send/?text=https://visa-gift.com/تم التحوبل من طرف ${winnerName}`} onClick={handleWhatsappClick} className="block bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-4 my-3 border-b-4 border-green-700 hover:border-green-500 rounded text-center w-full">Whatsapp</a>
                    <p className="my-4">شاركه حتى يمتلئ الشريط الأزرق!</p>
                    
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-6">
                        <div className="ease-in duration-700 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress.step}%`}}>{progress.step}%</div>
                    </div>
                    {progress.message ? <Modal title="تنبيه !" p={["يجب ان لا تقوم بالنشر في نفس المجموعة او الصديق اكتر من مرة ."]} buttonText="أك"/> : ""}
                    <button onClick={handleSendClick} className={` rounded p-3 my-3 block btn btn__primary`}>ارسال الهاتف</button>
                    {showAlert ? <Modal title="تنبيه" p={["المروجوا الضغط على زر الواتساب والنشر حتى يمتلأ الشريط الازرق واضغط على ارسال الهاتف"]} buttonText="أك"/> : ""}
                </div>
            </div> ) : 
                (<div className="justify-center container w-full mx-auto px-2">
                <h1 className="text-center text-3xl text-red-400 my-4">تهانينا  {winnerName}</h1>
                <div>
                    <img className="m-auto" src="./images/iphone.png" width={300}/>
                </div>
                <p className="text-center my-4">جائزتك : iphone-12-pro-max-blue , مبروك عليك المرجوا اتباع التعليمات الموجودة في الاسفل لكي يتم ارسال الهاتف اليك !</p>
                <div className="bg-gray-300 text-center rounded p-3">
                    <p className="my-4 font-bold text-xl text-red-500">تهانينا! الخطوة الأخيرة :</p>
                    <p className="my-2">عليك أن تكمل هذه الخطوة الأخيرة!</p>
                    <p className="my-2">1. يجب عليك الاتصال بنا اضغط على الزر في اسفل "اتصل بنا " ستنبتق نافدة ستختار الشركة الاتصال الخاصة بك اضغط عليها واتصل بنا .</p>
                    <p className="my-2 font-bold">(تذكر ، هذه الخطوة مهمة جدًا)</p>
                    <p className="my-2">سيتكلم معك احد عاملين لدينا لتاكيد الجائزة .سيطلب منك عنوان المنزل الخاص بك لارسال الهاتف الخاص بك .</p>
                    <p className="my-4">الاتصال 24/24 ساعة 7 ايام في الاسبوع نحن ننتضرك .</p>
                    
                    <a target="_blank" rel="noreferrer" href="https://www.google.com" className="rounded p-3 my-3 block btn btn__primary">اتصل بنا</a>
                </div>
            </div> )
            }</>)
}

export default Congratulation;