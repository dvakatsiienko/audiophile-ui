import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: [ '.ts' ],
    transform:              {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};

export default config;
