/**
 *
 * @param event
 * @param listener
 * @param el //添加事件监听器的对象，可选，不传则取document
 * @param options
 * @returns
 */
export const addListener = (
  event: string,
  listener: EventListener,
  el?: HTMLElement,
  options?: boolean | AddEventListenerOptions
): (() => void) => {
  (el || document).addEventListener(event, listener, options);
  return () => {
    (el || document).removeEventListener(event, listener, options);
  };
};
