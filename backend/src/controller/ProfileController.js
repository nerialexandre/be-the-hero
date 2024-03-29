const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    const incident = await connection('incidents')
      .where({
        ong_id,
      })
      .select('*');
    return res.json(incident);
  },
};
