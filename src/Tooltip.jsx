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
        preferPlace: PropTypes.oneOf([
            'top',
            'right',
            'bottom',
            'left'
        ]),
        showDelay: PropTypes.number, // The approximate number of milliseconds before popups appear.
        hideDelay: PropTypes.number, // The approximate number of milliseconds between the mouse leaving the target and tooltip disappearance.
        spacing: PropTypes.number, // The spacing between target and tooltip
        // contents
        content: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
    };
    static defaultProps = {
        type: 'tooltip',
        preferPlace: 'top',
        showDelay: 0, // milliseconds
        hideDelay: 100, // milliseconds
        spacing: 0 // in px
    };

    timeoutID = {
        show: null,
        hide: null
    };

    constructor(props) {
        super(props);

        this.state = {
            target: props.children,
            isShow: false,
            place: props.preferPlace,
            offset: {
                top: 0,
                left: 0
            }
        };
    }

    componentDidUpdate(prevProps, prevState) {
        this.actions.adjustPlace();
    }

    actions = {
        toggle: (toState = null) => {
            const isShow = toState === null ? !this.state.isShow : toState;
            this.setState((prevState, props) => {
                return {
                    ...prevState,
                    isShow
                };
            });
        },
        handleOnMouseOver: (e) => {
            clearTimeout(this.timeoutID.show);
            clearTimeout(this.timeoutID.hide);

            this.timeoutID.show = setTimeout(() => {
                this.actions.toggle(true);
            }, this.props.showDelay);
        },
        handleOnMouseOut: (e) => {
            clearTimeout(this.timeoutID.show);
            clearTimeout(this.timeoutID.hide);

            this.timeoutID.hide = setTimeout(() => {
                this.actions.toggle(false);
            }, this.props.hideDelay);
        },
        adjustPlace: () => {
            const { place, offset } = this.state;
            const {
                preferPlace: newPlace,
                spacing
            } = this.props;
            const target = this.tooltipTarget;
            const tooltip = this.tooltip;

            let newOffset = {
                top: 0,
                left: 0
            };

            if (newPlace === 'top') {
                newOffset = {
                    top: Math.floor(target.offsetTop - tooltip.offsetHeight - spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - (tooltip.offsetWidth / 2))
                };
            }

            if (newPlace === 'right') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - (tooltip.offsetHeight / 2)),
                    left: Math.floor(target.offsetLeft + target.offsetWidth + spacing)
                };
            }

            if (newPlace === 'bottom') {
                newOffset = {
                    top: Math.floor(target.offsetTop + target.offsetHeight + spacing),
                    left: Math.floor(target.offsetLeft + (target.offsetWidth / 2) - (tooltip.offsetWidth / 2))
                };
            }

            if (newPlace === 'left') {
                newOffset = {
                    top: Math.floor(target.offsetTop + (target.offsetHeight / 2) - (tooltip.offsetHeight / 2)),
                    left: Math.floor(target.offsetLeft - tooltip.offsetWidth - spacing)
                };
            }

            if (place !== newPlace || offset.top !== newOffset.top || offset.left !== newOffset.left) {
                this.setState((prevState, props) => {
                    return {
                        ...prevState,
                        place: newPlace,
                        offset: newOffset
                    };
                });
            }
        },
        // https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
        isElementInView: (element, fullyInView) => {
            const pageTop = document.body.scrollTop;
            const pageBottom = pageTop + document.body.offsetHeight;
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

    renders = {
        renderTooltip: () => {
            const { isShow, place, offset } = this.state;

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
                        { [styles.show]: isShow },
                        { [styles.in]: isShow },
                        styles[place] || ''
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

            return (<div className={styles['tooltip-arrow']} />);
        },
        renderContent: () => {
            const { type, content } = this.props;
            const isFunction = typeof (content) === 'function';

            return (
                <div
                    className={classNames(
                        styles['tooltip-inner'],
                        { [styles['tooltip-inner-light']]: type === 'infotip' }
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

    render() {
        const {
            children
        } = this.props;

        return (
            <span
                ref={node => {
                    this.tooltipContainer = node;
                }}
                className={styles['tooltip-container']}
                onMouseOut={this.actions.handleOnMouseOut}
            >
                {this.renders.renderTooltip()}
                <span
                    ref={node => {
                        this.tooltipTarget = node;
                    }}
                    onMouseOver={this.actions.handleOnMouseOver}
                >
                    {children}
                </span>
            </span>
        );
    }
}

export default Tooltip;
