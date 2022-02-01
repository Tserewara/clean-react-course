import { Calendar, Footer, Header, Loading } from '@/presentation/components'
import FlipMove from 'react-flip-move'
import React from 'react'
import Styles from './survey-result-styles.scss'

const SurveyResult: React.FC = () => {
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        {true &&
          <>
            <hgroup>
              <Calendar date={new Date()} className={Styles.calendarWrap} />
              <h2>Qual é seu framework web favorito?</h2>
            </hgroup>
            <FlipMove className={Styles.answersList}>
              <li>
                <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
                <span className={Styles.answer}>ReactJS</span>
                <span className={Styles.percent}>50%</span>
              </li>
              <li className={Styles.active}>
                <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
                <span className={Styles.answer}>ReactJS</span>
                <span className={Styles.percent}>50%</span>
              </li>
              <li>
                <img src="http://fordevs.herokuapp.com/static/img/logo-react.png" />
                <span className={Styles.answer}>ReactJS</span>
                <span className={Styles.percent}>50%</span>
              </li>
            </FlipMove>
            <button>Voltar</button>
          </>
        }
        {false && <Loading />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
