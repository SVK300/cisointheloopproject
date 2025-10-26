/* ============================================
   CISOINTHELOOP.AI - PERSONA MODAL (v4.0 - AI-Infused Design)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('personaModal');
    const skipButton = document.getElementById('skipPersona');
    const personaCards = document.querySelectorAll('.persona-card');
    const root = document.documentElement;

    // 1. Check if persona is already selected (AI Persona Memory)
    let selectedPersona = localStorage.getItem('selectedPersona');
    if (selectedPersona) {
        // Skip modal if persona is set
        modal.classList.remove('visible');
        applyPersonaTheme(selectedPersona);
        updateCTAs(selectedPersona);
        return;
    }

    // 2. Show Modal after a short delay to allow page to load (Active Theory/AQuest feel)
    setTimeout(() => {
        modal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }, 1000);

    // 3. Apply Persona Theme Logic (Adaptive UI)
    function applyPersonaTheme(persona) {
        let primaryColor, secondaryColor;

        switch (persona) {
            case 'ciso':
                primaryColor = 'var(--ciso-cyan)';
                secondaryColor = 'var(--analyst-lime)';
                break;
            case 'analyst':
                primaryColor = 'var(--analyst-lime)';
                secondaryColor = 'var(--ciso-cyan)';
                break;
            case 'builder':
                primaryColor = 'var(--developer-pink)';
                secondaryColor = 'var(--developer-purple)';
                break;
            default:
                // Default CISO theme
                primaryColor = 'var(--ciso-cyan)';
                secondaryColor = 'var(--analyst-lime)';
        }

        // Apply theme variables globally
        root.style.setProperty('--color-primary', primaryColor);
        root.style.setProperty('--color-secondary', secondaryColor);
        
        localStorage.setItem('selectedPersona', persona);
    }

    // 4. Update CTA buttons based on persona
    function updateCTAs(persona) {
        const primaryCTA = document.getElementById('aiCapabilitiesCTA');
        const secondaryCTA = document.getElementById('joinBetaHero');
        
        if (!primaryCTA || !secondaryCTA) return;

        // Reset to default
        primaryCTA.href = '#ai-capabilities-section';
        secondaryCTA.href = '#';

        switch(persona) {
            case 'ciso':
                primaryCTA.textContent = 'View Governance Playbooks →';
                primaryCTA.href = 'marketplace.html?filter=governance';
                secondaryCTA.textContent = 'Request a Demo';
                secondaryCTA.href = '#contact';
                break;
            case 'analyst':
                primaryCTA.textContent = 'Explore Insights & Reports →';
                primaryCTA.href = 'insights.html';
                secondaryCTA.textContent = 'View Marketplace';
                secondaryCTA.href = 'marketplace.html';
                break;
            case 'builder':
                primaryCTA.textContent = 'Explore AgentOps Tools →';
                primaryCTA.href = 'marketplace.html?filter=agentops';
                secondaryCTA.textContent = 'Request Developer Access';
                secondaryCTA.href = '#developer-preview';
                break;
            default:
                // Default CISO theme
                primaryCTA.textContent = 'Explore AI Capabilities →';
                secondaryCTA.textContent = 'Join Beta →';
                break;
        }
    }

    // 5. Handle Persona Card Selection
    personaCards.forEach(card => {
        card.addEventListener('click', function() {
            const selectedPersona = this.getAttribute('data-persona');
            
            // Highlight selected card
            personaCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');

            // Show personalized loading message
            let message = "Welcome, Security Professional — loading your personalized dashboard...";
            if (selectedPersona === 'ciso') {
                message = "Welcome, Security Leader — loading your AI Copilot and policy recommendations...";
            } else if (selectedPersona === 'analyst') {
                message = "Welcome, Security Analyst — initiating autonomous threat-intelligence feed...";
            } else if (selectedPersona === 'builder') {
                message = "Welcome, Developer — preparing your code-assist agents and DevSecOps insights...";
            }

            // Simulate "AI Persona Activated" pulse and transition
            setTimeout(() => {
                applyPersonaTheme(selectedPersona);
                updateCTAs(selectedPersona);
                alert(message);
                modal.classList.remove('visible');
                document.body.style.overflow = 'auto';
            }, 500); // Delay for visual effect
        });
    });

    // 6. Handle Skip Button
    if (skipButton) {
        skipButton.addEventListener('click', function() {
            modal.classList.remove('visible');
            document.body.style.overflow = 'auto';
            localStorage.setItem('selectedPersona', 'ciso'); // Set default persona
            applyPersonaTheme('ciso');
            updateCTAs('ciso');
        });
    }

    // 7. Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('visible');
            document.body.style.overflow = 'auto';
            if (!localStorage.getItem('selectedPersona')) {
                localStorage.setItem('selectedPersona', 'ciso');
                applyPersonaTheme('ciso');
                updateCTAs('ciso');
            }
        }
    });

    // Apply default theme if no persona is selected yet (for immediate UI consistency)
    if (!selectedPersona) {
        applyPersonaTheme('ciso');
        updateCTAs('ciso');
    }
});
