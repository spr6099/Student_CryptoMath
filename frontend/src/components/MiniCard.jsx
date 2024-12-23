import React from "react";

function MiniCard({ Icon, style, title, subTitle }) {
  return (
    <>
      <div className="mini_card_box">
        <Icon
          src="..."
          class=""
          style={{
            width: "80px",
            height: "80px",
            padding: "10px",
            borderRadius: "10px",
            ...style,
          }}
          alt="..."
        />

      <span className="text">
            <p class="card-text">{title}</p>
            <h5 class="card-title">{subTitle}</h5>
      </span>
      </div>
    </>
  );
}

export default MiniCard;
