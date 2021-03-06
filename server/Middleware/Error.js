const notFound = (req, res,next) => {
    const error = new Error(`URL Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler  = (err, req, res, next) => {
    const statuts_code = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statuts_code);
    res.json({
        message:err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

export { notFound, errorHandler };