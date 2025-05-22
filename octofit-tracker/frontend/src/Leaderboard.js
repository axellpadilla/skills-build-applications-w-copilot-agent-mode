import React, { useEffect, useState } from 'react';
import { getApiBaseUrl } from './utils';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(getApiBaseUrl() + 'leaderboard/')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">Leaderboard</h2>
      <table className="table table-striped table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.team_name}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;