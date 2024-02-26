/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) => {
        e.preventDefault()

        // serviceID - templaateID - #form - publickey
        emailjs.sendForm('service_r2zx9bc','template_e4635e2','#contact-form','AJ2CIYu2GqPOc64aC')
        .then(() =>{
            // show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // remove message after five seconds

            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

        // clear input fields

        contactForm.reset()
        }, () => {
            // show error message
            contactMessage.textContent = 'Message not sent ❌'
        })
      }

      contactForm.addEventListener('submit', sendEmail)