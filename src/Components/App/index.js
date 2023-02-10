import React from "react";
import { useState } from "react";
import Card from "../Card";
import Followers from "../Followers/followers";
import "./style.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [viewDetails, setViewDetails] = useState(false);
  const [viewFollowers, setViewFollwers] = useState(false);
  const [viewFollowings, setViewFollowings] = useState(false);
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  const handleDetails = () => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
    setViewDetails(viewDetails === false ? true : false);
    setViewFollwers(false);
    setViewFollowings(false);
  };

  const handleFollowers = (user) => {
    fetch(`https://api.github.com/users/${user.login}/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
    setViewFollwers(true);
    setViewFollowings(false);
    setViewDetails(false);
   
    console.log(user.login);
  };
  const handleFollowings = (user) => {
    fetch(`https://api.github.com/users/${user.login}/following`)
      .then((res) => res.json())
      .then((data) => setFollowings(data));
    setViewFollowings(true);
    setViewDetails(false);
    setViewFollwers(false);
  };
  console.log(followings);
  console.log(followers);
  return (
    <div className="container">
      <center>
        <h1>GitHub User Details</h1>
        <button onClick={handleDetails}>View Users </button>
        <div className="card-container flex">
          {viewDetails == true
            ? userData.map((user, i) => {
                return (
                  <div key={i}>
                    <Card
                      user={user}
                      i={i}
                      handleFollowers={handleFollowers}
                      handleFollowings={handleFollowings}
                      viewFollowers={viewFollowers}
                      viewFollowings={viewFollowings}
                      followers={followers}
                      following={followings}
                      viewDetails={viewDetails}
                    />
                  </div>
                );
              })
            : ""}
        </div>
        <div className="followers-sec">
          {viewFollowers === true
            ? followers.map((user, i) => {
                return (
                  <div key={i}>
                    <Followers user={user} />
                  </div>
                );
              })
            : ""}
        </div>
        <div className="followers-sec">
          {viewFollowings === true
            ? followings.map((user, i) => {
                return (
                  <div key={i}>
                    <Followers user={user} />
                  </div>
                );
              })
            : ""}
        </div>
      </center>
    </div>
  );
};

export default App;
