import 'dotenv/config';
import server from '../source/app';

const PORT = process.env.PORT || 3000;
const APP = process.env.APP || 'ERP';

server.listen(PORT, () => console.log(`${APP} IT'S RUNNING ON PORT ${PORT}`));
