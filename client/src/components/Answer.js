import React from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

function Answer(props) {
  const navigation = useNavigate();

  const { handleSetMbti } = React.useContext(StoreContext);

  const handleNextPage = (mbti) => {
    const pathname = window.location.pathname;
    const nextPage = Number(pathname.charAt(pathname.length - 1)) + 1;
    navigation(`/on${nextPage}`);

    handleSetMbti(mbti);
  };

  return (
    <button className="btn" onClick={handleNextPage.bind(this, props.mbti)}>
      {props.text}
    </button>
  );
}

export default Answer;
