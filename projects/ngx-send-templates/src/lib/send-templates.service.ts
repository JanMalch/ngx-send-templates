import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendTemplatesService {
  private readonly streams = new Map<any, BehaviorSubject<TemplateRef<any>>>(
    [
      [defaultTemplateStream, new BehaviorSubject<TemplateRef<any>>(undefined)]
    ]
  );

  private ensureStream(name: any): BehaviorSubject<TemplateRef<any>> {
    if (!this.streams.has(name)) {
      this.streams.set(name, new BehaviorSubject<TemplateRef<any>>(undefined));
    }

    return this.streams.get(name);
  }

  getTemplate(stream: any = defaultTemplateStream): Observable<TemplateRef<any>> {
    return this.ensureStream(stream).asObservable()
      .pipe(filter(x => x !== undefined));
  }

  next(template: TemplateRef<any>, stream: any = defaultTemplateStream) {
    if (stream === null) {
      stream = defaultTemplateStream;
    } // Angular uses null for missing directive inputs
    this.ensureStream(stream).next(template);
  }
}

export const defaultTemplateStream = 'default';
