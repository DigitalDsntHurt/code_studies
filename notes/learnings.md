# May 18, 2023

The technique to make an svg path "grow" or "extend" or "animate itself" or "draw itself" is this:

- draw the line (as an svg path)
- get the total length of the line with `length = line.node().getTotalLength()`
- set the line's stroke-dasharray to `length length`
- set the line's stroke-dashoffset to `length`
- animate (in my case, using d3's `.transition()`) so that the stroke-dashoffset becomes `0`

# May 6, 2023

Today's learning is about deliberate practice.
Today i did something slightly too easy... it didn't push me, wasn't as fun and i learned less.

# May 2, 2023

Used this excellent tutorial https://observablehq.com/@onoratod/animate-a-path-in-d3 to learn how to animate paths in d3
the technique works like this

- define a path
- get the length of the path
- use that length to alter the `stroke-dashoffset`, which simulates the 'pulling' of the line from start to end
  amazing.

# May 1, 2023

the idea was to draw some elements to the dom in a way that evokes footsteps

- i got stuck on svg stuff -- svg was getting drawn to the dom according to dev tools but i wasn't able to make them visible
- i pivoted to using regular divs, which showed up visibly but are a pain to work with in terms of a coordinate system
  -- aboslute positioning seems to work in terms of the overall dom window
  -- relative positioning at first seemed to be the thing i was looking for, namely to position elements relative to their parent container's boundaries. but then once i started looping steps, all the properties were being set as i expected and yet the step divs weren't being drawn in the straight line i expected

- i was also unsuccessful at using setTimeout to animate each subsequent step
- i was also unsuccessful at importing my colors helper / forgot how to do this and did not take the time to remember

# Apr 28, 2023

## drawing a grid with react

- continued reps just getting the hang of the react boilerplate
- continued to forget to import the css files into the components -- remember to do this
- flex works super nicely for this purpose

## flex / grid spacing

Learned the absolute bare minimum basics of the flex layout pattern with this very nice link : https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

flex excells at dynamic ui layouts that rely on ordered vertical and horizontal lists of elements

# Apr 27, 2023

## automation work

i wanted to update a current automation

currently

- `ruby bin/make_today_dir.rb`
  - creates a new directory in `code_studies/2023` named today's date like `04-27`

the new automation

- updates the alfred `open code studies repo` workflow. now it
  - cds code_studies repo
  - opens it in vs code
  - creates the today dir (like `04-27`) in the directory of the current year (instead of hard-coding 2023)
  - cds into today's new dir
  - clears terminal
  - lists out current directory's contents

the tricky part here was, oddly enough, cd'ing into the today dir that either was just created or already exists

- i was unable to do this from a ruby script because cd commands either using `system()` or using `Dir.` only work within the script's session, not for the external terminal windown we're working in
- i was unable to do this from alfred because i could not dynamically generate a today's date and pass it into any of the automation arguments

i ended up figuing out how to do this via fish's `config.fish`

```
set todays_code_study_dir_name (date +"%Y/%m-%d")
function go_to_todays_code_study_dir
  cd "/Users/nick.smith/grapespace/skillsdev/code_studies/"$todays_code_study_dir_name
end
```

the above sets a fish var called `todays_code_study_dir_name`

- `date` gives us today's date
- `+"%Y/%m-%d"` formats it to eg `04-27`

then the function called go_to_todays_code_study_dir appends the formatted date to the path the code studies repo and cds into it

adding `go_to_todays_code_study_dir` to the alfred `open code studies repo` terminal workflow did the trick

## code study / a life in weeks work

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
