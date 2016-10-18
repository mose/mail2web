mail2web
===============

This script is used by my `mutt` mail client to store some kind of mails as web pages for later usage. I use it for all the newletters in HTML that I get, mostly, for preparing [Greenruby](http://greenruby.org) Newsletter.

A mail pipeline
--------------------

First, we need a script that we can pipe our mails to, so that it will create json static files in the web tree.

    # I added in my mutt
    macro index,pager z "<pipe-message>~/mail2web/bin/m2w<return>"

A web frontend
----------------

Second, we need a web frontend consuming those json files. Here is my simple basic auth apache conf.

    <VirtualHost *:80>
      ServerName xxx
      DocumentRoot /home/mose/mail2web/web/
      <Directory /home/mose/mail2web/web/>
        AuthType Basic
        AuthName "Restricted Content"
        AuthUserFile /home/mose/mail2web/.htpasswd
        Require valid-user
      </Directory>
    </VirtualHost>


TODO
-------------------

- manage non-multipart mails that only have HTML
- make it can also save attachments
- make it save anonymous, not-listed mails, and display the url in mutt
