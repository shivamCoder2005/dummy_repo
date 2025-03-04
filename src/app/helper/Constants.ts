import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

class Constants {
    private baseUrl = 'http://localhost:5000';

    getBaseURL(): String {
        return this.baseUrl;
    }
}
export default Constants;