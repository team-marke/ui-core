import 'regenerator-runtime/runtime.js';
import '../scss/main.scss';
import '../../../../components/tabs-panel/tabs-panel';
import '../../../../components/faq/faq';

/**
 * Load youtube modal component.
 */
const loadYoutubeModals = () => {
    if (document.querySelector('.video-teaser')) {
        import ( /* webpackChunkName: "components.video-teaser" */ '../../../../components/video-teaser/video-teaser').then(
            ({ VideoTeaser }) => {
                document.querySelectorAll('.video-teaser').forEach((el) => {
                    new VideoTeaser(el);
                });
            }
        );
    }
};

/**
 * Dynamically load modules that are split from the main JS bundle.
 */
const loadDynamicModules = () => {
    loadYoutubeModals();
};

/**
 * Load modules that are included in our main JS bundle.
 */
const loadBundledModules = () => {};

/**
 * Bootstrap all the JS modules here.
 */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadDynamicModules();
        loadBundledModules();
    });
} else {
    loadDynamicModules();
    loadBundledModules();
}

window.onload = () => {};