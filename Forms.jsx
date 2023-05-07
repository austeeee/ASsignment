import React, { useState } from 'react';

function Forms() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

return (
    <div>
      <h1>Employee Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
          }
  export default Forms;