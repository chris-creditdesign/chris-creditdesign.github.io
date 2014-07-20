---
layout: post
title: Coding for designers part 8
description: A description of your post
pen: <p>CSS layout for real.</p>
tags: [multiple,tags]
published: true
---

Now it’s time to start using the CSS knowledge we have built up to create some layouts.

Using some example html, a <code>nav</code> element containing a list of links and a <code>div</code> containing a header and a few paragraphs, I’ll attempt to walk you through five different techniques to create a simple two column layout.

Why five different ways to do the same thing? Well CSS layout is more of an art than a science and there are often many ways to achieve the same end result. Not every technique is right for every situation and each have their pros and cons. Don't worry, with a little bit of practice you get a feel for which technique suites the job at hand.

### Before we get started

<p data-height="268" data-theme-id="4772" data-slug-hash="FwCkg" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/FwCkg/'>No Layout example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

This is our basic page with no layout applied. I've taken the liberty of adding some base styles and colouring the <code>nav</code> red and the <code>div</code> blue. Each of the following examples will use this as the starting point.

### Layout with margins

One of the simplest ways to achieve two a column layout is to use margins. 

First we’ll set our <code>nav</code> to <code>position: absolute;</code> and give it a width of 25% to create a quarter width column. 

	nav {
	  width: 25%;
	  position: absolute;
	}

Setting the <code>nav</code>’s position to absolute removes it from the flow of the document so the blue <code>div</code> moves up behind the red <code>nav</code> and is obscured. Not a problem. If we now set a <strong>margin-left</strong> of <strong>27%</strong> the <code>div</code> will be squashed to the right to create a second three quarter width column. The first 25% is to move it from behind the <code>nav</code> and the extra 2% is to give a bit of white space, or gutter as we InDesign folk like to say. Nice.

	.container {
	  margin-left: 27%;
	}

<p data-height="359" data-theme-id="4772" data-slug-hash="CEtyf" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/CEtyf/'>Layout with margins example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### Layout with floats

Floats were invented to help web designers recreate the text wrap effect that print designers have had at their disposal for centuries. Click on the button in the example below to turn the floats on and off for the images to see the effect this has.

<p data-height="413" data-theme-id="4772" data-slug-hash="Duwbo" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/Duwbo/'>Float example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

The first image is set to <code>float: left;</code> so that it sits on the left hand side and the text wraps around it to the right. The second image is set to <code>float: right;</code> so that it sits on the right.

But it's not only images within text that can be floated. All elements can in fact be floated and multiple elements can be floated next to each other. We can use this handy trick to create layouts.

In the example below I've created a basic layout using floats. The four pink boxes are floated left so they stack up next to each other to create columns. Note that he bottom orange box that follows must then be set to <code>clear: left;</code> so that it moves down past the floated elements and is not obscured. Once again click on the buttons to see the effect of turning off the <code>float</code> and <code>clear</code> properties.

<p data-height="394" data-theme-id="4772" data-slug-hash="jqnAE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/jqnAE/'>Floating elements example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Back to our case study. Hopefully you’re one step ahead of me and are thinking about floating our <code>nav</code> and <code>div</code> next to each other to recreate the column layout. Top marks! 

	nav {
	  float: left;
	  width: 25%;
	}

	.container {
	  float: left;
	  width: 70%;
	  margin-left: 2%;
	}

If we give the <code>nav</code> a width of 25%, the <code>div</code> to a width of 75% and float them both left we can recreate the column layout. Adding a <code>margin-left</code> of 2% to the <code>div</code> will add the gutter.

<p data-height="359" data-theme-id="4772" data-slug-hash="cbaEG" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/cbaEG/'>Layout with floats example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### Layout with a fixed nav bar

Next up we’ll step away from the two column layout for a minute to look at creating another popular layout. The fixed navigation bar.

	nav {
	  width: 100%;
	  position: fixed;
	  top: 0;
	}


By setting the <code>nav</code>’s position to fixed and setting the top property to zero we can ensure that it will remain glued to the top of the screen. Then setting its width to 100% will make it stretch across the whole screen.

By default the <code>body</code> will have some margin applied which will result in white space around the edges. To ensure our <code>nav</code> touches the sides of the screen we can revert the <code>body</code> margin to zero.

	body {
	  margin: 0;
	}

Next up we can set the list items that contain our navigation links to display inline so that they will sit in a row rather than stacking on top of each other.

	li {
	  display: inline;
	}

There just remains one tiny problem. Because we removed the <code>nav</code> from the flow of the document when we set its position to fixed the <code>div</code> has moved up into the empty space and now the headline is being obscured. We can fix that by giving it some margin-top to push it down below the nav bar.

	.container {
	  margin-top: 50px;
	}

Et voilà!

<p data-height="359" data-theme-id="4772" data-slug-hash="GBaAs" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/GBaAs/'>Layout with fixed nav example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### Layout using inline-block

Another neat but perhaps less well know layout technique is to use the display type <strong>inline-block</strong>. This is a close relative to inline in that it allows elements to line up 'inline' but they can also retain some block like properties, such as being able to set a width and height.

	nav {
	  display: inline-block;
	  width: 25%;
	  vertical-align: top;
	}

	.container {
	  display: inline-block;
	  width: 70%;
	  vertical-algin: top;
	}

Once we have declared inline-block as a display type the <code>nav</code> and the <code>div</code> will be in effect treated as if they are text. As such they will both be sitting on the baseline, causing the <code>nav</code> to shoot to the bottom of the page. To fix this we can set them both to <code>vertical-algin: top;</code> unless of course that is the look you are going for.

<p data-height="359" data-theme-id="4772" data-slug-hash="Hfdxc" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/Hfdxc/'>Inline-block layout example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### Layout using flexbox

Now for the new kid on the block. Flexbox is a brand new layout module and is perhaps unique amongst the techniques listed here in that it was created specifically to make complex layouts easier to achieve. Being so new it only work in the [latest browsers](http://caniuse.com/#search=flexbox) and will require vendor prefixes for some. But don't let that put you off. 

Flexbox allows you to create a flexible box in which to place content that then becomes very easy to stretch and squash to fit. To get us started I'll place our trusty <code>nav</code> and <code>div</code> inside a <code>section</code> tag with the class of <strong>flexbox</strong>. I'll then set this <code>div</code> to be our flex container.

	.flexbox {
	  display: flex;
	}

Then by setting a width for the <code>nav</code> and <code>div</code> we can instantly create a column layout.

	nav {
		width: 25%;
	}

	.container {
		width: 60%;
	}

Great but not so exciting you say? Well the real power of flexbox is in the ease with which me can adjust this layout with the additional properties provided.

* <code>justify-content</code> Allows us to horizontally align or distribute the contents.
* <code>flex-direction</code> Gives us the option to reverse the order.
* <code>align-items</code> Handles vertical alignment and even allows us to align the top baselines of each block of text, something that was almost impossible to do before.

Go ahead and have a play with the options below to see how these properties come into play.

<p data-height="500" data-theme-id="4772" data-slug-hash="Ksvta" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/Ksvta/'>Flexbox layout example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

This demo is just a taster of the [many other flexbox options](http://css-tricks.com/snippets/css/a-guide-to-flexbox/).

In the near future true [CSS grid layout](http://www.w3.org/TR/css3-grid-layout/) will revolutionise the way we layout content on the web. But for the time being one or a combination of the examples above will be your best bet.

Next time around we'll take our first steps into the world of JavaScript!










