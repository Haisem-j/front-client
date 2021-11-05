import React from 'react'
import '../styles/sidebar.scss'
import { MdOutlineDashboardCustomize, MdOutlineFastfood, MdOutlineBook, MdOutlineStore, MdOutlinePayment, MdManageAccounts, MdOutlineLogout, MdOutlinePreview } from "react-icons/md";

export const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <h3>Temporary Logo</h3>
            </div>
            <div className="sidebar-name">
                Hello, <span>Random User</span>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-menu-title">Menu</div>
                <div className="sidebar-menu-elements-container">
                    <div className="sidebar-menu-element"><MdOutlineDashboardCustomize className="sidebar-icon"/> Dashboard</div>
                    <div className="sidebar-menu-element"><MdOutlineFastfood className="sidebar-icon"/> My Recipes</div>
                    <div className="sidebar-menu-element"><MdOutlineBook className="sidebar-icon"/>My Programs</div>
                    <div className="sidebar-menu-element"><MdOutlineStore className="sidebar-icon"/> Storefront</div>
                    <div className="sidebar-menu-element"><MdOutlinePayment className="sidebar-icon"/>Payments/Customers</div>
                    <div className="sidebar-menu-element"><MdManageAccounts className="sidebar-icon"/>  Account Settings</div>
                    <div className="sidebar-menu-element"><MdOutlinePreview className="sidebar-icon"/> Live Preview</div>
                    <div className="sidebar-menu-element"><MdOutlineLogout className="sidebar-icon"/>Logout</div>
                </div>
            </div>
        </div>
    )
}