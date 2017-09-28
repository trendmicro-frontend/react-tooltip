import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './index.styl';

class Tooltip extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf([
            'tooltip',
            'infotip'
        ]),
        placement: PropTypes.oneOf([
            'top',
            'right',
            'bottom',
            'left'
        ]),
        enterDelay: PropTypes.number, // The delay length (in ms) before popups appear.
        leaveDelay: PropTypes.number, // The delay length (in ms) between the mouse leaving the target and tooltip disappearance.
        spacing: PropTypes.number, // The spacing between target and tooltip
        // contents
        content: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
    };
    static defaultProps = {
        type: 'tooltip',
        placement: 'top',
        enterDelay: 0, // milliseconds
        leaveDelay: 100, // milliseconds
        spacing: 0 // in px
    };

    timeoutID = {
        show: null,
        hide: null
    };

    state = this.getInitialState();
    actions = {
        handleOnMouseOver: (e) => {
            clearTimeout(this.timeoutID.show);
            clearTimeout(this.timeoutID.hide);

            this.timeoutID.show = setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    show: true
                }));
            }, this.props.enterDelay);
        },
        handleOnMouseOut: (e) => {
            clearTimeout(this.timeoutID.show);
            clearTimeout(this.timeoutID.hide);

            this.timeoutID.hide = setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    show: false
                }));
            }, this.props.leaveDelay);
        }
    };

    renders = {
        renderTooltip: () => {
            const { show, placement, offset } = this.state;

            return (
                <div
                    ref={node => {
                        this.tooltip = node;
                    }}
                    style={{
                        top: offset.top,
                        left: offset.left
                    }}
                    className={classNames(
                        styles.tooltip,
                        { [styles.show]: show },
                        { [styles.in]: show },
                        styles[placement]
                    )}
                >
                    {this.renders.renderArrow()}
                    {this.renders.renderContent()}
                </div>
            );
        },
        renderArrow: () => {
            const { type } = this.props;

            if (type === 'infotip') {
                return null;
            }

            return (<div className={styles.tooltipArrow} />);
        },
        renderContent: () => {
            const { type, content } = this.props;
            const isFunction = typeof (content) === 'function';

            return (
                <div
                    className={classNames(
                        styles.tooltipInner,
                        { [styles.tooltipInnerLight]: type === 'infotip' }
                    )}
                >
                    {isFunction &&
                        content()
                    }
                    {!isFunction &&
                        content
                    }
                </div>
            );
        }
    };

    adjustPlacement = () => {
        const {
            placement: prevPlacement,
            offset: prevOffset
        } = this.state;
        const {
            placement: nextPlacement,
            spacing
        } = this.props;
        const target = this.tooltipTarget;
        const tooltip = this.tooltip;

        const nextOffset = {
            top: 0,
            left: 0
        };

        if (nextPlacement === 'top') {
            nextOffset.top = Math.floor(target.offsetTop - tooltip.offsetHeight - spacing);
            nextOffset.left = Math.floor(target.offsetLeft + (target.offsetWidth / 2) - (tooltip.offsetWidth / 2));
        }

        if (nextPlacement === 'right') {
            nextOffset.top = Math.floor(target.offsetTop + (target.offsetHeight / 2) - (tooltip.offsetHeight / 2));
            nextOffset.left = Math.floor(target.offsetLeft + target.offsetWidth + spacing);
        }

        if (nextPlacement === 'bottom') {
            nextOffset.top = Math.floor(target.offsetTop + target.offsetHeight + spacing);
            nextOffset.left = Math.floor(target.offsetLeft + (target.offsetWidth / 2) - (tooltip.offsetWidth / 2));
        }

        if (nextPlacement === 'left') {
            nextOffset.top = Math.floor(target.offsetTop + (target.offsetHeight / 2) - (tooltip.offsetHeight / 2));
            nextOffset.left = Math.floor(target.offsetLeft - tooltip.offsetWidth - spacing);
        }

        if ((prevPlacement !== nextPlacement) || (prevOffset.top !== nextOffset.top) || (prevOffset.left !== nextOffset.left)) {
            this.setState((prevState, props) => {
                return {
                    ...prevState,
                    placement: nextPlacement,
                    offset: nextOffset
                };
            });
        }
    };

    getInitialState() {
        return {
            placement: this.props.placement,
            show: false,
            offset: {
                top: 0,
                left: 0
            }
        };
    }
    componentDidUpdate(prevProps, prevState) {
        this.adjustPlacement();
    }
    render() {
        const {
            className,
            children,
            ...props
        } = this.props;

        return (
            <div
                {...props}
                ref={node => {
                    this.tooltipContainer = node;
                }}
                className={classNames(
                    styles.tooltipContainer,
                    className
                )}
            >
                {this.renders.renderTooltip()}
                <div
                    ref={node => {
                        this.tooltipTarget = node;
                    }}
                    className={styles.tooltipTargetContainer}
                    onMouseOver={this.actions.handleOnMouseOver}
                    onMouseOut={this.actions.handleOnMouseOut}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default Tooltip;
