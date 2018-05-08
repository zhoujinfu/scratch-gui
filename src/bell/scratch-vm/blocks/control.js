import Cast from '../util/Cast.js';

class Scratch3ControlBlocksBell {

  constructor(runtime) {
    this.runtime = runtime;
  }

  getPrimitives() {
    return {
      control_wait: this.wait,
      control_wait_until: this.waitUntil,
      control_repeat: this.repeat,
      control_forever: this.forever,
      control_repeat_until: this.repeatUntil,
      control_break: this.break,
      control_if: this.if,
      control_if_else: this.ifElse,
    };
  }

  getHats() {
    return {
      event_whenflagclicked: {
        restartExistingThreads: true
      }
    };
  }

  wait(args) {
    const duration = Math.max(0, 1000 * Cast.toNumber(args.DURATION));

    console.log('duration', duration);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

  waitUntil(args, util) {
    const condition = Cast.toBoolean(args.CONDITION);
    if (!condition) {
      util.yield();
    }
  }

  repeat(args, util) {
    const times = Math.floor(Cast.toNumber(args.TIMES));
    if (typeof util.stackFrame.loopCounter === 'undefined') {
      util.stackFrame.loopCounter = times;
    }
    util.stackFrame.loopCounter--;
    if (util.stackFrame.loopCounter >= 0) {
      util.startBranch(1, true);
    }
  }

  forever(args, util) {
    util.startBranch(1, true);
  }

  repeatUntil(args, util) {
    const condition = Cast.toBoolean(args.CONDITION);
    if (!condition) {
      util.startBranch(1, true);
    }
  }

  break(args) {
    console.log('break;');
  }

  if(args, util) {
    const condition = Cast.toBoolean(args.CONDITION);
    if (condition) {
      util.startBranch(1, false);
    }
  }

  ifElse(args, util) {
    const condition = Cast.toBoolean(args.CONDITION);
    if (condition) {
      util.startBranch(1, false);
    } else {
      util.startBranch(2, false);
    }
  }
}

export default Scratch3ControlBlocksBell;
