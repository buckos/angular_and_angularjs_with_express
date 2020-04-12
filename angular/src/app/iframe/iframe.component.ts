import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  public url: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {

    this.route.url.subscribe((urlSegments: UrlSegment[]) => {
      const requestedUrl: string = '/legacy/#!/' + urlSegments.join('/');
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl);
    });
  }

  ngOnInit(): void {
  }

}
