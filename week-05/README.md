# Week 05 D3JS Notes

This week is all about reading up on what the APIs used in previous weeks actually do.
In this document you can find all the references I used to read up.

## References

As a starting point, I read through the [d3-scale reference](https://github.com/d3/d3-scale).
This was mainly because the `.domain(...)` function from previous week seemed like a good starting point to read up.
I will note that these docs were highly technical and detailed, e.g. a typical quote:

> Internally, a piecewise scale performs a binary search for the range interpolator corresponding to the given domain value.

So I quickly started skimming, and then went back to the top, where [this excellent tutorial was mentioned](https://medium.com/@mbostock/introducing-d3-scale-61980c51545f), and read that whole thing.
Quite a good read too.

Next I read about [d3-axis](https://github.com/d3/d3-axis).
This also helpfully explained some of the `transform`s we had to do on the containing element in previous weeks (the only way to reposition the axis on its container, e.g. an SVG).
The GitHub docs were slightly less technical than d3-scale, but still a little dry.

Finally, it was time to have a peek at [the Stack Overflow d3.js questions sorted by votes (desc)](https://stackoverflow.com/questions/tagged/d3.js?sort=votes&pageSize=15) and skim through the top issues people found:

- [How to make d3 stuff responsive](https://stackoverflow.com/questions/9400615/whats-the-best-way-to-make-a-d3-js-visualisation-layout-responsive) and [Resizing svg upon window resize](https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js)
- [Difference between datum and data](https://stackoverflow.com/questions/13728402/what-is-the-difference-d3-datum-vs-data)
- [Removing/replacing svg content](https://stackoverflow.com/questions/10784018/how-can-i-remove-or-replace-svg-content)
- [Show data on hover](https://stackoverflow.com/questions/10805184/show-data-on-mouseover-of-circle)
- [Centering maps given geoJSON](https://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object)
- [What is 'g' in .append('g') in d3?](https://stackoverflow.com/questions/17057809/d3-js-what-is-g-in-appendg-d3-js-code) (although I had already kinda guessed the answer)
- [Difference between D3 and jQuery](https://stackoverflow.com/questions/13187112/what-is-the-difference-between-d3-and-jquery), which seemed pretty obvious to me already, but I was still curious to see what others would say.

## Takeaway

The main takeaway from this exercise was that API reference could certainly help understand the library.
This also presents a plan for next week's exercise: add typings to the weekly code files.
With Typescript definitions for all this d3 stuff it should be a lot easier to learn as we type.
