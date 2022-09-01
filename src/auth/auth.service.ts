import { Injectable } from '@nestjs/common';
import { AuthInterface } from './interface/auth.interface'
@Injectable()
export class AuthService {
    private readonly user:AuthInterface[] =[
        {
            id:1,
            username: "admin",
            email: "admin@gmail.com",
            password: "arjuna46",
            is_verify: true,
            ip_address: "http://192.168.1.1",
            ip_address_signup: "http://192.168.1.1",
        },
        {
            id:2,
            username: "admin-2",
            email: "admin2@gmail.com",
            password: "arjuna46",
            is_verify: true,
            ip_address: "http://192.168.1.1",
            ip_address_signup: "http://192.168.1.1",
        },
    ]

    findAll(): AuthInterface[]{
        return this.user
    }
    findOne(id:number): AuthInterface{
        return this.user.find((item)=> item.id === id)
    }
}
