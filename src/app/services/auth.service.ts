import { Image } from './image.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

const USERID_KEY = 'UserId';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  imageCollections: AngularFirestoreCollection<Image>;
  images: Observable<Image[]>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private storage: Storage,
              private db: AngularFirestore) {

                this.imageCollections = db.collection<Image>('images');
                this.images = this.imageCollections.snapshotChanges().pipe(
                  map(actions => {
                    return actions.map( action => {
                      const data = action.payload.doc.data();
                      console.log(data);
                      return {
                        ...data
                      };
                    });
                  })
                );
               }


  saveImage(url: string) {
    this.imageCollections.add({
      url: url
    });
  }

  getImages() {
    return this.images;
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then( result => {
        console.log(result);
        this.storage.set(USERID_KEY, result.user.uid);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then( result => {
        console.log(result);
        this.storage.set(USERID_KEY, result.user.uid);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    this.authChange.next(false);
    this.isAuthenticated = false;
    this.storage.remove(USERID_KEY);
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/home']);
  }

  

}
