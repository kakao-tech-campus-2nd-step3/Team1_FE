import { setupServer } from 'msw/node';

import { handlers } from '../api/hooks/teamProgress.mock';

export const server = setupServer(...handlers);
