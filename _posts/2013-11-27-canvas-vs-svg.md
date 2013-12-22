---
layout: post
title: Canvas vs SVG at 1400 datapoints
description: A description of your post
tags: [multiple,tags]
published: false
---

#**{{ page.title }}** 

Whilst doing some prep work for a potential interactive map using the d3.js library I found myself accidently pushing the limits of what an svg can comfortably do and decided to dive headlong into canvas as an alternative.

/* Below I've put together a quick and dirty demo to compare the speed at which a map can be built using svg vs canvas using exactly the same data set. Click the buttons and have a play.*/

The map I 

Here are the findings of my very non scientific experiments.
Adding 1,400 rects to an SVG:
Chrome: 3.6 seconds
Firefox: slightly longer
Safari: Long time
iOS Chrome: Looooong time
iOS Safari: CRASH!!!
Android: don't have one sorry.

So obviously that's not too good. Even in the browsers that were able to load the svg there was an uncomfortable wait whilst nothing happened.

I found an unexpected performance benefit by first adding the rectangles to the svg invisibly with with an opacity of 0 and then transitioning them their full opacity afterwards.

By adding a delayed transition we get a nice 8bit loading effect. Go ahead, click the 'Make an SVG map' button to see it in action. Ok it takes slightly longer to build the map than necessary but it gives us something to look at straight away and forms a nice pre-loader effect to keep our interest up whilst the full map loads.

However it's still not ideal. Plus if the map isn't going to work on iOS we might as well be using Flash. 

The problem with svg is that every element created actually exists in the DOM. This is pretty great because it allows you easily add click and drag events to the svg but it's bad because each element takes up a chunk of memory.

Canvas on the other hand is just on big bitmap. Once you've drawn something to the canvas you can't easily get at but in this case it should be much easier to process.

Here are the results of my canvas experiment:
Enter the canvas 
Chrome: quick!
Firefox: quick!
Safari: quick!
iOS Chrome: quick!
iOS Safari: quick!
Android: don't have one sorry.

Great. Here's a little walk through of how I got started building canvas maps with d3.js

The data

The data used to build the map was a little unusual. Instead of a set of polygons or paths like you would expect to find in a shape file to build a regular SVG map.

Here's a great walk through of the type of D3 map process I was expecting from Mike Bostock:
http://bost.ocks.org/mike/map/

Instead the data came in the ascii xyz format. Basically a csv file with three columns for longitude, latitude and a value.

My plan was to plot each point on a grid and give them a colour that corresponds to the value. 

For the sake of this demo I've loaded all the data into on big array of objects each with a long and lat property.

	var dataset = [	
		{ long:289.5, lat:-54.5},
		{etc...},
		{etc..}
	];

I've left the value part out here for simplicity.

My first look at the map didn't look quite like I had expected. The longitude values started at with Greenwhich as zero so the UK was cut in half and the globe was upside down compared to what we used to.

I had to do a little doctoring to make a more conventional map. First off I'll shift the longitude values over so we get Alaska in the left hand corner.

	for (var i = 0; i < dataset.length; i++) {
  
		if (dataset[i].long > 195 ) {
			dataset[i].long -= 195;
		} else {
			dataset[i].long += 165;
		}
	};

I can easily flip the map upside down when I make my scales. So best get busy.

Firstly I'll grab the min an max values for both the longitude and latitude.

	var maxLong = d3.max(dataset, function (d) {
		return d.long;
	});
	var minLong = d3.min(dataset, function (d) {
		return d.long;
	});
	var maxLat = d3.max(dataset, function (d) {
		return d.lat;
	});
	var minLat = d3.min(dataset, function (d) {
		return d.lat
	});

And use them build the some d3 linear scales

	/* Define X scale */
	var xScale = d3.scale.linear()
		.domain([ minLong, maxLong ])
		.range([0,width]);
	/* Define Y scale */
	var yScale = d3.scale.linear()
		.domain([minLat,maxLat])
		.range([height, 0]);

These are as you'd expect except for the fact the yScale range goes from height to 0 to flip the map upside down.

Next I'll create some variables for the width and height of each rectangle by dividing the width by the combined total longitude and the height by the total latitude. This should effectively render each data point as a rectangle on the grid. 

	/* Define the rect height and width */
	var rectWidth = Math.round(width / (maxLong - minLong)) + 1;
	var rectHeight = Math.round(height / -(minLat - maxLat)) + 1;

Putting the SVG together is pretty a pretty standard d3 job

	/*	Create SVG element */
var svg = d3.select(".map")
		.append("svg")
		.attr("width", width)
		.attr("height", height)

	var rects = svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.style("opacity", 0)
			.attr("x", function(d) {
						return xScale(d.long);
					})
			.attr("y", function(d) {
						return yScale(d.lat);
					})
			.attr("width", rectWidth)
			.attr("height", rectHeight)
  .style("fill", "#2CB1A0" );


      rects.transition()
			  .delay(function (d,i) {
				  return i*1
			  })
			  .style("opacity", 1);</code></pre>
  







