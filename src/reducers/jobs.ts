import { FETCH_JOBS_START } from "../actions/jobs";
import { FETCH_JOBS_SUCCESS } from "../actions/jobs";
import { FETCH_JOBS_ERROR } from "../actions/jobs";

const defaultState = {
  isFetchingJobs: false,
  errorFetchingJobs: null,
  jobs: null
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
    default:
      return state;
  }
};
