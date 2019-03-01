/*!
 * NodeCursor :  a tiny javascript plugin to create custom cursor animations - Free dependencies version
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
        options.hasOwnProperty('cursor_velocity') ? options.cursor_velocity : 1;
        options.hasOwnProperty('node_velocity') ? options.node_velocity : 0.35;
        options.hasOwnProperty('native_cursor') ? options.native_cursor : 'default';
        options.hasOwnProperty('element_to_hover') ? options.element_to_hover : 'disable';
        options.hasOwnProperty('cursor_class_hover') ? options.cursor_class_hover : 'disable';
        options.hasOwnProperty('node_class_hover') ? options.node_class_hover : 'disable';
        options.hasOwnProperty('hide_mode') ? options.hide_mode : true;
        options.hasOwnProperty('hide_timing') ? options.hide_timing : 3000;

        /////////////////////////////

        // variables

        /////////////////////////////

        let innerCursor;
        let innerNode;
        let playing = false;
        let clientX, clientY;
        let timer;
        let request;

        let cursor_xp = 0;
        let cursor_yp = 0;
        let node_xp = 0;
        let node_yp = 0;
        let cursor_width = 0;
        let cursor_height = 0;
        let node_width = 0;
        let node_height = 0;




        /////////////////////////////

        // cursor / node markups

        ///////////////////////////// 

        // select elements
        options.cursor === true ? innerCursor = document.querySelector("#cursor") : void 0;
        options.node === true ? innerNode = document.querySelector("#node") : void 0;

        // if cursor enable > get size
        options.cursor === true ? cursor_width = innerCursor.offsetWidth / 2 : void 0;
        options.cursor === true ? cursor_height = innerCursor.offsetHeight / 2 : void 0;

        // if node enable > get size
        options.node === true ? node_width = innerNode.offsetHeight / 2 : void 0;
        options.node === true ? node_height = innerNode.offsetHeight / 2 : void 0;


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

                if (options.cursor === true) {
                    cursor_xp += ((clientX - cursor_width) - cursor_xp) * options.cursor_velocity;
                    cursor_yp += ((clientY - cursor_height) - cursor_yp) * options.cursor_velocity;
                }

                if (options.node === true) {
                    node_xp += ((clientX - node_width) - node_xp) * options.node_velocity;
                    node_yp += ((clientY - node_height) - node_yp) * options.node_velocity;
                }

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
                // cancelAnimationFrame(request);
            }

            // if cursor enable
            if (options.cursor === true) {
                // animate
                innerCursor.style.transform = 'translate3d(' + cursor_xp + 'px,' + cursor_yp + 'px, 0)';
            }

            //  if node enable
            if (options.node === true) {
                // animate
                innerNode.style.transform = 'translate3d(' + node_xp + 'px,' + node_yp + 'px, 0)';
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