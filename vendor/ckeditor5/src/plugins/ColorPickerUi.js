import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Pickr from '@simonwep/pickr';

export default class ColorPickerUI extends Plugin {
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
