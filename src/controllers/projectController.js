const Project = require('../models/Project.js');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [getProjects]: ' + e.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: `Project with id ${id} not found` });
    }
    res.json(project);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [getProjectById]: ' + e.message });
  }
};

const createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [createProject]: ' + e.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: `Project with id ${id} not found` });
    }
    const updatedProject = await project.update(req.body);
    res.json(updatedProject);
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [updateProject]: ' + e.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: `Project with id ${id} not found` });
    }
    await project.destroy();
    res.json({ message: `Project with id ${id} deleted successfully` });
  } catch (e) {
    res.status(500).json({ message: 'ERROR - [deleteProject]: ' + e.message });
  }
};

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
}
