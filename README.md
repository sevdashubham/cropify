This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


run:<br /> 1. npm install<br />
2. npm start

## Table of Contents

- [x] Please use standard Javascript/ES6 and the React framework for your solution.
- [x] The total size of your repo / zip file must be <= 50KB
- [x] The maximum image dimensions after cropping should be 800px (width) x 100px (height).
- [x] The maximum file size of the initial uploaded image should be limited to 1mb.
- [x] The input should be clearable
- [x] Do not actually upload the image to an API, just emulate doing so using the following code and use the returned URL for        previewing the image:
function saveImage(imageFile) {
return Promise.resolve("http://lorempixel.com/800/100/cats/");
}
instead of the above URL("https://picsum.photos/800/100?image=1062") is used, lorempixel url was not working.
- [x] No image is a valid input. Ie. User should be able to call saveImage even if no image has been uploaded.
- [x] There should be a button called "Print Preview". When clicked it should open a new tab, print a page which has thenew
<br /> image centered at the top, and then close the tab after printing. If no image has been saved<br /> (ie. saveImage has not been       called), then this button should be disabled. The displayed image should be no higher than 100px.



