<<<<<<< HEAD
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
=======
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
>>>>>>> d0a8cfe (test 1)
export default Constants;