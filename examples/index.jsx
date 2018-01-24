import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import { Button } from '@trendmicro/react-buttons';
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Navbar from './Navbar';
import Section from './Section';
import { Tooltip, Infotip } from '../src';
import styles from './index.styl';

class App extends React.Component {
    state = {
        enabled: true
    };

    actions = {
        toggle: () => {
            this.setState((prevState, props) => {
                return {
                    ...prevState,
                    enabled: !prevState.enabled
                };
            });
        }
    };

    render() {
        const name = 'React Tooltip';
        const url = 'https://github.com/trendmicro-frontend/react-tooltip';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-6">
                                <h2>Tooltips</h2>
                                <p>A tooltip is a box of information that labels a UI element that is hovered over.</p>
                                <ul className="description">
                                    <li>Tooltips are used for UI elements such as icons and buttons.</li>
                                    <li>Try to keep a tooltip within a few words.</li>
                                    <li>A tooltip should appear in a box with an arrow pointing to the UI element that is being referred to.</li>
                                    <li>Display tooltips in one of the four directions in relation to the indicated UI control: top, bottom, left, or right.</li>
                                </ul>
                                <div className={styles.example}>
                                    <div className={styles['tooltip-example']}>
                                        <div
                                            className={classNames(
                                                styles['tooltip-example'],
                                                styles.top
                                            )}
                                        >
                                            <Tooltip
                                                placement="top"
                                                content="Top tooltip"
                                            >
                                                <span>Hover on me (Top tooltip)</span>
                                            </Tooltip>
                                        </div>

                                        <div
                                            className={classNames(
                                                styles['tooltip-example'],
                                                styles.right
                                            )}
                                        >

                                            <Tooltip
                                                placement="right"
                                                content={() => {
                                                    return (
                                                        <span style={{ whiteSpace: 'nowrap' }}>
                                                            { 'Right tooltip' }
                                                        </span>
                                                    );
                                                }}
                                            >
                                                <span>Hover on me (Right tooltip)</span>
                                            </Tooltip>
                                        </div>

                                        <div
                                            className={classNames(
                                                styles['tooltip-example'],
                                                styles.bottom
                                            )}
                                        >
                                            <Tooltip
                                                placement="bottom"
                                                content="Bottom tooltip"
                                            >
                                                <span>Hover on me (Bottom tooltip)</span>
                                            </Tooltip>
                                        </div>

                                        <div
                                            className={classNames(
                                                styles['tooltip-example'],
                                                styles.left
                                            )}
                                        >
                                            <Tooltip
                                                placement="left"
                                                content="Left tooltipLeft tooltipLeft tooltipLeft tooltipLeft tooltipLeft tooltipLeft tooltipLeft tooltip"
                                            >
                                                <span>Hover on me (Left tooltip)</span>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className={styles['tooltip-standard-example-container']}>
                                        <Tooltip
                                            placement="top"
                                            content="Settings"
                                            disabled={!this.state.enabled}
                                        >
                                            <Button
                                                className="btn btn-border btn-icon-only"
                                                disabled={!this.state.enabled}
                                            >
                                                <span className="fa fa-cog" />
                                            </Button>
                                        </Tooltip>
                                        <ToggleSwitch
                                            checked={this.state.enabled}
                                            onChange={this.actions.toggle}
                                        />
                                    </div>
                                </div>
                            </Section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-6">
                                <h2>Infotip</h2>
                                <p>An infotip is a pop-up box that contains descriptions for a UI element that is being hovered over.</p>
                                <ul className="description">
                                    <li>Infotips are used to provide full forms of abbreviated or truncated terms, or information about unfamiliar objects.</li>
                                    <li>The content can be a few lines long.</li>
                                    <li>Infotips do appear in boxes without arrows.</li>
                                </ul>
                                <hr />
                                <p>You may use an icon to display the infotip.</p>
                                <div style={{ padding: '10px 0' }}>
                                    <form>
                                        <span
                                            className={classNames(
                                                styles.icon,
                                                styles['icon-info-sign']
                                            )}
                                        />
                                    </form>
                                </div>
                                <div className={styles.example}>
                                    <div className={styles['tooltip-light-example-container']}>
                                        <form>
                                            <Infotip
                                                content="Users with this role have read-only access to all management console features."
                                            >
                                                <span
                                                    className={classNames(
                                                        styles.icon,
                                                        styles['icon-info-sign']
                                                    )}
                                                />
                                            </Infotip>
                                        </form>
                                    </div>
                                </div>
                                <div className={styles['tooltip-example']}>
                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.top
                                        )}
                                    >
                                        <Infotip
                                            placement="rightTop"
                                            content="rightTop tooltip"
                                        >
                                            <span>Hover on me (rightTop infotip)</span>
                                        </Infotip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.right
                                        )}
                                    >
                                        <Infotip
                                            placement="rightBottom"
                                            content={() => {
                                                return (
                                                    <span style={{ whiteSpace: 'nowrap' }}>
                                                        { 'rightBottom infotip' }
                                                    </span>
                                                );
                                            }}
                                        >
                                            <span>Hover on me (rightBottom infotip)</span>
                                        </Infotip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.bottom
                                        )}
                                    >
                                        <Infotip
                                            placement="leftBottom"
                                            content="leftBottom tooltip"
                                        >
                                            <span>Hover on me (leftBottom infotip)</span>
                                        </Infotip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.left
                                        )}
                                    >
                                        <Infotip
                                            placement="leftTop"
                                            content="leftTop tooltip"
                                        >
                                            <span>Hover on me (leftTop infotip)</span>
                                        </Infotip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.left
                                        )}
                                    >
                                        <Infotip
                                            tooltipStyle={{
                                                wordWrap: 'break-word'
                                            }}
                                            content="Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word. Start01234567890123456789012345678901234567890123456789012345678901234567890123456789End Start0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789End"
                                        >
                                            <span>Hover on me (infotip with long article)</span>
                                        </Infotip>
                                    </div>
                                </div>
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
