// setup-jest.ts - Jest setup file for Angular

import 'jest-preset-angular/setup-jest';

// Global test environment setup
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

// Mock for IntersectionObserver (used in your portfolio app)
class MockIntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver
});

// Mock for matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock for scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn()
});

// Mock for getSelection
Object.defineProperty(window, 'getSelection', {
  writable: true,
  value: jest.fn().mockReturnValue({
    removeAllRanges: jest.fn()
  })
});

// Suppress console warnings during tests (optional)
const originalWarn = console.warn;
beforeAll(() => {
  console.warn = (message: string) => {
    // Suppress specific Angular warnings that are not relevant for tests
    if (
      message.includes('Angular is running in development mode') ||
      message.includes('ExpressionChangedAfterItHasBeenCheckedError')
    ) {
      return;
    }
    originalWarn(message);
  };
});

afterAll(() => {
  console.warn = originalWarn;
});