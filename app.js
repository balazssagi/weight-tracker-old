var ENDPOINT = 'https://weight-tracker-api.herokuapp.com/weight'

var form = document.querySelector('.js-weight-form')
var input = document.querySelector('.js-weight-input')
var auth = document.querySelector('.js-auth')
var message = document.querySelector('.js-message')

auth.addEventListener('blur', function() {
    localStorage.setItem('secret', this.value)
})


function onSubmit(e) {
    e.preventDefault();
    
    axios({
        method: 'post',
        url: ENDPOINT,
        data: {
            weight: input.value,
            secret: localStorage.getItem('secret')
        }
    })
    .then(function(res) {
        message.textContent = res.data
    })
}

form.addEventListener('submit', onSubmit)