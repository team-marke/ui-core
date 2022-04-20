import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import JsCore from '../../../../tools/js-core/js-core';

// import '../../../../components/accordion/accordion';
// import '../../../../components/tabs/tabs';
// import { ToastStack } from '../../../../components/toast-stack/toast-stack';

// /**
//  * Load youtube modal component.
//  */
// const loadYoutubeModals = async () => {
//   if (document.querySelector('.video-teaser')) {
//     const { VideoTeaser } = await import(
//       /* webpackChunkName: "components.video-teaser" */ '../../../../components/video-teaser/video-teaser'
//     );
//     document.querySelectorAll('.video-teaser').forEach((el) => {
//       new VideoTeaser(el);
//     });
//   }
// };

// /**
//  * Load and handle toast-stack examples.
//  */
// const loadToastStackExamples = async () => {
//   let examples = document.querySelectorAll('.toast-stack-example');
//   for (let example of examples) {
//     let stack = new ToastStack({
//       anchor: {
//         vertical: example.dataset.toastStackAnchorV,
//         horizontal: example.dataset.toastStackAnchorH,
//       },
//     });
//     let btns = example.querySelectorAll('.toast-stack-example-button');
//     for (let btn of btns) {
//       btn.addEventListener('click', (event) => {
//         let action = '';
//         if (event.target.dataset.toastClosebutton != 'false') {
//           action = `<button type="button" class="btn-close btn-close-white" aria-label="Close" data-bs-dismiss="toast"></button>`;
//         }
//         stack.enqueueToast({
//           message: event.target.dataset.toastMessage,
//           variant: event.target.dataset.toastVariant,
//           autoHideDuration: event.target.dataset.toastAutoHideDuration,
//           id: event.target.dataset.toastId,
//           action: action,
//         });
//       });
//     }
//   }
// };

const loadJsCore = () => new JsCore().init();

loadJsCore();
