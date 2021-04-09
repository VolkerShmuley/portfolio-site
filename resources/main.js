
function darkModeToggle() {
    var bodyTag = document.getElementById('page-body');
    if (bodyTag.className === 'light-mode-text light-mode-bg') {
        bodyTag.className = '';
        document.querySelector('.nav-menu').className = 'nav-menu';
        document.querySelector('.btn--secondary').className = 'btn--secondary';
        document.getElementById('dark-mode').style.visibility = 'hidden';
        document.getElementById('light-mode').style.visibility = 'visible';
        
    } else {
        bodyTag.className = 'light-mode-text light-mode-bg';
        document.querySelector('.nav-menu').className = 'nav-menu light-mode-text';
        document.querySelector('.btn--secondary').className = 'btn--secondary btn--dark';
        document.getElementById('dark-mode').style.visibility = 'visible';
        document.getElementById('light-mode').style.visibility = 'hidden';
    }


}

var modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('click', darkModeToggle);