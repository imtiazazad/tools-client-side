import React from 'react';

const BusinessSummary = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow lg:flex justify-center mb-20">

            <div class="stat">
                <div class="stat-title">we served customers</div>
                <div class="stat-value">200+</div>
                <div class="stat-desc">2021-2022</div>
            </div>

            <div class="stat">
                <div class="stat-title">Annual revenue</div>
                <div class="stat-value">20M+</div>
                <div class="stat-desc">↗︎ 600 (39%)</div>
            </div>

            <div class="stat">
                <div class="stat-title">tools</div>
                <div class="stat-value">10+</div>
                <div class="stat-desc">↘︎ 90 (19%)</div>
            </div>

            <div class="stat">
                <div class="stat-title">Reviews</div>
                <div class="stat-value">12k</div>
                <div class="stat-desc">↗︎700 (74%)</div>
            </div>

        </div>
    );
};

export default BusinessSummary;