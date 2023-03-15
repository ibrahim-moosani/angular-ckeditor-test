import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as ClassicEditorBuild from '../../../../vendor/ckeditor5/build/ckeditor.js';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.scss']
})
export class MyeditorComponent implements OnInit {

  temp: any;
  temp1: any;
  public Editor:any = ClassicEditorBuild;
  constructor( private sanitizer: DomSanitizer,  ) { }

  ngOnInit(): void {
    var dt = ClassicEditorBuild
    .create( document.querySelector( '.document-editor__editable' ), {
        cloudServices: {
           
        },
        editorConfig: {
          allowedContent: true,
          extraAllowedContent: 'div(*)[style]',
          stylesSet: [
              // Define your styles here
              { name: 'My Custom Style', element: 'section', attributes: { 'style': 'background-color: red;' } }
          ]
      }
    } )
    .then( (editor:any) => {
        const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

        toolbarContainer?.appendChild( editor.ui.view.toolbar.element );

        debugger
        this.temp = editor;
    } )
    .catch( (err:any) => {
        console.error( err );
    } );
    this.temp1 = dt;

  }

  test(){
    debugger
    // var content = this.temp.getData();
    // var htmlElement:any = document.createRange().createContextualFragment(content).firstElementChild;
    // htmlElement.style.backgroundColor = 'green'
    // if(htmlElement)
    // this.setParagraphBackgroundColor(htmlElement, 'green')
    // this.temp.execute('insertSimpleBox')
    var html = '<section class="simple-box"><div class="simple-box-description" style="background-color:green;"><p>&nbsp;</p></div></section>'
    // var dt = this.sanitizer.bypassSecurityTrustHtml(html)
    this.temp.setData(html);
 
  }

  setParagraphBackgroundColor(element: any, color: string) {
    this.temp.editing.view.change( (writer: any) => {
      debugger
      writer.setStyle(
        'background-color', 
        color, 
        new this.temp.model.RangeIn(element)
      );
  } );
    // const writer = new this.temp.utils.writer();

   
  }

}
