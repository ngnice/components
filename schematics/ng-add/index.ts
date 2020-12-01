import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson, getPackageVersionFromPackageJson } from '../utils';

// Just return the tree
export function ngAdd(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const libraVersionRange = getPackageVersionFromPackageJson(tree, '@ngnicest/libra');
        if (!libraVersionRange) {
            addPackageToPackageJson(tree, '@ngnicest/libra', '^2.0.0');
        }
        context.addTask(new NodePackageInstallTask());
        return tree;
    };
}
