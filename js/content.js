const pageContent = {
    home: `
        <div class="page-content home-intro">
            <div>
                <h1 class="title-large text-gradient">MURUGAYESU A</h1>
                <p style="font-size: 1.25rem; font-weight: 500; color: var(--text);">Aspiring AI/ML Engineer</p>
            </div>
            <p style="max-width: 600px; font-size: 1.1rem;">
                I build intelligent, scalable machine learning models and applications. My focus lies in 
                computer vision, retrieval-augmented generation (RAG), and agentic AI systems.
            </p>
            <div class="home-actions">
                <button class="btn btn-primary" onclick="window.location.hash='#projects'">
                    View Work <i data-lucide="arrow-right" class="icon-sm"></i>
                </button>
                <a href="https://github.com/Murugayesu" target="_blank" class="btn btn-secondary">
                    GitHub <i data-lucide="external-link" class="icon-sm"></i>
                </a>
            </div>
        </div>
    `,
    about: `
        <div class="page-content">
            <h2 class="title-large text-gradient" style="font-size: 3rem;">About.</h2>
            <div class="resume-section">
                <p style="font-size: 1.05rem; max-width: 700px;">
                    Aspiring AI/ML Engineer with hands-on experience building machine learning models, computer vision systems, and retrieval-augmented generation (RAG) applications. Developed a role-based RAG chatbot integrating LLMs with secure retrieval pipelines. Skilled in Python, FastAPI, and Streamlit, with a growing focus on agentic AI systems and the real-world deployment of intelligent applications.
                </p>
            </div>

            <div class="resume-section">
                <h3>Experience</h3>
                <div class="resume-item">
                    <div class="resume-item-header">
                        <span class="resume-item-title">Artificial Intelligence Intern</span>
                        <span class="resume-item-date">September 2025 - November 2025</span>
                    </div>
                    <div class="resume-item-subtitle">Infosys Springboard, Chennai, Tamil Nadu, India</div>
                    <ul>
                        <li>Developed a computer vision-based workplace safety monitoring system to detect occupancy and compliance with safety protocols using real-time video feeds.</li>
                        <li>Built and trained deep learning models for object detection and human activity analysis, improving monitoring accuracy in simulated real-world environments.</li>
                        <li>Implemented data preprocessing pipelines and model optimization techniques to enhance performance and reduce false detections.</li>
                        <li>Integrated the model with live video streams to enable real-time inference and automated alert generation for safety violations.</li>
                    </ul>
                </div>
            </div>

            <div class="resume-section">
                <h3>Education</h3>
                <div class="resume-item">
                    <div class="resume-item-header">
                        <span class="resume-item-title">B.E CSE (AI&ML)</span>
                        <span class="resume-item-date">Graduating 2028</span>
                    </div>
                    <div class="resume-item-subtitle">Sri Sairam Institute of Technology • Chennai • CGPA: 8.49</div>
                </div>
            </div>

            <div class="resume-section">
                <h3>Skills</h3>
                <div class="resume-item">
                    <p><strong>Programming Languages:</strong> Python, SQL, C, JavaScript</p>
                    <p><strong>Machine Learning:</strong> Supervised & Unsupervised Learning, Ensemble Methods, Model Evaluation, Feature Engineering, Hyperparameter Tuning</p>
                    <p><strong>Deep Learning:</strong> Neural Networks, CNNs, RNNs, Transformers</p>
                    <p><strong>Frameworks & Libraries:</strong> FastAPI, Flask, PyTorch, TensorFlow, Langchain, Hugging Face, Computer Vision</p>
                    <p><strong>Generative AI:</strong> LLMs, Prompt Engineering, Fine-Tuning, LoRA/QLoRA, RAG, Multimodal Models</p>
                    <p><strong>Vector Databases & Search:</strong> FAISS, Pinecone, Weaviate, Chroma</p>
                    <p><strong>MLOps & LLMOps:</strong> MLflow, Weights & Biases, CI/CD, Model Monitoring</p>
                </div>
            </div>
            
            <div class="resume-section">
                <h3>Certifications</h3>
                <div class="resume-item" style="margin-bottom: 0.5rem;">
                    <div class="resume-item-title" style="font-size: 1rem;">Joy of Computing in Python (NPTEL - IIT Madras, 2025)</div>
                </div>
                <div class="resume-item">
                    <div class="resume-item-title" style="font-size: 1rem;">Machine Learning (Infosys, 2025)</div>
                </div>
            </div>
        </div>
    `,
    projects: `
        <div class="page-content">
            <h2 class="title-large text-gradient" style="font-size: 3rem;">Projects.</h2>
            <p style="margin-bottom: 2rem;">A selection of things I've built and experimented with.</p>
            
            <div class="grid-2">
                <!-- Project 1 -->
                <a href="https://github.com/Murugayesu/Asker-Enterprise-RAG" target="_blank" class="card">
                    <div class="card-title">
                        Asker-Enterprise-RAG
                        <i data-lucide="github" class="icon-sm"></i>
                    </div>
                    <p class="card-desc">
                        Built a role-based RAG chatbot using FastAPI, Chroma, and Ollama to enable secure, context-aware question answering. Designed a retrieval pipeline with vector embeddings and metadata filtering for department-specific knowledge access.
                    </p>
                    <div class="card-tech">
                        <span class="badge">FastAPI</span>
                        <span class="badge">Chroma</span>
                        <span class="badge">Ollama</span>
                        <span class="badge">Streamlit</span>
                    </div>
                </a>

                <!-- Project 2 -->
                <a href="https://prince-churn-prediction.streamlit.app/" target="_blank" class="card">
                    <div class="card-title">
                        Customer Churn Prediction
                        <i data-lucide="external-link" class="icon-sm"></i>
                    </div>
                    <p class="card-desc">
                        Built an end-to-end churn prediction pipeline using the Telco dataset. Addressed class imbalance using SMOTE and deployed an XGBoost classifier via Streamlit, enabling real-time churn prediction through an interactive interface.
                    </p>
                    <div class="card-tech">
                        <span class="badge">Python</span>
                        <span class="badge">XGBoost</span>
                        <span class="badge">SMOTE</span>
                        <span class="badge">Streamlit</span>
                    </div>
                </a>

                <!-- Project 3 -->
                <a href="https://github.com/Murugayesu/Ensemble-Learning" target="_blank" class="card">
                    <div class="card-title">
                        Ensemble Models Comparison
                        <i data-lucide="github" class="icon-sm"></i>
                    </div>
                    <p class="card-desc">
                        Developed a machine learning pipeline to compare ensemble algorithms on structured tabular data. Benchmarked Random Forest, XGBoost, and LightGBM models. Identified LightGBM as the best-performing model based on ROC-AUC metric.
                    </p>
                    <div class="card-tech">
                        <span class="badge">LightGBM</span>
                        <span class="badge">XGBoost</span>
                        <span class="badge">Random Forest</span>
                        <span class="badge">Scikit-learn</span>
                    </div>
                </a>

                <!-- Project 4 -->
                <a href="https://github.com/Murugayesu/Pharmascan" target="_blank" class="card">
                    <div class="card-title">
                        Pharmascan AI
                        <i data-lucide="github" class="icon-sm"></i>
                    </div>
                    <p class="card-desc">
                        A state-of-the-art counterfeit medicine detection and supply chain traceability ecosystem using Deep Learning, OCR, and Large Language Models (LLMs).
                    </p>
                    <div class="card-tech">
                        <span class="badge">Deep Learning</span>
                        <span class="badge">OCR</span>
                        <span class="badge">LLMs</span>
                        <span class="badge">Python</span>
                    </div>
                </a>

                <!-- Project 5 -->
                <a href="https://github.com/Murugayesu/Multibehavioral-Monitor" target="_blank" class="card">
                    <div class="card-title">
                        Multibehavioral-Monitor
                        <i data-lucide="github" class="icon-sm"></i>
                    </div>
                    <p class="card-desc">
                        A real-time behavioral monitoring system that analyzes user behavior through multiple modalities: facial expressions, typing patterns, and text sentiment.
                    </p>
                    <div class="card-tech">
                        <span class="badge">JavaScript</span>
                        <span class="badge">Computer Vision</span>
                        <span class="badge">NLP</span>
                    </div>
                </a>

                <!-- Project 6 -->
                <a href="https://exam-sense-ai.vercel.app" target="_blank" class="card">
                    <div class="card-title">
                        ExamSense-Ai
                        <i data-lucide="external-link" class="icon-sm"></i>
                    </div>
                    <p class="card-desc">
                        ExamSense AI analyzes past exam papers and the official syllabus to automatically identify high-priority topics and generate a focused, high-ROI study plan.
                    </p>
                    <div class="card-tech">
                        <span class="badge">TypeScript</span>
                        <span class="badge">AI/LLMs</span>
                        <span class="badge">Web App</span>
                    </div>
                </a>
            </div>
        </div>
    `
};
