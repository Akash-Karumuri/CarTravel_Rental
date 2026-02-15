const BASE_URL = "http://localhost:5000/api";

// Auth
export const ADMIN_LOGIN = () => `${BASE_URL}/auth/login`;

// Cars
export const GET_CARS = () => `${BASE_URL}/cars`;
export const GET_CAR_BY_ID = (id) => `${BASE_URL}/cars/${id}`;
export const POST_CAR = () => `${BASE_URL}/cars`;
export const UPDATE_CAR = (id) => `${BASE_URL}/cars/${id}`;
export const DELETE_CAR = (id) => `${BASE_URL}/cars/${id}`;

// Services
export const GET_SERVICES = () => `${BASE_URL}/services`;

