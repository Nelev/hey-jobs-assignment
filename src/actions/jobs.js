// fake generated data
import { jobs } from "../common/mock-data";

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
