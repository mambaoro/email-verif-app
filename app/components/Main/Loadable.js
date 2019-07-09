/**
 *
 * Asynchronously loads the component for Main
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
