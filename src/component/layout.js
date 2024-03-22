import React from "react";
import '../styles/layoutStyles.css'
import { sideBarMenu } from "../Data/Data";
import { Link } from "react-router-dom"

const Layout = ({children})=>{
    return(
        <div className="main">
            <div className="layout">
            <div className="sidebar">
                <div className="logo">
                    <h3>Doc Link</h3>
                    <hr />
                </div>
                <div className="menu">
                    {sideBarMenu.map(menu=>{
                        return (
                            <div className="menu-item">
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        )

                    })}
                </div>
            </div>
            <div className="content">
                <div className="header">Header</div>
                <div className="body">{children}</div>
            </div>

        </div>
        </div>
    )
}

export default Layout;