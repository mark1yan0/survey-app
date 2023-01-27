import apiEndpoints from '../constants/apiEndpoints';
import config from '../constants/config';
import getEndpointWithParams from '../helpers/getEndpointWithParams';
import { IVotingPayload } from '../interfaces/questions';

export default async function sendSurvey(
  payload: IVotingPayload,
  surveyId: string
) {
  const res = await fetch(
    config.baseUrl + getEndpointWithParams(apiEndpoints.answerSurvey, surveyId),

    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  const resData = await res.json();
  return resData;
}
