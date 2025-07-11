# Contributing to Employee Directory

Thank you for your interest in contributing to the Employee Directory project! We welcome contributions from everyone.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your feature or bug fix
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes with a clear commit message
7. Push your branch to your fork
8. Create a Pull Request

## Development Setup

1. **Prerequisites**
   - Node.js (version 16 or higher)
   - npm or yarn

2. **Installation**
   ```bash
   git clone https://github.com/yourusername/employee-directory.git
   cd employee-directory
   npm install
   ```

3. **Running the Development Server**
   ```bash
   npm run dev
   ```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid using `any` type
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use proper prop types with TypeScript interfaces
- Follow the single responsibility principle

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use semantic class names when custom CSS is needed

### File Organization
- Place components in the `src/components/` directory
- Use custom hooks in the `src/hooks/` directory
- Keep types in the `src/types/` directory
- Organize related files together

## Commit Message Guidelines

Use clear and descriptive commit messages:

- `feat: add new employee search functionality`
- `fix: resolve pagination bug on mobile devices`
- `docs: update README with deployment instructions`
- `style: improve responsive design for tablet view`
- `refactor: extract employee validation logic to separate hook`

## Pull Request Process

1. **Before Submitting**
   - Ensure your code follows the style guidelines
   - Test your changes on different screen sizes
   - Update documentation if necessary
   - Make sure the build passes (`npm run build`)

2. **Pull Request Description**
   - Clearly describe what your changes do
   - Include screenshots for UI changes
   - Reference any related issues
   - List any breaking changes

3. **Review Process**
   - Maintainers will review your PR
   - Address any feedback or requested changes
   - Once approved, your PR will be merged

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce the issue
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

## Feature Requests

For new features:

- Check if the feature has already been requested
- Clearly describe the feature and its benefits
- Provide examples or mockups if possible
- Discuss the implementation approach

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Maintain a positive and collaborative environment

## Questions?

If you have questions about contributing, feel free to:

- Open an issue for discussion
- Reach out to the maintainers
- Check existing documentation

Thank you for contributing to make this project better!