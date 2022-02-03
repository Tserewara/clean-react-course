import { SurveyResult } from '@/presentation/pages'
import { makeRemoteLoadSurveyResult } from '@/main/factories/usecases'
import { useParams } from 'react-router-dom'
import React from 'react'

export const makeSurveyResult: React.FC = () => {
  type Props = {
    id: string
  }
  const { id } = useParams<Props>()
  return (
    <SurveyResult
      loadSurveyResult={makeRemoteLoadSurveyResult(id)}
    />
  )
}
