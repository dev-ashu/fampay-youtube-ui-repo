import { Component,OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net-bs4';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {    
    let serverURL = "http://localhost:8085/youtube/video/details";
      $('#example').DataTable({
      "order": [[ 3, "desc" ]],
      "searching": true,
      "lengthMenu": [[5, 10, 25, 50], [5, 10, 25, 50]],
      "retrieve": "true",
      "ajax": {
        "url": serverURL,
        "type": "post",

        //To pass ajax request data as JSON by default is 'Application Form Url Encoded'
        "contentType": "application/json",
        "dataSrc": function (dataSource) {
          return dataSource.data;
        },
        "data": function (d) {
          return JSON.stringify(d);
        }
      },
      //setting data in table by getting from source using key
      "columns": [
        { "data": "title",  "orderable": false},
        { "data": "description",  "orderable": false },
        { "data": "thumbnailUrl",  "orderable": false },
        { "data": "publishDatetime" }
      ],

      //it indicates that pagination feature will try to adjust in most page numbers(1,2,3) in space provided
      // and also it would have all next, previous, first, last buttons
      "pagingType": "full_numbers",

      ///need to evaluate this, i think it is for showing spinner
      "processing": "true",

      //it sets the default number of rows in page"
      // "pageLength": 2,

      // it indicates that the processing will be done by server end
      "serverSide": true,
    });
  }
}
