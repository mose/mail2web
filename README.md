mail2web
===============

This script is used by my mutt mail client to store some kind of mails as web pages for later usage.

A mail pipeline
--------------------

First, we need a script that we can pipe our mails to, so that it will create json static files in the web tree.

A web frontend
----------------

Second, we need a web frontend consuming those json files

A deploy process
-------------------

In case your mail client is not on your server you will have your web tree locally, then need to push it to whatever public web server you have at hand.

