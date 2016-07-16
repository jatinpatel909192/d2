import ContentTitle from '../models/contentTitle';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all ContentTitles
 * @param req
 * @param res
 * @returns void
 */
export function getContentTitles(req, res) {
  ContentTitle.find().sort('-dateAdded').exec((err, contentTitles) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ contentTitles });
  });
}

/**
 * Save a ContentTitle
 * @param req
 * @param res
 * @returns void
 */

export function addContentTitle(req, res) {
  const newContentTitle = new ContentTitle(req.body.contentTitle);

  // Let's sanitize inputs
  newContentTitle.contentId = sanitizeHtml(newContentTitle.contentId);                 //references
  newContentTitle.language = sanitizeHtml(newContentTitle.language);
  newContentTitle.text = sanitizeHtml(newContentTitle.text);


  newContentTitle.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ ContentTitle: saved });
  });
}

/**
 * Get a single ContentTitle
 * @param req
 * @param res
 * @returns void
 */
export function getContentTitle(req, res) {
  ContentTitle.findOne({ _id: req.params.id }).exec((err, contentTitle) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ contentTitle });
  });
}

/**
 * Delete a ContentTitle
 * @param req
 * @param res
 * @returns void
 */
export function deleteContentTitle(req, res) {
  ContentTitle.findOne({ _id: req.params.id }).exec((err, contentTitle) => {
    if (err) {
      res.status(500).send(err);
    }

    contentTitle.remove(() => {
      res.status(200).end();
    });
  });
}
