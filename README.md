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

// Right tooltip with function generated content
<Tooltip
    preferPlace="right"
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

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>'tooltip'</td>
      <td>
          Type of tooltip.
          <ul>
              <li>Tooltip: 'tooltip'</li>
              <li>Infotip: 'infotip'</li>
          </ul>
      </td>
    </tr>
    <tr>
      <td>preferPlace</td>
      <td>String</td>
      <td>'top'</td>
      <td>
          <ul>
              <li>Top: 'top'</li>
              <li>Right: 'right'</li>
              <li>Bottom: 'bottom'</li>
              <li>Left: 'left'</li>
          </ul>
      </td>
    </tr>
    <tr>
      <td>showDelay</td>
      <td>Number</td>
      <td>0</td>
      <td>The approximate number of milliseconds before popups appear</td>
    </tr>
    <tr>
      <td>hideDelay</td>
      <td>Number</td>
      <td>100</td>
      <td>The approximate number of milliseconds between the mouse leaving the target and tooltip disappearance.</td>
    </tr>
    <tr>
      <td>spacing</td>
      <td>Number</td>
      <td>0</td>
      <td>The spacing (px) between target and tooltip</td>
    </tr>
    <tr>
      <td>content</td>
      <td>Function|Object|String</td>
      <td></td>
      <td>Tooltip content</td>
    </tr>
  </tbody>
</table>

## License

MIT
