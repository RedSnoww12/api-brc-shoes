const notFound = (req, res,next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler  = (err, req, res, next) => {
    const statutsCode = res.statutsCode === 200 ? 500 : res.statutsCode;
    console.log(statutsCode);
    res.status(statutsCode);
    res.json({
        message:err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

export { notFound, errorHandler };