import React, { useEffect, useState } from 'react';
import { getApiBaseUrl } from './utils';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(getApiBaseUrl() + 'users/')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-primary">Users</h2>
      <table className="table table-striped table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;