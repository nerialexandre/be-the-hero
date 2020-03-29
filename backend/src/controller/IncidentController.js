const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection('incidents').count();

    const incident = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incident);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      ong_id,
      value,
    });
    return res.json({ id, title, description, ong_id, value });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const IncidentDelete = await connection('incidents')
      .where({
        id,
        ong_id,
      })
      .delete();

    if (!IncidentDelete) {
      return res
        .status(401)
        .json({ message: 'Caso nao foi localizado para essa ong' });
    }

    return res.json({ message: 'caso deletado' });
  },
};
