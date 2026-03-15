// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://cartravel-rental.onrender.com/api";

// ================= AUTH =================
export const ADMIN_LOGIN = () => `${BASE_URL}/auth/login`;

// Dashboard
export const GET_DASHBOARD_DATA = () => `${BASE_URL}/dashboard/stats`;


// ================= CARS =================
export const GET_CARS = () => `${BASE_URL}/cars`;
export const GET_CAR_BY_ID = (id) => `${BASE_URL}/cars/${id}`;
export const POST_CAR = () => `${BASE_URL}/cars`;
export const UPDATE_CAR = (id) => `${BASE_URL}/cars/${id}`;
export const DELETE_CAR = (id) => `${BASE_URL}/cars/${id}`;


// ================= SERVICES =================
export const GET_SERVICES = () => `${BASE_URL}/services`;
export const GET_SERVICE_BY_ID = (id) => `${BASE_URL}/services/${id}`;
export const POST_SERVICE = () => `${BASE_URL}/services`;
export const UPDATE_SERVICE = (id) => `${BASE_URL}/services/${id}`;
export const DELETE_SERVICE = (id) => `${BASE_URL}/services/${id}`;

// ================= BOOKINGS =================
export const GET_BOOKINGS = () => `${BASE_URL}/bookings`;
export const GET_BOOKING_BY_ID = (id) => `${BASE_URL}/bookings/${id}`;
export const POST_BOOKING = () => `${BASE_URL}/bookings`;
export const UPDATE_BOOKING = (id) => `${BASE_URL}/bookings/${id}`;
export const DELETE_BOOKING = (id) => `${BASE_URL}/bookings/${id}`;