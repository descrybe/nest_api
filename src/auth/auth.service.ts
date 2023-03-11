import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    signin() {
        return {
            msg: 'you have signed in'
        }
    }

    signup() {
        return {
            msg: 'you have signed up'
        }
    }
}
