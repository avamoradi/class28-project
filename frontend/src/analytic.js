import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_GA_TRACKING)
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export const useGAEventTracker = (category = 'Category') => {
  const trackEvent = (action = 'action', label = 'label') => {
    ReactGA.event({
      category,
      action,
      label,
    })
  }

  return trackEvent
}
