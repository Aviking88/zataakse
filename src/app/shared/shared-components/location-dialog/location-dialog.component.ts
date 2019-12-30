import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatBottomSheetRef } from '@angular/material';

export const BROWSERS = {
  CHROME: 'Chrome',
  FIREFOX: 'Firefox',
  SAFARI: 'Safari',
  OPERA: 'Opera',
  IE: 'IE',
  MS_EDGE: 'MS-Edge',
  MS_EDGE_CHROMIUM: 'MS-Edge-Chromium',
  FB_MESSANGER: 'FB-Messanger',
  SAMSUNG: 'Samsung',
  UCBROWSER: 'UC-Browser',
  UNKNOWN: 'Unknown'
};
@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss'],
})
export class LocationDialogComponent implements OnInit {
  selectedBrowser = [];
  stepsMap = {
    [BROWSERS.CHROME]: [
      {
        step: '1',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '2',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '3',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
    ],
    [BROWSERS.MS_EDGE]: [
      {
        step: '1',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '2',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '3',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
    ],
    [BROWSERS.FIREFOX]: [
      {
        step: '1',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '2',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '3',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
    ],
    [BROWSERS.SAFARI]: [
      {
        step: '1',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '2',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '3',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
    ],
    [BROWSERS.UNKNOWN]: [
      {
        step: '1',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '2',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
      {
        step: '3',
        image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      },
    ],
  };

  chrome = [
    {
      step: '1',
      image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      step: '2',
      image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      step: '3',
      image: 'https://password-managers.bestreviews.net/files/six-web-browsers.png',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
  ];
  deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService, private bottomRef: MatBottomSheetRef<LocationDialogComponent>) {}

  ngOnInit() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.selectedBrowser = this.stepsMap[this.deviceInfo.browser];
  }

  closePage() {
    this.bottomRef.dismiss();
  }
}
