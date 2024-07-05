class InternalServerError extends Error {
  constructor(message = 'Internal Server Error') {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

export {InternalServerError}