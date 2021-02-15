import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  chartDataArray = new Array<ChartData>();
  world = new Array
  constructor(public http: HttpClient) {
    http.get('https://3000-c372c932-6b1b-4d63-986b-a421e85fca45.ws-eu03.gitpod.io/access_to_electricity').subscribe(this.getData);
  }

  getData = (data) => {
    console.log(data);
    for (var i in data) {
      let cd = new ChartData(data[i]['Country Name'], "LineChart", data[i], data[i]['Country Name'])
      this.chartDataArray.push(cd);
    }
    console.log(this.chartDataArray)
  }
}


export class ChartData {
  public data = [];
  constructor(public title, public type, json_data, public columnNames) {
    for (var i in json_data) {
      const parsedX = parseInt(i);
      const parsedY = parseFloat(json_data[i])
      if (!isNaN(parsedX) && !isNaN(parsedY)) {
        this.data.push([parsedX, parsedY]);
      }
    }
    console.log(this.data);

  }
}
