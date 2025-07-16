const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, please try again later"
  }

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  if(err.name === "ValidationError"){
    customError.msg = Object.values(err.errors).map((item) => item.message).join(', ')
    customError.statusCode = StatusCodes.BAD_REQUEST
  }

  if(err.code && err.code == 11000){
    customError.statusCode = StatusCodes.BAD_REQUEST
    customError.msg = `User with email ${err.keyValue.email} already exists`
  }

  if(err.name === "CastError"){
    customError.statusCode = StatusCodes.NOT_FOUND
    customError.msg = `No item found with id : ${err.value._id}`
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ err: customError.msg })
}

module.exports = errorHandlerMiddleware
