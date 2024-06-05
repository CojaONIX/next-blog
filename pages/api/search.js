
// /api/search

export default function handler(req, res) {
    if(!req.query.s) {
        res.status(400).send({'error': 'No such query'});
    }
    res.status(200).send(req.query.s);
}