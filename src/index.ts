// Main exports
export { Name } from './name';
export { UrlName } from './name-url';
export { PathName } from './name-path';

// Shorthand functions
import { Name } from './name';
import { PathName } from './name-path';
import { UrlName } from './name-url';
export const name = Name.withProject;
export const urlName = UrlName.withProject;
export const pathName = PathName.withProject;
