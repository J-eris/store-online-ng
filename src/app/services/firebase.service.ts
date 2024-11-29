import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: 'AIzaSyBVH7bHNMrTlZUEzYiHZ9MRMTYEIRtXT3c',
    authDomain: 'store-online-cf226.firebaseapp.com',
    databaseURL: 'https://store-online-cf226-default-rtdb.firebaseio.com',
    projectId: 'store-online-cf226',
    storageBucket: 'store-online-cf226.firebasestorage.app',
    messagingSenderId: '313002932585',
    appId: '1:313002932585:web:96d47e932cd8ebdfe565f8',
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
