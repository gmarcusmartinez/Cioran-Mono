module.exports = async (query, model, request) => {
  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 1) || 6;
  const start = (page - 1) * limit;
  const end = page * limit;
  const total = await model.countDocuments();

  query = query.skip(start).limit(limit);

  const pagination = {};
  if (end < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (start > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }
  console.log(pagination);
  return pagination;
};
