const createPagination = require('./pagination');

const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  const reqQuery = { ...req.query };
  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach((param) => delete reqQuery[param]);

  const queryString = formatQueryString(JSON.stringify(reqQuery));
  query = model.find(JSON.parse(queryString));

  query = req.query.select ? createSelect(req, query) : query;
  query = req.query.sort ? createSort(req, query) : query.sort('createdAt');

  const pagination = await createPagination(query, model, req);

  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };
  next();
};

const formatQueryString = (str) => {
  str = str.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
  return str;
};

const createSort = (request, query) => {
  const sortBy = request.query.sort.split(',').join(' ');
  query = query.sort(sortBy);
  return query;
};

const createSelect = (request, query) => {
  const fields = request.query.select.split(',').join(' ');
  query = query.select(fields);
  return query;
};

module.exports = advancedResults;
