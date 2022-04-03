import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getData<T>(key: string): T {
    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : ''
  }

  setData<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeData(key: string): void {
    localStorage.removeItem(key)
  }
}
