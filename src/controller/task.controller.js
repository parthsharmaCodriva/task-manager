import pool from "../dbConfig.js";


export const createTask = async (req, res) => {
  try {
    const { title, assigned_to, priority, due_date } = req.body;

    if (!title || !assigned_to || !priority || !due_date) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const user = await pool.query(
      'SELECT id FROM users WHERE id = $1',
      [assigned_to]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Assigned user not found' });
    }

    const result = await pool.query(
      `INSERT INTO tasks (title, assigned_to, priority, due_date)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, assigned_to, priority, due_date]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const getAllTasks = async (req, res) => {
  try {
    const { status, priority, assigned_to, overdue } = req.query;

    let query = 'SELECT * FROM tasks WHERE 1=1';
    let values = [];
    let index = 1;

    if (status) {
      query += ` AND status = $${index++}`;
      values.push(status);
    }

    if (priority) {
      query += ` AND priority = $${index++}`;
      values.push(priority);
    }

    if (assigned_to) {
      query += ` AND assigned_to = $${index++}`;
      values.push(assigned_to);
    }

    if (overdue === 'true') {
      query += ` AND due_date < NOW() AND status = 'pending'`;
    }

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};


export const getTaskById = async (req, res) => {
  const { taskId } = req.params;

  const result = await pool.query(
    'SELECT * FROM tasks WHERE id = $1',
    [taskId]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(result.rows[0]);
};


export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, assigned_to, priority, due_date } = req.body;

  const result = await pool.query(
    `UPDATE tasks
     SET title=$1, assigned_to=$2, priority=$3, due_date=$4
     WHERE id=$5 RETURNING *`,
    [title, assigned_to, priority, due_date, taskId]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(result.rows[0]);
};


export const partialUpdateTask = async (req, res) => {
  const { taskId } = req.params;
  const fields = req.body;

  if (Object.keys(fields).length === 0) {
    return res.status(400).json({ message: 'No fields provided' });
  }

  let query = 'UPDATE tasks SET ';
  let values = [];
  let index = 1;

  for (let key in fields) {
    query += `${key} = $${index++}, `;
    values.push(fields[key]);
  }

  query = query.slice(0, -2);
  query += ` WHERE id = $${index} RETURNING *`;
  values.push(taskId);

  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(result.rows[0]);
};


export const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;

  const task = await pool.query(
    'SELECT status FROM tasks WHERE id=$1',
    [taskId]
  );

  if (task.rows.length === 0) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (task.rows[0].status === 'done') {
    return res.status(400).json({ message: 'Task already completed' });
  }

  const result = await pool.query(
    'UPDATE tasks SET status=$1 WHERE id=$2 RETURNING *',
    [status, taskId]
  );

  res.json(result.rows[0]);
};


export const reassignTask = async (req, res) => {
  const { taskId } = req.params;
  const { assigned_to } = req.body;

  const user = await pool.query(
    'SELECT id FROM users WHERE id=$1',
    [assigned_to]
  );

  if (user.rows.length === 0) {
    return res.status(400).json({ message: 'User not found' });
  }

  const result = await pool.query(
    'UPDATE tasks SET assigned_to=$1 WHERE id=$2 RETURNING *',
    [assigned_to, taskId]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(result.rows[0]);
};


export const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  const result = await pool.query(
    'DELETE FROM tasks WHERE id=$1 RETURNING *',
    [taskId]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({ message: 'Task deleted' });
};