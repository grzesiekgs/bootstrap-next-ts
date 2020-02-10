import {
  NextFunction,
  Response as ExpressResponse,
  Request as ExpressRequest,
  RequestHandler as ExpressRequestHandler
} from 'express';

export interface Request extends ExpressRequest {}

export interface Response extends ExpressResponse {}

export interface RequestHandler extends ExpressRequestHandler {
  (req: Request, res: ExpressResponse, next: NextFunction): any;
}
