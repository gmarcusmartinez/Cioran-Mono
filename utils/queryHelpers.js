const formatQueryString = reqQuery => {
  let queryString = JSON.stringify(reqQuery);

  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    match => `$${match}`
  );
  return JSON.parse(queryString);
};

const removeQueryParam = (query, params) => {
  const removeFields = params;
  removeFields.forEach(param => delete query[param]);
};

module.exports = {
  formatQueryString,
  removeQueryParam
};
