mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

  // exports.requireSignin = expressJwt({
  //   secret: process.env.JWT_SECRET,
  //   algorithms: ["HS256"], // added later
  //   userProperty: "auth",
  // });
  if (files.photo) {
    // console.log("FILES PHOTO: ", files.photo);
    if (files.photo.size > 1000000) {
      return res.status(400).json({
        error: "Image should be less than 1mb in size",
      });
    }
    product.photo.data = fs.readFileSync(files.photo.filepath); // change path to filepath
    product.photo.contentType = files.photo.mimetype; // change typt to mimetype
  }