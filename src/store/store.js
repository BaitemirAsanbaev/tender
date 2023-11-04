import axios from "axios";
import { makeAutoObservable } from "mobx";
import { api } from "../api";

export default class Store {
  constructor() {
    makeAutoObservable(this);
  }
  isAuthed = false;
  user = {
    role: "company",
  };

  setAuthed(authed) {
    this.isAuthed = authed;
  }

  setUser(user) {
    this.user = user;
  }
  setMessage(text) {
    this.message = text;
  }

  async login(data) {
    axios.post(api + "login", data).then((res) => {
      localStorage.setItem("access", res.data.access_token);
      localStorage.setItem("refresh", res.data.refresh_token);
    });
  }
  async register(data) {
    axios.post(api + "register", data).then((res) => {
      localStorage.setItem("access", res.data.access_token);
      localStorage.setItem("refresh", res.data.refresh_token);
    });
  }
  async logout() {
    localStorage.clear();
  }
}
