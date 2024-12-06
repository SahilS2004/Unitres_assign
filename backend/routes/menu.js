import express from 'express';
import { auth } from '../middleware/auth.js';
import Menu from '../models/Menu.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const menuItems = await Menu.findAll({ where: { role: req.user.role } });
    res.json(menuItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;

