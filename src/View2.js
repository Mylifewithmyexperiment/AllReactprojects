import React from "react";

const View2 = ({ view2, setView2, history, isTabletOrMobile, screenSize }) => {
  return (
    <div className="view-2">
      <div className="view-item">
        <input
          placeholder="Enter embedded Link URL"
          onKeyPress={(e) =>
            e.key === "Enter" ? setView2(e.target.value) : null
          }
        />
        {screenSize === "fullscreen" ? (
          ""
        ) : (
          <div
            className="btn"
            onClick={() => {
              localStorage.removeItem("userLoginData");
              history.push("/signin");
            }}
          >
            Logout
          </div>
        )}
      </div>
      <div className="iframe-2">
        <iframe
          title="Wikipedia page for Avocados"
          src={view2}
          className={screenSize}
        ></iframe>
      </div>
    </div>
  );
};
export default View2;
