import {Component, OnInit} from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  title = 'read-xml-angular8';
  public xmlItems: any;
  constructor(private _http: HttpClient) { this.loadXML(); }
  loadXML() {
    this._http.get('https://www.finnkino.fi/xml/News/',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, ' +
            'Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
          });
      });
  }
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.News;
        for (k in obj.NewsArticle) {
          var item = obj.NewsArticle[k];
          arr.push({
            ArticleURL: item.ArticleURL[0],
            HTMLLead: item.HTMLLead[0]

          });
        }
        resolve(arr);
      });
    });
  }
  ngOnInit() {
  }
}
