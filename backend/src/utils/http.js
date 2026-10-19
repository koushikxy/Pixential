class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const route = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const required = (body, fields) => {
  const missing = fields.filter((f) => typeof body[f] !== 'string' || !body[f].trim());
  if (missing.length) throw new HttpError(400, `Missing ${missing.join(', ')}`);
};

const pick = (body, fields) =>
  Object.fromEntries(fields.filter((f) => body[f] !== undefined).map((f) => [f, body[f]]));

module.exports = { HttpError, route, required, pick };
