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
	fs.readdir("./source/images/uploads", (err, files) => {
		if(files !== null && files !== undefined) {
			let newJSONFile = [];
			files.forEach((el, index) => {
				// Forestry automatically slugifies image names
				/*let newPageName = slugify(el,
					{replacement: '-', remove: undefined, lower: true, strict: true}
				);*/

				newJSONFile.push(el)
			})

			console.log("newJSONFile", newJSONFile)

			fs.writeFile('source/_data/imageGallery.json', JSON.stringify(newJSONFile), (error) => {
				console.log(error)
			})
		}
	})
};
