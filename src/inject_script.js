const foreground_entry_point = document.createElement('div');
let reactJS_script = document.createElement('script');

const body = document.querySelector('body');
body.setAttribute('style', 'width: calc(100% - 350px);');

foreground_entry_point.id = 'foreground';
foreground_entry_point.setAttribute(
  'style',
  'position: fixed; right: 0; top: 0; height: 100vh; padding: 0; background: green; margin: 0; z-index: 9999999;',
);
reactJS_script.src = 'foreground.bundle.js';

foreground_entry_point.appendChild(reactJS_script);

document.querySelector('body').appendChild(foreground_entry_point);
