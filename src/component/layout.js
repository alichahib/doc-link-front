import React from "react";
import '../styles/layoutStyles.css'
import { sideBarMenu } from "../Data/Data";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Layout = ({children})=>{
    const user=useSelector(state=>state.user)
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
                <div className="header">
                    <div className="header-content">
                        <Link to='/'>{JSON.stringify(user)}</Link>
                    </div>
                    </div>
                <div className="body">{children}</div>
            </div>

        </div>
        </div>
    )
}

export default Layout;