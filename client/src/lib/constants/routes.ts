import Survey from '../../containers/Survey';

const prefix = '/survey';

export default {
  Home: '/',
  New: `${prefix}/new`,
  Survey: `${prefix}/:surveyId`,
};
