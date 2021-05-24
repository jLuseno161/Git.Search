import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Repository } from '../class/repository';
import { User } from '../class/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  repo: Repository;
  // repo = [];
  username!: string;
  newUserData: any = []
  //private clientId = environment.clientId;

  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, 0, "", "", "", new Date())
    this.repo = new Repository("", "", "", new Date())
  }

  showMyData(username: string) {
    interface ApiResponse {
      login: string
      avatar_url: string,
      followers: number,
      following: number,
      repos_url: string,
      bio: string,
      location: string,
      created_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?`)
        .toPromise().then(response => {
          this.user.login = response.login
          this.user.avatar_url = response.avatar_url
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.repos_url = response.repos_url
          this.user.bio = response.bio
          this.user.location = response.location
          this.user.created_at = response.created_at
          resolve()
        },
          error => {
            reject(error)
          })
    })
    return promise
  }

  showMyRepo(username: string) {
  }



  ngOnInit() { }


}

