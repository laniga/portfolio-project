let viewButton = document.getElementById('web-manager-heading');
let viewInfo = document.getElementById("web-manager");

let isClicked = true;

let showOrHide = function() {
    if (isClicked) {
        viewInfo.style.display = 'block';
        viewButton.innerHTML = 'Web Content Manager (click to hide info)';
        isClicked = false;
    } else {
        viewInfo.style.display = 'none';
        viewButton.innerHTML = 'Web Content Manager (click to show info)';
        isClicked = true;
    }
}

viewButton.onclick = showOrHide;


let viewHeading = document.getElementById('achievements-heading');
let achievementsInfo = document.getElementById('achievements');

let isActive = true;

let displayOrHide = function() {
    if (isActive) {
        achievementsInfo.style.display = 'block';
        viewHeading.innerHTML = 'Achievements (click to hide info)';
        isActive = false;
    } else {
        achievementsInfo.style.display = 'none';
        viewHeading.innerHTML = 'Achievements (click to show info)';
        isActive = true;
    }
}

viewHeading.onclick = displayOrHide;