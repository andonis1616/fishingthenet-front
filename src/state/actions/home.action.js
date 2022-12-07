export const FETCH_HOME = 'FETCH_HOME';
export const FETCH_CHART = 'FETCH_CHART';
export const POST_SEND_EMAIL = 'POST_SEND_EMAIL';

/**
 * Home
 */
export const homeAction = home => ({
  type: FETCH_HOME,
  payload: home,
});

export const sendEmailAction = send => ({
  type: POST_SEND_EMAIL,
  payload: send,
});

export const fetchChartAction = chart => ({
  type: FETCH_CHART,
  payload: chart,
});
