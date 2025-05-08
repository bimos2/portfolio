document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Efeito de digitação
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: ['Desenvolvedora', 'Designer', 'Programadora', 'Estudante de TI'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Cursor personalizado
    const cursor = document.querySelector('.custom-cursor');
    if (window.matchMedia("(pointer: fine)").matches) {
        cursor.style.display = 'block';
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Efeito hover no cursor
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.opacity = '0.5';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.opacity = '1';
            });
        });
    }
    
    // Ativar links da navbar
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Animações ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
});

// Adicione isso ao seu arquivo script.js
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-section a');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Opcional: Adicionar tracking de download
            console.log('Currículo baixado');
            
            // Se quiser adicionar um pequeno atraso para rastreamento
            setTimeout(() => {
                // O download acontecerá normalmente por causa do atributo download
            }, 300);
        });
    }
});

// Adicione esta função ao seu script.js
function generateAndDownloadPDF() {
    const downloadBtn = document.querySelector('.download-section a');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Criar um novo PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Adicionar conteúdo ao PDF
        doc.setFontSize(22);
        doc.text('Beatriz Candido de Matos', 20, 20);
        doc.setFontSize(16);
        doc.text('Desenvolvedora Web', 20, 30);
        
        // Adicionar mais informações do currículo...
        
        // Salvar o PDF
        doc.save('Curriculo-Beatriz-Matos.pdf');
    });
}

// Chame a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', generateAndDownloadPDF);