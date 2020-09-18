import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'OK' }));

app.listen(8080, () => {
	console.log(`http://localhost:${8080}`);
});
