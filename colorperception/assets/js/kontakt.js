//tutorial credit: https://www.youtube.com/watch?v=eg4e-FObyJ8

$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('Klikket knap')

        let email = $('.email').val()
        let subject = $('.subject').val()
        let message = $('.message').val()
        let statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('.') && email.includes('@')) {
            console.log('<div>E-mail er udfyldt korrekt</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div> E-mail er ikke udfyldt korrekt</div>')
        }

        if (subject.length >= 2) {
            console.log('<div>Emne er udfyldt korret </div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Emnet skal indeholde minimum 2 tegn</div>')
        }

        if (message.length >= 5) {
            console.log('<div>Beskeden er lang nok</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Beskeden er ikke lang nok, skriv minimum 5 tegn</div>')
        }

    })
})