# Contribution Guide

## Setup (for building the site locally)
- You need a git client.  If you don't already have one, the easiest way for you to start is with the GitHub Desktop: https://desktop.github.com/
- Install Ruby: https://www.ruby-lang.org/en/
- Download this repository using your git client, and then...
  - Open a command line, and in the directory for this repo...
    - Run `gem install bundler jekyll` to install jekyll, the static site generator we use (and bundler, which jekyll needs): https://jekyllrb.com/
    - Run `bundler exec jekyll serve` to have jekyll build the site, and serve it locally so you can look at it.
    - Once jekyll is running, you can view the site here: http://localhost:4000
    
- With the above steps complete, you can now create content locally, and look at it.

# Working
Files can be written in html or markdown formatting, depending on what you're comfortable with.  Both are valid, and jekyll will do any conversions needed to output html.

There are many guides out there on markdown/html syntax (and you can also just look at the files we have currently to see), so I'm not going to give a recap of those things.

However, please keep forbidden knowledge to a minimum (or at least on a separate page, so people don't accidentally see it).

# Finishing Up
When you're ready to share your changes...
- open your git client
- add the changed/created files
- commit them (with a nice message letting other people know what you did)
- then push the changes (which makes them available for others to see)
