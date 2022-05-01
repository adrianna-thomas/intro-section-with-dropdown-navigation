// alert('HI')

const button = document.querySelectorAll('.dropdown-btn');

const mobileMenuBtnOpen = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');


const mobileMenuBtnClose = document.querySelector('.close-menu-btn')

const featuresBtn = document.getElementById('featuresBtn')
const dropdownContentFeatures = document.querySelector('.dropdown-content.features')
const companyBtn = document.getElementById('companyBtn');
const dropdownContentCompany = document.querySelector('.dropdown-content.company')

const dropdownContent = document.querySelectorAll('.dropdown-content')

//Open mobile navigation menu
mobileMenuBtnOpen.addEventListener("click", (e) => {
    console.log('Clicked');
    navbar.style.display = "block";
});

//Close mobile navigation menu
mobileMenuBtnClose.addEventListener("click", (e) => {
    navbar.style.display = "none";
});

//Click to open features dropdown
featuresBtn.addEventListener("click", (e) => {
        console.log('Clicked');
        if (dropdownContentFeatures.style.display === "none") {
            dropdownContentFeatures.style.display = "block";

        } else {
            dropdownContentFeatures.style.display = "none";
        }


    })
    //Click to open company dropdown
companyBtn.addEventListener("click", (e) => {
    console.log('Clicked');
    dropdownContentCompany.style.display = "block";
})