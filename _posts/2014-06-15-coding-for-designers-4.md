---
layout: post
title: Coding for designers part 4
description: A description of your post
pen: <img src="/images/posts/coding-club-4/CSS.png" alt="Cansei de Ser Sexy."><p>Lets add a touch of style with CSS. Unfortunately it has nothing to do with <a href="http://en.wikipedia.org/wiki/CSS_(band)">this band.</a></p>
tags: [multiple,tags]
published: true
---

So far the HTML we have been writing has dealt only with structure and content. It's time to start 'designing' our page. And to do that we use CSS.

CSS performs exactly the same role as the style sheets inside InDesign and is in fact even more powerful. As well as controlling the styling of web pages it can also control the layout. 

### What is CSS?
CSS stands for Cascading Style Sheets. It consists of a series of rules which define how the elements on a web page should be presented. Much like HTML it must be written in a specific way in order to work properly. A CSS rule will always follow this pattern:

<svg x="0px" y="0px" viewBox="0 0 800 367"><style type="text/css">svg {width:100%;max-height:367px}.background-colour{fill:#FFF5CF;}.text-colour{fill:#334D5C;}.text-font{font-family:'Arial';}.text-large{font-size:2.9em;}.text-small{font-size:1em;}.path{fill:none;stroke:#999;stroke-width:1.5;}</style><rect class="background-colour" width="800" height="367" /><text x="304" y="35" class="text-colour text-font text-small">Currly bracket</text><path d="m 350,40 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="418" y="95" class="text-colour text-font text-small">Colon</text><path d="m 440,100 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="538" y="95" class="text-colour text-font text-small">Semicolon</text><path d="m 575,100 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="165" y="140" class="text-colour text-font text-large">selector &#123;</text><text x="250" y="200" class="text-colour text-font text-large">property &#58; value&#59;</text><text x="165" y="240" class="text-colour text-font text-large">&#125;</text><text x="122" y="335" class="text-colour text-font text-small">Curly bracket</text><path d="m 169,317 l0,-50 l-3,0 l3,-6, l3,6 l-3,0" class="path" /></svg>

The <strong>selector</strong> defines which HTML element that we want to apply styling to. The <strong>property</strong> is the specific characteristic of that element that we want to control such as font, colour, background image etc... And the <strong>value</strong> is where we make our choice.

Right let's get to work.

### The font stack and Inheritance

Here I've taken the basic webpage and I've applied a simple CSS rule. Click on the result tab to see the effect this has.

<p data-height="268" data-theme-id="4772" data-slug-hash="1d7c529b7feafc0b20c60d5d353ce8b8" data-default-tab="css" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/1d7c529b7feafc0b20c60d5d353ce8b8/'>The font stack</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

I've selected the <strong>body</strong> element and chosen the <strong>font-family</strong> property in order to define the font that should be used on the web page. 

Notice that instead of choosing just one font I've chosen four, each separated by a comma. 

The fonts are listed in order of order of preference. I've chosen the font Gill Sans as my first choice. I have Gill Sans installed on my computer and I'm pretty confident that my web browser will be able to use this font on the page. However I can't be sure the same will be true for every person who downloads the page. In fact there's no way of knowing. Normally if Gill Sans were not available the browser would revert to its default font - most probably Times New Roman. This is not really ideal and will play havoc with my design so I give the browser a list of other fonts to try just in case. In effect I'm saying:

<em>"Please use Gill Sans. If Gill Sans is not available use Helvetica. If Helvetica is not available use Arial. If Arial is not available use sans-serif. If sans-serif is not available use whatever you can."</em>

### Cascading
In the above example I chose to apply the <strong>font-family</strong> property to the <strong>body</strong> tag. You won't actually see the <strong>body</strong> tag on screen but CodePen kindly sets us up a standard HTML page for us that looks something like this:

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Title</title>
	</head>
	<body>
		<!-- all of the codepen HTML is nested inside the <body> tag here  -->
	</body>
	</html>

All of our HTML code is contained within the <strong>body</strong> tag. The font selection applied to the <strong>body</strong> is then picked up by text elements that are nested inside.

This is the cascading part of Cascading Style Sheets coming into play. By applying that font choice to the body tag the style can then literally cascade down to all of the elements contained within. This saves us from having to explicitly set fonts for each element on the page.

Next let's try and loose those annoying bullet points that appear inside the unordered lists or <strong>ul</strong> tags. 

<p data-height="268" data-theme-id="4772" data-slug-hash="28ee6e86d599d752478a72146cdddf04" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/28ee6e86d599d752478a72146cdddf04/'>List style none</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Here I have two unordered lists of links, one sitting inside a <strong>main</strong> tag and the other inside a <strong>footer</strong> tag. By writing one CSS rule I can remove the bullet points from both of them. 

	ul {
		list-style: none;
	}

However things get interesting when we have more than one CSS rule. Browsers read style sheets from top to bottom. If they encounter a rule at the bottom of your style sheet that contradicts a rule at the top they will forget about the one at the top and just apply the second rule. 

<p data-height="268" data-theme-id="4772" data-slug-hash="3755ecdb7378fca0383aa358bd5a5fb4" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/3755ecdb7378fca0383aa358bd5a5fb4/'>List style none - Cascading</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

In the example above I've set the <storng>list-style</storng> to be <strong>none</strong> as before. But then a few lines latter I've contradicted myself.

	ul {
		list-style: none;
	}

	/* 1,000s of lines of CSS code */

	ul {
		list-style: disc;
	}

The result is that the first rule is ignored and all of bullet points return. This is a common point of confusion for people learning CSS. Especially since the two rules don't have to be next to each other, they could be 1,000s of lines apart which makes conflicting rules hard to spot.

### Specificity

In the next example I again have two potentially conflicting style rules for my unordered lists.

<p data-height="268" data-theme-id="4772" data-slug-hash="44763ba8eb2cdd83ba05638548ec29e9" data-default-tab="css" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/44763ba8eb2cdd83ba05638548ec29e9/'>List style none - Cascading Specificity</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

However I've tweaked the first rule so that it only applies or 'specifically' applies to the unordered lists contained within the <strong>main</strong> tag like so:

	main ul {
		list-style: none;
	}

The next rule now cannot contradict this and reset all of the bullet points. This is because the leading <strong>main ul</strong> rule is more specific.

As a general rule of thumb CSS rules that are declared later in the style sheet will override those declared earlier and more specific rules will override less specific rules.

This might seem counter intuitive at first but it really is a very effective ways to set document wide styles and then apply more specific, targeted styles that retain a consistent look and feel. 

The easiest way to get your head around this way of working is to get your hands dirty and try it out for yourself. Feel free click the 'edit on CodePen' links on the examples to experiment with your own code.

### Multiple items per rule 

A nice thing to know is that you can apply multiple property value pairs in a single CSS rule. In the example below I have just one CSS rule but I use it to apply a font-family, font-size and color to every bit of text on the page.

<p data-height="268" data-theme-id="4772" data-slug-hash="3b5e6295b1a86a2d36df2295db8e62b8" data-default-tab="css" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/3b5e6295b1a86a2d36df2295db8e62b8/'>Multiple items per rule</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Now that we're starting to get to grips with how CSS can influence the look of our web pages next time around we'll dive into the many fascinating ways that we can apply colour.








