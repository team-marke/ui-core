import CMS, { init } from 'netlify-cms';
import netlifyCmsGMapsControl from './controls/gmaps';
// TODO: Fix previews
// import './previews.js';

CMS.registerWidget('gmaps', netlifyCmsGMapsControl);

if (typeof window !== 'undefined') {
  window.netlifyCmsGMapsControl = netlifyCmsGMapsControl;
}

init();
