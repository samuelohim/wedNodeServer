const ob = require('express');
app = ob();
port = process.env.PORT || 8080;


app.get('/', (req, res)=>{

	res.send('Server is running');
});

app.listen(port, ()=>{
	console.log(`Listening on port: {$port}`);
});