
function darkModeToggle() {
    var bodyTag = document.getElementById('page-body');
    if (bodyTag.className === 'light-mode-text light-mode-bg') {
        bodyTag.className = '';
        document.querySelector('.nav-menu').className = 'nav-menu';
        document.getElementById('dark-mode').style.visibility = 'hidden';
        document.getElementById('light-mode').style.visibility = 'visible';
        
        var myWorkParagraphs = document.querySelectorAll('.mywork__p');
        myWorkParagraphs.forEach(function(item) {
            item.style.color = 'white';
        });

        var inlineCodeTabs = document.querySelectorAll('.inline-code');
        inlineCodeTabs.forEach(item => {
            item.className = 'inline-code';
        });

        if (document.location.href.indexOf('contact.html') > -1) {
            document.querySelector('.logo__link').style.color = 'white';
        } else {
            document.querySelector('.btn--secondary').className = 'btn--secondary';
        }
        
    } else {
        bodyTag.className = 'light-mode-text light-mode-bg';
        document.querySelector('.nav-menu').className = 'nav-menu light-mode-text';
        document.getElementById('dark-mode').style.visibility = 'visible';
        document.getElementById('light-mode').style.visibility = 'hidden';
    
        var myWorkParagraphs = document.querySelectorAll('.mywork__p');
        myWorkParagraphs.forEach(function(item) {
            item.style.color = '#282C34';
        });

        var inlineCodeTabs = document.querySelectorAll('.inline-code');
        inlineCodeTabs.forEach(item => {
            item.className += ' inline-code--dark';
        });
        
        if (document.location.href.indexOf('contact.html') > -1) {
            document.querySelector('.logo__link').style.color = '#282C34';
        } else {
            document.querySelector('.btn--secondary').className = 'btn--secondary btn--dark';
        }
    }


}

var modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('click', darkModeToggle);