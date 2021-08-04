/*
Create Image Pages

This file needs to compile before 11ty finishes the site
because that 11ty can build all the pages from a data source
*/

const fs = require("fs");
const MinifyCSS = require("clean-css");
const slugify = require("slugify");


module.exports = async function() {
	// You must create the folder structure first. WriteFile does not create files if parent folders are missing
	if (!fs.existsSync('_site')){fs.mkdirSync('_site');}
	if (!fs.existsSync('_site/images')){fs.mkdirSync('_site/images');}
	if (!fs.existsSync('_site/images/uploads')){fs.mkdirSync('_site/images/uploads');}

	// Create Gallery from folder
	// Somehow the data folder can pull from the source root. Not sure how.
	let listOfImages = fs.readdirSync("./source/images/uploads");
	if(listOfImages !== null && listOfImages !== undefined) {
		console.log("listOfImages", listOfImages)

		fs.writeFileSync('source/_data/imageGallery.json', JSON.stringify(listOfImages));
	}
};
