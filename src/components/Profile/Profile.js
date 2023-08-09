import React from "react";
import logo from "../../Images/logo.png";
import imgprofile from "../../Images/selvarasu.jpg";
import balance from "../../Images/cash-wallet.svg";
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
            <div className="tab-list">
                <div className="list-item active">
                    <p>Dashboard</p>
                </div>
                <div className="list-item">
                    <p>Credits</p>
                </div>
                <div className="list-item">
                    <p>About</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;