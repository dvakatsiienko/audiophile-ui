/* Core */
import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: [ '.ts', '.tsx' ],
    testEnvironment:        'jsdom',
    moduleNameMapper:       {
        '@/(.*)': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: [ '@testing-library/jest-dom', '<rootDir>/jest-setup.ts' ],
    transform:          {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    collectCoverageFrom: [ '**/src/components/**/**', '**/src/features/**/**', '**/src/api/**/**' ],
};

export default config;
