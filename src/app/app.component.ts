import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateMeta, TranslationsClient } from '../Nswag/lms.api';
import { TranslocoModule } from '@ngneat/transloco';
import {EditorModule} from 'primeng/editor'
import {ButtonModule} from 'primeng/button'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslocoModule, EditorModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular';
  /**
   *
   */
  constructor(private langService:TranslationsClient) {

  }
  ngOnInit(): void {
  }
}
