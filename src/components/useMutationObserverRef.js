import { useCallback, useEffect, useMemo, useState } from 'react'
import { findDOMNode } from 'react-dom'

/**
 * Default MutationObserver Config.
 *
 * @type {{
 *  subtree: boolean,
 *  attributes: boolean,
 *  childList: boolean,
 *  characterData: boolean,
 *  attributeOldValue: boolean,
 *  characterDataOldValue: boolean
 * }}
 */
const defaultConfig = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
  attributeOldValue: true,
  characterDataOldValue: true,
}

/**
 * Dummy callback implementation.
 *
 * @param mutationsList
 * @return {*}
 */
const defaultCallback = mutationsList => mutationsList

/**
 * Creates a callbackRef to spy on React element mutations.
 *
 * @param callback  MutationObserver callback with (mutationsList, observer).
 * @param config    MutationObserver configuration object.
 * @return {*[]}    Returns the callback reference measuredRef and React element.
 */
const useMutationObserverRef = (
  callback = defaultCallback,
  config = defaultConfig
) => {
  // Create MutationObserver (if window exists) and memoize it,
  // watch for callback changes.
  const observer = useMemo(
    () =>
      typeof window !== `undefined` && new window.MutationObserver(callback),
    [callback]
  )
  // Watch changes to react element to spy on.
  const [reactElement, setReactNode] = useState(null)
  // Set the React element to spy on as soon as measuredRef is called.
  const measuredRef = useCallback(
    targetNode => {
      if (targetNode !== null) {
        setReactNode(targetNode)
      }
    },
    [reactElement]
  )
  // Now start observing the React element received through measuredRef.
  useEffect(() => {
    if (reactElement) {
      const node = findDOMNode(reactElement)
      observer.observe(node, config)
      return () => {
        observer.disconnect()
      }
    }
  }, [reactElement])

  return [measuredRef, reactElement]
}

export default useMutationObserverRef
