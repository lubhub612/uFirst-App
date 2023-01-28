import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const USERFIRSTNAME_KEY = 'AuthUserfirstname';
const USERLASTNAME_KEY = 'AuthUserlastname';
const USEREMAIL_KEY = 'AuthUseremail';
const USERCITY_KEY = 'AuthUsercity';
const USERSTATES_KEY = 'AuthUserstates';
const USERCOUNTRY_KEY = 'AuthUsercountry';
const USERSMOKER_KEY = 'AuthUsersmoker';
const USERALCHOLIC_KEY = 'AuthUseralcholic';
const USERDOB_KEY = 'AuthUserdob';
const USERAGE_KEY = 'AuthUserage';
const USERROLE_KEY = 'AuthUserrole';
const USERPINCODE_KEY = 'AuthUserpincode';
const USERBLOODGROUP_KEY = 'AuthUserbloodgroup';
const USERPHONE_KEY = 'AuthUserphoneno';
const USERGENDER_KEY = 'AuthUsergender';
const USERADDRESS_KEY = 'AuthUseraddress';
const USERMEDINO_KEY = 'AuthUsermedino';
const USERHEIGHT_KEY = 'AuthUserheight';
const USERHEIGHTU_KEY = 'AuthUserheightunit';
const USERWEIGHT_KEY = 'AuthUserweight';
const USERWEIGHTU_KEY = 'AuthUserweightunit';
const USERFAMILYD_KEY = 'AuthUserfamilydoctor';
const USERFAMILYM_KEY = 'AuthUserfamilymember';
const USEREMEPHONE_KEY = 'AuthUseremephoneno';
const USERDOCFEE_KEY = 'AuthUserdocfee';
const USERDOCABOUT_KEY = 'AuthUserdocabout';
const USERDOCSPEC_KEY = 'AuthUserdocspec';
const USERDOCEDU_KEY = 'AuthUserdocedu';
const USERPIC_KEY = 'AuthUserprofilepic';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  

  signOut() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,token);
  
  }

  public getToken(): string {
   const storedValues: string | any = localStorage.getItem(TOKEN_KEY);
    return  storedValues !== null || storedValues === undefined ? JSON.parse(storedValues) : undefined;
    //return localStorage.getItem(TOKEN_KEY);
   }
 

   public saveFirstname(firstname: string) {
    window.sessionStorage.removeItem(USERFIRSTNAME_KEY);
    window.sessionStorage.setItem(USERFIRSTNAME_KEY, firstname);
    window.localStorage.removeItem(USERFIRSTNAME_KEY);
    window.localStorage.setItem(USERFIRSTNAME_KEY,firstname);
  
  }

  public getFirstname(): string {
    return JSON.parse(localStorage.getItem(USERFIRSTNAME_KEY) as any);
  }


  public saveLastname(lastname: string) {
    window.sessionStorage.removeItem(USERLASTNAME_KEY);
    window.sessionStorage.setItem(USERLASTNAME_KEY, lastname);
    window.localStorage.removeItem(USERLASTNAME_KEY);
    window.localStorage.setItem(USERLASTNAME_KEY,lastname);

  }

  public getLastname(): string {
   
    return JSON.parse(localStorage.getItem(USERLASTNAME_KEY) as any);
  }


   public saveUsername(username: string) {
     window.sessionStorage.removeItem(USERNAME_KEY);
     window.sessionStorage.setItem(USERNAME_KEY, username);
     window.localStorage.removeItem(USERNAME_KEY);
     window.localStorage.setItem(USERNAME_KEY,username);
   }
 
   public getUsername(): string {
     return JSON.parse(localStorage.getItem(USERNAME_KEY) as any);
   }
 

   public saveUseremail(useremail: string) {
    window.sessionStorage.removeItem(USEREMAIL_KEY);
    window.sessionStorage.setItem(USEREMAIL_KEY, useremail);
    window.localStorage.removeItem(USEREMAIL_KEY);
    window.localStorage.setItem(USEREMAIL_KEY,useremail);
  }

  public getUseremail(): string {
    return JSON.parse(localStorage.getItem(USEREMAIL_KEY) as any);
  }


  public saveUsercity(usercity: string) {
    window.sessionStorage.removeItem(USERCITY_KEY);
    window.sessionStorage.setItem(USERCITY_KEY, usercity);
    window.localStorage.removeItem(USERCITY_KEY);
    window.localStorage.setItem(USERCITY_KEY,usercity);
  }

  public getUsercity(): string {
    return JSON.parse(localStorage.getItem(USERCITY_KEY) as any);
  }
 
  public saveUserstates(userstates: string) {
    window.sessionStorage.removeItem(USERSTATES_KEY);
    window.sessionStorage.setItem(USERSTATES_KEY, userstates);
    window.localStorage.removeItem(USERSTATES_KEY);
    window.localStorage.setItem(USERSTATES_KEY,userstates);
  }

  public getUserstates(): string {
    return JSON.parse(localStorage.getItem(USERSTATES_KEY) as any);
  }  
 
   
  public saveUsercountry(usercountry: string) {
    window.sessionStorage.removeItem(USERCOUNTRY_KEY);
    window.sessionStorage.setItem(USERCOUNTRY_KEY, usercountry);
    window.localStorage.removeItem(USERCOUNTRY_KEY);
    window.localStorage.setItem(USERCOUNTRY_KEY,usercountry);
  }

  public getUsercountry(): string {
    return JSON.parse(localStorage.getItem(USERCOUNTRY_KEY) as any);
  }
 
  public saveUsersmoker(usersmoker: string) {
    window.sessionStorage.removeItem(USERSMOKER_KEY);
    window.sessionStorage.setItem(USERSMOKER_KEY, usersmoker);
    window.localStorage.removeItem(USERSMOKER_KEY);
    window.localStorage.setItem(USERSMOKER_KEY,usersmoker);
  }

  public getUsersmoker(): string {
    return JSON.parse(localStorage.getItem(USERSMOKER_KEY) as any);
  }
 
  public saveUseralcholic(useralcholic: string) {
    window.sessionStorage.removeItem(USERALCHOLIC_KEY);
    window.sessionStorage.setItem(USERALCHOLIC_KEY, useralcholic);
    window.localStorage.removeItem(USERALCHOLIC_KEY);
    window.localStorage.setItem(USERALCHOLIC_KEY,useralcholic);
  }

  public getUseralcholic(): string {
    return JSON.parse(localStorage.getItem(USERALCHOLIC_KEY) as any);
  }


  public saveUserdob(userdob: string) {
    window.sessionStorage.removeItem(USERDOB_KEY);
    window.sessionStorage.setItem(USERDOB_KEY, userdob);
    window.localStorage.removeItem(USERDOB_KEY);
    window.localStorage.setItem(USERDOB_KEY,userdob);
  }

  public getUserdob(): string {
    return JSON.parse(localStorage.getItem(USERDOB_KEY) as any);
  }


  public saveUserage(userage: string) {
    window.sessionStorage.removeItem(USERAGE_KEY);
    window.sessionStorage.setItem(USERAGE_KEY, userage);
    window.localStorage.removeItem(USERAGE_KEY);
    window.localStorage.setItem(USERAGE_KEY,userage);
  }

  public getUserage(): string {
    return JSON.parse(localStorage.getItem(USERAGE_KEY) as any);
  }

  public saveUserrole(userrole: string) {
    window.sessionStorage.removeItem(USERROLE_KEY);
    window.sessionStorage.setItem(USERROLE_KEY, userrole);
    window.localStorage.removeItem(USERROLE_KEY);
    window.localStorage.setItem(USERROLE_KEY,userrole);
  }

  public getUserrole(): string {
    return JSON.parse(localStorage.getItem(USERROLE_KEY) as any);
  }


  public saveUserpincode(userpincode: string) {
    window.sessionStorage.removeItem(USERPINCODE_KEY);
    window.sessionStorage.setItem(USERPINCODE_KEY, userpincode);
    window.localStorage.removeItem(USERPINCODE_KEY);
    window.localStorage.setItem(USERPINCODE_KEY,userpincode);
  }

  public Userpincode(): string {
    return JSON.parse(localStorage.getItem(USERPINCODE_KEY) as any);
  }


  public saveUserbloodgroup(userbloodgroup: string) {
    window.sessionStorage.removeItem(USERBLOODGROUP_KEY);
    window.sessionStorage.setItem(USERBLOODGROUP_KEY, userbloodgroup);
    window.localStorage.removeItem(USERBLOODGROUP_KEY);
    window.localStorage.setItem(USERBLOODGROUP_KEY,userbloodgroup);
  }

  public Userbloodgroup(): string {
    return JSON.parse(localStorage.getItem(USERBLOODGROUP_KEY) as any);
  }
 

  public saveUserphoneno(userphoneno: string) {
    window.sessionStorage.removeItem(USERPHONE_KEY);
    window.sessionStorage.setItem(USERPHONE_KEY, userphoneno);
    window.localStorage.removeItem(USERPHONE_KEY);
    window.localStorage.setItem(USERPHONE_KEY,userphoneno);
  }

  public Userphoneno(): string {
    return JSON.parse(localStorage.getItem(USERPHONE_KEY) as any);
  }

  public saveUsergender(usergender: string) {
    window.sessionStorage.removeItem(USERGENDER_KEY);
    window.sessionStorage.setItem(USERGENDER_KEY, usergender);
    window.localStorage.removeItem(USERGENDER_KEY);
    window.localStorage.setItem(USERGENDER_KEY,usergender);
  }

  public Usergender(): string {
    return JSON.parse(localStorage.getItem(USERGENDER_KEY) as any);
  }

  public saveUseraddress(useraddress: string) {
    window.sessionStorage.removeItem(USERADDRESS_KEY);
    window.sessionStorage.setItem(USERADDRESS_KEY, useraddress);
    window.localStorage.removeItem(USERADDRESS_KEY);
    window.localStorage.setItem(USERADDRESS_KEY,useraddress);
  }

  public Useraddress(): string {
    return JSON.parse(localStorage.getItem(USERADDRESS_KEY) as any);
  }


  public saveUsermedino(usermedino: string) {
    window.sessionStorage.removeItem(USERMEDINO_KEY);
    window.sessionStorage.setItem(USERMEDINO_KEY, usermedino);
    window.localStorage.removeItem(USERMEDINO_KEY);
    window.localStorage.setItem(USERMEDINO_KEY,usermedino);
  }

  public Usermedino(): string {
    return JSON.parse(localStorage.getItem(USERMEDINO_KEY) as any);
  }


  public saveUserheight(userheight: string) {
    window.sessionStorage.removeItem(USERHEIGHT_KEY);
    window.sessionStorage.setItem(USERHEIGHT_KEY, userheight);
    window.localStorage.removeItem(USERHEIGHT_KEY);
    window.localStorage.setItem(USERHEIGHT_KEY,userheight);
  }

  public Userheight(): string {
    return JSON.parse(localStorage.getItem(USERHEIGHT_KEY) as any);
  }

  public saveUserheightuint(userheightunit: string) {
    window.sessionStorage.removeItem(USERHEIGHTU_KEY);
    window.sessionStorage.setItem(USERHEIGHTU_KEY, userheightunit);
    window.localStorage.removeItem(USERHEIGHTU_KEY);
    window.localStorage.setItem(USERHEIGHTU_KEY,userheightunit);
  }

  public Userheightunit(): string {
    return JSON.parse(localStorage.getItem(USERHEIGHTU_KEY) as any);
  }

  public saveUserweight(userweight: string) {
    window.sessionStorage.removeItem(USERWEIGHT_KEY);
    window.sessionStorage.setItem(USERWEIGHT_KEY, userweight);
    window.localStorage.removeItem(USERWEIGHT_KEY);
    window.localStorage.setItem(USERWEIGHT_KEY,userweight);
  }

  public Userweight(): string {
    return JSON.parse(localStorage.getItem(USERWEIGHT_KEY) as any);
  }

  public saveUserweightuint(userweightunit: string) {
    window.sessionStorage.removeItem(USERWEIGHTU_KEY);
    window.sessionStorage.setItem(USERWEIGHTU_KEY, userweightunit);
    window.localStorage.removeItem(USERWEIGHTU_KEY);
    window.localStorage.setItem(USERWEIGHTU_KEY,userweightunit);
  }

  public Userweightunit(): string {
    return JSON.parse(localStorage.getItem(USERWEIGHTU_KEY) as any);
  }

  public saveUserfamilydoctor(userfamilydoctor: string) {
    window.sessionStorage.removeItem(USERFAMILYD_KEY);
    window.sessionStorage.setItem(USERFAMILYD_KEY, userfamilydoctor);
    window.localStorage.removeItem(USERFAMILYD_KEY);
    window.localStorage.setItem(USERFAMILYD_KEY,userfamilydoctor);
  }

  public Userfamilydoctor(): string {
    return JSON.parse(localStorage.getItem(USERFAMILYD_KEY) as any);
  }


  public saveUserfamilymember(userfamilymember: string) {
    window.sessionStorage.removeItem(USERFAMILYM_KEY);
    window.sessionStorage.setItem(USERFAMILYM_KEY, userfamilymember);
    window.localStorage.removeItem(USERFAMILYM_KEY);
    window.localStorage.setItem(USERFAMILYM_KEY, userfamilymember);
  }

  public Userfamilymember(): string {
    return JSON.parse(localStorage.getItem(USERFAMILYM_KEY) as any);
  }

  public saveUseremergencyphoneno(useremephoneno: string) {
    window.sessionStorage.removeItem(USEREMEPHONE_KEY);
    window.sessionStorage.setItem(USEREMEPHONE_KEY, useremephoneno);
    window.localStorage.removeItem(USEREMEPHONE_KEY);
    window.localStorage.setItem(USEREMEPHONE_KEY,useremephoneno);
  }

  public Useremergencyphoneno(): string {
    return JSON.parse(localStorage.getItem(USEREMEPHONE_KEY) as any);
  }


  public saveUserdoctorfee(doctorfee: string) {
    window.sessionStorage.removeItem(USERDOCFEE_KEY);
    window.sessionStorage.setItem(USERDOCFEE_KEY, doctorfee);
    window.localStorage.removeItem(USERDOCFEE_KEY);
    window.localStorage.setItem(USERDOCFEE_KEY,doctorfee);
  }

  public Userdoctorfee(): string {
    return JSON.parse(localStorage.getItem(USERDOCFEE_KEY) as any);
  }

  public saveUserdoctorabout(doctorabout: string) {
    window.sessionStorage.removeItem(USERDOCABOUT_KEY);
    window.sessionStorage.setItem(USERDOCABOUT_KEY, doctorabout);
    window.localStorage.removeItem(USERDOCABOUT_KEY);
    window.localStorage.setItem(USERDOCABOUT_KEY,doctorabout);
  }

  public Userdoctorabout(): string {
    return JSON.parse(localStorage.getItem(USERDOCABOUT_KEY) as any);
  }

  public saveUserdoctorspecialization(doctorspecialization: string) {
    window.sessionStorage.removeItem(USERDOCSPEC_KEY);
    window.sessionStorage.setItem(USERDOCSPEC_KEY, doctorspecialization);
    window.localStorage.removeItem(USERDOCSPEC_KEY);
    window.localStorage.setItem(USERDOCSPEC_KEY,doctorspecialization);
  }

  public Userdoctorspecialization(): string {
    return JSON.parse(localStorage.getItem(USERDOCSPEC_KEY) as any);
  }

  public saveUserdoctoreducation(doctoreducation: string) {
    window.sessionStorage.removeItem(USERDOCEDU_KEY);
    window.sessionStorage.setItem(USERDOCEDU_KEY, doctoreducation);
    window.localStorage.removeItem(USERDOCEDU_KEY);
    window.localStorage.setItem(USERDOCEDU_KEY,doctoreducation);
  }

  public Userdoctoreducation(): string {
    return JSON.parse(localStorage.getItem(USERDOCEDU_KEY) as any);
  }


  public saveUserprofilepic(userproflepic: string) {
    window.sessionStorage.removeItem(USERPIC_KEY);
    window.sessionStorage.setItem(USERPIC_KEY, userproflepic);
    window.localStorage.removeItem(USERPIC_KEY);
    window.localStorage.setItem(USERPIC_KEY,userproflepic);
  }

  public Userprofilepic(): string {
    return JSON.parse(localStorage.getItem(USERPIC_KEY) as any);
  }


}
