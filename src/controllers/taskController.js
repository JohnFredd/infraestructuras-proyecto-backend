const Task = require('../models/Task.js');
const Project = require('../models/Project.js');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: {
        model: Project,
        attributes: ['projectName']
      }
    });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [getTasks]: ' + e.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id, {
      include: {
        model: Project,
        attributes: ['projectName']
      }
    });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [getTaskById]: ' + e.message });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [createTask]: ' + e.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [affectedRows, updatedTasks] = await Task.update(req.body, {
      where: { id },
      returning: true
    });
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada o no actualizada' });
    }
    res.json(updatedTasks[0]);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [updateTask]: ' + e.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.destroy({ where: { id } });
    if (result === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada o ya eliminada' });
    }
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [deleteTask]: ' + e.message });
  }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}
