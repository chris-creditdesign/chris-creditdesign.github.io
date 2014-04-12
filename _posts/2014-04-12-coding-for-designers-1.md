---
layout: post
title: Coding for designers part 1
description: A description of your post
pen: <p>Are you a print designer? Have you always wanted to build awesome things on the internet but weren't really sure how to go about it? Don't worry, if you can design a page in indesign you can design a page on the web. Don't believe me? Well let's get started then.</p>
tags: [multiple,tags]
published: true
---

I've found that whilst many print designers are excited about the web they are reluctant to dive in and start building webpages.

Maybe they don't know where to start or they find the idea of writing code scary and weird. Maybe they think they need to learn a complicated application like Dreamweaver first. Who knows? For whatever reason there seems to be a barrier to entry that many are not able to pass.

I'm going to attempt to talk through some of the fundamentals of building webpages from the point of view of a print designer. Hopefully by doing so we'll debunk some myths and break down some of the perceived barriers.

We'll start with no assumed knowledge of web technologies and work towards producing a snazzy data visualization with the javascript library [D3](http://d3js.org/).

Sound like fun? Ok, let's get started.

## If you can design a magazine page you can design a webpage

An indesign page is conceptually very similar to a webpage. In both systems content is contained within rectangular boxes. These boxes allow us to give structure to the page. Another common theme is that the appearance of these boxes is determined by stylesheets. 

That's great news. It means as print designers we have a head start on everyone else trying to learn this stuff from scratch.

Obviously it's a little more complicated than that... but let's look at how we might go about designing a webpage concept in indesign to explore these similarities further.

I'll normally start off with the text I want to use saved in a word file. 

Something like this...

<img src="{{ site.baseurl }}images/posts/coding-club-1/word.jpg" alt="My awesome website. Hi I'm Chris. I work at Nature. Please take a look at these pictures. Some of my favourite websites are: http://creditdesign.co.uk http://creditdesign.tumblr.com http://codepen.io/chris-creditdesign https://twitter.com/creditdesign"/>

I'll then open up indesign and place the text onto the page inside a text box. Normally I'll spilt the text box up, into three in this case, to start giving a bit of structure to the page.

<img src="{{ site.baseurl }}images/posts/coding-club-1/indesign-textboxes.jpg" alt="Text placed onto an indesign page.">

Great. It isn't very exciting though.

To jazz things up I can start applying some object styles to add colour to the boxes. Here I've prepared some object styles for my header, body and footer boxes. These simply add a background colour and add some padding or 'inset spacing' to move the text away from the edges.

<img src="{{ site.baseurl }}images/posts/coding-club-1/indesign-objectstyles.jpg" alt="Object styles applied to the text boxes.">

Again, that's great but the text still looks a little flat. I can now apply paragraph styles to the text to adjust the colours, fonts, alignment, spacing... all that good stuff.

<img src="{{ site.baseurl }}images/posts/coding-club-1/indesign-paragraphstyles.jpg" alt="Paragraph styles applied to the text.">

Great, now how about I add some pictures? I can place pictures onto the page in exactly the same way as I would text. The only stipulation being that within indesgin images must be placed in image boxes.

<img src="{{ site.baseurl }}images/posts/coding-club-1/indesign-images.jpg" alt="Images added to the page.">

Phew, there we go. We have a pretty decent plan for a webpage there and the good news is that when we get round to building it for real the process will be very similar.

<img src="{{ site.baseurl }}images/posts/coding-club-1/website-indesign.jpg" alt="The finished website design.">

## Livin' in a box

Webpages also have the concept of text and picture boxes, rectangular containers that hold our content. Whereas indesign has text boxes to hold all types of text, a common webpage have a few different types of text boxes, or elements, to hold different types of text, depending upon the role of that text.

For instance, headlines will go in a header element, paragraphs in a paragraph element, lists in a list element etc. This is because a webpage is not just ink on paper. It needs to be interacted with, searched, indexed and re-purposed. To make that possible we need to mark up the different sections of our content so that they can be found easily. For instance when google is indexing your website it needs to know where to find the title of each page. The first place it will check is the 'title' element.

We also have the concept of stylesheets within web pages. The main difference is that whilst we were able to drag boxes around to position them on page within indesign, on a webpage any positioning outside of the normal flow of content is controlled by the stylesheets themselves.

The separation of content, the text contained within our text boxes, from presentation, the choice of colours and fonts in the stylesheets, is an important concept to grasp and is common to both print and web design.

Next time around we'll leave indesign behind and start looking at some of the things that go into building real webpages.