import React, { useEffect, useState } from 'react';
import { getApiBaseUrl } from './utils';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(getApiBaseUrl() + 'workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">Workouts</h2>
      <table className="table table-striped table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w, idx) => (
            <tr key={idx}>
              <td>{w.name}</td>
              <td>{w.description}</td>
              <td>{w.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;