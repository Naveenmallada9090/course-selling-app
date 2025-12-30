const express = require("express");
const { UserRoutes } = require("./routes/user");
const { CourseRoutes } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use("/api/v1/user", UserRoutes );
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", CourseRoutes);

app.listen(3000);  