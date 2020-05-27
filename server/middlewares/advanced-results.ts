import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Response {
      advancedResults: any;
    }
  }
}

const advancedResults = (model: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let query;
  const reqQuery = { ...req.query };
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach((param) => delete reqQuery[param]);

  const queryString = formatQueryString(JSON.stringify(reqQuery));
  query = model.find(JSON.parse(queryString));

  query = req.query.sort ? createSort(req, query) : query.sort('createdAt');

  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    data: results,
  };
  next();
};

const formatQueryString = (str: string): string => {
  str = str.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
  return str;
};

const createSort = (req: Request, query: any) => {
  const sortBy = req.query.sort;
  query = query.sort(sortBy);
  return query;
};

// const createSelect = (req: Request, query: any) => {
//   const fields = req.query.select!.split(',').join(' ');
//   query = query.select(fields);
//   return query;
// };
