// fake generated data
import { jobs, generateJob } from "../common/mock-data";

export const FETCH_JOB_START = "FETCH_JOB_START";
export const FETCH_JOB_SUCCESS = "FETCH_JOB_SUCCESS";
export const FETCH_JOB_ERROR = "FETCH_JOB_ERROR";

export const FETCH_JOBS_START = "FETCH_JOBS_START";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";

export const fetchJobs = () => async dispatch => {
  try {
    dispatch({ type: FETCH_JOBS_START });
    // fetch the jobs data, for now simulate a call's delay
    // const { data } = await axios.get(`API_URL/jobs);
    setTimeout(() => {
      dispatch({
        type: FETCH_JOBS_SUCCESS,
        payload: jobs
      });
    }, 2000);
  } catch (err) {
    dispatch({
      type: FETCH_JOBS_ERROR,
      payload: err
    });
  }
};

export const fetchJob = id => async dispatch => {
  try {
    dispatch({ type: FETCH_JOB_START });
    // fetch the jobs data, for now simulate a call's delay
    // const { data } = await axios.get(`API_URL/jobs, {jobId:id});
    setTimeout(() => {
      dispatch({
        type: FETCH_JOB_SUCCESS,
        payload: generateJob(id)
      });
    }, 2000);
  } catch (err) {
    dispatch({
      type: FETCH_JOB_ERROR,
      payload: err
    });
  }
};
