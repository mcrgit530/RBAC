import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PermissionTable() {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/permissions')
      .then(response => setPermissions(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddPermission = () => {
    if (newPermission.trim() === '') return;
    axios.post('http://localhost:5000/permissions', { name: newPermission })
      .then(response => setPermissions([...permissions, response.data]))
      .catch(error => console.error(error));
    setNewPermission('');
  };

  const handleDeletePermission = (id) => {
    axios.delete(`http://localhost:5000/permissions/${id}`)
      .then(() => setPermissions(permissions.filter(permission => permission.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h3>Permission Management</h3>
      <div>
        <input 
          type="text" 
          placeholder="Enter new permission" 
          value={newPermission} 
          onChange={(e) => setNewPermission(e.target.value)} 
        />
        <button onClick={handleAddPermission}>Add Permission</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Permission Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map(permission => (
            <tr key={permission.id}>
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td>
                <button onClick={() => handleDeletePermission(permission.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PermissionTable;
