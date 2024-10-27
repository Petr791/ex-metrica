const form = document.getElementById('form');
const formBtn = document.getElementById('form-btn');

formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    //console.log('Клик!');
    alert('Форма отправлена!');
    form.reset();
});


/* document.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма отправлена!')
}) */