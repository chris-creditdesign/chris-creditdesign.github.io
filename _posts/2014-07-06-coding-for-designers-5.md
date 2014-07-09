---
layout: post
title: Coding for designers part 5
description: A description of your post
pen: <img src="/images/posts/coding-club-5/rainbow.png" alt="A rainbow."><p>Let's talk about colour.</p>
tags: [multiple,tags]
published: true
---

Welcome to the wonderful world of colour in CSS. A topic so juicy it deserves a post all of its own.

### Keywords

To get us started it's good to know that all browsers have a whole bunch of colour keywords built in. 'Tomato' is one such keyword that you might have noticed in the last blog post. Using one of these keywords is probably the quickest and easiest way to get some colour into your design. Here are some examples:

<p data-height="200" data-theme-id="4773" data-slug-hash="ygone" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/ygone/'>Colour keywords</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

And for reference, [here's the full list](http://www.w3.org/wiki/CSS/Properties/color/keywords) of colours available. You'll see that some of these have quite obscure names and some of the names names are downright hilarious. Yes 'peachpuff' I'm looking at you.

Although these colours are super easy to work with, in reality the colours in your designs or even in your brand guidelines will rarely match up exactly to one of these built in colours. Sooner or later you’re going to need some more precise control. Luckily CSS has got your back.

### Your colour space or mine?

Most screens work by producing tiny dots of [Red, Green and Blue light](http://en.wikipedia.org/wiki/RGB_color_model#RGB_and_displays). When all three of these primary colours are shinning at their full intensity the screen appears to be white. When none of them are shinning the screen appears to be black. 

Luckily CSS gives us direct access to each of these primary colours so that we can determine exactly how much of each should be mixed together to give us the colour we want on screen. To do that we use a special type of number called a hexadecimal number that looks something like this

	#FFFFFF

But don’t worry it’s not as scary as it seems, in fact it’s almost logical when you know what’s going on. 

### Hexadecimal deep dive

For reasons that only electrical engineers understand, computers like to count in 16s rather than 10s. They also like to start at 0 rather than 1. Go figure.

To avoid going in to double figures after the 9, computers add the letters A through to F. Think of it a bit like a deck of cards where after the ten we have the jack, queen, king and ace cards.

Counting up from 1 to 16 using hexadecimal numbers looks like this: 
<code>0</code>
<code>1</code>
<code>2</code>
<code>3</code>
<code>4</code>
<code>5</code>
<code>6</code>
<code>7</code>
<code>8</code>
<code>9</code>
<code>A</code>
<code>B</code>
<code>C</code>
<code>D</code>
<code>E</code>
<code>F</code>.

### Slow down egghead!

That’s great but how does it relate to colour? Well let’s break down that number to see what the parts mean.

The first **#** or hash character is just there to tell the computer to expect a hexadecimal number. Moving forward each pair of numbers control one of the primary colours. The first two handle red, the next two green and the final two blue.

<svg x="0px" y="0px" viewBox="0 0 800 200"><style>svg {width:100%;max-height:200px}.background-colour{ fill:#FFF5CF;}.text-colour{ fill:#334D5C;}.text-colour-red{ fill:#FF0000;}.text-colour-green{ fill:#00FF00;}.text-colour-blue{ fill:#0000FF;}.text-font{ font-family:'Arial';}.text-large{ font-size:2.9em;}.text-small{ font-size:1em;}.path{ fill:none; stroke:#999; stroke-width:1.5;}.bad { stroke: red; stroke-dasharray: 10,10;}</style><rect class="background-colour" width="800" height="200" /><text x="211" y="35" class="text-colour text-font text-small">Red</text><path d="m 227,40 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="267" y="35" class="text-colour text-font text-small">Green</text><path d="m 293,40 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="343" y="35" class="text-colour text-font text-small">Blue</text><path d="m 358,40 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" />  <text x="165" y="140" class="text-colour text-font text-large">#</text><text x="202" y="140" class="text-colour-red text-font text-large">FF</text><text x="268" y="140" class="text-colour-green text-font text-large">FF</text><text x="332" y="140" class="text-colour-blue text-font text-large">FF</text></svg>


Two Hexadecimal digits together can represent 256 different levels of colour. That’s 16 x 16 possible combinations ranging from **00** to **FF**. 0/256 or **00** being the lowest possible level and 256/256 or **FF** being the highest possible. So the number we see above, <code>#FFFFFF</code> represents all three primary colours at their maximum value, which in effect would give us white.

256 x 256 x 256 gives us 16,777,216 possible colour combinations. Experiment with the sliders below to get a feel for how the different colours work together.

<p data-height="300" data-theme-id="4774" data-slug-hash="lqHGp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/lqHGp/'>Hex colours</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### RGB

Hex numbers are cool and everything but luckily there’s an alternative way to declare RGB colours that’s a little bit easier to read. We can replace the **#** with <code>rgb();</code> and simply put three normal numbers between 0 and 255 inside separated by commas. See if you can use the RGB sliders below to recreate the same colour as the Hex sliders above.

<p data-height="300" data-theme-id="4774" data-slug-hash="lHydC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/lHydC/'>RGB colours</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### RGBa

The really exciting bit is that this syntax can be extended to <code>rgba();</code>. The extra 'a' stands for 'alpha' and this allows us to add a fourth number that controls the transparency of our colours. This number can range from 1 for fully opaque to 0 for fully transparent. Go on have a go!

<p data-height="300" data-theme-id="4774" data-slug-hash="zGyhn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/zGyhn/'>RGBA colours</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### HSL

Ok time for a reality check. Hexadecimal or not, RGB colours are not very intuitive to work with. There I said it.

But luck is on our side once again because there is a third and quite different way to declare colours. Instead specifying the amount of red, green and blue to mix together we can instead declare our colour’s **hue**, **saturation** and **lightness**.

The hue is measured in degrees. Where red is at 0&deg;, a greeny-yellow at 90&deg;, cyan at 180&deg;, blue/magenta at 270&deg; and back to red at 360&deg;. A very simple colour wheel would look something like this.

<svg class="colourWheel" x="0px" y="0px" viewBox="0 0 400 400"><style>svg.colourWheel {max-width:400px;max-height:400px}.background-colour{fill:#FFF5CF;}.text-colour{fill:#334D5C;}.text-font{font-family:'Arial';}.text{font-size:1.5em;}</style><rect class="background-colour" width="400" height="400" /><text x="191" y="56" class="text-colour text-font text">0&deg;</text><text x="345" y="210" class="text-colour text-font text">90&deg;</text><text x="180" y="364" class="text-colour text-font text">180&deg;</text><text x="10" y="210" class="text-colour text-font text">270&deg;</text><g><path fill="hsl(30,100%,50%)" d="M258.3,141.7l38.9-38.9l0,0c-16.5-16.5-37.5-29.1-61.7-35.6l-14.2,53.1 C235.9,124.2,248.4,131.7,258.3,141.7L258.3,141.7z"/><path fill="hsl(210,100%,50%)" d="M102.8,297.2c16.5,16.5,37.5,29.1,61.7,35.6l14.2-53.1c-14.5-3.9-27.1-11.4-37-21.3h0L102.8,297.2 L102.8,297.2z"/><path fill="hsl(60,100%,50%)" d="M279.7,178.6L279.7,178.6l53.1-14.2l0,0c-6-22.6-17.9-43.9-35.6-61.6l-38.9,38.9 C269,152.3,276.1,165.1,279.7,178.6L279.7,178.6z"/><path fill="hsl(240,100%,50%)" d="M67.2,235.6c6,22.6,17.9,43.9,35.6,61.6l38.9-38.9c-10.6-10.6-17.7-23.4-21.4-37l0,0L67.2,235.6L67.2,235.6 z"/><path fill="hsl(90,100%,50%)" d="M279.7,221.4l53.1,14.2l0,0c6.1-22.6,6.5-47,0-71.2l-53.1,14.2C283.6,193.2,283.3,207.8,279.7,221.4 L279.7,221.4z"/><path fill="hsl(270,100%,50%)" d="M67.2,164.4c-6.1,22.6-6.5,47,0,71.2l53.1-14.2c-3.9-14.5-3.7-29.2,0-42.7l0,0L67.2,164.4L67.2,164.4z"/><path fill="hsl(120,100%,50%)" d="M258.3,258.3l38.9,38.9l0,0c16.5-16.5,29.1-37.5,35.6-61.7l-53.1-14.2C275.8,235.9,268.3,248.4,258.3,258.3 L258.3,258.3z"/><path fill="hsl(300,100%,50%)" d="M102.8,102.8c-16.5,16.5-29.1,37.5-35.6,61.7l53.1,14.2c3.9-14.5,11.4-27.1,21.3-37l0,0L102.8,102.8 L102.8,102.8z"/><path fill="hsl(150,100%,50%)" d="M221.4,279.7l14.2,53.1l0,0c22.6-6,43.9-17.9,61.6-35.6l-38.9-38.9C247.7,269,234.9,276.1,221.4,279.7 L221.4,279.7z"/><path fill="hsl(330,100%,50%)" d="M164.4,67.2c-22.6,6-43.9,17.9-61.6,35.6l38.9,38.9c10.6-10.6,23.4-17.8,37-21.4v0L164.4,67.2L164.4,67.2z" /><path fill="hsl(180,100%,50%)" d="M178.6,279.7l-14.2,53.1l0,0c22.6,6.1,47,6.5,71.2,0l-14.2-53.1C206.8,283.6,192.2,283.3,178.6,279.7 L178.6,279.7z"/><path fill="hsl(0,100%,50%)" d="M235.6,67.2c-22.6-6.1-47-6.5-71.2,0l14.2,53.1c14.5-3.9,29.2-3.7,42.7,0l0,0L235.6,67.2L235.6,67.2z"/></g></svg>

Saturation is measured in percentage with 0&#37; being totally desaturated and 100&#37; totally saturated.

Lightness is also measured in percentages with 0&#37; being totally dark or black and 100&#37; totally light or white.

The advantage is that it’s a bit easier to know what colour a HSL code represents or even to write our own codes from scratch. If we want a range of colours, perhaps with the same hue but with differing levels of darkness it's quite possible to get the results we want by tweaking the lightness value without needing to fire up Photoshop.

<p data-height="300" data-theme-id="4774" data-slug-hash="biger" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/biger/'>HSL colours</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### HSLa

We can also add an alpha value to get transparency. Can you guess what’s hiding behind that box?

<p data-height="300" data-theme-id="4774" data-slug-hash="dInDH" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/dInDH/'>HSLA colours</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### What's the catch?

RGBa and HSLa colours offer many advantages over plain old hex colours but if you get out there and start viewing the CSS of your favourite websites you'll rarely see them in use. Why is that?

Well sadly they don't work in every browser. Although [CSS3 colours](http://caniuse.com/#feat=css3-colors) are widely supported in all modern browsers, copies of Internet Explorer older than version 9 will ignore HSLa and RGBa colours. Depending on the statistics you look at, that's around 20% of internet users. Bummer.

One solution is to declare two colours where possible, a tried and tested hex number as well as a more modern RGBa or HSLa colour. The browsers that don't understand the new colours will simply pass over them and the hex colours will be used instead.

	body { 
		/* Bad ass fallback colour for IE <9 */
		background-color: #BADA55;
		/* Sweet HSLa colour for everyone else */
		background-color: hsla(74, 64%, 59%, 1); 
	}

Sorry to end on a down note. But don’t worry. Next time we'll push on with CSS layout and things will get a lot more exciting.
