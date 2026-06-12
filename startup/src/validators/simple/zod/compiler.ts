import schema from './index.ts';
import { compile } from 'zod-compiler';

export default compile(schema);
