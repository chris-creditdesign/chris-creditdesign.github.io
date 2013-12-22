---
layout: post
title: Unusual uses for D3
description: A description of your post
tags: [multiple,tags]
published: false
---

#**{{ page.title }}** 

Hello. My name is Chris and I'm an Art Editor in the Nature art dept.

I can be reached at c.ryan@nature.com on twitter @creditdesign. I'll keep twitter open whilst I'm talking so if any questions pop into your head feel free to send them my way and I'll try to answer them at the end.
All of the examples are on my codepen page if you'd like to dig into the code.
creditdesign/codepen...    

So... how come I'm using D3?

I came to D3 with little javascript experience. Being a graphic designer I like Flash and 3D barcharts - more on that later.

I was attracted to D3 by all of the cool demos on the homepage and the fact that it could help us to make engaging interactive graphics that also work on ipads.

I've been able to use D3 on a number of projects...
Equality graphic
Nature index
Timeline
Outlook map

D3 is useful to me in a number of ways. Firstly as you'd expect it allows us to build interactive graphics that can present information in new ways / ways that are not possible necessarily with printed / static graphics and also allow the user or reader to drill down into the data to find the bits that are of interest to them.

HTML TABLE EXAMPLE - Equality bar chart

For the graphics that we upload to nature.com accessibility is an issue. It's important that people who maybe don't have javascript activated are not hit with a brick wall.

As such Jude Robinson came up with the idea of presenting all the information in the form of a html table and then using javascript to loop through the table to extract all of the info into arrays and objects that we can use to build the graphics.

When we turn off javascript and reload this page you'll see the html table that holds all of the data. Obviously this is pretty gross and no one in their right mind would want to read it. But it's a properly constructed table so  in theory a screen reader could navigate via the captions and header rows if needed.

TIMELINE EXAMPLE - CODE PEN

Similarly this timeline is constructed from a html table. This gives a second advantage in that an editor, who might not be code savvy but is able to use the table editor in our news CMS can make updates to the table on the fly and add new events as they happen.

LIVE CODING DEMO! - Add a new event to the dog timeline and watch it update.

As well as providing widgets for use online D3 is a good starting point for print graphics. The traditional process involves an editor sending over a bunch of information in an excel file. An excel chart can then be copied and pasted into illustrator to be picked apart and styled up or a chart can be built using illustrator's charting tools.

The worst case scenario is that we get sent a flat graphic to trace.

Although these methods work fine we can use D3 to streamline the process.

In this example I was sent a bunch of information about the carbon use of various fuels with the instruction that they should probably be shown in a bar chart - but whether that should be a stacked bar chart or side by side or what... wasn't clear.

Having already built a few bar charts in D3 I had some code lying around that I could easily plug the numbers into to mock up a chart. 

So I built this! Ta dar.

STACKED BARCHART EXAMPLE - CODE PEN

Not very impressive but it does allow me to quickly jump between a stacked or comparative bar chart to see what best tells the story.

The real magic comes when I pick something I like the look of. Because this chart is built in SVG I can easily grab the code generated in the page via the web inspector, save it in my favourite text editor and open in illustrator. 

LIVE SVG DEMO!

SHOW FINISHED PRINT GRAPHIC.

And here's how the final thing ended up.
A similar process was used in the creation of this map.

MAP EXAMPLE - CODE PEN

Here we were given information about five synchrotron facilities located around the world. We wanted to locate them on a map and give some indication of their locations.

Normally this would be a matter of resizing the circles in illustrator and guesstimating their locations on the map. Using D3 we are able to more accurately locate place the dots.

First I built a map using one of Mike Bostock's geoJason files and the equirectangular projection that is included with D3. Then I grabbed the latitude and longitude coordinates for the towns that hold the facilities from Wikipedia and used these to position the dots on the map.

To create the radius circles in was simply a matter of creating a D3 and using this to calculate the radius.

I wondered if this could be taken further. Instead of building graphics from scratch using code could I build a set of templates that would allow a journalist to plug in a dataset and then generate a chart on the fly as an SVG or PNG that they could then pass on the art dept to place on page or that they could upload to a blog or online news story. Hopefully this would free up the art dept for more ambitious graphics and allow the journalists to quickly create usable, consistently styled without having to email back and forth through rounds of revisions. This is as far as I got with that:

AUTOGRAPH EXAMPLE

As it turns out some other people had been working on the same idea. 

CHARTBUILDER EXAMPLE

The online magazine Quartz had already built a more comprehensive tool and have now open sourced it. In order to use this tool for Nature graphics it will simply be a matter of amending the CSS to fit recreate our design.

Quartz claim that 75% of their charts are now build directly by their journalists. Instead of their Make chart in Excel > copy into Illustrator > Resize and Restyle > Export > Upload workflow involving the art dept.

Will this put artworkers across the world out of work and cause Adobe to go bust. Probably not.



































