import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import JsCore from '../../../../tools/js-core/js-core';

const loadJsCore = () => new JsCore().init();

loadJsCore();
