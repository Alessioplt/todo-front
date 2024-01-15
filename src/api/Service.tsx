import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    /*headers: {
        'Content-Type': 'application/json',
    }*/
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export function updateAxiosInstance(logged: boolean) {
    if (logged) {
        // Add authentication headers
        axiosInstance.interceptors.request.use(
            (config) => {
                const token = sessionStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    } else {
        // Remove authentication headers
        axiosInstance.interceptors.request.eject(0);
    }
}

export default axiosInstance;
