import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import View1 from "./View1";
import View2 from "./View2";
// 1125
const View = ({ username }) => {
  const [view1, setView1] = useState("https://en.wikipedia.org/wiki/Avocado");
  const [view2, setView2] = useState("https://en.wikipedia.org/wiki/Avocado");
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("userLoginData"));
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [show, setShow] = useState(
    useMediaQuery({ query: "(max-width: 1224px)" })
  );
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLoginData"));
    if (!user) {
      history.push("/signin");
    }
    return () => {};
  }, []);
  return (
    <>
      <div className="container">
        <View1
          view1={view1}
          setView1={setView1}
          history={history}
          show={show}
          user={user}
          isTabletOrMobile={isTabletOrMobile}
        />
        {isTabletOrMobile ? (
          ""
        ) : (
          <View2
            view2={view2}
            setView2={setView2}
            history={history}
            screenSize={"halfscreen"}
          />
        )}
      </div>
      {isTabletOrMobile ? (
        <View2
          view2={view2}
          setView2={setView2}
          history={history}
          screenSize={"fullscreen"}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default View;
