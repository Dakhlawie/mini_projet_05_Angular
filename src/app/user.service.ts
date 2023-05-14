import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Observable } from 'rxjs';
import { Role } from './model/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8091/users';

  constructor(private http : HttpClient) { }
  listeUser(): Observable<User[]>{
     
    return this.http.get<User[]>(this.apiURL+"/all");
    
  }
  ajouterUser( user: User):Observable<User>{
      
    return this.http.post<User>(this.apiURL+"/adduser",user);
    
          }
    supprimerUser( id:number){
          const url = `${this.apiURL}/deluser/${id}`;
          
          return this.http.delete(url);
          
        }
    consulterUser(id: number): Observable<User> {
          const url = `${this.apiURL}/getbyid/${id}`;
        
          
          return this.http.get<User>(url);
          
    }
          
    updateUser(user:User) : Observable<User>
          {
               
                return this.http.put<User>(this.apiURL+"/updateuser", user);
          }
          listeRole(): Observable<Role[]>{
     
            return this.http.get<Role[]>(this.apiURL+"/allRole");
            
          }
          ajouterRole( role: Role):Observable<Role>{
              
            return this.http.post<Role>(this.apiURL+"/addrole",role);
            
                  }
            supprimerRole( id:number){
                  const url = `${this.apiURL}/delrole/${id}`;
                  
                  return this.http.delete(url);
                  
                }
            consulterRole(id: number): Observable<Role> {
                  const url = `${this.apiURL}/getrolebyid/${id}`;
                
                  
                  return this.http.get<Role>(url);
                  
            }
                  
            updateRole(role:Role) : Observable<Role>
                  {
                       
                        return this.http.put<Role>(this.apiURL+"/updaterole", role);
                  }
      
}
