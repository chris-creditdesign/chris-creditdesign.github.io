---
layout: post
title: Coding for designers part 9
description: A description of your post
pen: <img src="/images/posts/coding-club-9/robot-shoelaces-5.png" alt="A robot tying its shoelaces."><p>Javastript and the shoelace tying robot.</p>
tags: [multiple,tags]
category: blog
published: true
---

<img alt="A robot tying its shoelaces" src="{{ site.baseurl }}images/posts/coding-club-9/robot-shoelaces-5.png" />

Javascript is a programming language - but don't let that scare you. It was designed with the primary purpose of making webpages more exciting but can be used for a zillion other things (even [robots](http://nodebots.io/)!) and is one of the [most popular programming languages in use today](http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html).

Javascript gives us something that plain old HTML and CSS don't, the ability to ask questions and then give instructions based on the answers we get back.

Rather than just setting the background colour to be red. We can now introduce logic to say that the background colour should be red `if` it is Tuesday today.

### Thinking like a computer

In order to programme computers it's necessary to get under their skin a little and try to 'think like a computer'. Don't worry, I'm not suggesting that you abandon your creativity and turn into a robot. The goal is to try to express your thoughts in a series of logical instructions that a computer, not blessed with your years of experience and knowledge, can understand.

### Imagine if you will...

If I were to ask you to tie your shoelaces it would be a very simple request. 'Please tie your laces' would be get the job done. That's because you've (probably) been preprogrammed with all the necessary steps needed to tie your laces - unless of course you've been relying on velcro all these years.

Imagine now that you have been gifted a futuristic robot that unfortunately has a tendency for untied shoelaces. You don't want to have to retie its laces every time they come undone, what would be the point in owning a robot? So you set about preparing a set of instructions for the robot to tie its own laces that might go something like this...

1.	Cross both laces twice then make the right lace into a loop.
2.	Take the left lace and pass it around the right loop.
3.	Make the left lace into a loop and push it through the hole that has just been made.
4.	Pull both loops so that the knot is tight.

But wait a minute - those instructions are hard enough for a human to follow let alone a robot with no existing perception of the problem. There are many complex hand positions involved in tying a knot that we'll need to explain. How big should the loop be? And how tight do we want the knot? What if the robot's shoe has come off? Oh and don't forget to tell your robot to sit down first in case it falls over.

If the instructions don't make sense or an action can't be performed the robot will simply stop and yelp **"ERROR"** or worse still carry out the instructions incorrectly without realising it is doing wrong.

Eventually though, you will come up with a set of foolproof instructions. You'll now save these instructions inside your robot's brain in a file called `tieLaces` so that the next time its laces are undone you can simply say, in robot speak:

	ROBOT.tieLaces();

One step better would be if you didn't have to check the robots laces yourself. How about it the robot could check its own feet and then tie its laces `IF` they are undone? Once again in robot speak:

	if (ROBOT.laces === UNDONE) {
		ROBOT.tieLaces();
	}

Well dang it! You've just written a computer programme! Sadly we don't have a robot... but we do have a web browser. Next time around we'll see how we can programme that instead.
