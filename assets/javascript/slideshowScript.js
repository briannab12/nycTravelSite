//Slideshow image file locations
var imgSrcList = [
    "assets/images/home.jpg",
    "assets/images/food.jpg",
    "assets/images/dessert.jpeg",
    "assets/images/drinks.jpg",
    "assets/images/lodging.jpeg",
    "assets/images/navigation.jpg",
    "assets/images/shopping.jpeg",
    "assets/images/siteseeing.jpg",
    "assets/images/museums.jpeg",
    "assets/images/activities.jpeg"
];

//Slideshow mobile image file locations
var imgMobileSrcList = [
    "assets/images/mobile/home.jpg",
    "assets/images/mobile/food.jpg",
    "assets/images/mobile/dessert.jpg",
    "assets/images/mobile/drinks.jpg",
    "assets/images/mobile/lodging.jpg",
    "assets/images/mobile/navigation.jpg",
    "assets/images/mobile/shopping.jpg",
    "assets/images/mobile/siteseeing.jpg",
    "assets/images/mobile/museums.jpg",
    "assets/images/mobile/activities.jpg"
];

//Slideshow alt and title list
var imgAltList = [
    "Visit NYC",
    "Eat Tasty Food",
    "Enjoy Unique Desserts",
    "Drink Amazing Beverages",
    "Sleep Comfortably",
    "Navigate Your Adventure",
    "Shop Endlessly",
    "See National Landmarks",
    "Visit Famous Museums",
    "Enjoy Exciting Activities"
];

//Slideshow reference and href list
var imgRefList = [
    "https://www.pexels.com/photo/new-york-time-square-29732/",
    "https://www.pexels.com/photo/food-chicken-meat-outdoors-8572/",
    "https://www.pexels.com/photo/french-macarons-on-brown-wooden-table-47374/",
    "https://static.pexels.com/photos/162480/glasses-ice-cubes-illuminated-drink-162480.jpeg",
    "https://www.pexels.com/photo/white-bedding-cover-beside-brown-wooden-side-table-189293/",
    "https://www.pexels.com/photo/cars-traffic-street-new-york-1982/",
    "https://www.pexels.com/photo/adult-beautiful-elegant-eyewear-291762/",
    "https://www.pexels.com/photo/statue-of-liberty-during-daytime-25781/",
    "https://www.pexels.com/photo/person-woman-art-creative-522/",
    "https://www.pexels.com/photo/2-women-walking-in-the-carnival-during-daytime-160097/"
];

//Slideshow reference and href list
var imgAnchList = [
    "index.html",
    "food.html",
    "dessert.html",
    "drinks.html",
    "lodging.html",
    "navigation.html",
    "shopping.html",
    "siteseeing.html",
    "museums.html",
    "activities"
];


var allImgs = [];
var allTitles = [];
var allRefs = [];
var allAnch = [];

var currentImg = 0;
var numImgs = 10;

// When the page loads create the slideshow
window.onload = function () {
    // load the mobile menu
    loadMenu();
    //Clear the image placeholder that is there if javascript doesnt load
    document.getElementById("slideshow").innerHTML = "";

    //Load all the images first
    for (var i = 0; i < imgSrcList.length; i++) {

        //Create image
        var tempImg = document.createElement("img");
        //If desktop
        if (window.innerWidth > 800) {
            tempImg.setAttribute('src', imgSrcList[i]);
        }
        //mobile
        else{
            tempImg.setAttribute('src', imgMobileSrcList[i]);
        }
        tempImg.setAttribute('alt', imgAltList[i]);
        //tempImg.setAttribute("style", "opacity: 0;");
        allImgs[i] = tempImg;

        //Create title with anchor
        var tempTitle = document.createElement("h1");
        //tempTitle.setAttribute("style", "opacity: 0;");
        tempTitle.innerHTML = imgAltList[i];
        allTitles[i] = tempTitle;
        var tempAT = document.createElement("a");
        tempAT.setAttribute('href', imgAnchList[i]);
        tempAT.appendChild(allTitles[i]);
        allTitles[i] = tempAT;

        //Create reference
        var tempRef = document.createElement("h4");
        //tempRef.setAttribute("style", "opacity: 0;");
        tempRef.innerHTML = imgRefList[i];
        allRefs[i] = tempRef;

        //Put anchors around images
        var tempA = document.createElement("a");
        tempA.setAttribute('href', imgAnchList[i]);
        tempA.appendChild(allImgs[i]);
        allAnch[i] = tempA;
    }

    // Display the first slide
    document.getElementById("slideshow").appendChild(allAnch[currentImg]);
    document.getElementById("slideshow").appendChild(allTitles[currentImg]);
    document.getElementById("slideshow").appendChild(allRefs[currentImg]);
    allAnch[currentImg].childNodes[0].style.opacity = ".5";
    allAnch[currentImg].childNodes[0].filter = 'alpha(opacity=50)';
    allTitles[currentImg].style.opacity = "1";
    allImgs[currentImg].filter = 'alpha(opacity=100)';
    allRefs[currentImg].style.opacity = "1";
    allRefs[currentImg].filter = 'alpha(opacity=100)';
    currentImg++;
    if (currentImg == numImgs) {
        currentImg = 0;
    }

}

//Every three seconds switch the slide
setInterval(function () {
    document.getElementById("slideshow").innerHTML = "";
    document.getElementById("slideshow").appendChild(allAnch[currentImg]);
    document.getElementById("slideshow").appendChild(allTitles[currentImg]);
    document.getElementById("slideshow").appendChild(allRefs[currentImg]);
    allAnch[currentImg].childNodes[0].style.opacity = ".5";
    allAnch[currentImg].childNodes[0].filter = 'alpha(opacity=50)';
    allTitles[currentImg].style.opacity = "1";
    allTitles[currentImg].filter = 'alpha(opacity=100)';
    allRefs[currentImg].style.opacity = "1";
    allRefs[currentImg].filter = 'alpha(opacity=100)';
    currentImg++;
    if (currentImg == numImgs) {
        currentImg = 0;
    }
}, 2000);