/**
 * Truffle configuration
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */

require('babel-register');
require('babel-polyfill');

const path      = require('path');
const basePath  = process.cwd();

const buildDir          = path.join(basePath, 'build');
const buildDirContracts = path.join(basePath, 'build/contracts');
const srcDir            = path.join(basePath, 'src/contracts');
const testDir           = path.join(basePath, 'test/contracts');
const migrationsDir     = path.join(basePath, 'migrations/contracts');

module.exports = {
    mocha: {
        useColors: true
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        _development: {
            host: 'localhost',
            port: 9545,
            network_id: 4447,
            gasPrice: 1,
            gas: 100000000
        },
        coverage: {
            host: 'localhost',
            network_id: 4447,
            port: 8555,
            gasPrice: 1,
            gas: 100000000
        }
    },
    build_directory: buildDir,
    contracts_build_directory: buildDirContracts,
    migrations_directory: migrationsDir,
    contracts_directory: srcDir,
    test_directory: testDir
};
