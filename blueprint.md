# Project Blueprint

## Overview

This is a simple Angular application that displays a profile photo.

## Project Structure

- `src/`
  - `app/`
    - `app.config.ts`: Main application configuration, including image loader.
    - `app.ts`: The root component of the application.
    - `app.html`: The root component's template.
    - `app.css`: The root component's styles.
    - `profile-photo.component.ts`: A component to display a profile photo.

## Current Change: Add Profile Photo Component

- **Goal:** Create and display a new `ProfilePhotoComponent`.
- **Steps:**
  1.  **Update `app.config.ts`:** Added `provideImgixLoader` to configure `NgOptimizedImage`.
  2.  **Create `profile-photo.component.ts`:** Created a new standalone component with `OnPush` change detection and `NgOptimizedImage`.
  3.  **Update `app.ts`:** Imported and added `ProfilePhotoComponent` to the `imports` array of the `App` component.
  4.  **Update `app.html`:** Replaced placeholder content with `<app-profile-photo />`.
  5.  **Update `app.css`:** Added styles to center the profile photo.
