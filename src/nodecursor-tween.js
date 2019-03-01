/*!
 * NodeCursor :  a tiny javascript plugin to create custom cursor animations - Tweenmax version
 * (c) 2019 Hadrien Mongouachon
 * MIT Licensed.
 *
 * Author URI: http://hmongouachon.com
 * Plugin URI: https://github.com/hmongouachon/NodeCursor

 * Version: 1.0.0
 */
;
(function() {

    let options;

    window.NodeCursor = function(options) {

        /////////////////////////////

        // scope

        /////////////////////////////

        let that = this;


        /////////////////////////////

        // options parameters

        /////////////////////////////

        options = options || {};

        options.hasOwnProperty('cursor') ? options.cursor : true;
        options.hasOwnProperty('node') ? options.node : true;
        options.hasOwnProperty('cursor_velocity') ? options.cursor_velocity : 0;
        options.hasOwnProperty('node_velocity') ? options.node_velocity : 0.35;
        options.hasOwnProperty('native_cursor') ? options.native_cursor : 'default';
        options.hasOwnProperty('element_to_hover') ? options.element_to_hover : 'disable';
        options.hasOwnProperty('cursor_class_hover') ? options.cursor_class_hover : 'disable';
        options.hasOwnProperty('node_class_hover') ? options.node_class_hover : 'disable';
        options.hasOwnProperty('hide_mode') ? options.hide_mode : true;
        options.hasOwnProperty('hide_timing') ? options.hide_timing : 3000;


        /////////////////////////////

        // var

        /////////////////////////////

        let innerCursor;
        let innerNode;
        let playing = false;
        let clientX, clientY;
        let timer;
        let request;


        /////////////////////////////

        // cursor node markups

        /////////////////////////////

        options.cursor === true ? innerCursor = document.querySelector("#cursor") : void 0;
        options.node === true ? innerNode = document.querySelector("#node") : void 0;

        // enable native cursor option
        document.body.style.cursor = options.native_cursor;


        /////////////////////////////

        // init cursor

        /////////////////////////////

        this.initCursor = () => {
            // add listener to track the current mouse position
            document.addEventListener("mousemove", e => {
                clientX = e.clientX;
                clientY = e.clientY;
                playing = true;
                options.hide_mode === true ? hide_cursor() : void 0;

                function hide_cursor() {
                    clearTimeout(timer);
                    timer = setTimeout(that.mouseStopped, options.hide_timing);
                }
            });
        };



        /////////////////////////////

        // mouse stopped

        /////////////////////////////

        this.mouseStopped = () => {
            playing = false;
        };


        /////////////////////////////

        // render

        /////////////////////////////

        this.render = () => {

            if (playing === true) {

                // add class moving = show cursor / node
                options.cursor === true ? innerCursor.classList.add("moving") : void 0;
                options.node === true ? innerNode.classList.add("moving") : void 0;
            } else {
                options.cursor === true ? innerCursor.classList.remove("moving") : void 0;
                options.node === true ? innerNode.classList.remove("moving") : void 0;
                //stop the animation
                cancelAnimationFrame(request);
            }

            // if cursor enable
            if (options.cursor === true) {
                let cursor_width = innerCursor.offsetWidth / 2;
                let cursor_height = innerCursor.offsetHeight / 2;
                // animate
                TweenMax.to(innerCursor, options.cursor_velocity, {
                    x: clientX - cursor_width,
                    y: clientY - cursor_height,
                    ease: Power1.easeOut, // easeInOut
                });

            }
            //  if node enable
            if (options.node === true) {
                let node_width = innerNode.offsetWidth / 2;
                let node_height = innerNode.offsetHeight / 2;
                // animate
                TweenMax.to(innerNode, options.node_velocity, {
                    x: clientX - node_width,
                    y: clientY - node_height,
                    ease: Power1.easeOut, // easeInOut
                });

            }

            // if hovering is not disable = element class is set
            if (options.element_to_hover !== 'disable') {

                nodes = document.querySelectorAll(options.element_to_hover);

                // node effect on hover
                if (options.node_class_hover !== 'disable') {

                    nodes.forEach(function(node, index) {
                        // on mouse over set custom class
                        node.addEventListener('mouseover', function hover() {
                            options.cursor === true ? innerCursor.classList.add(options.cursor_class_hover) : void 0;
                            options.node === true ? innerNode.classList.add(options.node_class_hover) : void 0;

                        });
                        // on mouse leave remove custom class
                        node.addEventListener('mouseleave', function leave() {
                            options.cursor === true ? innerCursor.classList.remove(options.cursor_class_hover) : void 0;
                            options.node === true ? innerNode.classList.remove(options.node_class_hover) : void 0;
                        });
                    });

                }
            }

            request = requestAnimationFrame(that.render);

        };

        requestAnimationFrame(that.render);


        /////////////////////////////

        // init fns

        /////////////////////////////  

        this.init = function() {

            that.initCursor();

        };

        /////////////////////////////

        // start

        /////////////////////////////    

        this.init();

        /////////////////////////////

        // helpers

        /////////////////////////////

        window.requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;


    };

})();