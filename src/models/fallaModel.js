import db from '../config/db.js'; // Es obligatorio incluir la extensión .js en ESM

const Falla = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM fallas ORDER BY fecha_creacion DESC');
        return rows;
    },

    create: async (titulo, descripcion, estado) => {
        const [result] = await db.query(
            'INSERT INTO fallas (titulo, descripcion, estado) VALUES (?, ?, ?)',
            [titulo, descripcion, estado || 'reportada']
        );
        return result.insertId;
    },

    update: async (id, titulo, descripcion, estado) => {
        await db.query(
            'UPDATE fallas SET titulo = ?, descripcion = ?, estado = ? WHERE id = ?',
            [titulo, descripcion, estado, id]
        );
        return true;
    },

    delete: async (id) => {
        await db.query('DELETE FROM fallas WHERE id = ?', [id]);
        return true;
    }
};

export default Falla;