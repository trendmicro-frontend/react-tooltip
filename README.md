# react-tooltip [![build status](https://travis-ci.org/trendmicro-frontend/react-tooltip.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-tooltip) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-tooltip/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-tooltip?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-tooltip.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-tooltip/)

React Tooltip

Demo: https://trendmicro-frontend.github.io/react-tooltip

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-tooltip](https://github.com/trendmicro-frontend/react-tooltip):

  ```
  npm install --save react @trendmicro/react-tooltip
  ```

2. At this point you can import `@trendmicro/react-tooltip` and its styles in your application as follows:

  ```js
  import Tooltip from '@trendmicro/react-tooltip';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-tooltip/dist/react-tooltip.css';
  ```

## Usage

```js
// Top tooltip
<Tooltip content="Top tooltip">Hover on me</Tooltip>

// Right tooltip with a function content
<Tooltip
    placement="right"
    content={() => {
        return (<span style={{ whiteSpace: 'nowrap' }}>{'Right tooltip'}</span>);
    }}
>
    Hover on me (Right tooltip)
</Tooltip>

// Top tooltip wrap button
<Tooltip content="Config settings">
    <button>Settings</button>
</Tooltip>

// Infotip
<Tooltip
    type="infotip"
    content="This is a simple example for infotip."
>
    <span className="icon icon-info-sign" />
</Tooltip>
```

## API

### Properties

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
type | string | 'tooltip' | One of: 'tooltip', 'infotip'
placement | string | 'top' | One of: 'top', 'right', 'bottom', 'left'
relativePosition | boolean | false | How to locate target's position. <br />False: Get screen offset. <br />True: Use offsetLeft and offsetTop (Will affected by container's position style). <br />Set to true when use in react-modal.
enterDelay | number | 0 | The delay length (in ms) before the tooltip appears.
leaveDelay | number | 100 | The delay length (in ms) before the tooltip disappears.
spacing | number | 0 | Specifies the space (in px) between tooltip and element.
targetWrapClassName | string | '' | The classNames apply to tooltip target's container.
targetWrapStyle | object | {} | The styles apply to tooltip target's container.
tooltipClassName | string | '' | The className apply to tooltip itself. You can use it to override style if need.
tooltipStyle | object | {} | The style apply to tooltip itself. You can use it to override style if need.
content | any | | The tooltip content.

## License

MIT
