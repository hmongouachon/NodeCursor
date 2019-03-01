
# NodeCursor

NodeCursor is a tiny js plugin to create custom cursor / node animations built in 3 versions : 
- with jQuery dependency
- with Tweenmax
- free dependencies

## Plugin installation
- include nodeCursor.css
```
<link href='css/nodeCursor.css' rel='stylesheet' type='text/css'>
```
- build cursor and node html markups with id="node" or id="cursor"
```
<div class="node" id="node"></div>
<div class="cursor" id="cursor"></div>
```
- include dependency if you use jquery or tweenmax
- include nodecursor-version you use.js 

```
<script src="../src/nodecursor-version_you_want_to_use.js"></script>
```
- init plugin : check example in demo

## Plugin parameters
```
[cursor] : boolean 
Enable or disable cursor - Default value : true
```

```
[node] : boolean 
Enable or disable node - Default value : true
```

```
[cursor_velocity] : number
Set cursor velocity : slow < 1 > fast
Default value : 1 except for tween version : default value  = 0, > 0 = slower;
```

```
[node_velocity] : number
Set node velocity : slow < 1 > fast
Default value : 1 except for tween version : default value  = 0, > 0 = slower;
```

```
[native_cursor] : string
Set body's cursor css property : 'default',  'grab', 'pointer' ( all cursor's css properties)
Default value : 'none'
```

```
[element_to_hover] : string
element that will trigger cursor anime on hover : any css selector : 'a', '.class', '#id' 
Default value : 'disable' 
```

```
[cursor_class_hover] : string
Any class name (without dot) - ex : expand, reduce relative to your css 
Default value : 'disable'
```

```
[node_class_hover] : string
Any class name (without dot) - ex : expand, reduce relative to your css 
Default value : 'expand'
```

```
[hide_mode] : boolean
hide node and cursor if mouse stop moving 
Default value : true
```

```
[hide_timing] : number 
delay before hiding 
Default value : 3000
```

## Codepen demos links
* NodeCursor for Tweenmax : [https://codepen.io/hmongouachon/pen/zbraLG]
* NodeCursor for jQuery : [https://codepen.io/hmongouachon/pen/Ygwjrj]
* NodeCursor without dependencies : [https://codepen.io/hmongouachon/pen/JzGBpM]



