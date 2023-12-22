const app = require("./src/app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
	process.stdout(`Server listening at http://localhost:${PORT}`);
});