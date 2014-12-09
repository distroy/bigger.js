;(function(win, doc) {
    doc = document.getElementsByClassName('bigger')[0];
    doc.style.height = document.body.scrollHeight+'px';

    bigger();
    win.addEventListener('resize', bigger);

    function bigger(){
        if(win.innerWidth!=320){
            doc.style.width = "320px";
            doc.style.webkitTransform="scale("+(window.innerWidth/320)+")";
            doc.style.webkitTransformOrigin="0 0";
        }
    }
})(window, document);