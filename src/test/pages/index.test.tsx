import React from 'react'
import { Index } from '../../pages/index'
import { fireEvent, render } from '../testUtils'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Index />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
