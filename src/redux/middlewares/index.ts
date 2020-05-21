import ui from './ui';
import logger from './log';
import db from './db';

export default [...db, ...ui, ...logger];
