import React from "react";

function Modal(props) {
  document.querySelector(".modal-bg")?.addEventListener("click", (event) => {});

  return (
    <div className="modal-bg">
      <div className="modal">Modal</div>
    </div>
  );
}

export default Modal;
