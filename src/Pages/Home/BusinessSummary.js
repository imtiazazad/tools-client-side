import React from 'react';

const BusinessSummary = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow lg:flex justify-center mb-20">

            <div className="stat">
                <div className="stat-title">we served customers</div>
                <div className="stat-value">200+</div>
                <div className="stat-desc">2021-2022</div>
            </div>

            <div className="stat">
                <div className="stat-title">Annual revenue</div>
                <div className="stat-value">20M+</div>
                <div className="stat-desc">↗︎ 600 (39%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">tools</div>
                <div className="stat-value">10+</div>
                <div className="stat-desc">↘︎ 90 (19%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">Reviews</div>
                <div className="stat-value">12k</div>
                <div className="stat-desc">↗︎700 (74%)</div>
            </div>

        </div>
    );
};

export default BusinessSummary;