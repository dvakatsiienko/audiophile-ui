/* Core */
import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: '4i9jo4',
    e2e:       {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
