import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: [ '.ts', '.tsx' ],
    testEnvironment:        'jsdom',
    transform:              {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};

export default config;
