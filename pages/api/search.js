
import {searchProductByQuery} from "../../src/services/productService";

export default async function handler(req, res) {
    if(!req.query.s) {
        res.status(400).send({'error': 'No such query'});
    }

    const data = await searchProductByQuery(req.query.s)
    res.status(200).json(data);
}