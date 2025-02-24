import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClickRecords = () => {
  const [clickData, setClickData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/get-clicks')
      .then((response) => {
        setClickData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching click records:', error);
      });
  }, []);

  return (
    <div>
      <h2>Button Click Records</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          {clickData.map((record) => (
            <tr key={record.click_date}>
              <td>{record.click_date}</td>
              <td>{record.click_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClickRecords;
