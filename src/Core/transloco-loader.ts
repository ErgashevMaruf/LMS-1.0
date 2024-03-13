import { Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { TranslateMeta, TranslationsClient } from "../Nswag/lms.api";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private translationsClient:TranslationsClient) {
    }
    getTranslation(lang: string): Observable<Translation> {
      return this.translationsClient.getTranslations(new TranslateMeta({
          module: 'nav',
          lang: lang
      })).pipe(map(result => {
          let translation: Translation = {};
          result?.forEach(keyValue => translation[keyValue.key] = keyValue.value);
          return translation;
      }))
  }
}
