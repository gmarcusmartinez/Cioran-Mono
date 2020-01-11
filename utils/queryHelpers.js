const formatQueryString = req => {
  let queryString = JSON.stringify(req);

  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    match => `$${match}`
  );
  return queryString;
};

console.log(formatQueryString("/api/projects?expectedDuration[lte]=5"));

module.expots = { formatQueryString };
