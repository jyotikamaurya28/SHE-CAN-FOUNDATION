import React from "react";

export default function Leaderboard() {
  // you could hardcode, or fetch from your server/data.json if you like
  const leaderboard = [
    { name: "Alice", donations: 7000 },
    { name: "Bob", donations: 6000 },
    { name: "John Doe", donations: 5000 }
  ];

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, idx) => (
          <li key={idx}>{entry.name} - ₹{entry.donations}</li>
        ))}
      </ul>
    </div>
  );
}
