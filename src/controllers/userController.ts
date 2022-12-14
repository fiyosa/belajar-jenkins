import { Request, Response } from 'express'
import { sendResponse, sendSuccess } from '../utils/responseHandler'

const all = async (req: Request, res: Response) => {
  return sendResponse(res, 200, 'Hello World', 'Users retrieved successfully.')
}

const find = (req: Request, res: Response) => {
  return sendResponse(res, 200, {}, 'User retrieved successfully.')
}

const store = async (req: Request, res: Response) => {
  return sendSuccess(res, 200, 'User created successfully.')
}

const update = (req: Request, res: Response) => {
  return sendResponse(res, 200, {}, 'User updated successfully.')
}

const destroy = (req: Request, res: Response) => {
  return sendResponse(res, 200, {}, 'User deleted successfully.')
}

export default {
  all,
  find,
  store,
  update,
  destroy,
}
