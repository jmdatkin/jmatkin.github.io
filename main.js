window.onload = function() {
    var titleBar = document.querySelector(".retro-title-bar");
    var content = document.querySelector(".main-content-container");
    var contentViewer = document.querySelector(".content-viewer");

    var pos = (function() {
        
        var obj = {
            x: 0,
            y: 0
        };

        var set = function(data) {
            Object.keys(data).forEach(function(val) {
                if (obj.hasOwnProperty(val))
                    obj[val] = data[val];
            });
            content.style.position = "absolute"
            content.style.left = obj.x+"px";
            content.style.top = obj.y+"px";
        };

        var get = function() {
            return Object.assign({},obj);
        }

        return {
            set: set,
            get: get,
            get x() {
                return obj.x;
            },
            get y() {
                return obj.y;
            }
        };
    })();

    var bindMouseEvents = function() {
        var handler;
        var mouseDownEvt = function(e) {
            if (content.style.position != "absolute") {
                pos.set({
                    x: content.getBoundingClientRect().left,
                    y: content.getBoundingClientRect().top
                });
                content.style.position = "absolute";
            }

            titleBar.style.cursor = "grabbing";
            contentViewer.style.pointerEvents = "none";

            var slice = pos.get();
            handler = doMousedown(slice,e.clientX,e.clientY);
        };

        var doMousedown = function(slice,ix,iy) {
            var mouseMoveEvt = function(e) {
                var diffX = e.clientX - ix;
                var diffY = e.clientY - iy;

                console.log(diffX);

                pos.set({
                    x: slice.x + diffX,
                    y: slice.y + diffY
                });
            };
            document.body.addEventListener("mousemove",mouseMoveEvt);
            return mouseMoveEvt;
        };

        var mouseUpEvt = function() {
            if (handler !== undefined)
                document.body.removeEventListener("mousemove",handler);
            titleBar.style.cursor = "grab";
            contentViewer.style.pointerEvents = "auto";
        };

        titleBar.addEventListener("mousedown",mouseDownEvt);
        document.body.addEventListener("mouseup",mouseUpEvt);

        document.querySelector("#close").onclick = function() {
            if (content.classList.contains("hidden"))
                content.classList.remove("hidden");
            else
                content.classList.add("hidden");
        };
    };

    bindMouseEvents();
};