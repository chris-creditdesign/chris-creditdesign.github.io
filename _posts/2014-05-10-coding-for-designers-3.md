---
layout: post
title: Coding for designers part 3
description: A description of your post
pen: <img src="/images/posts/coding-club-3/element-animation.gif" alt="A html element."><p>It's time to start writing some html.</p>
tags: [multiple,tags]
published: true
---

Last time around we discovered that HTML stands for <strong>Hypertext markup language</strong> and I laboured the point that the rectangular elements that construct our HTML pages are analogous to the text and picture boxes found in indesign. 

<img src="{{ site.baseurl }}images/posts/coding-club-3/element-animation.gif" alt="A html element.">

So if HTML is made up of elements, what exactly are those element? Well, a typical HTML header element might look something like this:

	<h1>Hello!</h1>

That's behind the scenes of course, in the source code. What you actually see on screen will just be the content, in this case a cheery greeting. So what's going on?

HTML works by wrapping content inside tags. Each tag has a name and based on that name the browser gets a heads up on what sort of content it'll find inside. In the example above <strong>h1</strong> or 'Heading level 1' tags are used. The browser can expect the content to be a headline of some sort and for it to be the most important headline in its section.

You’ll see this pattern repeated again and again. The tag names are surrounded by angle brackets. One tag sits just before the start of the content, one tag just afterwards. The second tag adds a slash just before the name to show that it is the closing tag. 

Some elements don’t contain any text and don’t need a closing tag. Instead we add the slash before the second angle bracket. One example is the <strong>img</strong> or image tag.
	
	<img />

### Attributes

Unfortunately an <strong>img</strong> like the one above would be completely useless. In order to be of any use the image tag needs two extra bits of information that we call attributes.

These attributes are the <strong>src</strong> or source which tell the browser where to find the image we want to show and <strong>alt</strong> which provides some alternative text to display if for any reason the image can't be seen. Click between the HTML and Result tabs below to see how an image with no source is displayed.

<p data-height="402" data-theme-id="4772" data-slug-hash="47884eb9844dabd2ce1064ff9cca3891" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/47884eb9844dabd2ce1064ff9cca3891/'>IMG tag example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Attributes usually consist of two parts. A name and and a value and the value will usually be wrapped in quotation marks. The quotation marks tell the browser to treat the attribute value as text. They’re not 100% necessary but without them characters such as spaces, equal signs or angle brackets will cause the browser to throw a wobbly.

So all things considered a typical HTML element might look something like this:

<svg x="0px" y="0px" viewBox="0 0 800 367"><style type="text/css">svg {width:100%;max-height:367px}.background-colour{fill:#FFF5CF;}.text-colour{fill:#334D5C;}.text-font{font-family:'Arial';}.text-large{font-size:2.9em;}.text-small{font-size:1em;}.path{fill:none;stroke:#999;stroke-width:1.5;}</style><rect class="background-colour" width="800" height="367" /><text x="265" y="85" class="text-colour text-font text-small">Start Tag</text><path d="m 264,90 L264,120 L70,120 L70,140 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><path d="m 332,90 L332,120 L514,120 L514,140 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="540" y="85" class="text-colour text-font text-small">Content</text><path d="m 570,90 0,50 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="663" y="87" class="text-colour text-font text-small">End Tag</text><path d="m 663,90 L663,120 L639,120 L639,140 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><path d="m 726,90 L726,120 L750,120 L750,140 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="65" y="190" class="text-colour text-font text-large">&lt;h1 class=&quot;greeting&quot;&gt;Hello!&lt;/h1&gt;</text><text x="77" y="274" class="text-colour text-font text-small">Tag Name</text><path d="m 116,256 l0,-50 l-3,0 l3,-6, l3,6 l-3,0" class="path" /><text x="167" y="274" class="text-colour text-font text-small">Attribute Name</text><path d="m 216,256 l0,-50 l-3,0 l3,-6, l3,6 l-3,0" class="path" /><text x="342" y="274" class="text-colour text-font text-small">Attribute Value</text><path d="m 394,256 l0,-50 l-3,0 l3,-6, l3,6 l-3,0" class="path" /></svg>


By the way the Mozilla Developer Network has a list of [every HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) that makes great bed time reading.

### Nesting
The fun really begins when you start combining elements. Most elements are designed to sit inside other elements. For example an <strong>em</strong> element can sit within a <strong>p</strong> or paragraph element to add emphasis to a word or phrase. Browsers will normally display the emphasised words in <em>italics</em>.

<svg x="0px" y="0px" viewBox="0 0 800 367"><style type="text/css">svg {width:100%;max-height:367px}.background-colour{fill:#FFF5CF;}.text-colour{fill:#334D5C;}.text-font{font-family:'Arial';}.text-large{font-size:2.9em;}.text-small{font-size:1em;}.path{fill:none;stroke:#999;stroke-width:1.5;}</style><rect class="background-colour" width="800" height="367" /><text x="380" y="85" class="text-colour text-font text-small">P Tag</text><path d="m 380,90 l0,30 l-356,0 l0,120 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><path d="m 426,90 l0,30 l348,0 l0,120 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="376" y="178" class="text-colour text-font text-small">EM Tag</text><path d="m 380,185 l0,30 l-165,0 l0,25 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><path d="m 426,185 l0,30 l241,0 l0,25 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><text x="20" y="300" class="text-colour text-font text-large">&lt;p&gt;I'm a &lt;em&gt;paragraph&lt;/em&gt;.&lt;/p&gt;</text></svg>

Be careful though. When an element sits inside another, it must be closed before the element that it is sitting inside. For example this example of 'invalid html'...

<svg x="0px" y="0px" viewBox="0 0 800 367"><style type="text/css">svg {width:100%;max-height:367px}.background-colour{fill:#FFF5CF;}.text-colour{fill:#334D5C;}.text-font{font-family:'Arial';}.text-large{font-size:2.9em;}.text-small{font-size:1em;}.path{fill:none;stroke:#999;stroke-width:1.5;}.bad{stroke:red;stroke-dasharray:10,10;}</style><rect class="background-colour" width="800" height="367" /><text x="380" y="85" class="text-colour text-font text-small">P Tag</text><path d="m 380,90 l0,30 l-356,0 l0,120 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><path d="m 426,90 l0,30 l204,0 l0,120 l-3,0 l3,6 l3,-6 l-3,0" class="path bad" /><text x="376" y="178" class="text-colour text-font text-small">EM Tag</text><path d="m 380,185 l0,30 l-165,0 l0,25 l-3,0 l3,6 l3,-6 l-3,0" class="path" /><path d="m 426,185 l0,30 l348,0 l0,25 l-3,0 l3,6 l3,-6 l-3,0" class="path bad" /><text x="20" y="300" class="text-colour text-font text-large">&lt;p&gt;I'm a &lt;em&gt;paragraph&lt;/p&gt;.&lt;/em&gt;</text></svg>

... will cause all sorts of problems. Although this is a relatively tame example, the best we can hope for is that the content will be displayed in a totally unpredictable way and at worst the web page won't display anything at all.

Placing elements inside others is referred to as nesting and also helps to give structure to our page. Here’s a fairly typical nesting example:

	<html>
		<head>
			<title>Just a plain old document</title>
		</head>
		<body>
			<h1>Hello!</h1>
		</body>
	</html>

Notice how the <strong>title</strong> element is nested inside the <strong>head</strong> element and the <strong>h1</strong> is nested inside the <strong>body</strong>, all of which are nested inside the <strong>html</strong> element. 

Notice also that we've followed the good practice of indenting the lines each time we nest an element within another. We could have typed out the same info like this:

	<html><head><title>Just a plain old document</title></head><body><h1>Hello!</h1></body></html>

Your browser won't care, it can read this mess above just fine. But as humans we'll make a lot less mistakes and have fewer headaches if we get in the habit of indenting our HTML.

### One final comment

Sometimes it can be useful to leave notes within our html documents to act as reminders to ourselves or to explain our work to someone else. We call these notes comments. Adding a <strong>&lt;!--</strong> before and a <strong>--&gt;</strong> after any text or code tells the browser to ignore it and just move on to the next thing.

`<!-- This is just a comment, move along please -->`

Great! We've covered a lot of ground here. Next time around we’ll start adding a touch of style to our naked HTML elements with some CSS.
