// Builds the contact email links in the browser so the address never appears
// as plain text in the HTML, where spam bots harvest it.
// Markup: <a class="js-email" data-e="REVERSED_ADDRESS_WITH_#_FOR_@">fallback text</a>
document.querySelectorAll('a.js-email').forEach(function (a) {
  var email = a.getAttribute('data-e').split('').reverse().join('').replace('#', '@');
  a.href = 'mailto:' + email;
  a.textContent = email;
});
