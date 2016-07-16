import User from '../models/user';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().sort('-dateAdded').exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  const newUser = new User(req.body.user);

  // Let's sanitize inputs
  newUser.name = sanitizeHtml(newUser.name);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.avatar = sanitizeHtml(newUser.avatar);
  newUser.avatarLocation = sanitizeHtml(newUser.avatarLocation);
  newUser.avatarName = sanitizeHtml(newUser.avatarName);
  newUser.avatarFormat = sanitizeHtml(newUser.avatarFormat);
  newUser.role = sanitizeHtml(newUser.role);

  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}

/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  User.findOne({ id: req.params.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

/**
 * Delete a user
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {
  User.findOne({ id: req.params.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
    });
  });
}
