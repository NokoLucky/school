import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { db } from '../firebase.config'; 
import { ref, onValue } from 'firebase/database';

@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {
  pdfs: any[] = [];
  isLoading: boolean = true;
  error: string = '';

  constructor(private iab: InAppBrowser) {}

  ngOnInit() {
    this.loadFrenchReadingLessons();
  }

  loadFrenchReadingLessons() {
    this.isLoading = true;
    this.error = '';
    
    // CORRECTED PATH: Remove "data/" from the path
    const dataRef = ref(db, 'French/Beginner Lessons/Reading Lessons');
    
    console.log('Loading from corrected path:', 'French/Beginner Lessons/Reading Lessons');

    onValue(dataRef, (snapshot) => {
      console.log('Snapshot exists:', snapshot.exists());
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Data received:', data);
        
        this.pdfs = [];
        Object.keys(data).forEach((key) => {
          this.pdfs.push({
            name: key,
            url: data[key]
          });
        });
        
        // Sort lessons numerically
        this.pdfs.sort((a, b) => {
          const numA = parseInt(a.name.replace('Lesson', '')) || 0;
          const numB = parseInt(b.name.replace('Lesson', '')) || 0;
          return numA - numB;
        });
        
        console.log('Final PDFs array:', this.pdfs);
      } else {
        console.log('No data found at the corrected path');
        this.error = 'No reading materials found.';
      }
      
      this.isLoading = false;
    }, (error) => {
      console.error('Firebase error:', error);
      this.error = 'Failed to load reading materials.';
      this.isLoading = false;
    });
  }

  openPDF(pdfUrl: string) {
    if (!pdfUrl) {
      console.error('No URL provided');
      return;
    }
    
    console.log('Opening PDF:', pdfUrl);
    this.iab.create(pdfUrl, '_blank', { 
      location: 'no', 
      toolbar: 'yes' 
    });
  }
}
