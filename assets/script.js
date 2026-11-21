// Enquiry form: there is no server. On submit, the form opens the visitor's
// email app with a pre-filled message to Jawad. Nothing is stored or sent
// anywhere by this page.
(function () {
  'use strict';
  var form = document.getElementById('enquiry');
  if (!form) return;
  var error = document.getElementById('form-error');
  var TO = 'tzawad6@gmail.com';
  var MAX = { name: 80, phone: 20, message: 1000 };

  function clean(value, max) {
    // Trim, drop control characters (except newlines in the message), cap length.
    return String(value || '')
      .replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, '')
      .trim()
      .slice(0, max);
  }

  function showError(text) {
    error.textContent = text; // textContent, never innerHTML
  }

  form.addEventListener('input', function () { showError(''); });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = clean(form.elements.name.value, MAX.name).replace(/\n/g, ' ');
    var phone = clean(form.elements.phone.value, MAX.phone).replace(/\n/g, ' ');
    var grade = clean(form.elements.grade.value, 20);
    var interestEl = form.querySelector('input[name="interest"]:checked');
    var interest = interestEl ? clean(interestEl.value, 30) : '';
    var message = clean(form.elements.message.value, MAX.message);

    if (!name) { showError("Enter the student's name."); form.elements.name.focus(); return; }
    if (!/^\+?[0-9 \-]{10,16}$/.test(phone)) {
      showError('Enter a valid phone number, for example 01712345678.');
      form.elements.phone.focus();
      return;
    }

    var subject = 'Tuition enquiry: ' + name + ' (' + grade + ')';
    var body = [
      'Student: ' + name,
      'Phone: ' + phone,
      'Class: ' + grade,
      'Interested in: ' + interest,
      '',
      message
    ].join('\n');

    window.location.href = 'mailto:' + TO +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
})();
