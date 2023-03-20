import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent  implements OnInit{
  ngOnInit() {

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }}