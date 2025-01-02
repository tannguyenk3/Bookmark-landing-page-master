// JavaScript for open and close menu, changing color logo, undisable 2 social media icon
const openMenu = document.querySelector('.open_nav');
const closeMenu = document.querySelector('.close_nav');
const mobileMenu = document.querySelector('.mobile_nav_list');
const logo = document.querySelector('.logo');
const bgColor = document.querySelector('.bgColor');
const iconColor = document.querySelector('.iconColor');
const titleColor = document.querySelector('.titleColor');
const socialMedia = document.querySelector('.social_media');
const bodyElement = document.querySelector('body')

openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    closeMenu.classList.remove('hidden');
    openMenu.classList.add('hidden');
    socialMedia.classList.remove('hidden');

    // Disable scrolling
    bodyElement.style.overflow = 'hidden';

    bgColor.style.fill = 'white';
    iconColor.style.fill = 'rgb(37 43 70 / 95%)';
    titleColor.style.fill = 'white';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    closeMenu.classList.add('hidden');
    openMenu.classList.remove('hidden');
    socialMedia.classList.add('hidden');

    //Enable scrolling
    bodyElement.style.overflow = 'scroll';

    bgColor.style.fill = '#5267DF';
    iconColor.style.fill = 'white';
    titleColor.style.fill = 'rgb(37 43 70 / 95%)';
});


// JavaScript for changing content and image

const bookTypes = document.querySelector('.book_types');
const image = document.querySelector('.image');
const titleElement = document.querySelector('.title');
const textElement = document.querySelector('.text');
const btnInfo = document.querySelector('.btn-info');

const contentArray = [
    {
        imagePath: '../images/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        imagePath: '../images/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        imagePath: '../images/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },
];

bookTypes.addEventListener('click', (event) => {
  const target = event.target;
  const index = target.getAttribute('data-index');

  for (tab of bookTypes.children) {
    tab.classList.remove('active');
  }

  target.classList.add('active');

  
  
  if (index !== null) {
        // Add fadeOut animation class
    image.classList.add('face-out');
    titleElement.classList.add('face-out');
    textElement.classList.add('face-out');
    btnInfo.classList.add('face-out');

    // Wait for the animation to complete
    setTimeout(() => {
      // Update content
      const content = contentArray[index];
      image.src = content.imagePath;
      titleElement.textContent = content.title;
      textElement.textContent = content.text;

      // Remove fadeOut animation class
      image.classList.remove('face-out');
      titleElement.classList.remove('face-out');
      textElement.classList.remove('face-out');
      btnInfo.classList.remove('face-out');
    }, 1000); // Duration of the fadeOut animation
  }
    
});

//Javacript for FAQ list

document.addEventListener("DOMContentLoaded", () => {
  const faqLists = document.querySelectorAll(".faq_list");

  faqLists.forEach((faq) => {
    const summary = faq.querySelector(".summary");
    const arrowIcon = faq.querySelector(".arrowIcon");
    const arrowColor = faq.querySelector(".arrowColor");

    summary.addEventListener("click", () => {
      // Toggle the active class on the FAQ item
      faq.classList.toggle("active");

      // Toggle the visibility of the text explanation
      if (faq.classList.contains("active")) {
        arrowColor.style.stroke = "hsl(0, 94%, 66%)";
        arrowIcon.style.transform = "rotate(180deg)";
      } else {
        arrowColor.style.stroke = "#5267DF";
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });
  });
});

// JavaScript for email validation
const emailInput = document.querySelector('input[type="email"]');
const textError = document.querySelector('.error_text');
const button = document.querySelector('#button');
const errorImg = document.querySelector('.error_img');

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

button.addEventListener('click', (event) => {
  
  const isValidEmail = validateEmail(emailInput.value);

  if(!isValidEmail) {
    emailInput.classList.add('error_active');
    textError.style.display = 'block';
    errorImg.classList.remove('hidden');
    event.preventDefault();
  } else {
    emailInput.classList.remove('error_active');
    textError.style.display = 'none';
    textError.textContent = '';
    errorImg.classList.add('hidden');
    window.location.reload();
  }
})

// Add an event listener to the email input for the "Enter" key
emailInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    button.click();
  }
});

