export class DataFormatter {
  baseURL = "";

  /** params baseURL string*/
  constructor(url: string) {
    this.baseURL = "http://localhost";
  }

  /** return user data object */
  getUserData() {
    return { name: "Thomas" };
  }

  /** return User typed data*/
  formatUserData() {
    return this.getUserData().name;
  }
}
