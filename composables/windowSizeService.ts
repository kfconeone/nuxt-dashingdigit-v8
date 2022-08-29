export enum WindowSize {
  Mobile,
  Tablet,
  Laptop,
  Desktop,
}

export function getCurrentWindowSize() {
  var currentWindowSize;
  if (window.innerWidth < 768) currentWindowSize = WindowSize.Mobile;
  if (window.innerWidth >= 768 && window.innerWidth < 1280) currentWindowSize = WindowSize.Tablet;
  if (window.innerWidth >= 1280 && window.innerWidth < 1920) currentWindowSize = WindowSize.Laptop;
  if (window.innerWidth >= 1920) currentWindowSize = WindowSize.Desktop;

  return currentWindowSize;
}
