import pool from "../dbConfig.js";


export const getPendingTasksPerUser = async (req, res) => {
  const result = await pool.query(`
    SELECT assigned_to, COUNT(*) AS pending_tasks
    FROM tasks
    WHERE status = 'pending'
    GROUP BY assigned_to
  `);

  res.json(result.rows);
};


export const getTasksGroupedByUser = async (req, res) => {
  const result = await pool.query(`
    SELECT u.id, u.name, json_agg(t.*) AS tasks
    FROM users u
    LEFT JOIN tasks t ON u.id = t.assigned_to
    GROUP BY u.id
  `);

  res.json(result.rows);
};