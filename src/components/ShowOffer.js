import React from "react";

const ShowOffer = ({ handleClose, isAccepted }) => {
  return (
    <div className="content">
      <div className="container">
        <button onClick={handleClose}>x</button>
        <div>Click The below button to accept offer</div>

        {isAccepted && (
          <div className="accept-btn">
            <button onClick={isAccepted}>Accept Offer</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowOffer;
