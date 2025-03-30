import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
  API_URL: 'http://localhost:8000/api/v1',
};
