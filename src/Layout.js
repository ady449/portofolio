import React from "react";
import "./Layout.css";
const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="page">
        <div className="flex flex-row overflow-hidden">{props.children}</div>
        {/* <div className="cursor"></div> */}
      </div>
    </React.Fragment>
  );
};

export default Layout;
