 //////////////////////////////////////////////////////////
 /////////////////HOME Page///////////////////////////////
 /////////////////////////////////////////////////////////
 
 //////////////// Reusable Hamburger Menu Navigation Bar function 
 document.querySelector('.menu-toggle').addEventListener('click', function () {
     const navLinks = document.querySelector('.nav-links');
     navLinks.classList.toggle('active');

     // Toggle between hamburger and close icons
     const barsIcon = document.querySelector('.menu-toggle i.fa-bars');
     const timesIcon = document.querySelector('.menu-toggle i.fa-times');
     barsIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
     timesIcon.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
});


////////////Section 4 Count Up Funtionality
const achievements = document.querySelectorAll('.achievement[data-target]');

function animateNumbers() {
     achievements.forEach((achievement) => {
          const target = parseFloat(achievement.getAttribute(
          'data-target')); // Parse the target value as float
          const duration = 2000; // Animation duration in milliseconds
          const increment = target / 100; // Increment value for smooth animation

          let currentCount = 0;
          const updateCount = () => {
               const formattedNumber = currentCount >= 1000 ?
                    `${(currentCount / 1000).toFixed(1)}k` : Math.floor(currentCount);
               achievement.querySelector('h2').textContent = formattedNumber;

               if (currentCount < target) {
                    currentCount += increment;
                    requestAnimationFrame(updateCount);
               } else {
                    achievement.querySelector('h2').textContent = target >= 1000 ?
                         `${(target / 1000).toFixed(1)}k` : target;
               }
          };

          updateCount();
     });
}

function isAchievementInView(element) {
     const rect = element.getBoundingClientRect();
     return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

function handleScroll() {
     achievements.forEach((achievement) => {
          if (isAchievementInView(achievement)) {
               animateNumbers();
               window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
          }
     });
}
window.addEventListener('scroll', handleScroll);
handleScroll();




////////////////Section 5 See All Work Button function
document.addEventListener('DOMContentLoaded', function () {
     const seeAllWorkBtn = document.querySelector('.btn-see-all-work');
     const extraProjects = document.querySelectorAll('.extra-project');

     seeAllWorkBtn.addEventListener('click', function (event) {
          event.preventDefault();
          extraProjects.forEach(project => {
               if (window.getComputedStyle(project).display === 'none') {
                    project.style.display = 'block';
               } else {
                    project.style.display = 'none';
               }
          });
     });

});
