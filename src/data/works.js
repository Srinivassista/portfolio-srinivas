import React from 'react'
import imgT1 from '../assets/img/portfolio/well-list-production-optimization.png'
import imgT2 from '../assets/img/portfolio/pipiline-network-modeling.png'
import imgT3 from '../assets/img/portfolio/natural-language-processing-nlp.jpg'
import imgT4 from '../assets/img/portfolio/deep-learning-for-trading.jpg'
import imgT5 from '../assets/img/portfolio/leetcode.png'
import imgT6 from '../assets/img/portfolio/ccfraud.jpg'
import imgT7 from '../assets/img/portfolio/portfolio-web-site.png'
import imgT8 from '../assets/img/portfolio/jobfair-software-backend.jpg'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const works = [
  {
    title: `Credit Card Fraud Detection`,
    categories: [
      `Data Analysis`,
      `Machine Learning`
    ],
    thumbnail: imgT6,
    link: '/credit-card-fraud-detection',
    description: (
      <>
        <p>
          Created a ML model to predict whether a transaction is fraudulent on a dataset from Kaggle.
          Used matplotlib to visualize relationships between target and predictor variables.
          Compared results from multiple classification models using scikit-learn (Python).
        </p>
      </>
    )
  },
  
  {
    title: `Tagging Recommender using Deep Learning Model`,
    categories: [
      `Data Science`,
      `Python`,
      `Natural Language Processing (NLP)`,
      `Machine Learning`,
      `Deep Learning`,
      `Neural Network`,
      `Artificial Intelligent`,
      `Web Scraping`,
      `Beautiful Soup`,
      `HTML`,
      `Tensorflow`,
      `Keras`,
      `PythaiNLP`,
      `Scikit-learn (SKlearn)`,
      `Long Short-Term Memory (LSTM)`,
      `Convolutional Neural Networks (CNN)`
    ],
    thumbnail: imgT3,
    link: '/nlp-tagging-recommender',
    description: (
      <p>
        • Researched focus on <code>NLP</code> to apply{' '}
        <span className="emphasize-text">deep learning model in tagging recommender</span> for
        Pantip.com, The most famous discussio website in Thailand. <br />• The model can achieve{' '}
        <span className="emphasize-text">F1 scores of 0.55</span> for 144 unique tags.
      </p>
    )
  },
  
  
]
