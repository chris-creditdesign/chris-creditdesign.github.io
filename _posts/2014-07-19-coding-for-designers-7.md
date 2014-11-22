---
layout: post
title: Coding for designers part 7
description: A description of your post
pen: <p>CSS position deep dive.</p>
tags: [multiple,tags]
published: true
---

Last time we looked at two important concepts in CSS layout. Display type and the box model. 

We'll now use the <strong>position</strong> property to move elements around the page in order it create more engaging layouts.

### Position

There are four main values that can be applied to the position property: <code>static</code>, <code>relative</code>, <code>absolute</code> and <code>fixed</code>.

Once you have declared a position property four more properties come into play. They are <code>top</code>, <code>bottom</code>, <code>left</code> and <code>right</code>. By declaring a length value in one of these you can nudge the element around the page. It might sound counter intuitive but if you declare a value for <code>top</code> your element will be pushed down from the top, if you declare a value for <code>left</code> it will be push to the right from the left and so on.

For instance this CSS rule would push all images on the page down 50px from their default position:

	img {
		position: relative:
		top: 50px;
	}

In the following four examples I'll try each of the four position property values on an image sitting inside a <code>p</code> tag and apply <code>top: 50px;</code> and <code>left: 50px;</code> to see what effect this has.

### Static

<p data-height="220" data-theme-id="4772" data-slug-hash="7f2cc7818387e448f118d93ed0a86085" data-default-tab="result" data-user="chris-creditdesign" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/7f2cc7818387e448f118d93ed0a86085/'>Position Static example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Here I've set the image’s position to be static. Static is the default position for all elements so declaring it actually has no effect. Top and left also have no effect here because static elements cannot be nudged in this way.

The net result in the image rests exactly where it would do normally.

### Relative

<p data-height="220" data-theme-id="4772" data-slug-hash="a5bcf7d89564a88ad8f9c31716af3a3d" data-default-tab="result" data-user="chris-creditdesign" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/a5bcf7d89564a88ad8f9c31716af3a3d/'>Position Relative example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Now things are getting a bit more interesting. Once a relative position has been declared the <code>top</code> and <code>left</code> properties will nudge the element from its default position. You can see above that the image has moved 50px down and 50px to the right from its default position within the paragraph.

Notice also that the paragraph itself is unchanged. It still takes up the full height as if the image had not moved and there is the same space remaining between the words.

### Absolute

<p data-height="220" data-theme-id="4772" data-slug-hash="7c466ac9fd08d3aac2aaf35008e7af9b" data-default-tab="result" data-user="chris-creditdesign" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/7c466ac9fd08d3aac2aaf35008e7af9b/'>Position Absolute example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Instead of nudging an absolutely positioned element from its default position we can nudge it based on the position of a tag that it is nested inside - as long as the parent tag’s position property is set to something other than static.

Phew! It sounds complicated but absolute positioning is really very useful once you get your head around it. Imagine you had a <code>div</code> containing a map image and you wanted to add some pointers to that map. By absolutely positioning the pointers you could specify how far they should be from the top and left edges of the map to make sure they are placed at exactly the right spot.

Here I’ve set the <code>p</code> tag that contains the image to be <code>position: relative;</code>. This doesn't effect the position of the paragraph but it does mean that we are now able to nudge the image 50px down and 50px to the right from the paragraph’s top left corner.

Notice now that the paragraph behaves as if it no longer contains the image. It has shrunk in height and the space in the text has closed up as if the image was not there.

### Fixed

<p data-height="220" data-theme-id="4772" data-slug-hash="1fdb8136d52ce33c1ec6eeea0a4284a2" data-default-tab="result" data-user="chris-creditdesign" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/1fdb8136d52ce33c1ec6eeea0a4284a2/'>Position Fixed example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

An element with a fixed position behaves in a very similar way to an absolutely positioned element except that instead of being placed relative to a parent tag it is positioned relative to the browser <strong>viewport</strong>. The viewport is the size of browser window that is displaying the page, not the page itself.

<svg x="0px" y="0px" width="500px" height="400px" viewBox="0 0 500 400"><style type="text/css"> .st0{fill:#BDCCD4;} .st1{fill:#3FA9F5;} .st2{fill:none;stroke:#009245;stroke-width:9;stroke-miterlimit:10;} .st3{font-family:'Arial';} .st4{font-size:2em;}</style><rect x="50" y="40" class="st0" width="180" height="320"/><rect x="60" y="50" class="st1" width="160" height="30"/><rect x="60" y="95" class="st1" width="160" height="30"/><rect x="60" y="95" class="st1" width="160" height="30"/><rect x="60" y="140" class="st1" width="160" height="30"/><rect x="60" y="140" class="st1" width="160" height="30"/><rect x="60" y="185" class="st1" width="160" height="30"/><rect x="60" y="185" class="st1" width="160" height="30"/><rect x="60" y="230" class="st1" width="160" height="30"/><rect x="60" y="275" class="st1" width="160" height="30"/><rect x="60" y="320" class="st1" width="160" height="30"/><rect x="40" y="110" class="st2" width="200" height="160"/><text x="316" y="75" class="st3 st4">Webpage</text><text x="316" y="166" class="st3 st4">Viewport</text><polygon points="314,161 270,161 270,150.5 248.4,163 270,175.5 270,166 314,166 "/><polygon points="314,70 260,70 260,59.5 238.4,72 260,84.5 260,75 314,75 "/></svg>

The element will now act as if it is part of the browser rather than part of the page, for instance if you scroll further down the page the fixed element will stay exactly where it is.

I've added some extra junk text to the example above it illustrate this. Go ahead, give it a scroll.

Next time around we'll use all our new found powers to jump in an start creating some CSS layouts.
