const $ = require('jquery');
const RepLogApp = require('./Components/RepLogApp')

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    new RepLogApp($wrapper);
});
