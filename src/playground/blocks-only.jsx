import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Controls from '../containers/controls.jsx';
import Blocks from '../containers/blocks.jsx';
import GUI from '../containers/gui.jsx';
import ProjectLoaderHOC from '../lib/project-loader-hoc.jsx';

import styles from './blocks-only.css';

const mapStateToProps = state => ({vm: state.vm});

const VMBlocks = connect(mapStateToProps)(Blocks);
const VMControls = connect(mapStateToProps)(Controls);

const BlocksOnly = props => (
    <GUI {...props}>
        <VMBlocks
            grow={1}
            options={{
                media: `static/blocks-media/`
            }}
        />
        <VMControls className={styles.controls} />
        <section style={
          {
            position: 'absolute',
            top: 0,
            right: 0,
            margin: '3rem'
          }
        }>
          <button style={
            {
              width: '4rem',
              height: '4rem',
              backgroundImage: `url(${require('../../static/images/proj.png')})`,
              backgroundSize: 'cover',
              margin: '0 1rem'
            }
          } />
          <button style={
            {
              width: '4rem',
              height: '4rem',
              backgroundImage: `url(${require('../../static/images/ble.png')})`,
              backgroundSize: 'cover',
              margin: '0 1rem'
            }
          } />
        </section>

        <button style={
          {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '8rem',
            height: '8rem',
            margin: '3rem',
            backgroundImage: `url(${require('../../static/images/run.png')})`,
            backgroundSize: 'cover'
          }
        } onClick={ (e) => props.vm.greenFlag() }/>
    </GUI>
);

const App = ProjectLoaderHOC(BlocksOnly);

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);

ReactDOM.render(<App />, appTarget);
