// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    BaseURL: 'https://lms.devel.uz/api/',
    server: 60,
    API_BASE_URL: 'https://lms.devel.uz',

    // BaseURL: 'http://localhost:23624/api/',
    // server: 60,
    // API_BASE_URL: 'http://localhost:23624', //23624', 64093'

    MainPage: 'http://localhost:4200', //23624', 64093'

    PAYME_MERCHANT_ID: '65433052388fec2e4593dcd8',
    //PAYME_KEY: 'FwtnbYItiOizx2yKnA@AMVxcfJkb1xmm4r1h', //test
    PAYME_KEY: 'wUABbtd50yYdV7K??jp0GP0v7D&H2sSYxIrf',
    maxUploadFileSize: 50000000,
};

export const MainPage = {
    key: 'value',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
