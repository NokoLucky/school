import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./track/track.module').then( m => m.TrackPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'english-score',
    loadChildren: () => import('./english-score/english-score.module').then( m => m.EnglishScorePageModule)
  },
  {
    path: 'english-tests',
    loadChildren: () => import('./english-tests/english-tests.module').then( m => m.EnglishTestsPageModule)
  },
  {
    path: 'english-test1',
    loadChildren: () => import('./english-test1/english-test1.module').then( m => m.EnglishTest1PageModule)
  },
  {
    path: 'french',
    loadChildren: () => import('./french/french.module').then( m => m.FrenchPageModule)
  },
  {
    path: 'portuguese',
    loadChildren: () => import('./portuguese/portuguese.module').then( m => m.PortuguesePageModule)
  },
  {
    path: 'eng-categories',
    loadChildren: () => import('./eng-categories/eng-categories.module').then( m => m.EngCategoriesPageModule)
  },
  {
    path: 'fre-categories',
    loadChildren: () => import('./fre-categories/fre-categories.module').then( m => m.FreCategoriesPageModule)
  },
  {
    path: 'por-categories',
    loadChildren: () => import('./por-categories/por-categories.module').then( m => m.PorCategoriesPageModule)
  },
  {
    path: 'eng-begin-unit11',
    loadChildren: () => import('./eng-begin-unit11/eng-begin-unit11.module').then( m => m.EngBeginUnit11PageModule)
  },
  {
    path: 'eng-begin-unit12',
    loadChildren: () => import('./eng-begin-unit12/eng-begin-unit12.module').then( m => m.EngBeginUnit12PageModule)
  },
  {
    path: 'eng-begin-unit13',
    loadChildren: () => import('./eng-begin-unit13/eng-begin-unit13.module').then( m => m.EngBeginUnit13PageModule)
  },
  {
    path: 'eng-begin-unit14',
    loadChildren: () => import('./eng-begin-unit14/eng-begin-unit14.module').then( m => m.EngBeginUnit14PageModule)
  },
  {
    path: 'eng-begin-unit15',
    loadChildren: () => import('./eng-begin-unit15/eng-begin-unit15.module').then( m => m.EngBeginUnit15PageModule)
  },
  {
    path: 'eng-begin-unit16',
    loadChildren: () => import('./eng-begin-unit16/eng-begin-unit16.module').then( m => m.EngBeginUnit16PageModule)
  },
  {
    path: 'eng-begin-unit17',
    loadChildren: () => import('./eng-begin-unit17/eng-begin-unit17.module').then( m => m.EngBeginUnit17PageModule)
  },
  {
    path: 'eng-begin-unit18',
    loadChildren: () => import('./eng-begin-unit18/eng-begin-unit18.module').then( m => m.EngBeginUnit18PageModule)
  },
  {
    path: 'eng-begin-unit19',
    loadChildren: () => import('./eng-begin-unit19/eng-begin-unit19.module').then( m => m.EngBeginUnit19PageModule)
  },
  {
    path: 'eng-begin-unit20',
    loadChildren: () => import('./eng-begin-unit20/eng-begin-unit20.module').then( m => m.EngBeginUnit20PageModule)
  },
  {
    path: 'eng-begin-unit21',
    loadChildren: () => import('./eng-begin-unit21/eng-begin-unit21.module').then( m => m.EngBeginUnit21PageModule)
  },
  {
    path: 'eng-begin-unit22',
    loadChildren: () => import('./eng-begin-unit22/eng-begin-unit22.module').then( m => m.EngBeginUnit22PageModule)
  },
  {
    path: 'eng-begin-unit23',
    loadChildren: () => import('./eng-begin-unit23/eng-begin-unit23.module').then( m => m.EngBeginUnit23PageModule)
  },
  {
    path: 'eng-begin-unit24',
    loadChildren: () => import('./eng-begin-unit24/eng-begin-unit24.module').then( m => m.EngBeginUnit24PageModule)
  },
  {
    path: 'eng-begin-unit25',
    loadChildren: () => import('./eng-begin-unit25/eng-begin-unit25.module').then( m => m.EngBeginUnit25PageModule)
  },
  {
    path: 'eng-begin-unit26',
    loadChildren: () => import('./eng-begin-unit26/eng-begin-unit26.module').then( m => m.EngBeginUnit26PageModule)
  },
  {
    path: 'eng-begin-unit27',
    loadChildren: () => import('./eng-begin-unit27/eng-begin-unit27.module').then( m => m.EngBeginUnit27PageModule)
  },
  {
    path: 'eng-begin-unit28',
    loadChildren: () => import('./eng-begin-unit28/eng-begin-unit28.module').then( m => m.EngBeginUnit28PageModule)
  },
  {
    path: 'eng-begin-unit29',
    loadChildren: () => import('./eng-begin-unit29/eng-begin-unit29.module').then( m => m.EngBeginUnit29PageModule)
  },
  {
    path: 'eng-begin-unit30',
    loadChildren: () => import('./eng-begin-unit30/eng-begin-unit30.module').then( m => m.EngBeginUnit30PageModule)
  },
  {
    path: 'english-audio-list',
    loadChildren: () => import('./english-audio-list/english-audio-list.module').then( m => m.EnglishAudioListPageModule)
  },
  {
    path: 'french-audio-list',
    loadChildren: () => import('./french-audio-list/french-audio-list.module').then( m => m.FrenchAudioListPageModule)
  },
  {
    path: 'portuguese-audio-list',
    loadChildren: () => import('./portuguese-audio-list/portuguese-audio-list.module').then( m => m.PortugueseAudioListPageModule)
  },
  {
    path: 'eng-learn',
    loadChildren: () => import('./eng-learn/eng-learn.module').then( m => m.EngLearnPageModule)
  },
  {
    path: 'por-learn',
    loadChildren: () => import('./por-learn/por-learn.module').then( m => m.PorLearnPageModule)
  },
  {
    path: 'fre-learn',
    loadChildren: () => import('./fre-learn/fre-learn.module').then( m => m.FreLearnPageModule)
  },
  {
    path: 'eng-images',
    loadChildren: () => import('./eng-images/eng-images.module').then( m => m.EngImagesPageModule)
  },
  {
    path: 'por-images',
    loadChildren: () => import('./por-images/por-images.module').then( m => m.PorImagesPageModule)
  },
  {
    path: 'fre-images',
    loadChildren: () => import('./fre-images/fre-images.module').then( m => m.FreImagesPageModule)
  },
  {
    path: 'eng-del1',
    loadChildren: () => import('./eng-del1/eng-del1.module').then( m => m.EngDel1PageModule)
  },
  {
    path: 'eng-del2',
    loadChildren: () => import('./eng-del2/eng-del2.module').then( m => m.EngDel2PageModule)
  },
  {
    path: 'eng-del3',
    loadChildren: () => import('./eng-del3/eng-del3.module').then( m => m.EngDel3PageModule)
  },
  {
    path: 'eng-del4',
    loadChildren: () => import('./eng-del4/eng-del4.module').then( m => m.EngDel4PageModule)
  },
  {
    path: 'eng-del5',
    loadChildren: () => import('./eng-del5/eng-del5.module').then( m => m.EngDel5PageModule)
  },
  {
    path: 'eng-restaurants',
    loadChildren: () => import('./eng-restaurants/eng-restaurants.module').then( m => m.EngRestaurantsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'swa-categories',
    loadChildren: () => import('./swa-categories/swa-categories.module').then( m => m.SwaCategoriesPageModule)
  },
  {
    path: 'swa-learn',
    loadChildren: () => import('./swa-learn/swa-learn.module').then( m => m.SwaLearnPageModule)
  },
  {
    path: 'swa-audio-list',
    loadChildren: () => import('./swa-audio-list/swa-audio-list.module').then( m => m.SwaAudioListPageModule)
  },
  {
    path: 'swa-picture-lessons',
    loadChildren: () => import('./swa-picture-lessons/swa-picture-lessons.module').then( m => m.SwaPictureLessonsPageModule)
  },
  {
    path: 'swa-reading',
    loadChildren: () => import('./swa-reading/swa-reading.module').then( m => m.SwaReadingPageModule)
  },
  {
    path: 'swa-read-beginner',
    loadChildren: () => import('./swa-read-beginner/swa-read-beginner.module').then( m => m.SwaReadBeginnerPageModule)
  },
  {
    path: 'swa-read-intermediate',
    loadChildren: () => import('./swa-read-intermediate/swa-read-intermediate.module').then( m => m.SwaReadIntermediatePageModule)
  },
  {
    path: 'swa-read-advanced',
    loadChildren: () => import('./swa-read-advanced/swa-read-advanced.module').then( m => m.SwaReadAdvancedPageModule)
  },
  {
    path: 'swa-audio-beginner',
    loadChildren: () => import('./swa-audio-beginner/swa-audio-beginner.module').then( m => m.SwaAudioBeginnerPageModule)
  },
  {
    path: 'swa-audio-intermediate',
    loadChildren: () => import('./swa-audio-intermediate/swa-audio-intermediate.module').then( m => m.SwaAudioIntermediatePageModule)
  },
  {
    path: 'swa-audio-advanced',
    loadChildren: () => import('./swa-audio-advanced/swa-audio-advanced.module').then( m => m.SwaAudioAdvancedPageModule)
  },
  {
    path: 'bassa-categories',
    loadChildren: () => import('./bassa-categories/bassa-categories.module').then( m => m.BassaCategoriesPageModule)
  },
  {
    path: 'hausa-categories',
    loadChildren: () => import('./hausa-categories/hausa-categories.module').then( m => m.HausaCategoriesPageModule)
  },
  {
    path: 'hausa-learn',
    loadChildren: () => import('./hausa-learn/hausa-learn.module').then( m => m.HausaLearnPageModule)
  },
  {
    path: 'bassa-learn',
    loadChildren: () => import('./bassa-learn/bassa-learn.module').then( m => m.BassaLearnPageModule)
  },
  {
    path: 'bassa-reading',
    loadChildren: () => import('./bassa-reading/bassa-reading.module').then( m => m.BassaReadingPageModule)
  },
  {
    path: 'bassa-read-beginner',
    loadChildren: () => import('./bassa-read-beginner/bassa-read-beginner.module').then( m => m.BassaReadBeginnerPageModule)
  },
  {
    path: 'bassa-audio',
    loadChildren: () => import('./bassa-audio/bassa-audio.module').then( m => m.BassaAudioPageModule)
  },
  {
    path: 'bassa-audio-beginner',
    loadChildren: () => import('./bassa-audio-beginner/bassa-audio-beginner.module').then( m => m.BassaAudioBeginnerPageModule)
  },
  {
    path: 'hausa-audio-list',
    loadChildren: () => import('./hausa-audio-list/hausa-audio-list.module').then( m => m.HausaAudioListPageModule)
  },
  {
    path: 'hausa-audio-beginner',
    loadChildren: () => import('./hausa-audio-beginner/hausa-audio-beginner.module').then( m => m.HausaAudioBeginnerPageModule)
  },
  {
    path: 'hausa-reading',
    loadChildren: () => import('./hausa-reading/hausa-reading.module').then( m => m.HausaReadingPageModule)
  },
  {
    path: 'hausa-read-beginner',
    loadChildren: () => import('./hausa-read-beginner/hausa-read-beginner.module').then( m => m.HausaReadBeginnerPageModule)
  },
  {
    path: 'duala-categories',
    loadChildren: () => import('./duala-categories/duala-categories.module').then( m => m.DualaCategoriesPageModule)
  },
  {
    path: 'duala-audio-beginner',
    loadChildren: () => import('./duala-audio-beginner/duala-audio-beginner.module').then( m => m.DualaAudioBeginnerPageModule)
  },
  {
    path: 'spanish-audio-beginner',
    loadChildren: () => import('./spanish-audio-beginner/spanish-audio-beginner.module').then( m => m.SpanishAudioBeginnerPageModule)
  },
  {
    path: 'spanish-categories',
    loadChildren: () => import('./spanish-categories/spanish-categories.module').then( m => m.SpanishCategoriesPageModule)
  },
  {
    path: 'wolof-categories',
    loadChildren: () => import('./wolof-categories/wolof-categories.module').then( m => m.WolofCategoriesPageModule)
  },
  {
    path: 'yoruba-categories',
    loadChildren: () => import('./yoruba-categories/yoruba-categories.module').then( m => m.YorubaCategoriesPageModule)
  },
  {
    path: 'yoruba-audio-beginner',
    loadChildren: () => import('./yoruba-audio-beginner/yoruba-audio-beginner.module').then( m => m.YorubaAudioBeginnerPageModule)
  },
  {
    path: 'wolof-audio-beginner',
    loadChildren: () => import('./wolof-audio-beginner/wolof-audio-beginner.module').then( m => m.WolofAudioBeginnerPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
