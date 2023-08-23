const UserController = require('./controllers/UserController')

module.exports = (app) =>{
    //get all user
    app.get('/users', UserController.index),

    //create
    app.post('/user', UserController.create),

    //edit
    app.put('/user/:userId', UserController.put)

    //delete
    app.delete('/user/:userId', UserController.delete)
    
    //show by id
    app.get('/user/:userId', UserController.show)

    //Midterm.add
    app.post('/add1 ,',Midterm.add1)

     //Midterm.function1
     app.post('/func1 ,',Midterm.func1)

     //Midterm.function2
     app.post('/func2 ,',Midterm.func2)
}