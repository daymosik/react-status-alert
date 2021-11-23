/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

enzyme.configure({ adapter: new Adapter() })
