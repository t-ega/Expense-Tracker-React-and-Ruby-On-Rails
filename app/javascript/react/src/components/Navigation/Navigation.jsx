import React from "react";
import {NavStyled} from "../../styles/app-syle";
import {menuItems} from "../../utils/menu-items";

export const Navigation = () => {
    return (
        <NavStyled>
            <div className="user-con">
                <img src="" alt="" />
            </div>
            <div className="text">
                <h2>Mike</h2>
                <p>Your Money</p>
            </div>
            <ul className="menu-items">
                ${menuItems.map((item) => {
                    <li>item.title</li>
            })}
            </ul>
        </NavStyled>
    )
}