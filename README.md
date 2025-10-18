Profile Card - Frontend Wizards Stage 0
A beautiful, accessible, and responsive profile card component built with semantic HTML, modern CSS (glassmorphism), and vanilla JavaScript.
Design Features

Dark Grey Glassmorphism: Transparent glass-like card with dark grey/black background
Aqua Blue Accents: Subtle aqua blue (#00d9ff) highlights and borders
Responsive Layout: Adapts beautifully from mobile to desktop
Smooth Animations: Elegant entrance animations and hover effects
Accessibility First: WCAG compliant with keyboard navigation and screen reader support

Completed Features
Core Requirements (All Implemented)

Profile card root container with data-testid="test-profile-card"
User name with data-testid="test-user-name"
Biography paragraph with data-testid="test-user-bio"
Real-time current time in milliseconds with data-testid="test-user-time"
Avatar image with data-testid="test-user-avatar"
Social links list with data-testid="test-user-social-links"
Individual social link testids (twitter, github, linkedin, instagram)
Hobbies list with data-testid="test-user-hobbies"
Dislikes list with data-testid="test-user-dislikes"

Technical Implementation

Semantic HTML5 elements (article, header, figure, nav, section)
Fully keyboard accessible with visible focus indicators
Social links open in new tab with rel="noopener noreferrer"
Responsive design (mobile-first with breakpoints at 480px, 768px, 1200px)
Real-time millisecond timestamp updates every second
Glassmorphism effect with backdrop-filter
Smooth animations (respects prefers-reduced-motion)

Project Structure
webapp/
├── index.html          # Main HTML with semantic structure
├── styles.css          # Modern CSS with glassmorphism
├── script.js           # Vanilla JavaScript for interactions
└── README.md          # This file

How to Use Locally

Clone the repository:
git clone <repository-url>
cd webapp


Open in browser:
# Simply open index.html in any modern browser
open index.html
# Or use a local server
python -m http.server 3000
# Then visit http://localhost:3000



Functional Entry Points
HTML Elements with data-testid

/ - Main profile card page
test-profile-card - Root article element
test-user-name - Name heading
test-user-bio - Biography paragraph
test-user-time - Current time in milliseconds
test-user-avatar - Profile image
test-user-social-links - Social navigation container
test-user-social-twitter - Twitter link
test-user-social-github - GitHub link
test-user-social-linkedin - LinkedIn link
test-user-social-instagram - Instagram link
test-user-hobbies - Hobbies list
test-user-dislikes - Dislikes list



Data Models
Profile Data Structure
{
  name: String,           // User's display name
  bio: String,            // Short biography
  avatar: URL,            // Profile image URL
  timestamp: Number,      // Current time in milliseconds
  socialLinks: [          // Array of social media links
    { platform: String, url: String }
  ],
  hobbies: [String],      // Array of hobby items
  dislikes: [String]      // Array of dislike items
}

Color Scheme

Background: Dark grey/black gradient (#0a0a0a to #1a1a1a)
Card: Semi-transparent dark grey (rgba(20, 20, 20, 0.7))
Accent: Aqua blue (#00d9ff)
Text: Light grey (#e0e0e0)
Borders: Aqua blue with transparency

Accessibility Features

Semantic HTML5 elements for proper document structure
ARIA labels for improved screen reader support
Keyboard navigation for all interactive elements
Visible focus indicators
High contrast ratios for text readability
Respects prefers-reduced-motion user preference

Responsive Breakpoints

Mobile: < 480px (single column, centered)
Tablet: 480px - 768px (adjusted spacing)
Desktop: 768px - 1200px (two-column header)
Wide: > 1200px (maximum width with optimal spacing)

Testing
All required data-testid attributes are implemented for automated testing:
// Example test queries
document.querySelector('[data-testid="test-profile-card"]')
document.querySelector('[data-testid="test-user-name"]')
document.querySelector('[data-testid="test-user-time"]')
// ... etc

Built with using semantic HTML, modern CSS, and vanilla JavaScript