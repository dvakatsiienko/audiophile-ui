/* Core */
import type { Config } from 'jest';

const config: Config = {
    extensionsToTreatAsEsm: [ '.ts', '.tsx' ],
    testEnvironment:        'jsdom',
    moduleNameMapper:       {
        '@/(.*)':                                                                              '<rootDir>/src/$1',
        '\\.svg$':                                                                             '<rootDir>/mocks/svgMock.ts',
        '\\.(css|less)$':                                                                      '<rootDir>/mocks/fileMock.ts',
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/mocks/fileMock.ts',
    },
    setupFilesAfterEnv: [ '<rootDir>/jest.setup.ts' ],
    transform:          {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    collectCoverageFrom: [
        '<rootDir>/src/components/**/**',
        '<rootDir>/src/features/**/**',
        '<rootDir>/src/api/**/**',
        '<rootDir>/src/ui/**/**',
    ],
    coveragePathIgnorePatterns: [ '<rootDir>/node_modules', '<rootDir>/.*__snapshots__/.*' ],
    watchPlugins:               [ 'jest-watch-typeahead/filename', 'jest-watch-typeahead/testname' ],
};

export default config;
