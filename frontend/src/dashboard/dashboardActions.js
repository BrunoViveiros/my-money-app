import axios from 'axios';
import URLs from '../consts';

const { API_URL } = URLs;

export function getSummary() {
  const request = axios.get(`${API_URL}/billingCycles/summary`);
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  };
}
