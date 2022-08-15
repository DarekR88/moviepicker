import React, { useEffect } from "react";
import { testSearch } from "../../API/index.js";
import "./MainPage.scss";

const MaimPage = (props) => {
  useEffect(() => {
    testSearch();
  });

  return <div className="main-page"></div>;
};

export default MaimPage;
