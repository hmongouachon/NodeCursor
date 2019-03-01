
# NodeCursor

NodeCursor is a tiny plugin to create custom cursor node animations built in 3 versions : 
- with jQuery dependency
- with Tweenmax
- agnostics dependencies

## Plugin installation
- include nodeCursor.css
- build cursor and node html markups with id="node" or id="cursor"
<code>
    <div class="node" id="node"></div>
    <div class="cursor" id="cursor"></div>
</code>
- include dependency (based on wich version you want to use)
- include nodecursor-version you use.js 
- init plugin

## Plugin parameters
- [cursor] : boolean 
> Enable or disable cursor - Default value : true

- [node] : boolean [enable node]
> Enable or disable node - Default value : true

- [cursor_velocity] : number
> Set cursor velocity : slow < 1 > fast - Default value : 1 except for tween version : default value  = 0, > 0 = slower;

- [node_velocity] : number
> Set node velocity : slow < 1 > fast - Default value : 1 except for tween version : default value  = 0, > 0 = slower;

- [native_cursor] : string
> Set body's cursor css property : [default,  grab, pointer ( all cursor's css properties)]

- [element_to_hover] : string
> element that will trigger cursor anime on hover : any css selector : 'a', '.class', '#id' - Default value : 'disable' 

- [cursor_class_hover] : string
> Any class name (without dot) - ex : expand, reduce relative to your css - Default value : 'disable'

- [node_class_hover] : string
> Any class name (without dot) - ex : expand, reduce relative to your css - Default value : 'expand'

- [hide_mode] : boolean
> hide node and cursor if mouse stop moving - Default value : true

- [hide_timing] : number 
> delay before hiding - Default value : 3000


View the demo of this project on [codepen](http://codepen.io/hmongouachon/pen/LZGwWY)



