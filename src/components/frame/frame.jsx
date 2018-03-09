import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './frame.css';

import mouseIcon from './cursor-click.gif';
import dragIcon from './block-drag.gif';
import hatDragIcon from './hat-drag-up.gif';
import pipIcon from './pip.gif';

class Frame extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick',
            'setRef'
        ]);
        this.state = {step: 0, maxSteps: 7};
    }
    componentDidMount () {
        // this.props.vm.addListener('PROJECT_RUN_START', this.onProjectRunStart);
        // this.props.vm.addListener('PROJECT_RUN_STOP', this.onProjectRunStop);
        // window.addEventListener('resize', this.setRef);
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Backslash') {
                this.setState({
                    step: (this.state.step + 1) % this.state.maxSteps,
                    fade: false
                }, this.setRef);
            }
            console.log(e);
        })
        setTimeout(() => {
            this.setRef();
        }, 1000)
    }
    componentWillUnmount () {
        // this.props.vm.removeListener('PROJECT_RUN_START', this.onProjectRunStart);
        // this.props.vm.removeListener('PROJECT_RUN_STOP', this.onProjectRunStop);
    }
    componentWillUpdate (newProps, newState) {

    }
    handleClick (e) {
        // e.preventDefault();
        // if (e.shiftKey) {
        //     this.props.vm.setTurboMode(!this.props.vm.runtime.turboMode);
        // } else {
        //     this.props.vm.greenFlag();
        // }
    }
    setRef () {
        const stage = document.getElementById('stage');
        const bbox = stage.getBoundingClientRect();
        const left = 302;
        const delayTime = 700; // ms
        const padding = 3;

        const emitNextStep = (n) => {
            setTimeout(() => {
                this.props.vm.emit('STEP', n, () => {
                    this.setState({step: (n + 1) % this.state.maxSteps, fade: false}, this.setRef);
                },  () => {
                    this.setState({fade: true});
                });
            }, delayTime);
        };

        switch (this.state.step) {
            case 0:
                emitNextStep(0);
                console.log('emitted next step');
                // setTimeout(() => this.props.vm.emit('STEP', 0), delayTime);
                this.setState({
                    top: bbox.top - padding,
                    left: left,
                    width: window.innerWidth - left,
                    height: bbox.height + 2 * padding
                });
                break;
            case 1:
                emitNextStep(1);
                // setTimeout(() => this.props.vm.emit('STEP', 1), delayTime);
                this.setState({
                    top: bbox.top - padding,
                    left: 0,
                    width: bbox.left,
                    height: bbox.height + 2 * padding
                });
                break;
            case 2:
                emitNextStep(2);
                // setTimeout(() => this.props.vm.emit('STEP', 2), delayTime);
                this.setState({
                    top: bbox.top - padding,
                    left: 0,
                    width: window.innerWidth,
                    height: bbox.height + 2 * padding
                });
                break;
        case 3:
            emitNextStep(3);
            const handleClick = () => {
                stage.removeEventListener('click', handleClick);
                setTimeout(() => {
                    this.setState({step: (this.state.step + 1) % this.state.maxSteps, fade: false}, this.setRef);
                }, 4000);
            }
            stage.addEventListener('click', handleClick);
            this.setState({
                top: bbox.top - padding,
                left: left,
                width: window.innerWidth - left,
                height: bbox.height + 2 * padding
            });
            break;
        case 4:
            emitNextStep(4);
            setTimeout(() => {
                this.setState({step: (this.state.step + 1) % this.state.maxSteps, fade: false}, this.setRef);
            }, 2000);
            // setTimeout(() => this.props.vm.emit('STEP', 3), delayTime);
            this.setState({
                top: 50,
                left: 0,
                width: 300,
                height: 55
            });
            break;
        case 5:
            emitNextStep(5);
            setTimeout(() => {
                this.setState({step: (this.state.step + 1) % this.state.maxSteps, fade: false}, this.setRef);
            }, 2000);
            // setTimeout(() => this.props.vm.emit('STEP', 3), delayTime);
            this.setState({
                top: window.innerHeight - 100,
                left: window.innerWidth - 180,
                width: 175,
                height: 95
            });
            break;
        case 6:
            emitNextStep(6);
            // setTimeout(() => this.props.vm.emit('STEP', 3), delayTime);
            this.setState({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            });
            break;
        }
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;

        const clipMask = (top, left, width, height) => {
            const points = [
                '0% 0%', // screen-left screen-top
                '0% 100%', // screen-left screen-bottom
                `${left}px 100%`, // box-left screen-bottom
                `${left}px ${top}px`, // box-left box-top
                `${left + width}px ${top}px`, // box-right box-top
                `${left + width}px ${top + height}px`, // box-right box-bottom
                `${left}px ${top + height}px`, // box-left box-bottom
                `${left}px 100%`, // box-left screen-bottom
                '100% 100%', // screen-right screen-bottom
                '100% 0%' // screen-right screen-top
            ];
            return `polygon(${points.join(', ')})`;
        };

        const clipProperty = clipMask(
            this.state.top,
            this.state.left,
            this.state.width,
            this.state.height
        );

        let img;
        switch (this.state.step) {
            case 0:
                img = <img
                    className={styles.absolute}
                    style={{
                        top: '155px',
                        left: '350px'
                    }}
                    src={mouseIcon}
                />
                break;
            case 1:
                img = <img
                    className={styles.absolute}
                    style={{
                        top: '179px',
                        left: '165px',
                        width: '289px'
                    }}
                    src={dragIcon}
                />
                break;
            case 2:
                img = <img
                    className={styles.absolute}
                    style={{
                        top: '145px',
                        left: '102px'
                    }}
                    src={hatDragIcon}
                />
                break;
            case 3:
                img = <img
                    className={styles.absolute}
                    style={{
                        top: '180px',
                        left: `${window.innerWidth - 390}px` ,
                    }}
                    src={mouseIcon}
                />
                break;
            // case 4:
            //     img = <div>
            //         <img
            //             className={styles.rainbow}
            //             style={{
            //                 top: '25px',
            //                 left: '50px',
            //                 width: '75px'
            //             }}
            //             src={pipIcon}
            //         />
            //         <img
            //             className={styles.rainbow}
            //             style={{
            //                 top: '25px',
            //                 left: '145px',
            //                 width: '75px'
            //             }}
            //             src={pipIcon}
            //         />
            //         <img
            //             className={styles.rainbow}
            //             style={{
            //                 top: `${window.innerHeight - 90}px`,
            //                 left: `${window.innerWidth - 180}px`,
            //                 width: '75px'
            //             }}
            //             src={pipIcon}
            //         />
            //         </div>
            //     break;
        }
        return (
            <div className={styles.container}>
                <div
                    className={styles.mainBackground}
                    style={{
                        clipPath: clipProperty,
                        webkitClipPath: clipProperty
                    }}
                />
                {this.state.fade ? null : img}
            </div>
        );
    }
}

Frame.propTypes = {
    // vm: PropTypes.instanceOf(VM)
};

export default Frame;
