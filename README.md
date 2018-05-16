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
  import { Tooltip, Infotip } from '@trendmicro/react-tooltip';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-tooltip/dist/react-tooltip.css';
  ```

## Usage
```js
// Right tooltip
<Tooltip content="Config settings">
    <button>Settings</button>
</Tooltip>

// Right tooltip with a function content
<Tooltip
    content={() => {
        return (<span style={{ whiteSpace: 'nowrap' }}>{'Right tooltip'}</span>);
    }}
>
    <sapn>Hover on me</span>
</Tooltip>

// Top tooltip
<Tooltip placement="top" content="Top tooltip"><sapn>Hover on me</span></Tooltip>
```
```js
// Infotip
<Infotip content="This is a simple example for infotip.">
    <span className="icon icon-info-sign" />
</Infotip >

<Infotip placement="rightTop" content="This is a simple example for infotip.">
    <span className="icon icon-info-sign" />
</Infotip >

<Infotip
    tooltipStyle={{ wordWrap: 'break-word' }}
    content="Pneumonoultramicroscopicsilicovolcanoconiosis is the longest word. Start01234567890123456789012345678901234567890123456789012345678901234567890123456789End Start0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789End"
>
    <span>Hover on me (infotip with long article)</span>
</Infotip>
```

## API

### Properties for Tooltip

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
placement | string | 'right' | One of: 'top', 'right', 'bottom' and 'left'. <br />Tooltip will display at placement if possible, otherwise tooltip adjust it's location automatically. 
enterDelay | number | 0 | The delay length (in ms) before the tooltip appears.
leaveDelay | number | 0 | The delay length (in ms) before the tooltip disappears.
hideOnClick | boolean | false | Hide tooltip when target been clicked.
disabled | boolean | false | Disable tooltip.
tooltipClassName | string |  | The className apply to tooltip itself. You can use it to override style if need.
tooltipStyle | object |  | The style apply to tooltip itself. You can use it to override style if need.
content | node or function |  | The tooltip content. Required.

### Properties for Infotip

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
placement | string | 'rightBottom' | One of: 'rightTop', 'rightBottom', 'leftTop', and 'leftBottom'. <br />Tooltip will display at placement if possible, otherwise tooltip adjust it's location automatically. 
enterDelay | number | 0 | The delay length (in ms) before the infotip appears.
leaveDelay | number | 0 | The delay length (in ms) before the infotip disappears.
hideOnClick | boolean | false | Hide infotip when target been clicked.
disabled | boolean | false | Disable infotip.
tooltipClassName | string |  | The className apply to infotip itself. You can use it to override style if need.
tooltipStyle | object |  | The style apply to infotip itself. You can use it to override style if need.
content | node or function |  | The infotip content. Required.

## License

MIT
