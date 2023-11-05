import React from "react";

const Items = ({
  itemName,
  itemImg,
  itemPrice,
  itemQty,
  infoOne,
  infoTwo,
  infoThree,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <img
          src={itemImg}
          style={{
            width: 110,
            height: 110,
            borderRadius: 17,
            border: "1px solid #D0D5DD",
          }}
          alt="items"
        />
        {/* background: url(<path-to-image>), lightgray 50% / cover no-repeat, #F9FAFB; */}

        <div style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
          <span style={{ color: "#344054", fontWeight: "600" }}>
            {itemName}
          </span>
          <div style={{ display: "flex", alignItems: "center", columnGap: 10 }}>
            <span style={{ color: "#667085", fontWeight: "400", fontSize: 13 }}>
              {infoOne}
            </span>
            <span
              style={{
                width: 1,
                height: 20,
                background: "#D0D5DD",
              }}
            />
            <span style={{ color: "#667085", fontWeight: "400", fontSize: 13 }}>
              {infoTwo}
            </span>
            <span
              style={{
                width: 1,
                height: 20,
                background: "#D0D5DD",
              }}
            />
            <span style={{ color: "#667085", fontWeight: "400", fontSize: 13 }}>
              {infoThree}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          rowGap: 10,
        }}
      >
        <span style={{ color: "#1D2939" }}>{itemPrice}</span>
        <span style={{ color: "#667085", fontWeight: "400" }}>
          Qty: {itemQty}
        </span>
      </div>
    </div>
  );
};

export default Items;
