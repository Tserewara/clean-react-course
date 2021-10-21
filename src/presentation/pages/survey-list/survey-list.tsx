import React from 'react'
import Styles from './survey-list-styles.scss'
import { Footer, Header } from '@/presentation/components'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>

        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
