/**
 * @swagger
 * components:
 *   schemas:
 *     Roles:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the role
 *         name:
 *           type: string
 *           description: The title of your role
 *         description:
 *           type: string
 *           description: The role author
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date the role was added
 *         updated_at:
 *           type: string
 *           format: date
 *           description: The date the role was updated
 *       example:
 *         id:
 *         name:
 *         description:
 *         created_at: 2020-03-10T04:05:06.157Z
 *         updated_at: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: The roles managing API
 * /roles:
 *   get:
 *     summary: Lists all the roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: The list of the roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Roles'
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Roles'
 *     responses:
 *       200:
 *         description: The created role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles'
 *       500:
 *         description: Some server error
 *
 * /roles/{id}:
 *   get:
 *     summary: Lists all the roles
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: The list of the roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Roles'
 *   put:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Roles'
 *     responses:
 *       200:
 *         description: The created role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles'
 *       500:
 *         description: Some server error
 *   delete:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Roles'
 *     responses:
 *       200:
 *         description: The created role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Roles'
 *       500:
 *         description: Some server error
 *
 */
