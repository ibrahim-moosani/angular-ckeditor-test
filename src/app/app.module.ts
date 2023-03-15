import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyeditorComponent } from './components/myeditor/myeditor.component';
import { PdftronComponent } from './components/pdftron/pdftron.component';
import { OpenPptComponent } from './components/open-ppt/open-ppt.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TestPptIframeComponent } from './components/test-ppt-iframe/test-ppt-iframe.component';
import { Ppt2htmlComponent } from './components/ppt2html/ppt2html.component';
import { Pptx2htmlTestComponent } from './components/pptx2html-test/pptx2html-test.component';
import { PptxjsComponent } from './components/pptxjs/pptxjs.component';
// import { ColorPickerModule } from 'ngx-color-picker';
// import { ColorPickerModule } from 'angular-color-picker';
// import { ColorPickerModule } from './color-picker/color-picker.module'


@NgModule({
  declarations: [
    AppComponent,
    MyeditorComponent,
    PdftronComponent,
    OpenPptComponent,
    TestPptIframeComponent,
    Ppt2htmlComponent,
    Pptx2htmlTestComponent,
    PptxjsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    // ColorPickerModule,
  
    // ColorPickerModule ,
    RouterModule.forChild([
      {
        path: 'editor',
        component: MyeditorComponent
      },
    ])
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // Other providers suppressed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
