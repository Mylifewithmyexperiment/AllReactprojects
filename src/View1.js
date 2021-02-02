import React from "react";

const View1 = ({ view1, setView1, history, user, isTabletOrMobile, show }) => {
  console.log(show);
  return (
    <div className="view-1">
      <div className="view-item">
        <div className="username">
          {user ? user.username : "user.username"}
          {isTabletOrMobile ? (
            <div
              className="btn-sm"
              onClick={() => {
                localStorage.removeItem("userLoginData");
                history.push("/signin");
              }}
            >
              Logout
            </div>
          ) : (
            ""
          )}
        </div>
        <input
          placeholder="Enter embedded Link URL"
          onKeyPress={(e) =>
            e.key === "Enter" ? setView1(e.target.value) : null
          }
        />
      </div>
      <div className="iframe-1">
        <iframe
          title="Wikipedia page for Avocados"
          src={view1}
          className={isTabletOrMobile ? "fullscreen" : "halfscreen"}
        ></iframe>
      </div>
    </div>
  );
};

export default View1;
