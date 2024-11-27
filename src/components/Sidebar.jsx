import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Group, Security, Settings } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/"><Home /> Dashboard</Link></li>
        <li><Link to="/users"><Group /> User Management</Link></li>
        <li><Link to="/roles"><Security /> Role Management</Link></li>
        <li><Link to="/permissions"><Settings /> Permission Management</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
