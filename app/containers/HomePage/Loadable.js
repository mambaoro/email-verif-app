/**
 * Asynchronously loads the component for HomePage
 */
import loadable from '@loadable/component';

export default loadable(() => import('./index'));
