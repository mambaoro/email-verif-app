/**
 *
 * Asynchronously loads the component for Form
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
