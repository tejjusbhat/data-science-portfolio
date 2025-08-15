export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  links?: { repo?: string; demo?: string; paper?: string };
};

export const projects: Project[] = [
  {
    slug: 'saas-churn-predictor',
    title: 'SaaS Customer Churn Prediction',
    summary: 'Predicts churn, explains it with SHAP, and optimizes retention ROI with an interactive dashboard hosted on streamlit.',
    stack: ['Machine Learning', 'XGBoost','EDA'],
    links: { repo: 'https://github.com/tejjusbhat/SaaS-Customer-Churn-Prediction', demo: 'https://saas-churn-prediction.streamlit.app/'}
  },
  {
    slug: 'diamond-price-predictor',
    title: 'Diamond Price Prediction',
    summary: 'Predicts diamond price using ensemble models with optimized hyperparameters and scaled data for better results.',
    stack: ['Machine Learning', 'XGBoost','Random Forest', 'Hyperparameter Optimization'],
    links: { repo: 'https://github.com/tejjusbhat/diamond_price_prediction'}
  },
  {
    slug: 'eu-sales-eda',
    title: 'EU Sales EDA',
    summary: 'Comprehensive Analysis of the EU Market.',
    stack: ['Machine Learning', 'EDA', 'Time Series'],
    links: { repo: 'https://github.com/tejjusbhat/EDA_EU_Sales/blob/main/EU_Sales_EDA.ipynb'}
  },
  {
    slug: 'ai-grid-captcha',
    title: 'AI Grid Captcha Solver',
    summary: 'YOLO + OpenCV pipeline with optimized OCR achieving ~95.5% accuracy and sub-2s responses with FastAPI.',
    stack: ['Python','YOLO','OpenCV','FastAPI'],
    links: { repo: 'https://github.com/tejjusbhat/captcha_solver' }
  },
  {
    slug: 'stock-market-assistant',
    title: 'Stock Market Assistant',
    summary: 'LLM-augmented analysis of news + trends for ease of investment; exposed as an API for quick evaluations.',
    stack: ['FastAPI','LLM','BeautifulSoup'],
    links: { repo: 'https://github.com/tejjusbhat/stock_invest_assistant' }
  },
  {
    slug: 'graph-nlp-chatbot',
    title: 'Neo4j Movie Graph Chatbot',
    summary: 'Chatbot that has a GraphQL (Neo4j) database and can use it as a store to answer users queries about movies',
    stack: ['LLM', 'NLP', 'Neo4j','Gradio'],
    links: { repo: 'https://github.com/tejjusbhat/movie-graph-nlp-chatbot/blob/main/graph_nlp_query_generation.ipynb'}
  },
  {
    slug: 'car-sales-analysis',
    title: 'Car Sales Analysis',
    summary: 'EDA on Car Sales price and creating a stacked LightGBM model to predict price of cars based on input factors like mileage, engine etc.',
    stack: ['Machine Learning', 'LightGBM','EDA'],
    links: { repo: 'https://github.com/tejjusbhat/car_sales_prediction/blob/master/car_price_prediction.ipynb'}
  },
  {
    slug: 'data-extractor-pipeline',
    title: 'Data Extractor Pipeline',
    summary: 'Freelance project to generate leads by scraping phone no.s and names freely available from the web, pdfs or sheets and upload it into a datastore for targeted campaigns.',
    stack: ['Regex', 'BeautifulSoup', 'Firebase'],
    links: { }
  },
  {
    slug: 'face-detection-streamlit',
    title: 'Face Detection Streamlit',
    summary: 'The app can detect faces in any photo, uses OpenCV DNN in its backend',
    stack: ['OpenCV', 'Deep Learning', 'Streamlit'],
    links: { repo: 'https://github.com/tejjusbhat/face-detection-streamlit-app', demo: "https://tejjus-face-detection-webapp.streamlit.app/"},
  },
  {
    slug: 'ivy-emotional-assistant',
    title: 'Ivy - An Emotion Aware AI Assistant',
    summary: 'Voice to Voice emotion aware assistant that uses sentiment analysis and LLMs to make an emotion aware AI Assistant.',
    stack: ['Sentiment Analysis', 'GCP','FastAPI'],
    links: { repo: 'https://github.com/tejjusbhat/ivy-emotion-detector-backend' }
  },
  {
    slug: 'ragbot',
    title: 'RAGBot',
    summary: 'A simple chatbot that can understand take in PDFs, csvs and other forms of text or numeric data and keep it in its knowledge store querying',
    stack: ['RAG','Streamlit','LLM','BeautifulSoup'],
    links: { }
  },

  // --- Template to copy ---
  // {
  //   slug: 'short-hyphenated-slug',
  //   title: 'Project Title',
  //   summary: '1–2 sentences on the problem, your approach, and the outcome/metric.',
  //   stack: ['Python','SQL','XGBoost'],
  //   links: { repo: 'https://github.com/...', demo: 'https://...', paper: 'https://...' }
  // },
];
