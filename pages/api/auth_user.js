
export default async function handler(req, res) {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: req.body.username,
                password: req.body.password,
                expiresInMins: 30, // optional, defaults to 60
            })
        });

        const data = await response.json();

        res.status(200).json({
            message: 'Successfully auth',
            token: data.token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'An error occurred'});
    }
}