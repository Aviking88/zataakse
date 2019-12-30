import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
// import { PrelaunchService } from '../prelaunch.service';
// import { CookieService } from 'src/app/shared/services/cookie.service';
import { MatSnackBar, MatBottomSheet, MatDialog } from '@angular/material';
import { LocationPopupComponent } from '../location-popup/location-popup.component';
// import { LocationPopupComponent } from '../location-popup/location-popup.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit, OnDestroy {
  @Input() data = [
    {
      img: 'assets/img/core/slider2.png',
      alt: '',
      text: 'MAIN_PAGE.CAROUSAL_MSG_1'
    },
    {
      img: 'assets/img/core/slider1.png',
      alt: '',
      text: 'MAIN_PAGE.CAROUSAL_MSG_2'
    },
    {
      img: 'assets/img/core/slider3.png',
      alt: '',
      text: 'MAIN_PAGE.CAROUSAL_MSG_3'
    },
    { img: 'assets/img/core/slider3.png', alt: '', text: 'MAIN_PAGE.CAROUSAL_MSG_4' }
  ];
  transform: number;
  selectedIndex = 0;
  sliderIntervalRef: any;

  constructor(
    public translate: TranslateService,
    private router: Router,
    // private prelaunchService: PrelaunchService,
    // private cookieService: CookieService,
    private matSnack: MatSnackBar,
    private bottomsheet: MatBottomSheet,
  ) {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    this.sliderIntervalRef = setInterval(() =>{
     this.selected((this.selectedIndex + 1) % this.data.length);
    }, 2500);
  }

  ngOnDestroy() {
    clearInterval(this.sliderIntervalRef);
  }

  selected(x) {
    this.selectedIndex = this.selectedIndex > this.data.length ? 0 : x;
    this.transform = 100 - x * 50;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i) {
    this.transform = 100 - i * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }

  onSwipe(evt) {
    const x =
      Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
    if (y.includes('up')) {
      const index = (this.selectedIndex + 1) % this.data.length;
      this.selected(index);
      return;
    }

    if (y.includes('down')) {
      const index =
        this.selectedIndex <= 0
          ? this.data.length - 1
          : (this.selectedIndex - 1) % this.data.length;
      this.selected(index);
      return;
    }
  }

  onSubmitButtonClick() {
    const disRef = this.bottomsheet.open(LocationPopupComponent, {
      data: {
        isLocationNotAllowed: false,
      }
    });
    disRef.afterDismissed().subscribe(() => {
      this.setCurrentLocation();
    });
  }

  setCurrentLocation() {
    // this.canShowLocationPopup = false;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // this.prelaunchService.setLocationData(latitude, longitude);
          this.router.navigate(['login-signup']);
        },
        error => {
          // User blocked location
          // LocationPopupComponent
          if (error.code === 1) {
            this.bottomsheet.open(LocationPopupComponent, {
              data: {
                isLocationNotAllowed: true,
              }
            });
          }
          console.log(error);
        }
      );
    }
  }
}
