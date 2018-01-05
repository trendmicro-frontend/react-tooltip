import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Trigger from 'rc-trigger';
import { placements } from './placements';
import styles from './infotip.styl';

class Infotip extends PureComponent {
    static propTypes = {
        placement: PropTypes.oneOf([
            'rightTop',
            'rightBottom',
            'leftTop',
            'leftBottom'
        ]),
        enterDelay: PropTypes.number, // The delay length (in ms) before popups appear.
        leaveDelay: PropTypes.number, // The delay length (in ms) between the mouse leaving the target and tooltip disappearance.
        // contents
        tooltipClassName: PropTypes.string, // The className apply to tooltip itself. You can use it to override style portal if need
        tooltipStyle: PropTypes.object, // The style apply to tooltip itself. You can use it to override style portal if need
        content: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func
        ]).isRequired
    };
    static defaultProps = {
        placement: 'rightBottom',
        enterDelay: 0, // milliseconds
        leaveDelay: 100 // milliseconds
    };

    prefixCls = 'tm-tooltip'; // Reset prefix class name

    getPopupElement = () => {
        const { content } = this.props;
        const prefixCls = this.prefixCls;
        return ([
            <div
                className={classNames(
                    `${prefixCls}-arrow`
                )}
                key="arrow"
            />,
            <div
                className={classNames(
                    `${prefixCls}-inner`,
                    styles['tooltip-inner'],
                    styles['tooltip-inner-light']
                )}
                key="content"
            >
                {typeof content === 'function' ? content() : content}
            </div>
        ]);
    }

    getPopupDomNode() {
        return this.trigger.getPopupDomNode();
    }

    saveTrigger = (node) => {
        this.trigger = node;
    }

    render() {
        const {
            children,
            placement,
            enterDelay,
            leaveDelay,
            tooltipClassName,
            tooltipStyle,
            ...props
        } = this.props;

        // Remove props do not need to set into div
        delete props.content;

        const triggerActions = ['hover'];
        // const defaultVisible = false;
        // const destroyTooltipOnHide = false;
        const mouseEnterDelay = enterDelay / 1000; // To seconds
        const mouseLeaveDelay = leaveDelay / 1000; // To seconds

        return (
            <Trigger
                ref={this.saveTrigger}
                prefixCls={this.prefixCls}
                action={triggerActions}
                builtinPlacements={placements}
                popupPlacement={placement}
                popup={this.getPopupElement}
                popupClassName={classNames(
                    styles.tooltip,
                    tooltipClassName
                )}
                popupStyle={tooltipStyle}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                {...props}
            >
                {children}
            </Trigger>
        );
    }
}

export default Infotip;