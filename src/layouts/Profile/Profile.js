import React from "react";
import logo from "../../images/logo.png";
import imgprofile from "../../images/selvarasu.jpg";
import balance from "../../images/cash-wallet.svg";
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="profile-info">
                <img src={imgprofile} className="profile-image" alt="Profile_Image" />
                <p className="profile-name">Selvarasu K</p>
                <div className="balance-container">
                    <span className="balance-align">
                        <img src={balance} className="balance-icon" alt="Cash_Wallet" />
                    </span>
                    <span className="balance-number">₹ 5,00,000</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;