import { Component, OnInit } from '@angular/core';
//// @ts-ignore
// import * as Office from '../../../../node_modules/@microsoft/office-js/dist/office.js';


@Component({
  selector: 'app-open-ppt',
  templateUrl: './open-ppt.component.html',
  styleUrls: ['./open-ppt.component.scss']
})
export class OpenPptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger
     var dt = Office;
     Office.onReady((info) => {
      // Get the current Word document object
      const document = Office.context.document;
      debugger
      // Do something with the document object
      console.log('Document:', document);
    });

    (async () => {
      await Office.onReady();
      debugger
      if (!Office.context.requirements.isSetSupported('ExcelApi', '1.7')) {
          console.log("Sorry, this add-in only works with newer versions of Excel.");
      }
  })();

  Office.initialize = function (reason) {
    debugger
  }
    // $(document).ready(function () {
    //   ** now try to get the item **
    
    
    // });
    // Office.initialize = () => {
    //   // Get the PowerPoint application object
    //   const powerPoint = Office.context.document;
    
    //   // Perform initialization tasks here
    //   console.log('PowerPoint initialized');
    // };
    // Office.context.document.getFilePropertiesAsync(function (asyncResult: any) {
    //   if (asyncResult.status == "succeeded") {
    //     var fileUrl = asyncResult.value.url;
    //     var fileName = asyncResult.value.fileName;
    //     var fileType = asyncResult.value.fileType;
    
    //     // Use the fileUrl, fileName, and fileType variables to extract the data from the PowerPoint presentation.
    //   }
    // });

    // Office.context.document.getFileAsync(Office.FileType.Compressed, function (asyncResult: any) {
    //   if (asyncResult.status == "succeeded") {
    //     var file = asyncResult.value;
    //     file.getSliceAsync(0, file.size, function (sliceResult: any) {
    //       if (sliceResult.status == "succeeded") {
    //         var fileContent = sliceResult.value.data;
            
    //         // Use the fileContent variable to extract the data from the PowerPoint presentation.
    //       }
    //     });
    //   }
    // });
  }

}
