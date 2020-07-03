window.onload = function() {
    var titleBar = document.querySelector(".retro-title-bar");
    var desktop = document.querySelector(".desktop");
    var windowContainer = document.querySelector(".window-container");
    var content = document.querySelector(".window-content");
    var contentViewer = document.querySelector(".content-viewer");

    //Object for storing window position
    var pos = (function() {

        var obj = {
            x: 0,
            y: 0
        };

        //Setting the object's value changes the css position
        var set = function(data) {
            Object.keys(data).forEach(function(val) {
                if (obj.hasOwnProperty(val))
                    obj[val] = data[val];
            });
            windowContainer.style.position = "absolute"
            windowContainer.style.left = obj.x + "px";
            windowContainer.style.top = obj.y + "px";
        };

        var get = function() {
            return Object.assign({}, obj);
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

    var bindEvents = function() {
        
        var bindWindowEvents = function() {
            var handler;
            var mouseDownEvt = function(e) {
                if (windowContainer.style.position != "absolute") {
                    pos.set({
                        x: windowContainer.getBoundingClientRect().left,
                        y: windowContainer.getBoundingClientRect().top
                    });
                    windowContainer.style.position = "absolute";
                }

                titleBar.style.cursor = "grabbing";
                contentViewer.style.pointerEvents = "none";

                var slice = pos.get();
                handler = doMousedown(slice, e.clientX, e.clientY);
            };

            var doMousedown = function(slice, ix, iy) {
                var mouseMoveEvt = function(e) {
                    e.preventDefault();
                    var diffX = e.clientX - ix;
                    var diffY = e.clientY - iy;

                    console.log(diffX);

                    pos.set({
                        x: slice.x + diffX,
                        y: slice.y + diffY
                    });
                };
                document.body.addEventListener("mousemove", mouseMoveEvt);
                return mouseMoveEvt;
            };

            var mouseUpEvt = function(e) {
                e.preventDefault();
                if (handler !== undefined)
                    document.body.removeEventListener("mousemove", handler);
                titleBar.style.cursor = "grab";
                contentViewer.style.pointerEvents = "auto";
            };

            titleBar.addEventListener("mousedown", mouseDownEvt);
            document.body.addEventListener("mouseup", mouseUpEvt);
        };

        var bindButtonEvents = function() {
            //Close button
            document.querySelector("#close").onclick = function() {
                if (windowContainer.classList.contains("hidden"))
                    windowContainer.classList.remove("hidden");
                else
                    windowContainer.classList.add("hidden");
            };

            document.querySelector("#shutter").onclick = function() {
                if (content.classList.contains("hidden"))
                    content.classList.remove("hidden");
                else
                    content.classList.add("hidden");

            };
        };

        var bindDesktopIconEvents = function() {
            document.querySelector("#open-window").onclick = function() {
                if (windowContainer.classList.contains("hidden"))
                    windowContainer.classList.remove("hidden");
            };
        };

        bindWindowEvents();
        bindButtonEvents();
        bindDesktopIconEvents();
    };

    bindEvents();
};