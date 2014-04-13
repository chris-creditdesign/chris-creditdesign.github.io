---
layout: post
title: Coding for designers part 2
description: A description of your post
pen: <p>Let’s learn how to talk to computers and about the three headed beast that runs the internet.</p>
tags: [multiple,tags]
published: true
---

Last time around we learned that designing a webpage is conceptually very similar to designing a page with indesign. I’m sure that if you can get your head around one process you can understand the other as well.

The big difference is however, that web pages are created by writing code rather than dragging boxes around the screen and selecting options from dropdown menus. 

Don’t be alarmed! Writing code is nothing to be scared of. With a little practice it becomes both fun and easy. It allows you to get results up on screen incredibly quickly and could even save you from a nasty case of indesign RSI.

WYSIWYG (what you see is what you get) applications, such as Dreamweaver do exist for web design. However I’ve found that using these apps will strengthen the idea that code is hard and scary and not to be touched by humans. This isn’t true and in many cases the code created by these apps is often not as concise as you could have written yourself. It’s also harder to fix problems when you don’t know what’s going on under the hood. So let’s cut out the middle man.

### Talking to computers

‘Computer code’ comes in many shapes and sizes but it’s all basically designed to do the same thing. Loosely speaking that is to contain information or instructions that humans can read and write and that can also be understood by computers. Sounds simple right?

If we write an email to a friend we can put in spelling mistakes, bad grammar or use slang words and our friend will generally get what we’re going on about. Unfortunately this doesn’t work with computers - they don’t do slang and they’re not so great with jokes. When talking to computers we need to mind our manners and meet them half way.

### The Queens English

There are many different computer programming languages and they each have their own ‘syntax’. This is an agreed upon set of rules that must be adhered to in order for the computer to understand what you are trying to say. Imagine you are speaking to the Queen. You have to use the Queen’s English or she’ll order the guards to cut off your head. Luckily a computer won’t cut off your head, but they it refuse to work if you don’t talk to it in the manner that it’s accustomed to.

For instance this line of HTML code will give you a perfectly functional link to the Google home page

	<a href="https://www.google.co.uk/">google.co.uk</a>

This line however, won’t give you a darn thing.

	<a href="https://www.google.co.uk/>google.co.uk</a>

Without that closing quotation mark a human can still work out the implied meaning but a computer will just throw a big tizz.

### The three headed beast - or the three key elements of any web page

Thankfully there are only three core languages that you need to be familiar with build web pages. They are HTML, CSS and JavaScript.

### Quick history of the internet

Let’s take a quick stepback and explore how all this came to be.

In the late 80s, Tim Breners-Lee invented the World Wide Web whilst working at CERN as a way for physicists to easily share science papers.

The crucial ideas were a web browser that allowed you to view documents saved on a computer in a different location, and links which allowed you to follow connections between these documents.

A fundamental piece of Tim’s new system was HTML which is still the foundation of all websites today.

### HTML - Hypertext Markup Language

<strong>Hypertext</strong> is just regular text but with ‘hyperlinks’ or links added. <strong>Markup</strong> refers to marking up that text, or dividing it into sections to indicate which bit is which i.e. this is the headline, this is a paragraph, or whatever. <strong>Language</strong> is just language.

If you’ve not ‘viewed the source’ of a webpage before, I suggest you do it now. Go ahead. Just right click on this page and select ‘View page source’. What you’ll be looking is all the HTML code that goes into building this simple blog post.

This is actually a bit more complicated than it needs to be. As we scroll down we can see chunks of code that are used for the page navigation, google analytics etc... but with a bit of searching you should be able to find the sentence you were just reading wrapped inside a pair of `<p>` tags. Well explore these guys further in a future post. 

You can open a simple text editor like notepad and write all of the html needed to create a perfectly functional website. You can import images and add links and then share it with anyone in the world instantly. It just won’t be very exciting to look at. That’s where CSS comes in.

### CSS - Cascading StyleSheets

In the years that followed the invention of the World Wide Web and HTML some tools were invented to make websites more engaging. The next major development came around 1996 with the invention of CSS and the ability to add some visual finesse to our websites. 

The word <strong>cascading</strong> refers to the way in which a style applied to one element can be inherited by another.

<p data-height="268" data-theme-id="4772" data-slug-hash="71b53a8337ad2adeae45b95f1eee67f1" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/71b53a8337ad2adeae45b95f1eee67f1/'>CSS example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Here I’ve applied a bunch of styles to my `<button>` elements. I’ve also applied a single style to buttons that are being hovered over. When you hover over one of the buttons above you’ll notice that only the background colour changes. The other styles that I applied such as font family, padding, border etc. cascade from the regular buttons to the hovered buttons. This is great because it means we don’t have to repeat ourselves when we want similar styles to be applied to multiple items.

These stylesheets work in exactly the same as the style sheets we are used to in indesign but they are even more powerful. Because HTML on its doesn’t give us the ability to position elements on the page the way that we can with indesign boxes, that funcitonality is provided by CSS. On top of that CSS can be used to create special effects like animations, interactions and even transforming objects in a 3D space.

### Javascript

Around the same time CSS came onto the scene, JavaScript was being developed as a programming language to add interactivity to webpages. Unusually for something that lives on the internet javascript is not actually an acronym - it’s just a silly word. 

JavaScript was originally put to use making annoying things like popup windows and alert boxes but as the processing power of our computers and the sophistication of our internet browsers has increased, JavaScript has matured into a fully featured programming language that powers all sorts of engaging experiences on the web.

Here I’ve added some simple JavaScript code to create a button that tells us the time. Who needs an iWatch?

<p data-height="268" data-theme-id="4772" data-slug-hash="8085e55da5f83e78e9ebadc24a62c6c1" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/chris-creditdesign/pen/8085e55da5f83e78e9ebadc24a62c6c1/'>Javascript alert example</a> by chris-creditdesign (<a href='http://codepen.io/chris-creditdesign'>@chris-creditdesign</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Thanks for reading. Next time we’ll get our hands dirty and start writting some real HTML.


















