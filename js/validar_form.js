document.addEventListener('DOMContentLoaded', function() {
    function enviarFormulario(form, formspreeURL) {
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch(formspreeURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    }

    const contatoForm = document.getElementById('contatoForm');
    if (contatoForm) {
        const formspreeURLContato = 'https://formspree.io/f/xvgoapey';
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            enviarFormulario(contatoForm, formspreeURLContato);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar estado de carregamento
            formStatus.textContent = 'Enviando mensagem...';
            formStatus.className = 'form-status';
            formStatus.style.display = 'block';
            
            // Coletar dados do formulário
            const formData = new FormData(contactForm);
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            
            // Enviar para o Formspree
            fetch(contactForm.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(response => {
                if (response.ok) {
                    // Sucesso
                    formStatus.textContent = 'Mensagem enviada com sucesso!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    // Erro
                    throw new Error('Erro na resposta da rede');
                }
            })
            .catch(error => {
                // Falha
                formStatus.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
                formStatus.className = 'form-status error';
                console.error('Error:', error);
            });
        });
    }
});