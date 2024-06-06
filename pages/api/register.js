

import {addProduct} from "../../src/services/productService";

export default async function handler(req, res) {

    addProduct(req.body.title, req.body.price, req.body.description);

    res.status(200).json({message: 'Successfully registered'});
}