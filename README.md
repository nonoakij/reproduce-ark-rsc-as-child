# Repository to Reproduce Error with Async Component Used as asChild in Menu.Item Component

## How to Reproduce

 1. Clone this repository
 2. Install dependencies using `pnpm install`
 3. Start the development server using `pnpm dev`
 4. Open your browser and navigate to <http://localhost:3000>
 5. Observe the error that occurs

``` text
Error: React.Children.only expected to receive a single React element child.
```

## Expected Behavior

The Async Component must be able to be used asChild without generating errors.
