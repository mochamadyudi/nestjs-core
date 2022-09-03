import { Injectable} from "@nestjs/common";
import { PrismaService } from '@yid/prisma';

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

  async getProfiles(id:any){
    try{
      return this.prisma.user.findUnique({
        where:{
          id
        }
      })
        .then((result:object)=> {
          if(result){
            Reflect.deleteProperty(result,'hash')
            return {
              error:false,
              message: "Successfully!",
              data:result
            }
          }
          return {
            error:true,
            message: "Notfound!",
            data:null
          }
        })
    }catch(err){
      return {
        error:true,
        message: err?.mesage ?? null,
        data:null
      }
    }
  }

}
