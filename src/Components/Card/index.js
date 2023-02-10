import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-sec">
        <img src={props.user.avatar_url} alt="User image" />
      </div>
      <div className="name">
        <h1>Name: {props.user.login}</h1>
      </div>
        <div className="follower-section flex">
          <button onClick={() => props.handleFollowers(props.user)} className="btn">View Follower</button>
          <button onClick={() => props.handleFollowings(props.user)} className="btn">View Followings</button>
        </div>
      
    </div>
  );
};

export default Card;
