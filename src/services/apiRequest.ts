// src/utils/apiRequest.ts

export interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
  }
  
  export async function apiRequest<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<T | null> {
    
    const { method = 'GET', headers = {}, body } = options;
  
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      return null;
    }
  }
  