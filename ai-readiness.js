// AI Readiness Assessment JavaScript

const assessmentQuestions = [
    // Governance Domain
    {
        domain: "Governance",
        question: "Do you have a documented AI charter with board approval?",
        options: [
            { text: "No documentation exists", score: 0 },
            { text: "Draft in progress", score: 1 },
            { text: "Documented but not approved", score: 2 },
            { text: "Fully documented and board-approved", score: 3 }
        ]
    },
    {
        domain: "Governance",
        question: "Are AI use cases formally documented and risk-assessed before deployment?",
        options: [
            { text: "No formal process", score: 0 },
            { text: "Ad-hoc documentation", score: 1 },
            { text: "Standardized process, not always followed", score: 2 },
            { text: "Mandatory process with enforcement", score: 3 }
        ]
    },
    {
        domain: "Governance",
        question: "Is there clear ownership and accountability for AI systems?",
        options: [
            { text: "No defined ownership", score: 0 },
            { text: "Informal ownership", score: 1 },
            { text: "Defined owners, unclear accountability", score: 2 },
            { text: "Clear ownership with documented accountability", score: 3 }
        ]
    },
    {
        domain: "Governance",
        question: "Do you have an AI risk register that is regularly updated?",
        options: [
            { text: "No risk register", score: 0 },
            { text: "Basic risk list maintained", score: 1 },
            { text: "Risk register exists, updated quarterly", score: 2 },
            { text: "Comprehensive risk register with real-time updates", score: 3 }
        ]
    },
    {
        domain: "Governance",
        question: "Are third-party AI vendors assessed for security and compliance?",
        options: [
            { text: "No vendor assessment", score: 0 },
            { text: "Basic questionnaires only", score: 1 },
            { text: "Standardized assessment process", score: 2 },
            { text: "Comprehensive due diligence with ongoing monitoring", score: 3 }
        ]
    },
    
    // Data Management Domain
    {
        domain: "Data Management",
        question: "Is training data lineage and consent tracked?",
        options: [
            { text: "No tracking", score: 0 },
            { text: "Manual documentation", score: 1 },
            { text: "Partially automated tracking", score: 2 },
            { text: "Fully automated lineage and consent management", score: 3 }
        ]
    },
    {
        domain: "Data Management",
        question: "Are data quality and bias checks performed on training datasets?",
        options: [
            { text: "No checks performed", score: 0 },
            { text: "Ad-hoc manual reviews", score: 1 },
            { text: "Regular manual audits", score: 2 },
            { text: "Automated continuous monitoring", score: 3 }
        ]
    },
    {
        domain: "Data Management",
        question: "Is sensitive data properly anonymized or pseudonymized in AI systems?",
        options: [
            { text: "No anonymization", score: 0 },
            { text: "Basic masking applied", score: 1 },
            { text: "Systematic anonymization for most systems", score: 2 },
            { text: "Enterprise-wide anonymization with validation", score: 3 }
        ]
    },
    {
        domain: "Data Management",
        question: "Do you maintain data retention and deletion policies for AI systems?",
        options: [
            { text: "No formal policies", score: 0 },
            { text: "Policies documented but not enforced", score: 1 },
            { text: "Policies enforced for critical systems", score: 2 },
            { text: "Comprehensive policies with automated enforcement", score: 3 }
        ]
    },
    {
        domain: "Data Management",
        question: "Are data access controls and encryption applied to AI training data?",
        options: [
            { text: "Minimal controls", score: 0 },
            { text: "Basic access controls", score: 1 },
            { text: "Role-based access with encryption at rest", score: 2 },
            { text: "Zero-trust architecture with end-to-end encryption", score: 3 }
        ]
    },

    // Security & Privacy Domain
    {
        domain: "Security & Privacy",
        question: "Are prompt and API calls logged for anomaly detection?",
        options: [
            { text: "No logging", score: 0 },
            { text: "Basic logging without analysis", score: 1 },
            { text: "Logging with periodic review", score: 2 },
            { text: "Real-time logging with automated anomaly detection", score: 3 }
        ]
    },
    {
        domain: "Security & Privacy",
        question: "Are prompt injection and adversarial attack defenses implemented?",
        options: [
            { text: "No defenses", score: 0 },
            { text: "Basic input validation", score: 1 },
            { text: "Multiple defense layers", score: 2 },
            { text: "Advanced AI-powered defense with continuous testing", score: 3 }
        ]
    },
    {
        domain: "Security & Privacy",
        question: "Is model access controlled with authentication and authorization?",
        options: [
            { text: "Open access", score: 0 },
            { text: "Basic authentication", score: 1 },
            { text: "Role-based access control", score: 2 },
            { text: "Fine-grained access with MFA and audit trails", score: 3 }
        ]
    },
    {
        domain: "Security & Privacy",
        question: "Are AI model dependencies and supply chain risks assessed?",
        options: [
            { text: "No assessment", score: 0 },
            { text: "Manual tracking of major dependencies", score: 1 },
            { text: "Automated dependency scanning", score: 2 },
            { text: "Comprehensive SBOM with vulnerability management", score: 3 }
        ]
    },
    {
        domain: "Security & Privacy",
        question: "Is privacy impact assessment (PIA) conducted for AI systems?",
        options: [
            { text: "No PIA process", score: 0 },
            { text: "PIAs for high-risk systems only", score: 1 },
            { text: "PIAs for most AI systems", score: 2 },
            { text: "Mandatory PIAs with privacy-by-design principles", score: 3 }
        ]
    },

    // Model Lifecycle Domain
    {
        domain: "Model Lifecycle",
        question: "Are bias and drift tests automated pre-deployment?",
        options: [
            { text: "No testing", score: 0 },
            { text: "Manual testing on request", score: 1 },
            { text: "Automated testing for critical models", score: 2 },
            { text: "Comprehensive automated testing for all models", score: 3 }
        ]
    },
    {
        domain: "Model Lifecycle",
        question: "Is model versioning and rollback capability implemented?",
        options: [
            { text: "No versioning", score: 0 },
            { text: "Basic version tracking", score: 1 },
            { text: "Version control with manual rollback", score: 2 },
            { text: "Automated versioning with one-click rollback", score: 3 }
        ]
    },
    {
        domain: "Model Lifecycle",
        question: "Are model performance metrics continuously monitored in production?",
        options: [
            { text: "No monitoring", score: 0 },
            { text: "Periodic manual checks", score: 1 },
            { text: "Automated monitoring with alerts", score: 2 },
            { text: "Real-time monitoring with auto-remediation", score: 3 }
        ]
    },
    {
        domain: "Model Lifecycle",
        question: "Is there a formal model approval and deployment process?",
        options: [
            { text: "No formal process", score: 0 },
            { text: "Informal review process", score: 1 },
            { text: "Defined approval workflow", score: 2 },
            { text: "Automated gated deployment with compliance checks", score: 3 }
        ]
    },
    {
        domain: "Model Lifecycle",
        question: "Are model explanations and interpretability features available?",
        options: [
            { text: "Black box models only", score: 0 },
            { text: "Basic logging of inputs/outputs", score: 1 },
            { text: "Explainability for critical decisions", score: 2 },
            { text: "Comprehensive explainability with audit trails", score: 3 }
        ]
    },

    // Human Oversight Domain
    {
        domain: "Human Oversight",
        question: "Is human-in-the-loop required for critical decisions?",
        options: [
            { text: "Fully automated decisions", score: 0 },
            { text: "Human review available on request", score: 1 },
            { text: "Human review for high-risk decisions", score: 2 },
            { text: "Mandatory human oversight with documented review", score: 3 }
        ]
    },
    {
        domain: "Human Oversight",
        question: "Can users contest or appeal AI-driven decisions?",
        options: [
            { text: "No appeal mechanism", score: 0 },
            { text: "Informal complaint process", score: 1 },
            { text: "Formal appeal process documented", score: 2 },
            { text: "Transparent appeal process with SLAs", score: 3 }
        ]
    },
    {
        domain: "Human Oversight",
        question: "Are AI operators trained on ethical AI principles and risks?",
        options: [
            { text: "No training", score: 0 },
            { text: "Basic awareness training", score: 1 },
            { text: "Regular training for AI teams", score: 2 },
            { text: "Comprehensive training with certification", score: 3 }
        ]
    },
    {
        domain: "Human Oversight",
        question: "Is there a process to override or disable AI systems if needed?",
        options: [
            { text: "No override capability", score: 0 },
            { text: "Manual shutdown possible", score: 1 },
            { text: "Documented override procedures", score: 2 },
            { text: "Automated kill-switch with escalation protocols", score: 3 }
        ]
    },
    {
        domain: "Human Oversight",
        question: "Are diverse stakeholders involved in AI system design and review?",
        options: [
            { text: "Single team ownership", score: 0 },
            { text: "Limited cross-functional input", score: 1 },
            { text: "Regular stakeholder reviews", score: 2 },
            { text: "Diverse advisory board with formal governance", score: 3 }
        ]
    },

    // Monitoring & Incident Response Domain
    {
        domain: "Monitoring & Incident Response",
        question: "Are AI-specific incidents reported to SOC within SLA?",
        options: [
            { text: "No AI incident tracking", score: 0 },
            { text: "Ad-hoc incident reporting", score: 1 },
            { text: "AI incidents tracked, no specific SLA", score: 2 },
            { text: "Dedicated AI incident process with SLAs", score: 3 }
        ]
    },
    {
        domain: "Monitoring & Incident Response",
        question: "Is there an AI incident response playbook?",
        options: [
            { text: "No playbook", score: 0 },
            { text: "General incident response used", score: 1 },
            { text: "AI-specific playbook in development", score: 2 },
            { text: "Comprehensive AI incident playbook with drills", score: 3 }
        ]
    },
    {
        domain: "Monitoring & Incident Response",
        question: "Are AI system failures and errors logged and analyzed?",
        options: [
            { text: "No error tracking", score: 0 },
            { text: "Basic error logs", score: 1 },
            { text: "Centralized logging with periodic analysis", score: 2 },
            { text: "Real-time error tracking with root cause analysis", score: 3 }
        ]
    },
    {
        domain: "Monitoring & Incident Response",
        question: "Are AI systems included in business continuity and disaster recovery plans?",
        options: [
            { text: "Not included", score: 0 },
            { text: "Informal backup procedures", score: 1 },
            { text: "Documented in BC/DR plans", score: 2 },
            { text: "Fully integrated with tested recovery procedures", score: 3 }
        ]
    },
    {
        domain: "Monitoring & Incident Response",
        question: "Is there continuous monitoring for model drift and performance degradation?",
        options: [
            { text: "No monitoring", score: 0 },
            { text: "Periodic manual checks", score: 1 },
            { text: "Automated monitoring with alerts", score: 2 },
            { text: "Real-time monitoring with auto-retraining triggers", score: 3 }
        ]
    }
];

let currentQuestionIndex = 0;
let answers = [];
let selectedFrameworks = [];

function startAssessment() {
    // Validate framework selection
    const checkboxes = document.querySelectorAll('.framework-checkbox:checked');
    if (checkboxes.length === 0) {
        alert('Please select at least one framework to continue.');
        return;
    }

    // Validate profile selection
    const industry = document.getElementById('industry').value;
    const orgSize = document.getElementById('org-size').value;
    
    if (!industry || !orgSize) {
        alert('Please complete your organization profile to continue.');
        return;
    }

    // Store selected frameworks
    selectedFrameworks = Array.from(checkboxes).map(cb => cb.id);

    // Hide framework selection, show questions
    document.getElementById('framework-selection').style.display = 'none';
    document.getElementById('assessment-questions').style.display = 'block';

    // Initialize assessment
    currentQuestionIndex = 0;
    answers = new Array(assessmentQuestions.length).fill(null);
    document.getElementById('totalQuestions').textContent = assessmentQuestions.length;
    
    loadQuestion();
}

function loadQuestion() {
    const question = assessmentQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-domain">${question.domain}</div>
            <h3 class="question-text">${question.question}</h3>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <label class="option-label ${answers[currentQuestionIndex] === index ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${index}" 
                               ${answers[currentQuestionIndex] === index ? 'checked' : ''}
                               onchange="selectAnswer(${index})">
                        <span>${option.text}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    // Update progress
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex === assessmentQuestions.length - 1 ? 'View Results' : 'Next';
}

function selectAnswer(optionIndex) {
    answers[currentQuestionIndex] = optionIndex;
    
    // Update UI
    document.querySelectorAll('.option-label').forEach((label, index) => {
        if (index === optionIndex) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (answers[currentQuestionIndex] === null) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (currentQuestionIndex < assessmentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Show results
        calculateAndShowResults();
    }
}

function calculateAndShowResults() {
    // Calculate domain scores
    const domainScores = {};
    const domainMaxScores = {};

    assessmentQuestions.forEach((question, index) => {
        const domain = question.domain;
        const answerIndex = answers[index];
        const score = question.options[answerIndex].score;

        if (!domainScores[domain]) {
            domainScores[domain] = 0;
            domainMaxScores[domain] = 0;
        }

        domainScores[domain] += score;
        domainMaxScores[domain] += 3; // Max score per question
    });

    // Calculate percentages
    const domainPercentages = {};
    Object.keys(domainScores).forEach(domain => {
        domainPercentages[domain] = Math.round((domainScores[domain] / domainMaxScores[domain]) * 100);
    });

    // Calculate overall score
    const totalScore = Object.values(domainScores).reduce((a, b) => a + b, 0);
    const maxScore = Object.values(domainMaxScores).reduce((a, b) => a + b, 0);
    const overallScore = Math.round((totalScore / maxScore) * 100);

    // Update UI
    document.getElementById('overallScore').textContent = overallScore;
    
    // Hide questions, show results
    document.getElementById('assessment-questions').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';

    // Create radar chart
    createRadarChart(domainPercentages);

    // Scroll to results
    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function createRadarChart(domainPercentages) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(domainPercentages),
            datasets: [{
                label: 'Your Score',
                data: Object.values(domainPercentages),
                fill: true,
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                borderColor: 'rgb(139, 92, 246)',
                pointBackgroundColor: 'rgb(139, 92, 246)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(139, 92, 246)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function downloadReport() {
    alert('PDF report generation is coming soon. This will include:\n\n• Overall readiness score\n• Domain-wise breakdown\n• Framework mapping\n• Detailed recommendations\n• Implementation roadmap');
}

function emailReport() {
    const email = prompt('Enter email address to send the report:');
    if (email) {
        alert(`Report will be sent to ${email} (feature coming soon)`);
    }
}

