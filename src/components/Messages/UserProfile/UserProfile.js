import React, { Component } from "react";
import "./UserProfile.css";
import Logo from "../../../images/logo_circle.png"

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={Logo} />
          </div>
          <h4>Tech Support</h4>
          <p>Hi, how we can help you?</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
          </div>
          <div className="card__content">
            We are here to help you find a solution for your problem. This is a live chat for our sellers to help them with issues related to dashboard.  
          </div>
        </div>
      </div>
    );
  }
}