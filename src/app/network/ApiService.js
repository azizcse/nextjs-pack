import axios from 'axios';

class ApiService{
    constructor() {
        this.api = axios.create({
          // Set your API base URL
          baseURL: process.env.NEXT_PUBLIC_API_URL,
        });
    
        // Add default headers, authentication, etc., if needed
        // this.api.defaults.headers.common['Authorization'] = 'Bearer ' + YOUR_TOKEN;
      }

      async get(endpoint, params = {}) {
        try {
          const response = await this.api.get(endpoint, { params });
          return response.data;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    
      async post(endpoint, data = {}) {
        try {
          const response = await this.api.post(endpoint, data);
          return response.data;
        } catch (error) {
          throw this.handleError(error);
        }
      }

      // Add more methods for other HTTP methods (e.g., put, delete) if needed

    handleError(error) {
    // Handle and format errors here
    console.error('API Request Error:', error);

    // Optionally, you can rethrow the error for further handling in components
    throw error;
  }

    handleSuccessResponse(response){
      return{
        success:true,
        message:response?.data?.message,
        data:response?.data?.data,
        status:response?.status
      };
  }
    
}

export default new ApiService();