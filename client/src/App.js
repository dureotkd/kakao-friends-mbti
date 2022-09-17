import React from "react";
import "./App.css";
import AppIndex from "./AppIndex";
import { Modal } from "./components";

/**
 * 1. import : 외부에 있는 모듈(함수나 변수) 가져올떄 사용
 * 2. export : 내부에 있는 모듈을 외부로 전달해줄떄 사용
 *
 * React router dom : 리액트 내에서 페이지 이동 도와주는 라이브러리
 *
 */

export const StoreContext = React.createContext({
  handleSetMbti: null,
});

function App() {
  const [mbti, setMbti] = React.useState([
    {
      I: 0, // 내향형
      E: 0, // 외향형
    },
    {
      S: 0, // 현실형
      N: 0, // 이상주의형?
    },
    {
      T: 0, // 이성적
      F: 0, // 감성적
    },
    {
      P: 0, // 즉흥형
      J: 0, // 계획형
    },
  ]);

  const handleSetMbti = (mbti) => {
    alert(`선택한 mbti는 ${mbti}입니다`);
  };

  React.useEffect(() => {}, []);

  // /* 브라우저 닫기 이벤트 감지  */
  // window.onbeforeunload = function () {
  //   /**
  //    * 여태까지 저장된 mbti 서버에 저장
  //    */

  //   return false;
  // };
  return (
    <StoreContext.Provider
      value={{
        handleSetMbti,
      }}
    >
      <AppIndex />
      <Modal />
    </StoreContext.Provider>
  );
}

export default App;
