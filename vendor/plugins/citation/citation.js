import Plugin  from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
 /**
  * The Citation feature.
  */
 export default class Citation extends Plugin {
  init() {
      console.log('upload-New-Video plugin initialized.');

      const editor = this.editor;

    editor.ui.componentFactory.add('upload-NewVideo', locale =>  {
      const view = new ButtonView(locale);
      view.set( {
        label:'Upload',
        icon:'<svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="drop" fill="#000000" transform="translate(42.666667, 106.666667)"><path d="M426.666667,4.26325641e-14 L426.666667,298.666667 L3.55271368e-14,298.666667 L3.55271368e-14,4.26325641e-14 L426.666667,4.26325641e-14 Z M85.3333333,234.666667 L42.6666667,234.666667 L42.6666667,256 L85.3333333,256 L85.3333333,234.666667 Z M384,234.666667 L341.333333,234.666667 L341.333333,256 L384,256 L384,234.666667 Z M170.666667,96 L170.666667,202.666667 L266.666667,149.333333 L170.666667,96 Z M85.3333333,170.666667 L42.6666667,170.666667 L42.6666667,192 L85.3333333,192 L85.3333333,170.666667 Z M384,170.666667 L341.333333,170.666667 L341.333333,192 L384,192 L384,170.666667 Z M85.3333333,106.666667 L42.6666667,106.666667 L42.6666667,128 L85.3333333,128 L85.3333333,106.666667 Z M384,106.666667 L341.333333,106.666667 L341.333333,128 L384,128 L384,106.666667 Z M85.3333333,42.6666667 L42.6666667,42.6666667 L42.6666667,64 L85.3333333,64 L85.3333333,42.6666667 Z M384,42.6666667 L341.333333,42.6666667 L341.333333,64 L384,64 L384,42.6666667 Z" id="Combined-Shape"></path></g></g></svg>',
        keystroke:'CTRL+R',
        tooltip:true,
        isToggleable:false
      });

      // Callback executed once the icon is clicked
      view.on('execute', () =>  {
         // fire a JS event
         window.dispatchEvent(new Event('upload-New-Video'));
      });

      return view;
    });
  }
}
