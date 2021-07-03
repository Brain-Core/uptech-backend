import React from 'react'
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SideLink from './siderLink/siderLink.component';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

function Sidebar() {
    return (
        <div className="sidebar bg-dark">
            <div className="sidebarWrapper p-4 ">
                <div className="sideBarMenu">
                    <h3 className="text-white font-weight-bold">DashBoard</h3>
                    <SideLink
                    title="Home"
                    Icon={HomeIcon}
                    route="/"
                    />
                    <SideLink
                    title="Member"
                    Icon={AccountCircleIcon}
                    route="/member"
                    />
                    <SideLink
                    title="Product"
                    Icon={LocalGroceryStoreIcon}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
