/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Plugin  from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';
import Command from '@ckeditor/ckeditor5-core/src/command';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import WidgetResize from '@ckeditor/ckeditor5-widget/src/widgetresize';
import Resizable from 'resizable';
import Pickr from '@simonwep/pickr';
// import ColorPickerUI from './plugins/ColorPickerUi';


class Editor extends DecoupledDocumentEditor {}

class UploadButtonToolbar extends Plugin {
	init() {
		console.log('upload-New-Video plugin initialized.');
  
		const editor = this.editor;
  
	  editor.ui.componentFactory.add('upload-NewVideo', locale =>  {
		const view = new ButtonView(locale);
		view.set( {
			label:'Video',
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

  class SimpleBox extends Plugin {
    static get requires() {
        return [ SimpleBoxEditing, SimpleBoxUI ];
    }
}

class SimpleBoxUI extends Plugin {
    init() {
        console.log( 'SimpleBoxUI#init() got called' );

        const editor = this.editor;
        const t = editor.t;

        // The "simpleBox" button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add( 'simpleBox', locale => {
            // The state of the button will be bound to the widget command.
            const command = editor.commands.get( 'insertSimpleBox' );

          
            // The button will be an instance of ButtonView.
            const buttonView = new ButtonView( locale );

            buttonView.set( {
                // The t() function helps localize the editor. All strings enclosed in t() can be
                // translated and change when the language of the editor changes.
                label: t( 'Simple Box' ),
                withText: true,
                tooltip: true
            } );

            // Bind the state of the button to the command.
            buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

            // Execute the command when the button is clicked (executed).
            this.listenTo( buttonView, 'execute', () => editor.execute( 'insertSimpleBox' ) );

            return buttonView;
        } );
    }
}

class SimpleBoxEditing extends Plugin {
    static get requires() {
        return [ Widget, WidgetResize ];
    }

    init() {
        console.log( 'SimpleBoxEditing#init() got called' );

        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add( 'insertSimpleBox', new InsertSimpleBoxCommand( this.editor )  );
        // command.add('resizableWidget', {
        //     // Widget definition properties.
        //     draggable: true,
        //     resizable: true,
        // })
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'simpleBox', {
            // Behaves like a self-contained block object (e.g. a block image)
            // allowed in places where other blocks are allowed (e.g. directly in the root).
            inheritAllFrom: '$blockObject'
        } );

        schema.register( 'simpleBoxTitle', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'simpleBox',

            // Allow content which is allowed in blocks (i.e. text with attributes).
            allowContentOf: '$block'
        } );

        schema.register( 'simpleBoxDescription', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'simpleBox',
            allowedContent: true,
            extraAllowedContent: 'div(*)[style]',
            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        } );

        schema.addChildCheck( ( context, childDefinition ) => {
            if ( context.endsWith( 'simpleBoxDescription' ) && childDefinition.name == 'simpleBox' ) {
                return false;
            }
        } );
    }

    _defineConverters() {
        var rn = Math.random() * 10000 | 999;
        var num = rn.toString() + 'a';
        const conversion = this.editor.conversion;

        // <simpleBox> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'simpleBox',
            view: {
                name: 'section',
                classes: 'simple-box'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'simpleBox',
            view: {
                name: 'section',
                classes: 'simple-box'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'simpleBox',
            view: ( modelElement, { writer: viewWriter } ) => {
                const section = viewWriter.createContainerElement( 'section', { class: 'simple-box' } );
                // Add a resize handle to the widget.
                // const resizeHandle = viewWriter.createUIElement('div', { class: 'simple-box-resize-handle' });
                // viewWriter.insert(
                //     viewWriter.createPositionAt(resizeHandle, 0),
                //     viewWriter.createText('\u00a0')
                // );
                // section.append(resizeHandle);

                // const resizable = new Resizable(section, {
                //     handleSelector: '.simple-box',
                //     onResize: ({ width, height }) => {
                //       // Update the widget's size in the model.
                //       const model = editor.model;
                //       const { document } = model;
                //       const element = modelElement;
                //       const newWidth = `${width}px`;
                //       const newHeight = `${height}px`;
              
                //       // Update the widget's size attributes in the model.
                //       if (element.hasAttribute('width')) {
                //         model.setAttribute('width', newWidth, element);
                //       } else {
                //         model.setAttribute('style', `width: ${newWidth};`, element);
                //       }
                //       if (element.hasAttribute('height')) {
                //         model.setAttribute('height', newHeight, element);
                //       } else {
                //         model.setAttribute('style', `height: ${newHeight};`, element);
                //       }
              
                //       // Update the widget's size attributes in the view.
                //       viewWriter.setStyle('width', newWidth, section);
                //       viewWriter.setStyle('height', newHeight, section);
                //     },
                //   });

    //             const resizeHandle = document.createElement('div');
    // resizeHandle.classList.add('resize-handle');
    // section.appendChild(resizeHandle);

    // // When the resize handle is dragged, update the widget's size
    // resizeHandle.addEventListener('mousedown', (event) => {
    //   event.preventDefault();
    //   const startX = event.clientX;
    //   const startY = event.clientY;
    //   const startWidth = parseInt(element.style.width);
    //   const startHeight = parseInt(element.style.height);

    //   const handleMouseMove = (event) => {
    //     const deltaX = event.clientX - startX;
    //     const deltaY = event.clientY - startY;
    //     element.style.width = startWidth + deltaX + 'px';
    //     element.style.height = startHeight + deltaY + 'px';
    //   };

    //   const handleMouseUp = () => {
    //     editor.editing.view.focus();
    //     document.removeEventListener('mousemove', handleMouseMove);
    //     document.removeEventListener('mouseup', handleMouseUp);
    //   };

    //   document.addEventListener('mousemove', handleMouseMove);
    //   document.addEventListener('mouseup', handleMouseUp);
    // });


                return toWidget( section, viewWriter, { label: 'simple box widget' } );
            }
        } );

        // <simpleBoxTitle> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'simpleBoxTitle',
            view: {
                name: 'h1',
                classes: 'simple-box-title'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'simpleBoxTitle',
            view: {
                name: 'h1',
                classes: 'simple-box-title'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'simpleBoxTitle',
            view: ( modelElement, { writer: viewWriter } ) => {
                // Note: You use a more specialized createEditableElement() method here.
                const h1 = viewWriter.createEditableElement( 'h1', { class: 'simple-box-title' } );

                return toWidgetEditable( h1, viewWriter );
            }
        } );

        // <simpleBoxDescription> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'simpleBoxDescription',
            view: {
                name: 'div',
                classes: 'simple-box-description',
                styles: {
                    backgroundColor: 'lightblue',                   
                },
                allowedContent: true,
                extraAllowedContent: 'div(*)[style]',
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'simpleBoxDescription',
            view: {
                name: 'div',
                classes: 'simple-box-description',
                styles: {
                    backgroundColor: 'lightblue',                   
                },
                allowedContent: true,
                extraAllowedContent: 'div(*)[style]',
            },
            
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'simpleBoxDescription',
            view: ( modelElement, { writer: viewWriter } ) => {
                // Note: You use a more specialized createEditableElement() method here.
    
                //const div = viewWriter.createEditableElement( 'div', { class: 'simple-box-description ' + num } );
                const div = viewWriter.createEditableElement( 'div', { class: 'simple-box-description' ,style: 'background-color: lightblue;' } );
                return toWidgetEditable( div, viewWriter );
            }
        } );
    }
}

class InsertSimpleBoxCommand extends Command {
    execute() {
        this.editor.model.change( writer => {
            // Insert <simpleBox>*</simpleBox> at the current selection position
            // in a way that will result in creating a valid model structure.
            this.editor.model.insertObject( createSimpleBox( writer ) );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'simpleBox' );

        this.isEnabled = allowedIn !== null;
    }
}

function createSimpleBox( writer ) {
    const simpleBox = writer.createElement( 'simpleBox' );
    // const simpleBoxTitle = writer.createElement( 'simpleBoxTitle' );
    const simpleBoxDescription = writer.createElement( 'simpleBoxDescription' );
    //dt.style.backgroundColor = 'green'
    // writer.append( simpleBoxTitle, simpleBox );
    writer.append( simpleBoxDescription, simpleBox );

    // There must be at least one paragraph for the description to be editable.
    // See https://github.com/ckeditor/ckeditor5/issues/1464.
    var html = '<p style="background-color: green; color: white;"> &nbsp; </p>'
    var paragraph = writer.createElement( 'paragraph' );
    // paragraph.setAttribute('style', 'background-color: yellow');
    // writer.appendElement( 'paragraph', simpleBoxDescription );
    writer.append( paragraph , simpleBoxDescription );

    return simpleBox;
}

class ColorPicker extends Plugin  {
    static get pluginName() {
        return 'ColorPicker';
    }

    static get requires() {
        return [ColorPickerUI];
    }
}

class ColorPickerUI extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('colorPicker', locale => {
            const button = new ButtonView(locale);

            button.set({
                label: 'Color Picker',
                tooltip: true,
                icon: 'color',
                command: 'colorPicker'
            });

            const pickr = Pickr.create({
                el: button.element,
                default: 'rgba(0, 0, 0, 1)',
                theme: 'classic',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        input: true,
                        clear: true,
                        save: true
                    }
                }
            });

            pickr.on('save', color => {
                editor.execute('color', color.toRGBA().toString());
                editor.editing.view.focus();
            });

            button.on('execute', () => {
                pickr.show();
            });

            return button;
        });
    }
}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CKBox,
	CloudServices,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	Strikethrough,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	ImageResizeEditing,
	ImageResizeHandles,
	UploadButtonToolbar,
	SimpleBox,
    ColorPicker 
];

// Editor configuration.
Editor.defaultConfig = {
    contentsCss: [
        './content.css'
    ],
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment',
			'|',
			'numberedList',
			'bulletedList',
			'|',
			'outdent',
			'indent',
			'|',
			'todoList',
			'link',
			'blockQuote',
			'imageUpload',
			'upload-NewVideo',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
			'simpleBox',
            // 'colorPicker'
		]
	},
	language: 'en',
	image: {
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	}
};

export default Editor;
