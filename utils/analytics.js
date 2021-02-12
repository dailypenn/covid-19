import ReactGA from 'react-ga'

const trackingID = 'UA-188534367-3'

export const initGA = () => {
  ReactGA.initialize(trackingID)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}