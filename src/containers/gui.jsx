import AudioEngine from 'scratch-audio';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {connect} from 'react-redux';

import {openExtensionLibrary, hideSoundTabPip, hideCostumeTabPip} from '../reducers/modals';
import {
    activateTab,
    BLOCKS_TAB_INDEX,
    COSTUMES_TAB_INDEX,
    SOUNDS_TAB_INDEX
} from '../reducers/editor-tab';

import vmListenerHOC from '../lib/vm-listener-hoc.jsx';

import GUIComponent from '../components/gui/gui.jsx';

class GUI extends React.Component {
    constructor (props) {
        super(props);
        this.handleTab = this.handleTab.bind(this);
        this.state = {
            loading: true
        };
    }
    componentDidMount () {
        this.audioEngine = new AudioEngine();
        this.props.vm.attachAudioEngine(this.audioEngine);
        this.props.vm.loadProject(this.props.projectData).then(() => {
            this.setState({loading: false}, () => {
                this.props.vm.setCompatibilityMode(true);
                this.props.vm.start();
            });
        });
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.projectData !== nextProps.projectData) {
            this.setState({loading: true}, () => {
                this.props.vm.loadProject(nextProps.projectData).then(() => {
                    this.setState({loading: false});
                });
            });
        }
    }
    componentWillUnmount () {
        this.props.vm.stopAll();
    }
    handleTab (index) {
        if (index === 1) {
            this.props.onHideCostumesTabPip();
        } else if (index === 2) {
            this.props.onHideSoundsTabPip();
        }
        this.props.onActivateTab(index);
    }
    render () {
        const {
            children,
            fetchingProject,
            projectData, // eslint-disable-line no-unused-vars
            vm,
            onActivateTab,
            ...componentProps
        } = this.props;
        return (
            <GUIComponent
                loading={fetchingProject || this.state.loading}
                vm={vm}
                onActivateTab={this.handleTab}
                {...componentProps}
            >
                {children}
            </GUIComponent>
        );
    }
}

GUI.propTypes = {
    ...GUIComponent.propTypes,
    feedbackFormVisible: PropTypes.bool,
    fetchingProject: PropTypes.bool,
    importInfoVisible: PropTypes.bool,
    previewInfoVisible: PropTypes.bool,
    projectData: PropTypes.string,
    vm: PropTypes.instanceOf(VM)
};

GUI.defaultProps = GUIComponent.defaultProps;

const mapStateToProps = state => ({
    activeTabIndex: state.editorTab.activeTabIndex,
    blocksTabVisible: state.editorTab.activeTabIndex === BLOCKS_TAB_INDEX,
    costumesTabVisible: state.editorTab.activeTabIndex === COSTUMES_TAB_INDEX,
    feedbackFormVisible: state.modals.feedbackForm,
    importInfoVisible: state.modals.importInfo,
    previewInfoVisible: state.modals.previewInfo,
    soundsTabVisible: state.editorTab.activeTabIndex === SOUNDS_TAB_INDEX,
    soundsTabPipVisible: state.modals.soundsTabPip,
    costumesTabPipVisible: state.modals.costumesTabPip
});

const mapDispatchToProps = dispatch => ({
    onExtensionButtonClick: () => dispatch(openExtensionLibrary()),
    onActivateTab: tab => dispatch(activateTab(tab)),
    onHideSoundsTabPip: () => dispatch(hideSoundTabPip()),
    onHideCostumesTabPip: () => dispatch(hideCostumeTabPip())
});

const ConnectedGUI = connect(
    mapStateToProps,
    mapDispatchToProps,
)(GUI);

export default vmListenerHOC(ConnectedGUI);
