function loadMenu() {
    // Set mobile menu equal to desktop menu
    var menuHTML = document.getElementById("nav-desktop").innerHTML;
    document.getElementById("nav-mobile").innerHTML += menuHTML;

    // Add an event listener to the hamburger menu
    document.getElementById("nav-trigger").getElementsByTagName("img")[0].addEventListener("click", function () {
        var menu = document.getElementById("nav-mobile").getElementsByTagName("ul")[0];
        // If its open, close it
        if (menu.classList.contains("expanded")) {
            menu.classList.remove("expanded");
            menu.parentElement.style.height = "auto";
            document.body.style.overflow = "auto";
        }
        // If its closed, open it
        else {
            menu.className += " expanded";
            menu.parentElement.style.height = "100vh";
            document.body.style.overflow = "hidden";
        }
    });

    // Add an open/close arrow to menu items with children
    var menuItems = document.getElementById("nav-mobile").getElementsByTagName("ul")[0].getElementsByTagName("li");
    // For each menu item, check if it has a child list
    for (var i = 0; i < menuItems.length; i++) {
        var menuUl = menuItems[i].getElementsByTagName("ul");
        if (menuUl.length > 0) {
            var myDiv = document.createElement("div");
            myDiv.setAttribute("class", "after");
            menuItems[i].appendChild(myDiv);
            if (menuItems[i].classList.contains("currentParent")) {
                menuItems[i].className += " open";
            }
            // If the arrow is clicked, flip the state
            myDiv.addEventListener("click", function(e) {
                // If the menu is open, close it
                if (this.parentElement.classList.contains("open")) {
                    this.parentElement.classList.remove("open");
                    this.parentElement.className += " close";
                }
                // If the menu is closed, open it
                else {
                    // close all menus
                    var menuItems = document.getElementById("nav-mobile").getElementsByTagName("ul")[0].getElementsByTagName("li");
                    for (var i = 0; i < menuItems.length; i++) {
                        var menuUl = menuItems[i].getElementsByTagName("ul");
                        if (menuUl.length > 0) {
                            thisUl = menuUl[0];
                            thisUl.parentElement.classList.remove("open");
                            thisUl.parentElement.className += " close";
                        }
                    }
                    // open the current item
                    this.parentElement.className = "";
                    this.parentElement.className += " open";
                }
            });
        }
    }
}