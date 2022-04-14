// fetch performane tracker metrics - TIME
export const FETCH_TIME_METRICS_REQUEST: string = 'FETCH_TIME_METRICS_REQUEST';
export const FETCH_TIME_METRICS_SUCCESS: string = 'FETCH_TIME_METRICS_SUCCESS';
export const FETCH_TIME_METRICS_FAILURE: string = 'FETCH_TIME_METRICS_FAILURE';

// fetch performance tracker metrics - THROUGHPUT
export const FETCH_THROUGHPUT_METRICS_REQUEST: $TSFixMe =
    'FETCH_THROUGHPUT_METRICS_REQUEST';
export const FETCH_THROUGHPUT_METRICS_SUCCESS: $TSFixMe =
    'FETCH_THROUGHPUT_METRICS_SUCCESS';
export const FETCH_THROUGHPUT_METRICS_FAILURE: $TSFixMe =
    'FETCH_THROUGHPUT_METRICS_FAILURE';

// fetch performance tracker metrics - ERROR
export const FETCH_ERROR_METRICS_REQUEST: string =
    'FETCH_ERROR_METRICS_REQUEST';
export const FETCH_ERROR_METRICS_SUCCESS: string =
    'FETCH_ERROR_METRICS_SUCCESS';
export const FETCH_ERROR_METRICS_FAILURE: string =
    'FETCH_ERROR_METRICS_FAILURE';

// handle setting startDate/endDate - (TIME || THROUGHPUT || ERROR)
export const SET_TIME_STARTDATE: string = 'SET_TIME_STARTDATE';
export const SET_TIME_ENDDATE: string = 'SET_TIME_ENDDATE';
export const SET_THROUGHPUT_STARTDATE: string = 'SET_THROUGHPUT_STARTDATE';
export const SET_THROUGHPUT_ENDDATE: string = 'SET_THROUGHPUT_ENDDATE';
export const SET_ERROR_STARTDATE: string = 'SET_ERROR_STARTDATE';
export const SET_ERROR_ENDDATE: string = 'SET_ERROR_ENDDATE';
export const RESET_TIME_DATE: string = 'RESET_TIME_DATE';
export const RESET_THROUGHPUT_DATE: string = 'RESET_THROUGHPUT_DATE';
export const RESET_ERROR_DATE: string = 'RESET_ERROR_DATE';

// update metrics from realtime update
export const UPDATE_TIME_METRICS: string = 'UPDATE_TIME_METRICS';
export const UPDATE_THROUGHPUT_METRICS: string = 'UPDATE_THROUGHPUT_METRICS';
export const UPDATE_ERROR_METRICS: string = 'UPDATE_ERROR_METRICS';

// fetch all performance tracker according to type (incoming/outgoing)
export const FETCH_INCOMING_METRICS_REQUEST: string =
    'FETCH_INCOMING_METRICS_REQUEST';
export const FETCH_INCOMING_METRICS_SUCCESS: string =
    'FETCH_INCOMING_METRICS_SUCCESS';
export const FETCH_INCOMING_METRICS_FAILURE: string =
    'FETCH_INCOMING_METRICS_FAILURE';

export const FETCH_OUTGOING_METRICS_REQUEST: string =
    'FETCH_OUTGOING_METRICS_REQUEST';
export const FETCH_OUTGOING_METRICS_SUCCESS: string =
    'FETCH_OUTGOING_METRICS_SUCCESS';
export const FETCH_OUTGOING_METRICS_FAILURE: string =
    'FETCH_OUTGOING_METRICS_FAILURE';

export const SET_INCOMING_STARTDATE: string = 'SET_INCOMING_STARTDATE';
export const SET_INCOMING_ENDDATE: string = 'SET_INCOMING_ENDDATE';
export const SET_OUTGOING_STARTDATE: string = 'SET_OUTGOING_STARTDATE';
export const SET_OUTGOING_ENDDATE: string = 'SET_OUTGOING_ENDDATE';
export const RESET_INCOMING_DATE: string = 'RESET_INCOMING_DATE';
export const RESET_OUTGOING_DATE: string = 'RESET_OUTGOING_DATE';

// delete a particular performance metrics (incoming/outgoing)
export const DELETE_INCOMING_METRICS_REQUEST: $TSFixMe =
    'DELETE_INCOMING_METRICS_REQUEST';
export const DELETE_INCOMING_METRICS_SUCCESS: $TSFixMe =
    'DELETE_INCOMING_METRICS_SUCCESS';
export const DELETE_INCOMING_METRICS_FAILURE: $TSFixMe =
    'DELETE_INCOMING_METRICS_FAILURE';
export const RESET_INCOMING_DELETE: string = 'RESET_INCOMING_DELETE';

export const DELETE_OUTGOING_METRICS_REQUEST: $TSFixMe =
    'DELETE_OUTGOING_METRICS_REQUEST';
export const DELETE_OUTGOING_METRICS_SUCCESS: $TSFixMe =
    'DELETE_OUTGOING_METRICS_SUCCESS';
export const DELETE_OUTGOING_METRICS_FAILURE: $TSFixMe =
    'DELETE_OUTGOING_METRICS_FAILURE';
export const RESET_OUTGOING_DELETE: string = 'RESET_OUTGOING_DELETE';
