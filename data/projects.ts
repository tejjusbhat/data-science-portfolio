export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  featured?: boolean;
  category?: 'ml' | 'llm' | 'cv' | 'api' | 'eda';
  links?: { repo?: string; demo?: string; paper?: string };
};

export const projects: Project[] = [
  {
    slug: 'ai-grid-captcha',
    title: 'AI Grid Captcha Solver',
    summary: 'REST API that solves grid-based CAPTCHAs using YOLOv8 object detection and OpenCV OCR, achieving ~95.5% accuracy with sub-2s response times. Containerised with Docker for consistent deployment.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'Docker'],
    featured: true,
    category: 'cv',
    links: { repo: 'https://github.com/tejjusbhat/captcha_solver' }
  },
  {
    slug: 'saas-churn-predictor',
    title: 'SaaS Customer Churn Predictor',
    summary: 'End-to-end churn prediction pipeline with 97% accuracy using XGBoost and SHAP-based explanations, plus an interactive ROI simulator estimating up to $3M in retention savings for 100k users.',
    stack: ['Python', 'Machine Learning', 'XGBoost', 'SHAP', 'Streamlit'],
    featured: true,
    category: 'ml',
    links: { repo: 'https://github.com/tejjusbhat/SaaS-Customer-Churn-Prediction', demo: 'https://saas-churn-prediction.streamlit.app/' }
  },
  {
    slug: 'ivy-emotional-assistant',
    title: 'Ivy - Emotion Aware AI Assistant',
    summary: 'Voice-to-voice AI assistant that uses sentiment analysis to detect the emotional state of the user and adjusts its responses accordingly, deployed on GCP with a FastAPI backend.',
    stack: ['Sentiment Analysis', 'GCP', 'FastAPI', 'LLM'],
    featured: true,
    category: 'llm',
    links: { repo: 'https://github.com/tejjusbhat/ivy-emotion-detector-backend' }
  },
  {
    slug: 'stock-market-assistant',
    title: 'Stock Market Assistant',
    summary: 'LLM-powered tool that scrapes financial news and market trends to generate investment insights, exposed as a REST API for quick evaluations.',
    stack: ['FastAPI', 'LLM', 'BeautifulSoup'],
    category: 'llm',
    links: { repo: 'https://github.com/tejjusbhat/stock_invest_assistant' }
  },
  {
    slug: 'graph-nlp-chatbot',
    title: 'Neo4j Movie Graph Chatbot',
    summary: 'Chatbot backed by a Neo4j graph database that translates natural language questions into Cypher queries to answer questions about movies.',
    stack: ['LLM', 'NLP', 'Neo4j', 'Gradio'],
    category: 'llm',
    links: { repo: 'https://github.com/tejjusbhat/movie-graph-nlp-chatbot/blob/main/graph_nlp_query_generation.ipynb' }
  },
  {
    slug: 'ragbot',
    title: 'RAGBot',
    summary: 'Chatbot that ingests PDFs, CSVs, and text documents into a vector store and answers user queries with source context.',
    stack: ['RAG', 'Streamlit', 'LLM', 'BeautifulSoup'],
    category: 'llm',
    links: {}
  },
  {
    slug: 'diamond-price-predictor',
    title: 'Diamond Price Prediction',
    summary: 'Predicts diamond prices using an ensemble of XGBoost and Random Forest models with optimised hyperparameters and feature scaling.',
    stack: ['Machine Learning', 'XGBoost', 'Random Forest', 'Hyperparameter Optimisation'],
    category: 'ml',
    links: { repo: 'https://github.com/tejjusbhat/diamond_price_prediction' }
  },
  {
    slug: 'eu-sales-eda',
    title: 'EU Sales EDA',
    summary: 'EDA of EU sales data covering time series trends, regional breakdowns, and correlation with macroeconomic indicators across multiple product categories.',
    stack: ['EDA', 'Time Series', 'Python'],
    category: 'eda',
    links: { repo: 'https://github.com/tejjusbhat/EDA_EU_Sales/blob/main/EU_Sales_EDA.ipynb' }
  },
  {
    slug: 'car-sales-analysis',
    title: 'Car Sales Analysis',
    summary: 'EDA on car sales data followed by a stacked LightGBM model to predict car price based on factors like mileage, engine capacity, and year.',
    stack: ['Machine Learning', 'LightGBM', 'EDA'],
    category: 'eda',
    links: { repo: 'https://github.com/tejjusbhat/car_sales_prediction/blob/master/car_price_prediction.ipynb' }
  },
  {
    slug: 'data-extractor-pipeline',
    title: 'Data Extractor Pipeline',
    summary: 'Freelance project that scrapes names and phone numbers from web pages, PDFs, and spreadsheets, then uploads them to Firebase for targeted marketing campaigns.',
    stack: ['Regex', 'BeautifulSoup', 'Firebase'],
    category: 'api',
    links: {}
  },
  {
    slug: 'face-detection-streamlit',
    title: 'Face Detection App',
    summary: 'Web app that detects faces in uploaded images using an OpenCV DNN model, deployed on Streamlit.',
    stack: ['OpenCV', 'Deep Learning', 'Streamlit'],
    category: 'cv',
    links: { repo: 'https://github.com/tejjusbhat/face-detection-streamlit-app', demo: 'https://tejjus-face-detection-webapp.streamlit.app/' }
  },
];
