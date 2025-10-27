import { Injectable } from '@angular/core';
import { auth } from '../firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Email/Password Registration
  async register(email: string, password: string): Promise<any> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: this.getFriendlyErrorMessage(error.code) };
    }
  }

  // Email/Password Login
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: this.getFriendlyErrorMessage(error.code) };
    }
  }

  // Google Login
  async loginWithGoogle(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: this.getFriendlyErrorMessage(error.code) };
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await signOut(auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // Get current user
  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  // Auth state listener
  onAuthStateChanged(callback: (user: User | null) => void) {
    return auth.onAuthStateChanged(callback);
  }

  getUserProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = this.getCurrentUser();
      if (user) {
        resolve({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid,
          metadata: user.metadata
        });
      } else {
        reject('No user logged in');
      }
    });
  }

  // 💬 Friendly error translator
 private getFriendlyErrorMessage(code: string): string {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/invalid-credentials':
    case 'auth/wrong-password':
      return 'Incorrect email or password. Please try again.';
    case 'auth/user-not-found':
      return 'No account found with this email.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    case 'auth/email-already-in-use':
      return 'This email is already registered. Try signing in instead.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/popup-closed-by-user':
      return 'Login was cancelled. Please try again.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    default:
      return 'Something went wrong. Please try again later.';
  }
}

}
