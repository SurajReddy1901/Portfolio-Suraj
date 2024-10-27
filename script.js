// About Section scripts...
var tl = document.getElementsByClassName("tab-links");
var tc = document.getElementsByClassName("tab-contents");

function openabout(tab_name) {
    for (t of tl) {
        t.classList.remove("active-link");
    }
    for (c of tc) {
        c.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}

// Hamburger..



