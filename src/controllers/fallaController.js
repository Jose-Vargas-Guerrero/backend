import Falla from '../models/fallaModel.js';

export const getFallas = async (req, res) => {
    try {
        const fallas = await Falla.getAll();
        res.json(fallas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las fallas' });
    }
};

export const createFalla = async (req, res) => {
    try {
        const { titulo, descripcion, estado } = req.body;
        if (!titulo) return res.status(400).json({ error: 'El título es obligatorio' });

        const id = await Falla.create(titulo, descripcion, estado);
        res.status(201).json({ id, titulo, descripcion, estado: estado || 'reportada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la falla' });
    }
};

export const updateFalla = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, estado } = req.body;
        
        await Falla.update(id, titulo, descripcion, estado);
        res.json({ message: 'Falla actualizada correctamente', id, titulo, descripcion, estado });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la falla' });
    }
};

export const deleteFalla = async (req, res) => {
    try {
        const { id } = req.params;
        await Falla.delete(id);
        res.json({ message: `Falla con ID ${id} eliminada` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la falla' });
    }
};