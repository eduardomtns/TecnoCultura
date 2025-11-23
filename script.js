// Navegação entre telas
function showScreen(screenId) {
    // Esconder todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Mostrar a tela selecionada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Atualizar link ativo na navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${screenId}`) {
            link.classList.add('active');
        }
    });
    
    // Fechar menu mobile se estiver aberto
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navegação por links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showScreen(targetId);
    });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Função para iniciar trilha
function startTrilha(trilhaId) {
    const trilhas = {
        1: {
            nome: 'Trilha Quilombola - Memórias Ancestrais',
            descricao: 'Você está prestes a iniciar uma jornada única pela história e cultura quilombola. Use a câmera do seu celular para explorar elementos em Realidade Aumentada!'
        },
        2: {
            nome: 'Trilha Indígena - Saberes da Floresta',
            descricao: 'Explore os conhecimentos ancestrais dos povos indígenas sobre medicina tradicional e sustentabilidade. Ative a câmera para ver elementos 3D!'
        },
        3: {
            nome: 'Trilha Ribeirinha - Águas e Memórias',
            descricao: 'Descubra a relação entre comunidades ribeirinhas e o meio ambiente. Use a geolocalização para encontrar pontos de interesse!'
        },
        4: {
            nome: 'Trilha Urbana - Periferia Criativa',
            descricao: 'Conheça a riqueza cultural das periferias urbanas através de arte, música e iniciativas sustentáveis. Explore com AR!'
        }
    };
    
    const trilha = trilhas[trilhaId];
    if (trilha) {
        showGameModal(trilha.nome, trilha.descricao, 'trilha');
    }
}

// Função para iniciar jogo
function startGame(gameType) {
    const jogos = {
        'rio': {
            nome: 'Limpeza Virtual do Rio',
            descricao: 'Use a Realidade Aumentada para limpar virtualmente o rio. Toque nos itens de lixo para removê-los e aprender sobre os impactos ambientais.',
            instrucoes: [
                '1. Ative a câmera do seu celular',
                '2. Aponte para uma superfície plana',
                '3. Toque nos itens de lixo que aparecerem',
                '4. Complete os desafios e ganhe pontos!'
            ]
        },
        'refloresta': {
            nome: 'Refloresta AR',
            descricao: 'Plante árvores virtuais e veja o impacto positivo no ambiente. Cada árvore plantada contribui para a regeneração do ecossistema.',
            instrucoes: [
                '1. Escaneie o ambiente com a câmera',
                '2. Toque na tela para plantar árvores',
                '3. Observe como o ambiente se transforma',
                '4. Complete a floresta virtual!'
            ]
        },
        'reciclagem': {
            nome: 'Reciclagem Master',
            descricao: 'Teste seus conhecimentos sobre reciclagem! Separe corretamente os resíduos nas lixeiras apropriadas.',
            instrucoes: [
                '1. Observe os itens que aparecem',
                '2. Arraste cada item para a lixeira correta',
                '3. Ganhe pontos por cada acerto',
                '4. Complete todos os níveis!'
            ]
        },
        'memoria': {
            nome: 'Memória Cultural',
            descricao: 'Combine elementos culturais e aprenda sobre tradições ancestrais. Um jogo de memória com propósito educativo.',
            instrucoes: [
                '1. Encontre os pares de elementos culturais',
                '2. Cada par revela uma história',
                '3. Complete o jogo para desbloquear conteúdo',
                '4. Aprenda enquanto se diverte!'
            ]
        },
        'biodiversidade': {
            nome: 'Biodiversidade Quest',
            descricao: 'Explore espécies nativas e seus habitats através de uma aventura gamificada. Use AR para ver animais em seu ambiente natural.',
            instrucoes: [
                '1. Explore diferentes biomas',
                '2. Use AR para ver espécies em 3D',
                '3. Responda perguntas sobre biodiversidade',
                '4. Complete a missão de preservação!'
            ]
        }
    };
    
    const jogo = jogos[gameType];
    if (jogo) {
        showGameModal(jogo.nome, jogo.descricao, 'jogo', jogo.instrucoes);
    }
}

// Modal de jogo/trilha
function showGameModal(titulo, descricao, tipo, instrucoes = []) {
    const modal = document.getElementById('gameModal');
    const gameContent = document.getElementById('gameContent');
    
    let content = `
        <h2 style="margin-bottom: 1rem; color: var(--text-dark);">${titulo}</h2>
        <p style="color: var(--text-light); margin-bottom: 1.5rem; line-height: 1.6;">${descricao}</p>
    `;
    
    if (instrucoes.length > 0) {
        content += `
            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">📋 Instruções:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${instrucoes.map(inst => `<li style="margin-bottom: 0.5rem; color: var(--text-dark);">${inst}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (tipo === 'trilha') {
        content += `
            <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 8px; color: white; margin-bottom: 1.5rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📱</div>
                <p style="font-size: 1.1rem; margin-bottom: 1rem;">Ative a câmera para começar a explorar!</p>
                <p style="opacity: 0.9;">Use a Realidade Aumentada para visualizar elementos culturais em 3D</p>
            </div>
        `;
    } else {
        content += `
            <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 8px; color: white; margin-bottom: 1.5rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎮</div>
                <p style="font-size: 1.1rem; margin-bottom: 1rem;">Pronto para jogar!</p>
                <p style="opacity: 0.9;">Use a câmera e interaja com os elementos na tela</p>
            </div>
        `;
    }
    
    content += `
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" onclick="closeModal()" style="min-width: 150px;">
                🚀 Começar
            </button>
            <button class="btn btn-secondary" onclick="closeModal()" style="min-width: 150px;">
                Fechar
            </button>
        </div>
    `;
    
    gameContent.innerHTML = content;
    modal.classList.add('active');
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora
const modal = document.getElementById('gameModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Fechar modal com botão X
const closeBtn = document.querySelector('.close-modal');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito parallax suave no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const arPreview = document.querySelector('.ar-preview');
    if (arPreview) {
        arPreview.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Adicionar efeito de hover nos cards de trilha
document.querySelectorAll('.trilha-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Simulação de interação com lixo no jogo do rio
document.querySelectorAll('.trash-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.opacity = '0';
        this.style.transform = 'scale(0)';
        setTimeout(() => {
            this.remove();
        }, 300);
        
        // Feedback visual
        showNotification('Item removido! +10 pontos', 'success');
    });
});

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : 'var(--primary-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Adicionar animação CSS para notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Garantir que a tela inicial está visível
    showScreen('home');
    
    // Adicionar efeitos de entrada nas seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease';
            }
        });
    }, observerOptions);
    
    // Observar cards e seções
    document.querySelectorAll('.feature-card, .trilha-card, .jogo-mini-card, .criador-card').forEach(el => {
        observer.observe(el);
    });
    
    // Adicionar animação fadeInUp
    const fadeInUpStyle = document.createElement('style');
    fadeInUpStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(fadeInUpStyle);
});

// Adicionar funcionalidade de busca (simulação)
function searchTrilhas(query) {
    const trilhas = document.querySelectorAll('.trilha-card');
    trilhas.forEach(trilha => {
        const text = trilha.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            trilha.style.display = 'block';
        } else {
            trilha.style.display = 'none';
        }
    });
}

// Console log para debug
console.log('🎮 TecnoCultura - Plataforma carregada com sucesso!');
console.log('📱 Use a navegação para explorar as diferentes seções');

