function logout() {
    window.location.href = "manager_login.html";
}
function logout() {
    
    alert("Logout button clicked. Redirecting to managerlogin.html.");
}

function onScroll() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll(".section");

    sections.forEach(function (section) {
        var top = section.offsetTop - document.querySelector("header").offsetHeight;
        var bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            var id = section.getAttribute("id");
            document.querySelector("nav ul li a.active").classList.remove("active");
            document.querySelector("nav ul li a[href='#" + id + "']").classList.add("active");
        }
    });
}
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
  const progress = progressBar.getAttribute('data-progress');
  const progressCircle = progressBar.querySelector('circle');
  const progressText = progressBar.querySelector('.progress-text');

  progressBar.addEventListener('mouseover', () => {
    progressCircle.style.strokeDasharray = `calc(${progress} * 1.25), 125`;
    progressText.textContent = `${progress}%`;
  });

  progressBar.addEventListener('mouseout', () => {
    progressCircle.style.strokeDasharray = `0, 125`;
    progressText.textContent = `0%`;
  });
});

function handleYearSelection() {
    const yearSelect = document.getElementById('year-select');
    const selectedYear = yearSelect.value;
  
    console.log('Selected year:', selectedYear);
}


const yearSelect = document.getElementById('year-select');
yearSelect.addEventListener('change', handleYearSelection);

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();  
  
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const photoUrl = document.getElementById('photo').value;
  
    
    console.log('Updated Profile:');
    console.log('Name: ' + name);
    console.log('Phone: ' + phone);
    console.log('Email: ' + email);
    console.log('Photo URL: ' + photoUrl);
  });
  