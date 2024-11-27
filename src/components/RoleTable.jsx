import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoleTable() {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddRole = () => {
    if (newRole.trim() === '') return;
    axios.post('http://localhost:5000/roles', { name: newRole })
      .then(response => setRoles([...roles, response.data]))
      .catch(error => console.error(error));
    setNewRole('');
  };

  const handleDeleteRole = (id) => {
    axios.delete(`http://localhost:5000/roles/${id}`)
      .then(() => setRoles(roles.filter(role => role.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h3>Role Management</h3>
      <div>
        <input 
          type="text" 
          placeholder="Enter new role" 
          value={newRole} 
          onChange={(e) => setNewRole(e.target.value)} 
        />
        <button onClick={handleAddRole}>Add Role</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>
                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;
