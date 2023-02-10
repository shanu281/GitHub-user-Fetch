import React from "react";
import "./style.css";

const Followers = (props) => {
  return (
    <div className="followers">
      <div className="followers-img">
        <img src={props.user.avatar_url} alt="user image" />
      </div>
      <div>
        <h2>{props.user.login}</h2>
      </div>
    </div>
  );
};

export default Followers;
