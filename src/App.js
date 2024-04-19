import "./styles.css";
import ShowOffer from "./components/ShowOffer";
import React, { useState } from "react";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [offer, setOffer] = useState(false);

  const handleClick = () => {
    setIsShow(true);
  };
  const handleClose = () => {
    setIsShow(false);
  };

  const isAccepted = () => {
    setOffer(true);
    setIsShow(false);
  };

  return (
    <>
      {!isShow ? (
        <div className="showOffer">
          {!offer && (
            <button className="showOffer-button" onClick={handleClick}>
              Show offer
            </button>
          )}
          {offer && <div>Offer Accepted</div>}
        </div>
      ) : (
        <ShowOffer handleClose={handleClose} isAccepted={isAccepted} />
      )}

      {/* {isShow && <ShowOffer handleClose={handleClose} />} */}
    </>
  );
}
