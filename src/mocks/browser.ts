import { setupWorker } from 'msw';

import { handlers } from '../api/hooks/teamProgress.mock';

export const worker = setupWorker(...handlers);
