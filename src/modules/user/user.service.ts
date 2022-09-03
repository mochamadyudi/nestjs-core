import { Injectable} from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';

@Injectable({})
export class UserService{
  constructor(private prisma: PrismaService) {
  }
  async _checkEmail(email){
    try{
      return this.prisma.user.findUnique({
        where: {
          email
        }
      }).then((result)=> {
        return [null, result]
      })
        .catch((err)=> {
          return [ err, null]
        })
    }catch(err){
      return [ err, null ]
    }
  }


}
