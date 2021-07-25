// @desc    get all the bootcamps
// @routes  GET /api/v1/bootcamps
// @access  public

exports.getAllBootcamps = (request, response, next) => {
  response.status(200).json({
    success: true,
    message: 'Show all the bootcamps',
  });
};

// @desc    get single bootcamps
// @routes  GET /api/v1/bootcamps/:id
// @access  public

exports.getBootcamp = (request, response, next) => {
  response.status(200).json({
    success: true,
    message: `Show the bootcamps ${request.params.id}`,
  });
};

// @desc    create new bootcamps
// @routes  POST /api/v1/bootcamps
// @access  private

exports.createBootcamps = (request, response, next) => {
  response.status(200).json({
    success: true,
    message: 'create new bootcamps',
  });
};

// @desc    update the bootcamps
// @routes  PUT /api/v1/bootcamps
// @access  private

exports.updateBootcamps = (request, response, next) => {
  response.status(200).json({
    success: true,
    message: `update the bootcamps with id ${request.params.id}`,
  });
};

// @desc    delete the bootcamps
// @routes  DELETE /api/v1/bootcamps
// @access  private

exports.deleteBootcamps = (request, response, next) => {
  response.status(200).json({
    success: true,
    message: `delete the bootcamps with id ${request.params.id}`,
  });
};
