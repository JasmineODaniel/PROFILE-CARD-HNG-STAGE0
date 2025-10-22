# Jasmine Daniel - Profile Card & Portfolio

A modern, accessible, and responsive multi-page portfolio website built with semantic HTML, modern CSS, and vanilla JavaScript. Features a profile card, about me page, and contact form with comprehensive validation.

## Project Overview

**Name**: Jasmine Daniel Profile Card  
**Stage**: Frontend Wizards Stage 1  
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript  
**No Frameworks**: Pure frontend implementation  
**Design**: Dark theme with aqua blue accents and Michroma font

## Live Project Structure

```
webapp/
├── index.html          Main profile card page
├── about.html          About me reflections page
├── contact.html        Contact form with validation
├── app.js              Real-time timestamp logic
├── contact.js          Form validation logic
├── styles.css          All styling (mobile-first responsive)
├── README.md           This file
└── Jasgirl.jpg         Profile avatar image (to be added)
```

## Completed Features

### Stage 0 Features
- Profile card with semantic HTML structure
- User name, bio, and avatar display
- Real-time millisecond timestamp (updates every second)
- Social media links (Twitter, GitHub, LinkedIn, Instagram)
- Hobbies and dislikes sections
- All required data-testid attributes implemented
- Fully accessible with ARIA labels and keyboard navigation
- Responsive design (mobile, tablet, desktop)

### Stage 1 Features

#### About Me Page
- Biography section
- Goals in the program
- Areas lacking confidence
- Note to future self
- Additional thoughts section
- All sections use semantic HTML (main, section, h2, ul, p)
- All required data-testids implemented

#### Contact Page
- Full form validation with real-time feedback
- Required fields: Full Name, Email, Subject, Message
- Validation features:
  - Real-time validation on blur (when leaving field)
  - Real-time validation on input (while typing)
  - Error messages for each field
  - **Success message only shows after valid submission**
  - Form reset after successful submission
  - Auto-focus on first error field
  - Auto-hide success message after 5 seconds
- All required data-testids implemented

#### Navigation
- Fixed navigation bar at top
- Active page highlighting
- Responsive mobile menu
- Keyboard accessible

## Validation Rules

### Name Validation
- Cannot be empty
- Whitespace is trimmed

### Email Validation
- Cannot be empty
- Must match pattern: text@text.text
- Uses regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Subject Validation
- Cannot be empty
- Whitespace is trimmed

### Message Validation
- Cannot be empty
- Must be at least 10 characters long
- Whitespace is trimmed before validation

## Functional Entry Points

### Pages
- `/` or `index.html` - Home/Profile Card
- `about.html` - About Me page
- `contact.html` - Contact form

### Data Test IDs

#### Profile Card (index.html)
- `test-profile-card` - Main card container
- `test-user-name` - User name heading
- `test-user-bio` - Biography paragraph
- `test-user-time` - Real-time timestamp
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-social-instagram` - Instagram link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

#### About Page (about.html)
- `test-about-page` - Main container
- `test-about-bio` - Biography section
- `test-about-goals` - Goals section
- `test-about-confidence` - Confidence areas section
- `test-about-future-note` - Future note section
- `test-about-extra` - Additional thoughts section

#### Contact Page (contact.html)
- `test-contact-name` - Name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

## How to Use Locally

1. Download or clone the repository
2. Open any HTML file in a modern web browser
3. No build process or server required
4. No dependencies to install

```bash
# Just open in browser
open index.html

# Or use a simple local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order throughout pages
- Visible focus indicators on all focusable elements

### Screen Readers
- Semantic HTML provides context
- ARIA labels on all links and buttons
- ARIA describedby connects errors to inputs
- ARIA live regions for dynamic content (success/error messages)

### Visual Accessibility
- High contrast text (#e0e0e0 on #0a0a0a)
- Aqua blue accents easily distinguishable
- Focus indicators clearly visible
- Error states with both color and text

## Responsive Breakpoints

- **Mobile** (< 480px): Single column, stacked navigation
- **Tablet** (480px - 768px): Two-column layouts, horizontal navigation
- **Desktop** (768px - 1200px): Full layouts, optimal reading width
- **Wide** (> 1200px): Maximum width constraint (1100px)

## Color Scheme

- **Background**: #0a0a0a (Very dark grey/black)
- **Cards**: rgba(20, 20, 20, 0.7) with backdrop blur
- **Primary Text**: #e0e0e0 (Light grey)
- **Accent**: #00d9ff (Aqua blue)
- **Error**: #ff4444 (Red)
- **Success**: #00ff80 (Green)

## Fonts

- **Headings**: Michroma (Google Fonts)
- **Body**: System font stack
- **Monospace**: 'Courier New' for timestamp

## Testing the Project

### Contact Form (Key Feature)
1. Open contact.html
2. **Verify success message is HIDDEN initially**
3. Try submitting empty form (should show errors)
4. Enter invalid email (should show email error)
5. Enter message less than 10 characters (should show error)
6. Fill correctly and submit (should show success)
7. **Verify success message ONLY appears after valid submission**
8. Verify form resets after success

## Project Status

 Status: Completed Stage 1  
 Last Updated: October 22, 2025  
 Deployed

## Submission Checklist

-  All HTML pages created with semantic structure
-  All required data-testid attributes implemented
-  Form validation working with all rules
-  **Success message hidden by default (class="hidden")**
-  **Success message displays ONLY after valid submission**
-  Error messages display for invalid inputs
-  Real-time timestamp updating every second
-  All pages responsive across devices
-  Keyboard navigation fully functional
-  No frameworks used (vanilla JavaScript)
-  Code documented with comments

## Contact

- Twitter: [@Jzminedaniel](https://x.com/Jzminedaniel?s=09)
- GitHub: [@JasmineODaniel](https://github.com/JasmineODaniel)
- Instagram: [@theneverdone](https://www.instagram.com/theneverdone?igsh=YzlleGdvZ3dnYjNl)
- Email: jasminedaniel046@gmail.com

