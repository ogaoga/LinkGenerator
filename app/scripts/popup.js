'use strict';

/*global $:false */
/*global jQuery:false */

(function(){
    var url = location.href;
    var title = $('title').text();
    $('#links').text(url+'\n'+title);
})(jQuery);
