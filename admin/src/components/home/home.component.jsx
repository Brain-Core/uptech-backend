import React from 'react'
import FeatureInfo from '../features/feature.component';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Home.css';
import Chart from '../chart/chart.component';

function Home() {
    return (
        <div className="home">
            <div className="infoBox row m-4">
            <FeatureInfo
            Logo={AccountCircleIcon}
            title="MEMBER"
            total={8}
            />
            <FeatureInfo
            Logo={AddShoppingCartIcon}
            title="PRODUCT"
            total={10}
            />
            <FeatureInfo
            Logo={AccessibilityIcon}
            title="PARTNERS"
            total={8}
            />
            </div>

            <div className="">
                <Chart/>
            </div>
            
        </div>
    )
}

export default Home
