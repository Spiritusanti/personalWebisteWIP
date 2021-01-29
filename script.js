const menuBars = document.getElementById('menu-wrapper');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const navItems = [nav1, nav2, nav3, nav4];

// control navigation animation
function navAnimation(dir1, dir2) {
    navItems.forEach((navItem, i)=> {
        navItem.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`);
    })
}


// toggleNav function
function toggleNav() {
    // Toggle: Menu bars open/closed
    menuBars.classList.toggle('change');
    // Toggle: menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // animate in - overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // animate in - Nav Items
        navAnimation('out', 'in')
    } else {
        // animate out overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // animate out
        navAnimation('in', 'out')
    }
}


// event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((navitem) => {
    navitem.addEventListener('click', toggleNav);
});