import Content from '../models/content';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Contents
 * @param req
 * @param res
 * @returns void
 */
export function getContents(req, res) {
  Content.find().sort('-dateAdded').exec((err, contents) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ contents });
  });
}

/**
 * Save a Content
 * @param req
 * @param res
 * @returns void
 */

export function addContent(req, res) {
  const newContent = new Content(req.body.content);
//  console.log(req.body);
//  console.log(req.body.content);
  // Let's sanitize inputs
  newContent.fileContentType = sanitizeHtml(newContent.fileContentType);
  newContent.fileFormat = sanitizeHtml(newContent.fileFormat);
  newContent.fileName = sanitizeHtml(newContent.fileName);
  newContent.fileLocation = sanitizeHtml(newContent.fileLocation);
  newContent.fileStoreName = sanitizeHtml(newContent.fileStoreName);
  newContent.processed = sanitizeHtml(newContent.processed);

  newContent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ Content: saved });
  });
}

/**
 * Get a single Content
 * @param req
 * @param res
 * @returns void
 */
export function getContent(req, res) {
  Content.findOne({ _id: req.params.id }).populate('contentTitles').exec((err, content) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ content });
  });
}

/**
 * Delete a Content
 * @param req
 * @param res
 * @returns void
 */
export function deleteContent(req, res) {
  Content.findOne({ _id: req.params.id }).exec((err, content) => {
    if (err) {
      res.status(500).send(err);
    }

    content.remove(() => {
      res.status(200).end();
    });
  });
}
