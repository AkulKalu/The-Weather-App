import React, { Component, Fragment } from 'react';
import classes from './ErrorHandler.module.css';
import {connect} from 'react-redux';
import {clear_error} from '../../Store/Actions'

class ErrorHandler extends Component {
       
        removeErrorHandler = (e) => {
            this.props.clearError();
        } 
        render() {
            const display = <div onClick={this.removeErrorHandler} className={classes.Backdrop}>
                                <div className={classes.Modal}>
                                    {this.props.error ? this.props.error.message : null}
                                </div>
                            </div>
            return (
               <Fragment>{this.props.error ? display : null}</Fragment>
            )
        }
    }

const mapStateToProps = state => {
    return {
        error: state.forecastState.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clear_error())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler);