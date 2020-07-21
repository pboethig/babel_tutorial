import $ from 'jquery';
import 'bootstrap-sass';
import RepLogApp from './Components/RepLogApp';

global.$ = $;

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var replogApp = new RepLogApp($wrapper, $wrapper.data('rep-logs'));
});
