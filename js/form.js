const scriptURL = 'https://script.google.com/macros/s/AKfycbwgJEJ0HQAP94qG97idvZYgf97AJ0F1N4DMKKHbHI1zjJNs6UfcQhgP3ENgpAY_mpRe/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })