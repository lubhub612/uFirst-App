import { HttpHeaders } from '@angular/common/http';

export class Config {
    url: string = 'https://api.cashfree.com/verification/offline-aadhaar/otp';
    httpOptions: any = {
        headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'x-client-id': 'CF292963CF0497KPE6I71C14AIDG',
           'x-client-secret':'645e102531ef8f4dff6ea704765391e94f6dee03'
           
        })
    }
}