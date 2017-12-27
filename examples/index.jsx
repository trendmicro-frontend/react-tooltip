import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Navbar from './Navbar';
import Section from './Section';
import Tooltip from '../src';
import styles from './index.styl';

class App extends React.Component {
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
                                                Hover on me (Top tooltip)
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
                                                Hover on me (Right tooltip)
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
                                                Hover on me (Bottom tooltip)
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
                                                content="Left tooltip"
                                            >
                                                Hover on me (Left tooltip)
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className={styles['tooltip-standard-example-container']}>
                                        <Tooltip
                                            placement="top"
                                            content="Settings"
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-border btn-icon-only"
                                            >
                                                <span className="fa fa-cog" />
                                            </button>
                                        </Tooltip>
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
                                            <Tooltip
                                                type="infotip"
                                                placement="right"
                                                content="Users with this role have read-only access to all management console features."
                                            >
                                                <span
                                                    className={classNames(
                                                        styles.icon,
                                                        styles['icon-info-sign']
                                                    )}
                                                />
                                            </Tooltip>
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
                                        <Tooltip
                                            type="infotip"
                                            placement="top"
                                            content="Top tooltip"
                                        >
                                            Hover on me (Top infotip)
                                        </Tooltip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.right
                                        )}
                                    >
                                        <Tooltip
                                            type="infotip"
                                            placement="right"
                                            content={() => {
                                                return (
                                                    <span style={{ whiteSpace: 'nowrap' }}>
                                                        { 'Right tooltip' }
                                                    </span>
                                                );
                                            }}
                                        >
                                            Hover on me (Right infotip)
                                        </Tooltip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.bottom
                                        )}
                                    >
                                        <Tooltip
                                            type="infotip"
                                            placement="bottom"
                                            content="Bottom tooltip"
                                        >
                                            Hover on me (Bottom infotip)
                                        </Tooltip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.left
                                        )}
                                    >
                                        <Tooltip
                                            type="infotip"
                                            placement="left"
                                            content="Left tooltip"
                                        >
                                            Hover on me (Left infotip)
                                        </Tooltip>
                                    </div>

                                    <div
                                        className={classNames(
                                            styles['tooltip-example'],
                                            styles.left
                                        )}
                                    >
                                        <Tooltip
                                            type="infotip"
                                            placement="top"
                                            tooltipStyle={{
                                                wordWrap: 'break-word'
                                            }}
                                            content="Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word. Start01234567890123456789012345678901234567890123456789012345678901234567890123456789End Start0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789End"
                                        >
                                            Hover on me (Top infotip with long article)
                                        </Tooltip>
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
