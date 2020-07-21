'use strict';

import $ from 'jquery';
import '../css/main.scss';
import 'bootstrap-sass';
import 'babel-polyfill';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

