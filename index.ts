import app from './server';

const PORT = 9000;

app.listen(PORT, () => {
    console.log(`server listening on port ${ PORT }`);
});
