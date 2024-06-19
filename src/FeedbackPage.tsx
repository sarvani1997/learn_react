import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function ModalContent({ onClose }) {
  return (
    <div className="flex flex-col modal  border border-current">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function FeedbackTab() {
  const [showModal, setShowModal] = useState(false);
  const handleKeyDown = (e) => {
    // Access the pressed key
    console.log("key down");
    console.log({ e });
    const keyPressed = e.key;

    if (keyPressed === "Escape") {
      setShowModal(false);
    }

    console.log({ keyPressed });
  };
  return (
    <div onKeyDown={handleKeyDown}>
      <div
        onClick={() => showModal && setShowModal(false)}
        className={`min-h-screen ${
          showModal ? "bg-gray-400 opacity-50" : ""
        } z-0`}
      >
        <h3>sakjdfnidlkfor</h3>
        <div>
          <ol>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
            <li>bdjgda</li>
          </ol>
        </div>
      </div>
      <div className={`absolute right-[-22px] bottom-[100px] rotate-90 z-10`}>
        <div className="border-2 p-4 border-black ">
          <>
            <button className="" onClick={() => setShowModal(!showModal)}>
              Feedback
            </button>
            {showModal &&
              createPortal(
                <ModalContent onClose={() => setShowModal(!showModal)} />,
                document.body
              )}
          </>
        </div>
      </div>
    </div>
  );
}

export default FeedbackTab;
