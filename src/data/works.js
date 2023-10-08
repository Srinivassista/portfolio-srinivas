import React from 'react'
import imgT1 from '../assets/img/portfolio/twitter 1.png'
import imgT2 from '../assets/img/portfolio/ccfraud.jpg'
import imgT3 from '../assets/img/portfolio/socialmedia.png'
import imgT4 from '../assets/img/portfolio/diapers.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const works = [
  {
    title: `Credit Card Fraud Detection`,
    categories: [
      `Data Analysis`,
      `Data Science`,
      `Machine Learning`,
      'Supervised Learning',
      'Predictive modeling',
      'Logistic Regression',
      'Random Forest Ensemble',
      'Python'


    ],
    thumbnail: imgT2,
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
    title: `Twitter analysis of US senators`,
    categories: [
      `Data Analysis`,
      `Data Science`,
      `Python`,
      'Network analysis',
      'BeautifulSoup',
      'JSON',
      'networkx',
      'wordcloud'
      
    ],
    thumbnail: imgT1,
    link: '/twitter-analysis-us-senators',
    description: (
      <p>
        Analysed tweets from select US senators from 2008-2017 to understand the key topics,
        key members and the relationships between them. Created multiple hypothesis and tested
        with available data to deliver conclusions.
      </p>
    )
  },
  {
    title: `Impact of diaper features on sales in South America for P&G`,
    categories: [
      `Data Analysis`,
      `Data Science`,
      `Python`,
      'Network analysis',
      'BeautifulSoup',
      'JSON',
      'networkx',
      'wordcloud'
      
    ],
    thumbnail: imgT4,
    link: '/diaper-features-impact',
    description: (
      <p>
        Analysed tweets from select US senators from 2008-2017 to understand the key topics,
        key members and the relationships between them. Created multiple hypothesis and tested
        with available data to deliver conclusions.
      </p>
    )
  },

  {
    title: `Prediction of impressions and engagement on a social media post`,
    categories: [
      `Data Analysis`,
      
      `R`,
      'Network analysis'
      
    ],
    thumbnail: imgT3,
    link: '/impressions-prediction-social-media',
    description: (
      <p>
        Analysed tweets from select US senators from 2008-2017 to understand the key topics,
        key members and the relationships between them. Created multiple hypothesis and tested
        with available data to deliver conclusions.
      </p>
    )
  },
  
  
]
