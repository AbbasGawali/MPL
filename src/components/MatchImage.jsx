import React from "react";
import "./design/MatchImage.css";

// export const MatchImage = ({ images }) => {             //todo
export const MatchImage = () => {
  let  Fimages = [];
  return (
    <>
      <div className="today-match">
        <h2>MPL Today’s Matches </h2>
        {/* <div className="match-image-container">
          {images.length > 0 ? (
            <>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Match ${index + 1}`}
                  className="match-img"
                />
              ))}
            </>
          ) : (
            <p>No image selected for today's match.</p>
          )}
        </div> */}
      </div>
    </>
  );
};
