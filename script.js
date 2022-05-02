// alert('HI')

const navbar = document.querySelector('.navbar');
const mobileMenuBtnOpen = document.querySelector('.mobile-menu-btn');
const mobileMenuBtnClose = document.querySelector('.close-menu-btn');

const featuresBtn = document.getElementById('featuresBtn');
const dropdownContentFeatures = document.querySelector('.dropdown-content.features');
const companyBtn = document.getElementById('companyBtn');
const dropdownContentCompany = document.querySelector('.dropdown-content.company');

const overlay = document.getElementById('overlay')


mobileMenuBtnOpen.addEventListener("click", (e) => {
    overlay.style.display = "block";
});

//Open mobile navigation menu 
mobileMenuBtnOpen.addEventListener("click", (e) => {
    console.log('Clicked');
    navbar.style.display = "block";

});

//Close mobile navigation menu
mobileMenuBtnClose.addEventListener("click", (e) => {
    navbar.style.display = "none";
});

//Click to open/close features dropdown
featuresBtn.addEventListener("click", (e) => {
        console.log('Clicked');
        if (dropdownContentFeatures.style.display === "none") {
            dropdownContentFeatures.style.display = "block";

        } else {
            dropdownContentFeatures.style.display = "none";
        }


    })
    //Click to open/close company dropdown
companyBtn.addEventListener("click", (e) => {
    console.log('Clicked');
    if (dropdownContentCompany.style.display === "none") {
        dropdownContentCompany.style.display = "block";
    } else {
        dropdownContentCompany.style.display = "none";
    }
})