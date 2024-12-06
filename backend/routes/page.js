import express from 'express';
import { auth } from '../middleware/auth.js';
import PageConfig from '../models/PageConfig.js';

const router = express.Router();

router.get('/:pageName', auth, async (req, res) => {
  try {
    const pageConfig = await PageConfig.findOne({
      where: { pageName: req.params.pageName, role: req.user.role },
    });

    if (!pageConfig) {
      return res.status(404).json({ msg: 'Page configuration not found' });
    }

    res.json(pageConfig);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;

