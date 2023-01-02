import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GiftContext } from "../../context/context";
import "./modal.css";

const Input = ({ type, placeholder, id, required, name, value }) => {
  return (
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {placeholder}
      </label>
      <input
        name={name}
        value={value}
        required={required}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

const FormModal = ({ title, buttonText }) => {
  const navigate = useNavigate();

  const { setWinnerName, setGiftPassed } = useContext(GiftContext);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formInputs = [
    {
      type: "text",
      placeholder: "الإسم الكامل",
      id: "username",
      name: "name",
      required: true,
    },
    {
      type: "text",
      placeholder: "البلد",
      id: "city",
      name: "city",
      required: true,
    },
    {
      type: "text",
      placeholder: "العنوان",
      id: "address",
      name: "address",
      required: true,
    },
    {
      type: "text",
      placeholder: "الهاتف",
      id: "phone",
      name: "phone",
      required: false,
    },
  ];

  const [hidden, setHidden] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWinnerName(formData.name);
    setHidden(true);
    window.localStorage.setItem(
      "player",
      JSON.stringify({
        name: formData.name,
        giftPassed: true,
        expiry: new Date().getTime() + 1800000,
      })
    );
    setGiftPassed(true);
    navigate("/congratulation");
  };
  return (
    <div
      className={`${
        hidden ? "hidden" : ""
      } modalContainer fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full`}
    >
      <div className="modal relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="grid justify-center p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
              {title} {formData.name}
            </h3>
          </div>

          <div className="p-6 space-y-1">
            <form
              onChange={handleChange}
              onSubmit={handleSubmit}
              class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {formInputs.map(
                ({ type, placeholder, id, required, name }, index) => {
                  return (
                    <Input
                      name={name}
                      value={formData[name]}
                      key={index}
                      type={type}
                      placeholder={placeholder}
                      id={id}
                      required={required}
                    />
                  );
                }
              )}
              <div className=" p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
