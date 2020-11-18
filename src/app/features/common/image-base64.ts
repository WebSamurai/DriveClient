import { Observable } from 'rxjs';

export function GetBase64(url: string): Observable<string> {

    return new Observable((observer) => {

        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            const reader = new FileReader();
            reader.onloadend = () => {
                observer.next(reader.result.toString());
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();


        // const xmlHTTP = new XMLHttpRequest();
        // xmlHTTP.open('GET', url, true);
        // xmlHTTP.responseType = 'arraybuffer';
        // xmlHTTP.onload = (e) => {
        //     const reader = new FileReader();

        //     const arr = new Uint8Array(this.response);
        //     const raw = String.fromCharCode.apply(null, arr);
        //     const b64 = base64(raw);
        //     reader.readAsDataURL(xhr.response);
        //     observer.next('data:image/png;base64,' + b64);
        //     observer.complete();
        // };
        // xmlHTTP.send();


    });

}