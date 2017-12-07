import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './index.styl';
import { getPosition } from './utility';

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
        relativePosition: PropTypes.bool,
        enterDelay: PropTypes.number, // The delay length (in ms) before popups appear.
        leaveDelay: PropTypes.number, // The delay length (in ms) between the mouse leaving the target and tooltip disappearance.
        spacing: PropTypes.number, // The spacing between target and tooltip
        // contents
        content: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
    };
    static defaultProps = {
        type: 'tooltip',
        placement: 'top',
        relativePosition: false,
        enterDelay: 0, // milliseconds
        leaveDelay: 100, // milliseconds
        spacing: 0 // in px
    };

    timeoutID = {
        show: null,
        hide: null
    };

    state = {
        placement: this.props.placement,
        show: false,
        offset: {
            top: 0,
            left: 0
        }
    };

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
            const { relativePosition } = this.props;
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
                        { [styles.screenPosition]: !relativePosition },
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
            relativePosition,
            spacing
        } = this.props;
        const target = this.tooltipTarget;
        const tooltip = this.tooltip;

        const nextOffset = {
            top: 0,
            left: 0
        };

        let targetPosition;
        if (relativePosition === false) {
            targetPosition = getPosition(target); // Get Screen position
        } else {
            targetPosition = {
                x: target.offsetLeft,
                y: target.offsetTop
            };
        }

        if (nextPlacement === 'top') {
            nextOffset.top = Math.floor(targetPosition.y - tooltip.offsetHeight - spacing);
            nextOffset.left = Math.floor(targetPosition.x + (target.offsetWidth / 2) - (tooltip.offsetWidth / 2));
        }

        if (nextPlacement === 'right') {
            nextOffset.top = Math.floor(targetPosition.y + (target.offsetHeight / 2) - (tooltip.offsetHeight / 2));
            nextOffset.left = Math.floor(targetPosition.x + target.offsetWidth + spacing);
        }

        if (nextPlacement === 'bottom') {
            nextOffset.top = Math.floor(targetPosition.y + target.offsetHeight + spacing);
            nextOffset.left = Math.floor(targetPosition.x + (target.offsetWidth / 2) - (tooltip.offsetWidth / 2));
        }

        if (nextPlacement === 'left') {
            nextOffset.top = Math.floor(targetPosition.y + (target.offsetHeight / 2) - (tooltip.offsetHeight / 2));
            nextOffset.left = Math.floor(targetPosition.x - tooltip.offsetWidth - spacing);
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

    componentDidUpdate(prevProps, prevState) {
        this.adjustPlacement();
    }
    render() {
        const {
            className,
            children,
            ...props
        } = this.props;

        // Remove props do not need to set into div
        delete props.type;
        delete props.placement;
        delete props.enterDelay;
        delete props.leaveDelay;
        delete props.spacing;
        delete props.content;

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
