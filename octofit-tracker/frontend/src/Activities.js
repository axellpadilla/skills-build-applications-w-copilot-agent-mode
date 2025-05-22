import React, { useEffect, useState } from 'react';
import { getApiBaseUrl } from './utils';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(getApiBaseUrl() + 'activity/')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">Activities</h2>
      <table className="table table-striped table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>User Email</th>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, idx) => (
            <tr key={idx}>
              <td>{a.user_email}</td>
              <td>{a.activity_type}</td>
              <td>{a.duration}</td>
              <td>{a.date && a.date.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;