import ui from './ui';
import logger from './log';
import db from './db';
// import app from './app';
export default [...db, ...ui, ...logger];
