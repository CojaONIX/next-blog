
export default async function handler(req, res) {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        .then(res => res.json())
        .then(console.log);

    res.status(200).json({message: 'Successfully auth'});
}