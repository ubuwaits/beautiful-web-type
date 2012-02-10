(function(){
    var elem, elems = document.getElementsByTagName("a"),
        i = elems.length;

    while(i--) {
        elem = elems[i];

        if(!elem.getAttribute("title")) continue;

        on("dragstart", elem, function(e){
            var evt = e || window.event,
                elem = evt.target || evt.srcElement,
                font = elem.title + ":" + elem.getAttribute("data-font-weight");

            // Only use Text for IE and text/plain for all others
            evt.dataTransfer.setData(/*@cc_on!@*/0 ? "Text" : "text/plain",'{"fontType": "gwf", "fontName": "'+ font +'"}');
        });
        
        elem.setAttribute("draggable","true");
    }

    function on(event, elem, handler) {
        if(elem.addEventListener) {
            elem.addEventListener(event,handler,false);
        } else {
            elem.attachEvent("on" + event, handler);
        }
    }
})();