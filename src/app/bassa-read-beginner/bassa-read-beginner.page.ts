import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController } from '@ionic/angular';
import { db } from '../firebase.config';
import { ref, get } from 'firebase/database';

@Component({
  selector: 'app-bassa-read-beginner',
  templateUrl: './bassa-read-beginner.page.html',
  styleUrls: ['./bassa-read-beginner.page.css'],
})
export class BassaReadBeginnerPage implements OnInit {
pdfs: any[] = [];
  error: string = '';

  constructor(
    private iab: InAppBrowser,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    await this.loadReadingMaterials();
  }

  async loadReadingMaterials() {
    this.error = '';
    this.pdfs = [];

    const loading = await this.loadingCtrl.create({
      message: 'Loading reading materials...',
      spinner: 'crescent',
    });
    await loading.present();

    try {
      const dataRef = ref(db, 'Bassa/Beginner Lessons/Reading Lessons');
      console.log('Fetching data from:', 'Bassa/Beginner Lessons/Reading Lessons');

      const snapshot = await get(dataRef);
      console.log('Snapshot exists:', snapshot.exists());

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Data received:', data);

        this.pdfs = Object.keys(data).map((key) => ({
          name: key,
          url: data[key],
        }));

        // Sort lessons numerically
        this.pdfs.sort((a, b) => {
          const numA = parseInt(a.name.replace(/\D/g, '')) || 0;
          const numB = parseInt(b.name.replace(/\D/g, '')) || 0;
          return numA - numB;
        });

        console.log('Final PDFs array:', this.pdfs);
      } else {
        this.error = 'No reading materials found.';
      }
    } catch (err) {
      console.error('Firebase error:', err);
      this.error = 'Failed to load reading materials.';
    } finally {
      await loading.dismiss();
    }
  }

  openPDF(pdfUrl: string) {
    if (!pdfUrl) {
      console.error('No URL provided for PDF');
      return;
    }

    console.log('Opening PDF:', pdfUrl);
    this.iab.create(pdfUrl, '_blank', {
      location: 'no',
      toolbar: 'yes',
    });
  }


}
