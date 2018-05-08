import VM from '../bell/scratch-vm/index.js';
import storage from '../lib/storage';

const SET_VM = 'scratch-gui/vm/SET_VM';
const defaultVM = VM;
defaultVM.attachStorage(storage);
const initialState = defaultVM;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_VM:
        return action.vm;
    default:
        return state;
    }
};
const setVM = function (vm) {
    return {
        type: SET_VM,
        vm: vm
    };
};
export {
    reducer as default,
    setVM
};
