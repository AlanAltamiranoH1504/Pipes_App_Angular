import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export class BasicPage {
  protected nameLower = signal<string>("Alan");
  protected nameUpper = signal<string>("Vanessa");
  protected fullName = signal<string>("AlAn AlTAMiranO");

  protected customDate = signal<Date>(new Date());
}
