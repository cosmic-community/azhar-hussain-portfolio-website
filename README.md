# Azhar Hussain - Portfolio Website

![Portfolio Preview](https://imgix.cosmicjs.com/8243c4d0-af71-11f0-9e1e-85df016ebe41-photo-1507003211169-0a1dd7228f2d-1761156230663.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive portfolio website showcasing the work and skills of Azhar Hussain, a Software Engineering student passionate about AI, Flutter app development, and web technologies. Built with Next.js 15, TypeScript, and Tailwind CSS, powered by Cosmic CMS for seamless content management.

## ✨ Features

- **Modern, Responsive Design** - Beautiful, professional UI that works seamlessly across all devices
- **Dark Mode Support** - Toggle between light and dark themes based on user preference
- **Dynamic Content Management** - All content managed through Cosmic CMS for easy updates
- **Project Showcase** - Interactive project cards with detailed information, images, and live demos
- **Skills Visualization** - Animated progress bars showing proficiency levels
- **Certifications Display** - Professional showcase of achievements with verification links
- **Contact Section** - Easy access to social media profiles and email
- **Resume Download** - One-click download of resume/CV
- **Smooth Animations** - Subtle fade-in and scroll effects for enhanced user experience
- **SEO Optimized** - Built-in metadata and structured data for better search visibility
- **Type-Safe** - Full TypeScript implementation with strict typing

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f91ac0509528484c8a00e2&clone_repository=68f91e1d0e1074f8d5fdab62)

## 📋 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a modern, responsive personal portfolio website for Azhar Hussain, a Software Engineering student passionate about AI, Flutter app development, and web technologies.
The website should have a clean, minimalistic, and professional UI, with soft colors (light theme) and elegant typography. Use Flutter Web for implementation.
🌐 Website Sections:
Hero Section (Home)
A welcoming introduction with name, short tagline, and profession.
Example: "👋 Hi, I'm Azhar Hussain — a Software Engineering student passionate about building intelligent and beautiful digital experiences."
Include a call-to-action button like "View My Projects" or "Download Resume."
About Me Section
A detailed paragraph describing background, interests, and skills.
Example: "I'm currently pursuing a degree in Software Engineering with hands-on experience in Flutter, Dart, Firebase, and AI integration. I love solving real-world problems using technology and enjoy learning new tools that enhance productivity and user experience."
Skills Section
Use attractive icons or progress bars for key skills such as:
Flutter & Dart
Firebase
Python (Flask, GPT integration)
HTML, CSS, JavaScript
Git & GitHub
UI/UX Design
Projects Section
Showcase your key projects with images, short descriptions, and GitHub or live demo links.
Example projects:
SmartWed – AI-Powered Wedding Planning App: A Flutter-based wedding planner app with vendor management, budget tracking, and AI assistant.
FoodSaver AI: A food wastage reduction app using AI for smart suggestions.
Portfolio Web App: Your own responsive Flutter portfolio website.
Achievements & Certifications
Include certificates from Coursera, Google, or Microsoft (e.g., Google AI Essentials, Foundations of AI and Machine Learning, etc.).
Education Section
Include degree name, university (e.g., "Bachelor's in Software Engineering – [Your University Name]"), and expected graduation year.
Contact Section
Add an interactive form or direct links (email, LinkedIn, GitHub, etc.).
Example: "Let's collaborate! Reach me at [your email] or connect via LinkedIn."
Footer
Simple and clean footer with copyright © Azhar Hussain, current year, and social media icons.
🎨 Design Preferences:
Theme: Light, minimal, and elegant.
Color Palette: Soft whites, pastel blue, and dark grey text.
Typography: Use clear, modern fonts like Poppins or Roboto.
Layout: Use grid or card-based layouts for projects.
Animations: Subtle fade-in or slide effects using Framer Motion or Flutter's animation widgets.
⚙️ Extra Features:
Responsive across desktop, tablet, and mobile.
Option to switch between Light/Dark mode.
Include a Download Resume button (PDF link).
Optionally, add a small AI Chat Assistant widget (future feature) that answers questions about your portfolio or skills."

### Code Generation Prompt

> "Based on the content model I created for the portfolio website, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router for optimal performance
- **TypeScript** - Type-safe development with comprehensive interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Cosmic CMS** - Headless CMS for content management
- **React Icons** - Beautiful icon library for UI elements
- **Framer Motion** - Smooth animations and transitions

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with bucket access

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd azhar-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Cosmic SDK Examples

### Fetching Site Settings

```typescript
import { cosmic } from '@/lib/cosmic'

async function getSiteSettings() {
  try {
    const { object } = await cosmic.objects
      .findOne({
        type: 'site-settings',
        slug: 'site-settings'
      })
      .props(['id', 'title', 'metadata'])
      .depth(0)
    
    return object as SiteSettings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}
```

### Fetching Projects

```typescript
async function getProjects() {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'projects'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return objects as Project[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Certifications

```typescript
async function getCertifications() {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'certifications'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return objects as Certification[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic CMS to manage all portfolio content through three main content types:

### Site Settings (Singleton)
- Full Name and Tagline
- Profile Photo
- About Me (HTML content)
- Skills (JSON array with proficiency levels)
- Education Information
- Contact Details (Email, Phone, Social Links)
- Theme Preferences (Dark Mode, Theme Color)
- Resume File

### Projects
- Project Name and Description
- Featured Image and Gallery
- Technologies Used (Checkboxes)
- GitHub and Live Demo Links
- Project Category (Mobile/Web/AI/Other)
- Featured Flag

### Certifications
- Certificate Name
- Issuing Organization
- Issue Date and Credential ID
- Certificate Image
- Verification Link

All content is fetched server-side for optimal performance and SEO, with proper TypeScript typing throughout the application.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository in Vercel
3. Add your environment variables in the Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**Azhar Hussain**
- Email: azhar.hussain@example.com
- LinkedIn: [linkedin.com/in/azhar-hussain](https://linkedin.com/in/azhar-hussain)
- GitHub: [@azharhussain](https://github.com/azharhussain)

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) - The Headless CMS for modern applications

<!-- README_END -->