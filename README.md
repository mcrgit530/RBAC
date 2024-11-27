# Admin Dashboard

A React-based Admin Dashboard to manage users, roles, and permissions. This application demonstrates CRUD operations, dynamic role-based access control (RBAC), and responsive UI using Material-UI.

---

## Features

1. **User Management**:
   - View, add, edit, and delete users.
   - Assign roles to users.
   - Toggle user status (active/inactive).

2. **Role Management**:
   - Create, view, edit, and delete roles.
   - Assign permissions to roles.

3. **Permission Management**:
   - View and manage available permissions.
   - Assign permissions dynamically to roles.

4. **Backend Integration**:
   - Uses `json-server` to simulate an API for CRUD operations.

---

## Prerequisites

1. **Node.js** (>= 14.x)
2. **npm** or **yarn**
3. **json-server** (to simulate backend)

Install `json-server` globally if not already installed:
```bash
npm install -g json-server
