import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  template:`<h2 > welcome {{name + title}}</h2>

  <table >
      <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
      </tr>
      <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
      </tr>
      <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
      </tr>
  </table>
  `
})

export class AppView {
  title = 'practice-ang';
  name = 'yogesh';

}
