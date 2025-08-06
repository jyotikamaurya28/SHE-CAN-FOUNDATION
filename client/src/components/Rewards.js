import React from 'react';
import './Rewards.css';

const rewards = [
  {
    title: 'Top Performer',
    description: 'Awarded for exceptional work during the internship period.',
    icon: '🏆'
  },
  {
    title: 'Team Player',
    description: 'Recognized for great collaboration and team spirit.',
    icon: '🤝'
  },
  {
    title: 'Innovator',
    description: 'Given for contributing creative and useful ideas.',
    icon: '💡'
  },
  {
    title: 'Consistency Award',
    description: 'For consistently meeting deadlines and delivering quality work.',
    icon: '📅'
  }
];

function Reward() {
  return (
    <div className="reward-page">
      <h1 className="reward-title">🎁 Rewards & Achievements</h1>
      <div className="reward-container">
        {rewards.map((reward, index) => (
          <div className="reward-card" key={index}>
            <div className="reward-icon">{reward.icon}</div>
            <h2 className="reward-name">{reward.title}</h2>
            <p className="reward-description">{reward.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reward;
