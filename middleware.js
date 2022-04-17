exports.userNameCheck = (req,res,next) => {
  const {username} = req.params;
  if(!username){
    const error = new Error("Username is not provided");
    error.status = 400;
    return next(error);
  }
  next();
}