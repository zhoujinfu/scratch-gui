import VM from 'scratch-vm';

import Scratch3ControlBlocksBell from './blocks/control.js';

const defaultBlockPackages = {
  bell_control: Scratch3ControlBlocksBell
}

let vm = new VM();

const registerBlockPackages = () => {
  for (const packageName in defaultBlockPackages) {
    if (defaultBlockPackages.hasOwnProperty(packageName)) {
      const packageObject = new (defaultBlockPackages[packageName])(vm.runtime);

      if (packageObject.getPrimitives) {
        const packagePrimitives = packageObject.getPrimitives();
        for (const op in packagePrimitives) {
          if (packagePrimitives.hasOwnProperty(op)) {
            vm.runtime._primitives[op] = packagePrimitives[op].bind(packageObject);
          }
        }
      }

      if (packageObject.getHats) {
        const packageHats = packageObject.getHats();
        for (const hatName in packageHats) {
          if (packageHats.hasOwnProperty(hatName)) {
            vm.runtime._hats[hatName] = packageHats[hatName];
          }
        }
      }

      if (packageObject.getMonitored) {
        vm.runtime.monitorBlockInfo = Object.assign({},
          vm.runtime.monitorBlockInfo,
          packageObject.getMonitored());
      }
    }
  }
}

registerBlockPackages();

export default vm;
