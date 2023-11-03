import React from "react";

const Items = () => {
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
          src="https://s3-alpha-sig.figma.com/img/4c3e/1906/8e64838fa5ed0c02080e10a3cced5edd?Expires=1699833600&Signature=cbW4sPtLXLhpUnZto1pCmkAQ~fusUyJ7JTqNDVwEAsuq~dzRJO1u~iU6sm8urx0~WiFwijpdH5NOgF4Bw5hspQiWgOYJYclt8N6GpG6GUvI24VXPMrr~Eo7wLgHZ0tn~acDoTw~iYZY36wT7ejaYubN5HXTXpvOP6xkrwkP0Se4lQSc9F1EEy7OE8etE6930R9ykhS35ltKHj7bddni4nsiTa4cyUVKX1nTVXExz67VJ1Kwxb6cqTMxqCnMZ-8xDscKcNvKD-Qok1Dzu50NycJ6TudwJYyKhPzRnE5OI8RGqj3ZNVbGU42s6VuwNzv32D68EWSiN~Lu~tdsEFZOBxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
            MackBook Pro 14’’
          </span>
          <div style={{ display: "flex", alignItems: "center", columnGap: 10 }}>
            <span style={{ color: "#667085", fontWeight: "400", fontSize: 13 }}>
              Space Gray
            </span>
            <span
              style={{
                width: 1,
                height: 20,
                background: "#D0D5DD",
              }}
            />
            <span style={{ color: "#667085", fontWeight: "400", fontSize: 13 }}>
              32GB
            </span>
            <span
              style={{
                width: 1,
                height: 20,
                background: "#D0D5DD",
              }}
            />
            <span style={{ color: "#667085", fontWeight: "400", fontSize: 13 }}>
              1 TB
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
        <span style={{ color: "#1D2939" }}>$2599.00</span>
        <span style={{ color: "#667085", fontWeight: "400" }}>oty: 1</span>
      </div>
    </div>
  );
};

export default Items;
