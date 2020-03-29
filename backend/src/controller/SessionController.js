const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .where({ id })
      .select('name')
      .first();

    if (!ong) {
      return res.status(401).json({ err: 'Ong nao encontrada' });
    }

    return res.json(ong);
  },
};
