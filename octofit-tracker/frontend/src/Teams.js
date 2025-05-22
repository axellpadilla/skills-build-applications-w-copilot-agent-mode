import React, { useEffect, useState } from 'react';
import { getApiBaseUrl } from './utils';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(getApiBaseUrl() + 'teams/')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">Teams</h2>
      <table className="table table-striped table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={idx}>
              <td>{team.name}</td>
              <td>{team.member_emails && team.member_emails.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;