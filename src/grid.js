import React from 'react';
import './grid.css';


function Grid() {
    return (
    <div className="App">

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Employee Id#</th>
      <th scope="col">Position</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">7193</th>
      <td>Web Development Team</td>
      <td>Jared</td>
      <td>Gober</td>
      <td>jaredcgober@gmail.com</td>
      <td>$75,000</td>
    </tr>
    <tr>
      <th scope="row">7194</th>
      <td>Ball Boy</td>
      <td>Jacob</td>
      <td>Gober</td>
      <td>jacobGober@example.net</td>
      <td>$11,000</td>
    </tr>
    <tr>
      <th scope="row">0014</th>
      <td>Player</td>
      <td>Pierre-Emmerick</td>
      <td>Aubameyang</td>
      <td>IScoreGoalz@example.net</td>
      <td>$350,000</td>
    </tr>
    <tr>
      <th scope="row">3272</th>
      <td>Acountant</td>
      <td>Rebecca</td>
      <td>Johnson</td>
      <td>ArseanlAccounts@example.net</td>
      <td>$120,000</td>
    </tr>
  </tbody>
</table>



    </div>
    );
  }

  export default Grid;