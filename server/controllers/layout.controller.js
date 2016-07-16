import Layout from '../models/layout';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all layouts
 * @param req
 * @param res
 * @returns void
 */
export function getLayouts(req, res) {
  Layout.find().sort('-dateAdded').exec((err, layouts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ layouts });
  });
}

/**
 * Save a Layout
 * @param req
 * @param res
 * @returns void
 */

export function addLayout(req, res) {
  const newLayout = new Layout(req.body.layout);

  // Let's sanitize inputs
  newLayout.name = sanitizeHtml(newLayout.name);

  newLayout.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ layout: saved });
  });
}

/**
 * Get a single layout
 * @param req
 * @param res
 * @returns void
 */
export function getLayout(req, res) {
  Layout.findOne({ _id: req.params.id }).populate('zones').exec((err, layout) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ layout });
  });
}

/**
 * Delete a layout
 * @param req
 * @param res
 * @returns void
 */
export function deleteLayout(req, res) {
  Layout.findOne({ _id: req.params.id }).exec((err, layout) => {
    if (err) {
      res.status(500).send(err);
    }

    layout.remove(() => {
      res.status(200).end();
    });
  });
}
