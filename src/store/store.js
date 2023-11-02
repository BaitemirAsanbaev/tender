import { makeAutoObservable } from "mobx";

export default class Store{
  constructor(){
    makeAutoObservable(this)
  }
  isAuthed = false;
  user = {
    role:'company'
  }

  setAuthed(authed){
    this.isAuthed = authed
  }

  async setUser(user){
    this.user = user
  }
}