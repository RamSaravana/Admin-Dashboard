import React from 'react'
import {CalendarToday,AttachMoney,Assignment,Forum} from '@material-ui/icons';
import './FeaturedInfo.css'

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <div className="featuredWrapper">
                    <div className="featuredTitle">EARNINGS (MONTHLY)
                        <div className="featuredInsideData">$40,000</div>
                    </div>
                    <div><CalendarToday className="featuredTitleIcon"/></div>
                </div>
            </div>
            <div className="featuredItem">
                <div className="featuredWrapper">
                    <div className="featuredTitle">EARNINGS (ANNUAL)
                        <div className="featuredInsideData">$215,000</div>
                    </div>
                    <div><AttachMoney className="featuredTitleIcon"/></div>
                </div>
            </div>
            <div className="featuredItem">
                <div className="featuredWrapper">
                    <div className="featuredTitle">TASKS
                        <div className="featuredInsideData">50%</div>
                    </div>
                    <div><Assignment className="featuredTitleIcon"/></div>
                </div>
            </div>
            <div className="featuredItem">
                <div className="featuredWrapper">
                    <div className="featuredTitle">PENDING REQUESTS
                        <div className="featuredInsideData">18</div>
                    </div>
                    <div><Forum className="featuredTitleIcon"/></div>
                </div>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
