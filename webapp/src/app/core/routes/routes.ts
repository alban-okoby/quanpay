export class Routes {

  private id!: any;
  private basePath: string = '';

  // AUTH PAGES
  private auth = '/auth';
  AUTH_SIGN_UP:string = `${this.auth}/signup`;
  AUTH_SIGN_IN:string = `${this.auth}/signin`;
  AUTH_RESET_PASSWORD:string = `${this.auth}/reset-password`;

  // PRINCIPAL PAGES
  DASHBOARD: string = `${this.basePath}`;
  MY_ACCOUNTS: string = `${this.basePath}/myaccounts`;
  ERROR_404: string = `${this.basePath}/error/not-found`;
}
