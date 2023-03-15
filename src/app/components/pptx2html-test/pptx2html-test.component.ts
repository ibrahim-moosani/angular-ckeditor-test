import { Component, OnInit } from '@angular/core';
var pptx2html = require('pptx2html');
var  JSZipUtils = require("jszip-utils")
import * as JSZip from 'jszip';

@Component({
  selector: 'app-pptx2html-test',
  templateUrl: './pptx2html-test.component.html',
  styleUrls: ['./pptx2html-test.component.scss']
})
export class Pptx2htmlTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
     JSZipUtils.getBinaryContent('../../../assets/test.pptx', (err:any, data:any) => {
      if (err) {
        throw err; // handle error
      }

      JSZip.loadAsync(data).then((zip:any) => {
        debugger
              pptx2html.default(zip, '#result', '#pptx-thumb')
        .then(function (time: any) { 
          debugger      
          console.log('ALL DONE in ' + time + 'ms') 
        
        })
        // zip.file("test.pptx").async("string").then(function (content:any) {
        //   debugger
        //   console.log(content);
        // });
      });
      debugger
    //   JSZip.loadAsync(data).then(function (zip) {
    //     // ...
    //     debugger
    //     pptx2html.default(zip, '#result', '#pptx-thumb')
    //     .then(function (time: any) { 
    //       debugger      
    //       console.log('ALL DONE in ' + time + 'ms') 
        
    //     })
    // });

      // var zip = new JSZip();
      // pptx2html.default(data, '#result', '#pptx-thumb')
      // .then(function (time: any) { 
      //   debugger      
      //   console.log('ALL DONE in ' + time + 'ms') 
      
      // })
      // pptx2html.default(data,'#result')
      // create a new JSZip instance with the binary data
      // const zip = new JSZip();
      // zip.loadAsync(data).then(() => {
      //   // use the JSZip API to extract or manipulate the contents of the zip file

      //   zip.file('path/to/file.txt').async('string').then((content) => {
      //     console.log('File content:', content);
      //   });
      // });
    });
  }

}
