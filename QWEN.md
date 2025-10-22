# QWEN.md - hotel.arya2 Project Documentation

## Project Overview

hotel.arya2 is a modern, responsive hotel booking website built with React, TypeScript, and Tailwind CSS. The project is themed around "Arya Palace" as seen in the header component, suggesting it's a luxury hotel website. It features a complete single-page application with multiple sections including hero, about, rooms, amenities, dining, gallery, virtual tour, and contact.

### Key Technologies
- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Icons**: Lucide React icon library
- **Build Tool**: Vite
- **Database Integration**: Supabase (for data management)
- **CSS Customization**: Custom scrollbar styling, text shadows, and font management

### Architecture
The application follows a component-based architecture with:
- Main `App.tsx` containing state for dark mode
- Multiple feature components in the `src/components` directory
- Responsive design with mobile-friendly navigation
- Dark/light mode toggle functionality
- Smooth scrolling navigation

## Building and Running

### Prerequisites
- Node.js (version compatible with the project dependencies)
- npm or yarn package manager

### Setup Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check TypeScript
npm run typecheck
```

### Development Workflow
1. Clone or download the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` for the development server
4. Access the application at the provided localhost URL
5. Make changes to components as needed

## Key Features

1. **Responsive Design**: Mobile-first approach with hamburger menu for small screens
2. **Dark Mode**: Toggle between light and dark themes with smooth transitions
3. **Smooth Scrolling**: Navigation links scroll to corresponding sections
4. **Modern UI**: Uses Tailwind CSS with custom amber color palette
5. **Component-Based**: Well-organized component structure
6. **Accessibility**: Proper semantic HTML and keyboard navigation

## Component Structure
The application is composed of the following main components:
- Header: Navigation with theme toggle and booking button
- Hero: Main landing section
- About: Information about the hotel
- Rooms: Hotel room listings
- Amenities: Hotel services and features
- Dining: Restaurant and food services
- Gallery: Photo gallery of the hotel
- VirtualTour: Interactive virtual tour feature
- Contact: Contact information and booking form
- Footer: Site footer with additional links

## Development Conventions

### Styling
- Uses Tailwind CSS utility classes
- Custom fonts: 'Inter' for body text, 'Playfair Display' for headings
- Amber color palette for accents and highlights
- Dark mode support using Tailwind's dark: prefix
- Custom CSS for scrollbar styling and text effects

### Code Structure
- TypeScript for type safety
- React hooks for state management
- Consistent component prop interfaces
- Modern ESNext JavaScript features
- Strict TypeScript linting rules

### Naming Conventions
- PascalCase for React components
- camelCase for functions and variables
- kebab-case for file names matching component names
- Consistent prop naming patterns

## Environment/Configuration Notes

The project uses Vite as the build tool with React plugin. It has TypeScript references configured for both app and node environments. The Tailwind configuration includes custom font families and an extended amber color palette. Supabase integration indicates backend services for data management, though implementation details would be in the individual components.

## Potential Areas for Enhancement

1. The README could be expanded with more detailed project information
2. More comprehensive documentation for individual components
3. Integration with actual Supabase backend for dynamic content
4. Unit tests for React components
5. Additional accessibility features