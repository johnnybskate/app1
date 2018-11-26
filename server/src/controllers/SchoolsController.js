const {School} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const schools = await School.findAll({
        where:{}
        // limit:10      
      })
      res.send(schools)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      });
      console.log(err);
    }
  },
  async show (req, res) {
    try {
      const school = await School.findById(req.params.schoolId)
       res.send(school)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured'
      });
      console.log(err);
    }
  },
  async post (req, res) {
    try {
      const school = await School.create(req.body)
      res.send(school)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      });
      console.log(err);
    }
  }
}
