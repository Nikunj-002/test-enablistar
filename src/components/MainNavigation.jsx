import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/">Logo</Link>
    </header>
  );
}

export default MainNavigation;
