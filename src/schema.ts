import { makeSchema } from 'nexus';
import * as types from './allTypes';

export const schema = makeSchema({
  types,
})