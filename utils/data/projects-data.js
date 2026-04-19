export const projectsData = [
    {
        id: 1,
        name: 'Customer Segmentation & Retention Analysis',
        description: 'Built an end-to-end analytics pipeline on 779K+ transactions using RFM scoring, K-Means, and DBSCAN to identify 4 customer segments: Champions, Loyal, At-Risk, and Lost. Trained a Logistic Regression churn model and built cohort retention heatmaps to flag high-value customers at dropout risk. Deployed a multi-tab Streamlit dashboard with real-time filters, 3D RFM scatter plots, and a priority win-back table.',
        tools: ['Python', 'Pandas', 'Scikit-learn', 'K-Means', 'DBSCAN', 'Logistic Regression', 'Streamlit', 'Plotly', 'Seaborn', 'RFM Analysis'],
        role: 'Data Analyst',
        code: 'https://github.com/priyasharma2106/Customer_segmentation_DS',
    },
    {
        id: 2,
        name: 'Sampark – Modular Offline Database for Panchayat',
        description: 'Developed an offline-first web app for rural Panchayat data collection using IndexedDB with auto-sync to PostgreSQL on reconnection. Integrated multilingual support (English, Hindi, regional languages) and auto-save functionality. Deployed on Render for live access, enabling seamless data collection in low/no connectivity rural environments.',
        tools: ['IndexedDB', 'PostgreSQL', 'JavaScript', 'Render', 'HTML/CSS', 'Multilingual i18n', 'Offline-First Architecture'],
        role: 'Full Stack Developer',
        code: 'https://github.com/namanxdev/Sampark',
    },
    {
        id: 3,
        name: 'Autonomous Predictive Maintenance System',
        description: 'Built an Agentic AI platform for automotive predictive maintenance, orchestrating Master–Worker agents to predict failures, schedule services, and close the manufacturing feedback loop. Implemented failure prediction models using vehicle telematics and historical maintenance data to proactively reduce breakdowns and downtime. Designed autonomous service scheduling and demand forecasting to optimize service center utilization. Integrated RCA/CAPA analysis and UEBA security monitoring to feed quality insights back to manufacturing.',
        tools: ['Python', 'Agentic AI', 'LLM', 'Telematics', 'Predictive Modeling', 'Demand Forecasting', 'RCA/CAPA', 'UEBA', 'FastAPI'],
        role: 'AI/ML Engineer',
        code: 'https://github.com/Nishaa1304/AI-Powered-Predictive-Maintenance-and-Fault-Diagnosis-System',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },