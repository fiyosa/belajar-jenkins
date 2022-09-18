// import { QueryFailedError } from 'typeorm'
import { sendException } from './responseHandler'

interface result {
  status: boolean
  message: string | any
}

export const success = (message: any = ''): result => {
  return {
    status: true,
    message,
  }
}

// export const error = (err: any): result => {
//   if (err instanceof QueryFailedError) {
//     return {
//       status: false,
//       message: sendException(err.message),
//     }
//   } else {
//     return {
//       status: false,
//       message: 'Something went wrong.',
//     }
//   }
// }
