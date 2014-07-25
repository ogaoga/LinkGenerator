'use strict';

/*global $:false */

$(function() {
    chrome.tabs.getSelected(null, function(tab) {
        var url = tab.url;
        var title = tab.title;
        $('#links').text(url+'\n'+title);
    });
});
