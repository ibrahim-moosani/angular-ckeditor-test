import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const WebViewer: any;
// import a from '../../../../vendor/wv-resources/lib'

@Component({
  selector: 'app-pdftron',
  templateUrl: './pdftron.component.html',
  styleUrls: ['./pdftron.component.scss']
})
export class PdftronComponent implements OnInit, AfterViewInit {

  
  constructor() { }

  wvInstance: any;
  docUrl = "https://journalclub.blob.core.windows.net/journalclub-dev/Organization/1/Article/Library/0/file-example_PDF_1MB.pdf";
  @ViewChild('viewer') viewer: ElementRef | undefined;
  ngOnInit(): void {
    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);

  }

  ngAfterViewInit(): void {
    // The following code initiates a new instance of WebViewer.
    this.createPDFTRON();
   
  }

  createPDFTRON(){
    WebViewer({
      path: '../../../vendor/wv-resources/lib',
      initialDoc: this.docUrl,//'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
      fullAPI: true
    }, this.viewer?.nativeElement).then((instance:any) => {
      this.wvInstance = instance;
      const { documentViewer } = instance.Core;
      const document = instance.UI.iframeWindow.document;
      instance.Core.documentViewer.addEventListener('documentLoaded', this.wvDocumentLoadedHandler)
     
    
    })
  }

  wvDocumentLoadedHandler(): void {
    debugger
    // you can access docViewer object for low-level APIs
    const { documentViewer, annotationManager, Annotations } = this.wvInstance.Core;
    const document = this.wvInstance.UI.iframeWindow.document;
  

    // this.getImage();
    // this.extractImages()
    this.getAllImage();
  }
  async getAllImage(){
    debugger
    const { PDFNet } = this.wvInstance.Core;
    await PDFNet.initialize();
    const pdfDoc = await PDFNet.PDFDoc.createFromURL(this.docUrl);
    pdfDoc.initSecurityHandler();
    // const imageCount = await pdfDoc.getImageCount();
    const pageCount = await pdfDoc.getPageCount();

    
    for (let i = 0; i < pageCount; i++) {
      const page = await pdfDoc.getPage(i);
      if(page){
        const content = await page.getContents();
       // Create an ElementReader object to extract images from the page
      const reader = await PDFNet.ElementReader.create();
      reader.beginOnPage(page);
      debugger
      // Iterate through the page elements
      let element;
      let cond = true;
      while (cond) {
        element = await reader.next();
        if(element){
          var contentType = null;
          if(element.getType?  true : false){
            var contentType = await element.getType();
          }
          
          if (contentType === PDFNet.Element.Type.e_image) {
            // Get the Image object
            const image = await element.getImage();
            
            // Extract the image data and do something with it
            const imageData = await image.getBitmap();
            console.log(`Extracted image with width: ${imageData.width} and height: ${imageData.height}`);
          }
        }
        else{
          cond = false;
        }
     
      }
  
      // Destroy the ElementReader
      reader.destroy();
  
      // Save the modified document
      await pdfDoc.save('output.pdf', PDFNet.SDFDoc.SaveOptions.e_linearized);
      console.log('Finished extracting images from page');
      }
      // const imageData = await image.getImageData(PDFNet.ImageType.e_raw);
      // use the image data as needed
      debugger
  }
  //   for (let i = 0; i < imageCount; i++) {
  //     const image = await pdfDoc.getImage(i);
  //     const imageData = await image.getImageData(PDFNet.ImageType.e_raw);
  //     // use the image data as needed
  //     debugger
  // }
  }

}
