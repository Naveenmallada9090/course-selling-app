
function createCourseRoutes(app) {

    app.post("/course/purchases", function(req, res) {
    
        res.json({
            message: "signup endpoint"
        })
    })
 
    app.get("/course/preview", function(req, res) {
        res.json({
            message: "signup endpoint"
        })
    })
} 

module.exports = {
    createCourseRoutes: createCourseRoutes
}