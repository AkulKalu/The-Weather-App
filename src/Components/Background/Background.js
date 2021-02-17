import React, {Component, Fragment} from 'react';
import classes from './Background.module.css';
import {connect} from 'react-redux';

class Background extends Component {
    constructor(props) {
        super(props);
        this.cover = 'Clear';
        this.front = 'bg1';
        this.back = 'bg2';
        
    }
    componentDidUpdate() {
        if(this.props.introEnded) {
            if(this.cover !== this.props.background ) {
                const front = document.getElementById(this.front);
                const back = document.getElementById(this.back);
                front.classList.toggle(classes.Switch, true);
                front.onanimationend = () => {
                    back.style.zIndex = '-1';
                    front.style.zIndex = '-2';
                    front.classList.toggle(classes.Switch, false);
                    this.cover = this.props.background;
                    [this.front, this.back] = [this.back, this.front];
                }   
            }
        }
      
    }
    checkIfBack = (id) => {
        if(this.back === id) {
            return classes[this.props.background];
        }
        return classes[this.cover];
    }
    render() {
        return (
            <Fragment>
                <div id="bg1" className={[classes.ContainerOne, this.checkIfBack('bg1')].join(' ')}></div>
                <div id="bg2" className={[classes.ContainerTwo, this.checkIfBack('bg2')].join(' ')}></div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return{
        background: state.forecastState.background
    }
}

export default connect(mapStateToProps)(Background);