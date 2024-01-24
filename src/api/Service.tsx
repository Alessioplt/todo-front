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
            console.log(token);
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(

    (response) => {
        if (response.data && response.data.errors) {
            const error = response.data.errors[0];

            if (error.extensions && error.extensions.code === 'UNAUTHENTICATED') {
                console.error('Unauthorized error:', error.message);
                //navigate("/")
                return Promise.reject(error.message);
            }
        }
        return response;
    },
    (error) => {
        console.error('Request failed with error:', error);
        //navigate("/")
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
