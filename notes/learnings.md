# Apr 27, 2023
used create react app to create and run a react app
created a Week component to serve as a container for Day components
created a Day component to serve as a visible square

i got stuck tryign to apply styles to these components
i think the issues were
- incorrect selection of elements
- for the css `color` property i was using `color: 'white'` where i should have been using `color: white` -- no quotes for color values in css i guess

i got stuck trying to iterate over an array of data and render a component for each data element
this is a common pattern i just forgot the details and resolved it quickly
the way to do it is
```
    const data = [1,2,3]
    const Day = () => {
        return <div style={{background-color: white; margin: 4px;}}>;
    }
    const Week = ({days}) => {
        return (
            {
                data.map((arrayElement, arrayIndex) => {
                    return <Day key={arrayIndex} />
                })
            }
        );
    }

```

# Apr 26, 2023
these instructions helpful for startup up a simple react app with no code gen helpers

# Apr 13, 2023

## accomplished
- used browserify to import xdate into a .js file
- used xdate to write methods
    - calculate birth monday
    - calculate death sunday
    - incomplete life compilation method
- stumbled into using recursive functions, which was fun

# Apr 12, 2023

## accomplished 
- learned to use browserify to import node and yarn modules into .js files using `require('name_of_node_module');` syntax like in node.js
