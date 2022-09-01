import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: [ '.ts', '.tsx' ],
    transform:              {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};

export default config;
