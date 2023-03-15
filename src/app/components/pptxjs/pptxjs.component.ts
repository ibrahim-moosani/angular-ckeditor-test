import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
//@ts-ignore
//  import * as pptxToHtml from '../../../assets/PPTXjs-1.21.1/pptxjs.js';
declare var pptxToHtml: any;
declare var $: any;
// var pptxToHtml: any;

@Component({
  selector: 'app-pptxjs',
  templateUrl: './pptxjs.component.html',
  styleUrls: ['./pptxjs.component.scss']
})
export class PptxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    var d:any = $;
    debugger
    d("#result").pptxToHtml({
      pptxFileUrl: "../../../assets/test.pptx",
      fileInputId: "uploadFileInput",
      slideMode: false,
      keyBoardShortCut: false,
      slideModeConfig: {  //on slide mode (slideMode: true)
          first: 1, 
          nav: false, /** true,false : show or not nav buttons*/
          navTxtColor: "white", /** color */
          navNextTxt:"&#8250;", //">"
          navPrevTxt: "&#8249;", //"<"
          showPlayPauseBtn: false,/** true,false */
          keyBoardShortCut: false, /** true,false */
          showSlideNum: false, /** true,false */
          showTotalSlideNum: false, /** true,false */
          autoSlide: false, /** false or seconds (the pause time between slides) , F8 to active(keyBoardShortCut: true) */
          randomAutoSlide: false, /** true,false ,autoSlide:true */ 
          loop: false,  /** true,false */
          background: "black", /** false or color*/
          transition: "default", /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
          transitionTime: 1 /** transition time in seconds */
      }
    });
   
}

}
