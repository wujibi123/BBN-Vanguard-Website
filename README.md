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

- Create a "Next Page" button at the bottom of the website. Continuous scrolling of articles too laggy. Currrently max 10 articles per page.
- Use GSAP to animate webpage
- Implement Search Bar
    	- User can search up article names, and they will get the articles with the closest match

- ~~Use Adobe Dreamweaver to get a design of the website~~
- Improve Design of the website
	- ~~Single one page app~~
		- Switch between "pages" by simply changing the innerHTML. Each switch is just displaying different documents.
		- Home page shows whole Issues
		- Filters show different articles
		- Search bar can also dig up issues if user types in "volume #"
    - Search Bar
    	- User can search up article names, and they will get the articles with the closest match
	- ~~Advanced Options~~
		- ~~A button that reveals filters~~
		- ~~Issues, Authors,~~ and Topic (Sports, On Campus, Off Campus, Feautures, Arts)
		- A button that closes filters
		- A button that submits filters
		- Need to add logic to the filters
			- ~~Figure out how to retrieve the value from a **DataList**~~
			- Use input.value to get the current value of the form.
			- Can also program in the "enter" key by using addEventListener (enter keyCode = 13). See [tutorial](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp).
		- ~~Style the filters~~
	- ~~Subscribe form needs to redirect to https://www.bbns.org/cf_forms/view.cfm?formID=303.~~
	- *Fix scrollin side bar. Stutters a lot*
		- Not completely fixed, but smooth enough
		- Using Sticky would make it super smooth, do this later.
- ~~Use @media to design webpage for the phone, use BCT's css for inspiration~~
- ~~Create Database to store and **display articles**~~
	- ~~Use Firebase **Firestore** and Functions to retreive data~~
		- *Can't use the real time database because there's no blocking function for retrieving data*
		- ~~Creat Testing Version of the Database~~
		- ~~Show PDF on page~~
		- ~Use firebase Querys to systematically show articles by date~
		- Write the real database
			- Issues (collections) --> articles (collections) --> individual articles (doc)
				- Each issue also has fields (link, volume, date)
				- Each individual article has (link, volume, date, type, name, author)
		- Sort articles by title, issue, and name
- ~~Write sorting and filtering algorithm for the articles~~

## NOTES

How to show articles
- Upload PDFs to google drive
- Embed the PDFs with iframe
- In SQL database, store the embed link instead of the actual PDFs

Libraries Used
- GSAP
- Firebase (Only for hosting so far)
- SQL