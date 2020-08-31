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

- ~~Use Adobe Dreamweaver to get a design of the website~~
- Improve Design of the website
	- Single one page app
		- Switch between "pages" by simply changing the innerHTML. Each switch is just displaying different documents.
    - Search Bar
    	- User can search up article names, and they will get the articles with the closest match
	- Advanced Options
		- A button that reveals filters
		- Issues, Authors, and Topic (Sports, On Campus, Off Campus, Feautures, Arts)
	- Subscribe form needs to redirect to https://www.bbns.org/cf_forms/view.cfm?formID=303.
	- Fix scrollin side bar. Stutters a lot
		- Perhaps try turning "sticky" on/off.

- Use GSAP to animate webpage
- Use @media to design webpage for the phone, use BCT's css for inspiration
- ~~Create Database to store and **display articles**~~
	- ~~Use Firebase **Firestore** and Functions to retreive data~~
		- *Can't use the real time database because there's no blocking function for retrieving data*
		- ~~Creat Testing Version of the Database~~
		- ~~Show PDF on page~~
		- Use firebase Querys to systematically show articles by date
		- **Later, after design is done**
			- Write the real database
			- Sort articles by title, issue, and name
- Write sorting and filtering algorithm for the articles

## NOTES

How to show articles
- Upload PDFs to google drive
- Embed the PDFs with iframe
- In SQL database, store the embed link instead of the actual PDFs

Libraries Used
- GSAP
- Firebase (Only for hosting so far)
- SQL