import { useContext } from "react";
import { GiftContext } from "../context/context";
import Main from "../components/Main";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { giftPassed } = useContext(GiftContext);

  if (giftPassed) {
    return <Navigate to="/congratulation" />;
  }

  return (
    <>
      <Main />
    </>
  );
};

export default Home;
