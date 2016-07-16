import Zone from '../models/zone';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all zones
 * @param req
 * @param res
 * @returns void
 */
export function getZones(req, res) {
  Zone.find().sort('-dateAdded').exec((err, zones) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ zones });
  });
}

/**
 * Save a zone
 * @param req
 * @param res
 * @returns void
 */
export function addZone(req, res) {
  const newZone = new Zone(req.body.zone);

  // Let's sanitize inputs
  newZone.belongTo = sanitizeHtml(newZone.belongTo);
  newZone.name = sanitizeHtml(newZone.name);
  newZone.zoneType = sanitizeHtml(newZone.zoneType);
  newZone.height = sanitizeHtml(newZone.height);
  newZone.width = sanitizeHtml(newZone.width);
  newZone.top = sanitizeHtml(newZone.top);
  newZone.left = sanitizeHtml(newZone.left);
  newZone.text = sanitizeHtml(newZone.text);
  newZone.layoutId = sanitizeHtml(newZone.layoutId);                //references

  newZone.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ zone: saved });
  });
}

/**
 * Get a single zone
 * @param req
 * @param res
 * @returns void
 */
export function getZone(req, res) {
  Zone.findOne({ _id: req.params.id }).exec((err, zone) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ zone });
  });
}

/**
 * Delete a zone
 * @param req
 * @param res
 * @returns void
 */
export function deleteZone(req, res) {
  Zone.findOne({ _id: req.params.id }).exec((err, zone) => {
    if (err) {
      res.status(500).send(err);
    }

    zone.remove(() => {
      res.status(200).end();
    });
  });
}
