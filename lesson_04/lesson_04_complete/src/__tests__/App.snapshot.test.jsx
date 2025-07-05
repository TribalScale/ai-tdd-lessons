import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App.jsx'

describe('App snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<App name="world"/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})