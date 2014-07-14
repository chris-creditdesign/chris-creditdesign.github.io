---
layout: post
title: Coding for designers part 6
description: A description of your post
pen: <img src="/images/posts/coding-club-6/box-model.png" alt="The box model."><p>It’s time to get started with CSS layout.</p>
tags: [multiple,tags]
published: true
---

Remember that just like in InDesign, every element on a web page is contained within a rectangular box.

To take this a step further, each element has a 'display property' that determines how its containing box will sit in relation to the other elements on the page.

There are a few different [display properties](https://developer.mozilla.org/en-US/docs/Web/CSS/display) but the two most important ones are called **inline** and **block**.

### Inline elements 

An element with the display property of inline and can sit *inline* with outer elements. i.e. it won’t force a line break or break the flow of the text

Some examples of elements that are inline by default are 
<code>img</code>, 
<code>a</code>, 
<code>em</code>, 
<code>strong</code> and 
<code>span</code>.

### Block elements 

Elements with the display property of block are normally those that wrap around other elements and also 'blocks' of text such as paragraphs and headers.

By default they don't sit *inline*, instead they break onto their own line and take up as much horizontal space as there is available.

Some examples of elements that are block by default are 
<code>div</code>, 
<code>p</code>, 
<code>h1</code>, 
<code>ul</code> and 
<code>li</code>.

### Say what?

I’ve cheated a little bit here and added a red border around every element in this simple example just to show how they sit together.

<p data-height="464" data-theme-id="4773" data-slug-hash="iJHfr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/iJHfr/'>Inline vs Block elements border</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Notice that the block elements - the blocks of text, the headline, paragraphs and the list - are all on their own lines and spread out to the right hand side of the screen.

The inline elements - in this case the link to nature.com, the cat pic and the bold and italic text - only take up as much space as they need and don't push down to a new line.

**Note:** In reality you'll rarely see large images like this placed inline but it’s interesting to know that the default display type for images is *inline*. Well I think it’s interesting anyway.

You can override the default display type by setting the display property with CSS:

	img {
		display: block;
	}

	li {
		display: inline;
	}

Just for fun, and sometimes for real, you can make an element disappear by setting its display type to none.

	.catpic {
		display: none;
	}

### The box model

The next thing to be aware of is the 'box model'. The box model is used to calculate how much space an element will take up on screen. It's a funny sounding term but the concepts are exactly the same as those that you are used to in InDesign. 

Here’s a diagram that shows how the box model is put together:

<svg x="0px" y="0px" width="800px" height="600px" viewBox="0 0 800 600"><style type="text/css"> svg{width:60%; max-height:600px} .st0{fill:#999999;} .st1{fill:#29ABE2;} .st2{fill:#F9BB6B;} .st3{fill:#B1D498;} .text{font-family:'Arial';font-size:2em;text-anchor:middle}</style><path class="st0" d="M700,500H100V100h600V500z M650,150H150v300h500V150z"/><rect x="250" y="250" class="st1" width="300" height="100"/><polygon class="st2" points="385.042,26 394,26 394,100 406,100 406,26 414.958,26 400.001,0.096 "/><polygon class="st2" points="335.042,26 344,26 344,100 356,100 356,26 364.958,26 350.001,0.096 "/><polygon class="st2" points="285.042,26 294,26 294,100 306,100 306,26 314.958,26 300.001,0.096 "/><polygon class="st2" points="235.042,26 244,26 244,100 256,100 256,26 264.958,26 250.001,0.096 "/><polygon class="st2" points="194,100 206,100 206,26 214.958,26 200.001,0.096 185.042,26 194,26 "/><polygon class="st2" points="144,100 156,100 156,26 164.958,26 150.001,0.096 135.042,26 144,26 "/><polygon class="st2" points="85.042,26 94,26 94,94 26,94 26,85.042 0.096,100.001 26,114.958 26,106 100,106 100,100 106,100 106,26 114.958,26 100.001,0.096 "/><polygon class="st2" points="435.042,26 444,26 444,100 456,100 456,26 464.958,26 450.001,0.096 "/><polygon class="st2" points="485.042,26 494,26 494,100 506,100 506,26 514.958,26 500.001,0.096 "/><polygon class="st2" points="544,100 556,100 556,26 564.958,26 550.001,0.096 535.042,26 544,26 "/><polygon class="st3" points="406,150 394,150 394,224 385.042,224 400.001,249.904 414.958,224 406,224 "/><polygon class="st3" points="356,150 344,150 344,224 335.042,224 350.001,249.904 364.958,224 356,224 "/><polygon class="st3" points="306,150 294,150 294,224 285.042,224 300.001,249.904 314.958,224 306,224 "/><polygon class="st3" points="256,150 244,150 244,224 235.042,224 250.001,249.904 264.958,224 256,224 "/><polygon class="st3" points="456,150 444,150 444,224 435.042,224 450.001,249.904 464.958,224 456,224 "/><polygon class="st3" points="506,150 494,150 494,224 485.042,224 500.001,249.904 514.958,224 506,224 "/><polygon class="st3" points="564.958,224 556,224 556,150 544,150 544,224 535.042,224 550.001,249.904 "/><polygon class="st3" points="385.042,376 394,376 394,450 406,450 406,376 414.958,376 400.001,350.096 "/><polygon class="st3" points="335.042,376 344,376 344,450 356,450 356,376 364.958,376 350.001,350.096 "/><polygon class="st3" points="285.042,376 294,376 294,450 306,450 306,376 314.958,376 300.001,350.096 "/><polygon class="st3" points="235.042,376 244,376 244,450 256,450 256,376 264.958,376 250.001,350.096 "/><polygon class="st3" points="435.042,376 444,376 444,450 456,450 456,376 464.958,376 450.001,350.096 "/><polygon class="st3" points="485.042,376 494,376 494,450 506,450 506,376 514.958,376 500.001,350.096 "/><polygon class="st3" points="535.042,376 544,376 544,450 556,450 556,376 564.958,376 550.001,350.096 "/><polygon class="st2" points="594,100 606,100 606,26 614.958,26 600.001,0.096 585.042,26 594,26 "/><polygon class="st2" points="635.042,26 644,26 644,100 656,100 656,26 664.958,26 650.001,0.096 "/><polygon class="st2" points="694,100 700,100 700,106 774,106 774,114.958 799.904,100.001 774,85.042 774,94 706,94 706,26 714.958,26 700.001,0.096 685.042,26 694,26 "/><polygon class="st2" points="774,144 700,144 700,156 774,156 774,164.958 799.904,150.001 774,135.042 "/><polygon class="st2" points="774,194 700,194 700,206 774,206 774,214.958 799.904,200.001 774,185.042 "/><polygon class="st2" points="774,244 700,244 700,256 774,256 774,264.958 799.904,250.001 774,235.042 "/><polygon class="st2" points="774,294 700,294 700,306 774,306 774,314.958 799.904,300.001 774,285.042 "/><polygon class="st2" points="774,344 700,344 700,356 774,356 774,364.958 799.904,350.001 774,335.042 "/><polygon class="st2" points="774,394 700,394 700,406 774,406 774,414.958 799.904,400.001 774,385.042 "/><polygon class="st2" points="774,444 700,444 700,456 774,456 774,464.958 799.904,450.001 774,435.042 "/><polygon class="st2" points="774,494 700,494 700,500 694,500 694,574 685.042,574 700.001,599.904 714.958,574 706,574 706,506 774,506 774,514.958 799.904,500.001 774,485.042 "/><polygon class="st2" points="406,500 394,500 394,574 385.042,574 400.001,599.904 414.958,574 406,574 "/><polygon class="st2" points="356,500 344,500 344,574 335.042,574 350.001,599.904 364.958,574 356,574 "/><polygon class="st2" points="306,500 294,500 294,574 285.042,574 300.001,599.904 314.958,574 306,574 "/><polygon class="st2" points="256,500 244,500 244,574 235.042,574 250.001,599.904 264.958,574 256,574 "/><polygon class="st2" points="206,500 194,500 194,574 185.042,574 200.001,599.904 214.958,574 206,574 "/><polygon class="st2" points="156,500 144,500 144,574 135.042,574 150.001,599.904 164.958,574 156,574 "/><polygon class="st2" points="106,500 100,500 100,494 26,494 26,485.042 0.096,500.001 26,514.958 26,506 94,506 94,574 85.042,574 100.001,599.904 114.958,574 106,574 "/><polygon class="st2" points="456,500 444,500 444,574 435.042,574 450.001,599.904 464.958,574 456,574 "/><polygon class="st2" points="506,500 494,500 494,574 485.042,574 500.001,599.904 514.958,574 506,574 "/><polygon class="st2" points="556,500 544,500 544,574 535.042,574 550.001,599.904 564.958,574 556,574 "/><polygon class="st2" points="606,500 594,500 594,574 585.042,574 600.001,599.904 614.958,574 606,574 "/><polygon class="st2" points="656,500 644,500 644,574 635.042,574 650.001,599.904 664.958,574 656,574 "/><polygon class="st2" points="0.096,150.001 26,164.958 26,156 100,156 100,144 26,144 26,135.042 "/><polygon class="st2" points="26,206 100,206 100,194 26,194 26,185.042 0.096,200.001 26,214.958 "/><polygon class="st2" points="26,256 100,256 100,244 26,244 26,235.042 0.096,250.001 26,264.958 "/><polygon class="st2" points="26,306 100,306 100,294 26,294 26,285.042 0.096,300.001 26,314.958 "/><polygon class="st3" points="249.904,300.001 224,285.042 224,294 150,294 150,306 224,306 224,314.958 "/><polygon class="st3" points="224,235.042 224,244 150,244 150,256 224,256 224,264.958 249.904,250.001 "/><polygon class="st3" points="249.904,350.001 224,335.042 224,344 150,344 150,356 224,356 224,364.958 "/><polygon class="st3" points="550.096,300.001 576,314.958 576,306 650,306 650,294 576,294 576,285.042 "/><polygon class="st3" points="550.096,250.001 576,264.958 576,256 650,256 650,244 576,244 576,235.042 "/><polygon class="st3" points="650,356 650,344 576,344 576,335.042 550.096,350.001 576,364.958 576,356 "/><polygon class="st2" points="26,356 100,356 100,344 26,344 26,335.042 0.096,350.001 26,364.958 "/><polygon class="st2" points="26,406 100,406 100,394 26,394 26,385.042 0.096,400.001 26,414.958 "/><polygon class="st2" points="26,456 100,456 100,444 26,444 26,435.042 0.096,450.001 26,464.958 "/><text x="400" y="75" class="text">Margin</text><text x="400" y="136" class="text">Border</text><text x="400" y="200" class="text">Padding</text><text x="400" y="313" class="text">Content</text></svg>

**Margin** pushes the element away from its neighbouring elements. It works in a similar way to *text wrap* in InDesign but it effects all types of elements, non just text.

**Borders** outline the box that contains your content. You can set a width, colour and a style for the border. [Border styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) include dotted, dashed or solid. 

**Padding** pushes the border away from your content. It behaves in exactly the same way as *inset spacing* in InDesign.

**Content** represents the actual size of the element, be it some text or an image or whatever else.

It is possible to set a different amount of padding, border-width and margin for each side individually. You can also set an individual width, colour and style for each of the border’s edges.

### So what?

The box model is useful because we can use it to calculate the space that will be taken up within a layout by each element. We do this by adding their margin, border and padding to the width or height values.

For instance the space needed for a 300px wide <code>div</code> with 10px margin, 10px border and 10px padding can be worked out like this:

	margin left (10px) + border left (10x) + padding left (10px) + width (300px) + padding right (10px) + border right (10px) + margin right (10px) = 360px

This means that if we want this element to fit into a 300px wide column, such as a sidebar for instance, we'd need to set its actual width to be 240px to account for the space needed for the margin, border and padding.

Working that out every time can be a bit of a headache. But thankfully there is a CSS property that makes this a bit easier. By setting the property <code>box-sizing</code> to <code>border-box</code> the border and padding will move inside the declared width of our element rather than being added it it.

Be warned, you'll need to add <code>-moz-</code> and <code>-webkit-</code> vendor prefixes for older versions of Safari and Firefox and this won't work at all for versions of Internet Explorer before version 8. The complete CSS would look something like this: 

	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;

And the updated equation would then read:	

	margin left (10px) - border left (10x) - padding left (10px) + width (300px) - padding right (10px) - border right (10px) + margin right (10px) = 320px

Notice that the margin value is still added to the total width. 

In the example below I've set up three <code>div</code>s. The first has no border or padding set. The second has 10px border and 10px padding and the third has the same border and padding but with <code>box-sizing: border-box</code> turned on. Check out how the middle box is way fatter and breaks out of the column.

<p data-height="450" data-theme-id="4773" data-slug-hash="zhHIf" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/zhHIf/'>zhHIf</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Great! Now that we understand display properties and the box model, next time around we can look at how to actually position elements on the page to create a layout.
