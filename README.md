# BBN-Vanguard-Website
BBN Vanguard's website. The vanguard is a high school newspaper publication.

## Contributing

Here are a few things you should know before contributing to the website
- Master is linked to firebase hosting through Github Actions
    - So never commit to master unless your code has been reviewed and approved by others
- Firebase domain for now is https://bbn-vanguard.firebaseapp.com/.
    - Once we contact IT at the school, we can switch to http://vanguard.bbns.org/.
- Every update should go to development. Use GitHub Pages for rapid testing.


## TODOs
Strike through means completed

- Use Adobe Dreamweaver to get a design of the website
    - Front page: Vanguard introduction and Most Current Articles
    - Sports page: Most current Sports Articles
    - On Campus page: same as above
    - Off Campus page
    - Features page
    - Arts page
    - Search page: Search and filtering articles
    	- User can search up article names, and they will get the articles with the closest match
		- They can also filter articles by Issues, Authors, and Topic (Sports, On Campus, Off Campus, Feautures, Arts)
- Use GSAP to animate webpage
- Create Database to store articles
	- Use Firebase Database and Functions to retreive data
		- ~~Test firebase functions, make sure that they are callable from client side~~
- Write sorting and filtering algorithm for the articles

## NOTES

General
	- All files should be in php
		- Needed for server side code

How to show articles
	- Upload PDFs to google drive
	- Embed the PDFs with iframe
	- In SQL database, store the embed link instead of the actual PDFs

Libraries Used
	- GSAP
	- Firebase (Only for hosting so far)
	- SQL