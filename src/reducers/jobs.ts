import { FETCH_JOBS_START } from "../actions/jobs";
import { FETCH_JOBS_SUCCESS } from "../actions/jobs";
import { FETCH_JOBS_ERROR } from "../actions/jobs";

import { FETCH_JOB_START } from "../actions/jobs";
import { FETCH_JOB_SUCCESS } from "../actions/jobs";
import { FETCH_JOB_ERROR } from "../actions/jobs";

const defaultState = {
  isFetchingJobs: false,
  errorFetchingJobs: null,
  jobs: [],
  job: null,
  isFetchingJob: false,
  errorFetchingJob: null
};

export default (state = defaultState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_JOBS_START:
      return {
        ...state,
        isFetchingJobs: true,
        errorFetchingJobs: null
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isFetchingJobs: false,
        jobs: payload
      };
    case FETCH_JOBS_ERROR:
      return {
        ...state,
        isFetchingJobs: false,
        errorFetchingJobs: payload
      };
    case FETCH_JOB_START:
      return {
        ...state,
        isFetchingJob: true,
        errorFetchingJobs: null
      };
    case FETCH_JOB_SUCCESS:
      return {
        ...state,
        isFetchingJob: false,
        job: payload
      };
    case FETCH_JOB_ERROR:
      return {
        ...state,
        isFetchingJob: false,
        errorFetchingJob: payload
      };
    default:
      return state;
  }
};
