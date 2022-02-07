const menu = document.querySelector ('#mobile-menu')
const menuLinks = document.querySelector ('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

// CONTACT FORM 

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      status.classList.add("success");
      status.innerHTML = "Thanks! Email submitted";
      form.reset ()
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oh no! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
});


// helper function for sending an AJAX request  
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
  
// DARK/ LIGHT THEME TOGGLE 

document.getElementById('checkbox').addEventListener('change', function(event){
  (event.target.checked) ? document.body.setAttribute('data-theme', 'light') : document.body.removeAttribute('data-theme');
});

// REMEMBER THEME

var themeSwitch = document.getElementById('checkbox');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    var lightThemeSelected = (localStorage.getItem('checkbox') !== null && localStorage.getItem('checkbox') === 'light');
    // update checkbox
    themeSwitch.checked = lightThemeSelected;
    // update body data-theme attribute
    lightThemeSelected ? document.body.setAttribute('data-theme', 'light') : document.body.removeAttribute('data-theme');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('checkbox', 'light'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('checkbox'); // reset theme selection 
    } 
  };
}