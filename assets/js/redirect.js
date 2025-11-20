document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        var targetElement = document.getElementById(window.location.hash.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }

        var newPath = window.location.pathname;
        var newURL = window.location.origin + newPath;
        window.history.replaceState({}, document.title, newURL);
    }

    if (window.location.pathname.endsWith(".html")) {
        var newPath = window.location.pathname.replace(/\.html$/, '');
        var newURL = window.location.origin + newPath;
        window.history.replaceState({}, document.title, newURL);
    }

    var pathsToRemove = ["index"];
    pathsToRemove.forEach(function (pathToRemove) {
        if (window.location.pathname.endsWith("/" + pathToRemove)) {
            var newPath = window.location.pathname.replace(/\/\b(?:index|cgv)\b/, "");
            var newURL = window.location.origin + newPath;
            window.history.replaceState({}, document.title, newURL);
        }
    });
});

window.addEventListener("hashchange", function () {
    if (window.location.pathname.endsWith(".html")) {
        var newPath = window.location.pathname.replace(/\.html$/, '');
        var newURL = window.location.origin + newPath;
        window.history.replaceState({}, document.title, newURL);
    }

    var pathsToRemove = ["index"];
    pathsToRemove.forEach(function (pathToRemove) {
        if (window.location.pathname.endsWith("/" + pathToRemove)) {
            var newPath = window.location.pathname.replace(/\/\b(?:index|cgv)\b/, "");
            var newURL = window.location.origin + newPath;
            window.history.replaceState({}, document.title, newURL);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        var targetId = this.getAttribute('href').substring(1);
        
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });