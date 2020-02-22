import authService from '../components/api-authorization/AuthorizeService';

export class ApiClientBase {
  baseApiUrl: string = "https://localhost:44335/";
  
  protected async transformOptions(options: RequestInit): Promise<RequestInit> {
    const token = await authService.getAccessToken();
    options.headers = { ...options.headers, authorization: `Bearer ${token}`};
    return Promise.resolve(options);
  }

  protected transformResult(url: string, response: Response, processor: (response: Response) => any) {
    return processor(response);
  }

  protected getBaseUrl(defaultUrl: string, baseUrl?: string) {
    return this.baseApiUrl;
  }
}