Setting up a blog with Jekyll

## Install

To install [bundler](http://bundler.io/):

	gem install bundler

Create a file in your site's repository called `Gemfile` and add the line `gem 'github-pages'`

	source 'https://rubygems.org'
	gem 'github-pages'

After that, simply run the command, `bundle install` and you're good to go.

## Run

To run Jekyll in a way that matches the GitHub Pages build server, run Jekyll with Bundler. Use the command 
	
	bundle exec jekyll serve --watch

## Update

To keep Jekyll up to date, you can run the command `bundle update`


To do.

Switch out strong and em tags from markdown.
Covert images to markdown formatting
![Export export options - general](images/general.png)

Remove Let's typo in coding part 4