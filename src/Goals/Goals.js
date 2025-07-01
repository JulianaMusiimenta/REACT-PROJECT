import React from 'react';
import './Goals.css'

function Goals({ isGoal }) {
    return (
        <div className="goal-container">
            {isGoal ? (
                <h4>Goals Scored!</h4>
            ) : (
                <h4>No Goals Scored</h4>
            )}
        </div>
    );
}
export default Goals;
// This component displays a message based on whether a goal was scored or not