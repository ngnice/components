import { normalize } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { getWorkspace } from '@schematics/angular/utility/config';
import { getFileContent } from '@schematics/angular/utility/test';
import { join } from 'path';
import { createTestApp } from '../testing/test-app';

describe('ng-add schematic', () => {
    let runner: SchematicTestRunner;
    let appTree: Tree;

    beforeEach(async () => {
        runner = new SchematicTestRunner('schematics', require.resolve('../collection.json'));
        appTree = await createTestApp(runner, {
            'ng-add': {
                save: 'dependencies'
            }
        });
    });

    it('should update package.json', async () => {
        const tree = await runner.runSchematicAsync('ng-add', {}, appTree).toPromise();
        const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
        const dependencies = packageJson.dependencies;
        expect(dependencies['@ngnicest/libra']).toBeDefined();
        // expect(runner.tasks.some((task) => task.name === 'run-schematic')).toBe(true);
    });
});
