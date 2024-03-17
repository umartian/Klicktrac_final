const scriptURL = 'https://script.google.com/macros/s/AKfycbw5XeiTbRdO0TTiK8wvvHwiWJjmU1OG0niDIHUrkwo0SrLpZTbA-BNqoPWFMklCkHGD/exec';

document.getElementById('submit-to-google-sheet').addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    fetch(scriptURL, { method: 'POST', body: JSON.stringify(data), headers: new Headers({'Content-Type': 'application/json'}) })
        .then(response => window.location.href = 'thank-you.html')
        .catch(error => console.error('Error!', error.message));
});
