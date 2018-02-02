var ENDPOINT = 'https://weight-tracker-api.herokuapp.com/weight'

var form = document.querySelector('.js-weight-form')
var input = document.querySelector('.js-weight-input')
var auth = document.querySelector('.js-auth')

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
        console.log(res.data)
    })
}

form.addEventListener('submit', onSubmit)