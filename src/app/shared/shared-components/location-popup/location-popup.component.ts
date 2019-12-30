import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatBottomSheetRef, MAT_DIALOG_DATA, MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.scss']
})
export class LocationPopupComponent implements OnInit {
  isLocationNotAllowed = false;
  constructor(private bottomSheet: MatBottomSheet,
              private bottomSheetRef: MatBottomSheetRef<LocationPopupComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.isLocationNotAllowed = data.isLocationNotAllowed;
  }

  ngOnInit() {
  }

  gotoHelpForLocation() {
    console.log('goto help');
    this.bottomSheetRef.dismiss();
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.bottomSheet.open(LocationDialogComponent, {
      data: null,
    });

    dialogRef.afterDismissed().subscribe((result) => {
      // Navigate to page
      console.log('The dialog was closed', result);
    });
  }

  onAllow() {
    this.bottomSheetRef.dismiss();
  }



}
