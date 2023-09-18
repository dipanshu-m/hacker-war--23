import { Request, Response } from 'express';
export declare const updateLocation: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createLocation: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createDestination: (req: Request, res: Response) => Promise<void>;
