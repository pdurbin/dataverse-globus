import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl: string;
  id: number;
  redirectUploadURL: string;
  redirectDownloadURL: string;
  redirectDownloadFileURL: string;
  basicGlobusToken: string;
  globusClientId: string;
  globusEndpoint: string;
  bucket: string;
  apiToken: string;
  constructor() { }
}
