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
├── JASMINE.md          Detailed JavaScript documentation
├── README.md           This file
└── Jasgirl.jpg         Profile avatar image
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
- Biography section with lorem ipsum placeholder
- Goals in the program
- Areas lacking confidence
- Note to future self
- Additional thoughts section
- All sections use semantic HTML (main, section, h2, ul, p)
- All required data-testids implemented:
  - test-about-page
  - test-about-bio
  - test-about-goals
  - test-about-confidence
  - test-about-future-note
  - test-about-extra

#### Contact Page
- Full form validation with real-time feedback
- Required fields:
  - Full Name (required)
  - Email (required, must be valid format)
  - Subject (required)
  - Message (required, minimum 10 characters)
- Validation features:
  - Real-time validation on blur (when leaving field)
  - Real-time validation on input (while typing)
  - Error messages for each field
  - Success message after valid submission
  - Form reset after successful submission
  - Auto-focus on first error field
  - Auto-hide success message after 5 seconds
- All required data-testids implemented:
  - test-contact-name
  - test-contact-email
  - test-contact-subject
  - test-contact-message
  - test-contact-submit
  - test-contact-error-name
  - test-contact-error-email
  - test-contact-error-subject
  - test-contact-error-message
  - test-contact-success

#### Navigation
- Fixed navigation bar at top
- Active page highlighting
- Responsive mobile menu
- Keyboard accessible

## Design Changes from Stage 0

### What Changed
1. **Font**: Main headings now use Michroma font (futuristic, tech-style)
2. **Background**: Solid dark background (#0a0a0a) instead of animated gradient
3. **Animations**: Removed wavy background animation for cleaner look
4. **Navigation**: Added fixed top navigation bar
5. **Multi-page**: Expanded from single page to three-page site

### What Stayed
- Dark theme with aqua blue (#00d9ff) accents
- Glassmorphism card design
- All original data-testid attributes
- Accessibility features
- Responsive design

## Technical Implementation

### HTML
- Semantic HTML5 elements throughout
- Proper heading hierarchy (h1, h2, h3)
- All forms have labels linked with for attribute
- ARIA attributes for accessibility
- All interactive elements keyboard accessible

### CSS
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Custom properties for colors (could be added for easier theming)
- Glassmorphism effects with backdrop-filter
- Smooth transitions and hover effects
- Respects prefers-reduced-motion for accessibility

### JavaScript
- Vanilla JavaScript (no frameworks)
- Real-time timestamp updates (app.js)
- Comprehensive form validation (contact.js)
- Detailed inline comments
- Event-driven architecture
- DOM manipulation best practices

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

## Data Models

### Profile Data
```javascript
{
  name: "JASMINE DANIEL",
  bio: "Frontend Engineer who blends UI and UX...",
  timestamp: Date.now(), // Real-time milliseconds
  avatar: "Jasgirl.jpg",
  social: [
    { platform: "Twitter", url: "https://x.com/Jzminedaniel?s=09" },
    { platform: "GitHub", url: "https://github.com/JasmineODaniel" },
    { platform: "LinkedIn", url: "https://github.com/JasmineODaniel" },
    { platform: "Instagram", url: "https://www.instagram.com/theneverdone..." }
  ],
  hobbies: [
    "Coding and building websites",
    "Swimming",
    "Connecting and Networking",
    "Traveling",
    "Listening to Music"
  ],
  dislikes: [
    "Pretense",
    "Slow Network",
    "Negativity",
    "Pressure to Conform"
  ]
}
```

### Contact Form Data
```javascript
{
  fullName: String,    // Required, trimmed
  email: String,       // Required, must match email pattern
  subject: String,     // Required, trimmed
  message: String      // Required, minimum 10 characters
}
```

## Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order throughout pages
- Visible focus indicators on all focusable elements
- Skip to main content (via tab navigation)

### Screen Readers
- Semantic HTML provides context
- ARIA labels on all links and buttons
- ARIA describedby connects errors to inputs
- ARIA live regions for dynamic content (success/error messages)
- Proper heading hierarchy for navigation

### Visual Accessibility
- High contrast text (#e0e0e0 on #0a0a0a)
- Aqua blue accents easily distinguishable
- Focus indicators clearly visible
- Error states with both color and text
- Large touch targets for mobile

### Motion Sensitivity
- Respects prefers-reduced-motion
- No autoplay animations
- Smooth scroll can be disabled by browser settings

## Responsive Breakpoints

### Mobile (< 480px)
- Single column layout
- Stacked navigation
- Centered avatar
- Full-width form fields
- Adjusted font sizes

### Tablet (480px - 768px)
- Two-column layouts where appropriate
- Horizontal navigation
- Optimized spacing
- Adjusted grid columns

### Desktop (768px - 1200px)
- Full two-column profile header
- Grid-based social links
- Optimal reading width

### Wide (> 1200px)
- Maximum width constraint (1100px)
- Increased padding
- Four-column social grid

## Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

No polyfills or transpilation needed for modern browsers.

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

## Documentation

See **JASMINE.md** for detailed JavaScript code documentation with line-by-line explanations.

## Color Scheme

- **Background**: #0a0a0a (Very dark grey/black)
- **Cards**: rgba(20, 20, 20, 0.7) with backdrop blur
- **Primary Text**: #e0e0e0 (Light grey)
- **Secondary Text**: #b0b0b0, #c0c0c0 (Medium grey)
- **Accent**: #00d9ff (Aqua blue)
- **Error**: #ff4444 (Red)
- **Success**: #00ff80 (Green)

## Fonts

- **Headings**: Michroma (Google Fonts) - Futuristic, tech-inspired
- **Body**: System font stack for optimal performance
  - -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', etc.
- **Monospace**: 'Courier New' for timestamp

## Future Enhancements (Not in Current Scope)

- Backend integration for contact form
- Email sending functionality
- Form data storage
- Blog or portfolio project section
- Dark/light theme toggle
- More animations (with motion-safe)
- Language internationalization

## Project Status

Status: Completed Stage 1  
Last Updated: October 21, 2025  
Deployment: Ready for static hosting (Netlify, GitHub Pages, Vercel)

## Submission Checklist

- All HTML pages created with semantic structure
- All required data-testid attributes implemented
- Form validation working with all rules
- Success message displays after valid submission
- Error messages display for invalid inputs
- Real-time timestamp updating every second
- All pages responsive across devices
- Keyboard navigation fully functional
- No frameworks used (vanilla JavaScript)
- Code documented with comments
- README.md comprehensive
- JASMINE.md technical documentation complete

## Testing the Project

### Profile Card
1. Open index.html
2. Verify timestamp updates every second
3. Click all social links (should open in new tab)
4. Test navigation between pages
5. Resize browser to test responsive design

### About Page
1. Open about.html
2. Verify all sections display with lorem ipsum
3. Check data-testid attributes in browser DevTools

### Contact Form
1. Open contact.html
2. Try submitting empty form (should show errors)
3. Enter invalid email (should show email error)
4. Enter message less than 10 characters (should show error)
5. Fill correctly and submit (should show success)
6. Verify form resets after success
7. Test keyboard navigation through form

## License

This is a personal portfolio project for educational purposes.

## Contact

- Twitter: [@Jzminedaniel](https://x.com/Jzminedaniel?s=09)
- GitHub: [@JasmineODaniel](https://github.com/JasmineODaniel)
- Instagram: [@theneverdone](https://www.instagram.com/theneverdone?igsh=YzlleGdvZ3dnYjNl)

---

Built with dedication by Jasmine Daniel as part of the Frontend Wizards program.
