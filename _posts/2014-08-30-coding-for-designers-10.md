---
layout: post
title: Coding for designers part 10
description: A description of your post
pen: <p>Introducing D3.</p>
tags: [multiple,tags]
category: blog
published: true
---

We're going to get to know javascript by working with a javascript library called [D3](http://d3js.org). The name D3 stands for data driven documents. That's documents as in 'HTML documents' and data as in erm... data.

A javascript library is a set of pre-written javascript code that contains lots of useful snippets we can use over and over again. It saves us from writing the code ourselves and attempting to reinvent the wheel each time.

### Time to get busy

<a href="http://codepen.io/pen/def?fork=d8445a98883fa0564566dd88fce6614f" target="_blank">Click on this link</a> to start a fresh codepen example. You should see some dummy text, a script tag to load in the D3 javastript file from the [d3js.org](http://d3js.org) website and one CSS rule.

Now we're ready to write our first bit of D3 javascript code. Wo hoo!

### Hello world

Don't ask me why but it's traditional that the the first program you write should display the words 'Hello world!' on the screen. So let's do exactly that.

Type the code below into the javascript section of the codepen you just opened:

	d3.select('p').text('Hello world!');

Hopefully you just saw the text in the preview panel change from "This is just some dummy text" to "Hello world!".

So what's going on here? Well, working left to right, first we call `d3` by name and then make use of its `.select()` method. Inside of the brackets we specify what it is that we want to select. In this instance it's the `<p>` tag and we write the tag's name inside quotation marks. 

Next we call the `.text()` method. Inside these brackets we write the text that we want to be inserted, also wrapped in quotation marks.

### Variables

Using variables just involves giving names to things that we want to refer to over and over again. This is a powerful weapon to have in your coding arsenal. 

Instead selecting the paragraph on the fly let's rewrite the code so that we first assign the selected paragraph to a variable with the name `myParagraph`.

	var myParagraph = d3.select('p');

Now on the next line we can apply the `.text()` method directly to this variable name.

	myParagraph.text('Hello world!');

Nice. It would be even better if we could store the text we want to add inside a variable too. Try updating you code so that it looks like this:

	var myText = 'Hello world!';
	var myParagraph = d3.select('p');

	myParagraph.text(myText);

This might seem like overkill now but separating out your code in this way is a great sanity and time saving tip for the future. Say that we apply the 'Hello world!' text to thousands of different paragraphs by hand and then we want to update that text to say something else - we'll be kicking ourselves as we retype the text over and over again. If we'd been smart and used a variable we could update text just once and have it apply to all the paragraphs.

#### Time for another pointless analogy...

Imagine that you are in a bar and you you decide to be very nice and buy everyone there a drink. How would you go about it? Perhaps you make a bold announcement, let everyone stampede to the bar and you then pick up the tab at the end. Or else you purchase a large tray of drinks and walk around the bar handing them out as you go.

However if a computer was in that situation it would need some logic to help it spread the cheer. It would probably need two bits of information. Firstly the number of people in the bar. And secondly how many drinks it has bought. Then it would go through a process. If the number of people in the bar is greater than the number of drinks bought, it will buy someone a drink and check the numbers again. It would keep on doing this until the two numbers are equal at which point it will deduce that everyone has a drink and stop buying drinks. (Obviously we're assuming that everyone is being honest and not accepting a second drink from the computer.)

Let's see if we can code that up.

### Action stations!

Set up two new variables in your javascript code. One for the number of people in the bar and another for the number of drinks bought so far. I'm assuming it's a quiet night so there are only five people around, you can have as many people as you like.

	var peopleInBar = 5;
	var drinksBought = 0;

Now we need to set up some logic for the computer to check the two variables and then act accordingly. To do this will use a piece of javascript called an [If statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) that looks something like this:

	if ( true ) {
		doSomething();
	} else {
		doSomethingElse();
	}

Let's see if we can apply this format to our bar room situation. Add this code beneath the rest of the javascript.

	if (drinksBought < peopleInBar ) {
		myParagraph.text('Computer: Buy another drink');
	} else {
		myParagraph.text('Computer: Stop buying drinks!');
	}

Hopefully you'll see the text in the preview panel change to 'Computer: Buy another drink'. Now try changing the numbers for the  `peopleInBar` and `drinksBought` variables. What happens when they are equal? What happens when `drinksBought` is the largest number?

If you've got this far you've done great! I think you deserve to buy yourself a drink! Next time around we'll delve deeper into javascript and start applying some more complex logic. 
 