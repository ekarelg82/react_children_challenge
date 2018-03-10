import React from "react";
import ReactDOM from "react-dom";
// import targetIcon from "./images/target-icon.jpg";
import "./index.css";

function IconButton({ children }) {
  return (
    <div className="icon">
      <i class="fas fa-exclamation-triangle" />
      {children}
    </div>
  );
}

function NavItem({ children }) {
  return <a className="icon">{children}</a>;
}

function Nav({ children }) {
  let items = React.Children.toArray(children);
  if (items != children) {
    return Demo();
  } else {
    return <div className="nav">{items}</div>;
  }
}

function Demo() {
  return (
    <div>
      <IconButton>Something went wrong!</IconButton>

      <NavItem url="https://google.com">Google</NavItem>
      <NavItem url="https://slack.com">Slack</NavItem>
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById("root"));
