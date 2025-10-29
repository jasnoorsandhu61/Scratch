# ROV Website 2

A modern, interactive website built with Next.js featuring dynamic components, animations, and a music player interface.

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daksha11/rov-website-2.git
   cd rov-website-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📝 Available Scripts

- `npm run dev` - Starts the development server with hot reloading
- `npm run build` - Builds the project for production
- `npm start` - Runs the production build (run `npm run build` first)
- `npm run lint` - Runs ESLint to check for code issues

## 🏗️ Project Structure

```
rov-website-2/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── api/               # API routes
│       └── chat/
│           └── route.ts
├── components/            # Reusable React components
│   ├── Hero.tsx          # Hero section
│   ├── MusicPlayer.tsx   # Music player component
│   ├── Gallery.tsx       # Image gallery
│   ├── Services.tsx      # Services section
│   ├── Footer.tsx        # Footer component
│   ├── Navbar.tsx        # Navigation bar
│   └── ...               # Other components
├── lib/                  # Utility functions and types
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Utility functions
├── public/              # Static assets
│   ├── fonts/          # Custom fonts
│   └── tracks/         # Audio files
└── ...                 # Configuration files
```

## 🎨 Features

- **Modern UI/UX**: Built with React and styled-components
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Components**: Dynamic animations and effects
- **Music Player**: Built-in audio player functionality
- **Image Gallery**: Showcase for visual content
- **Custom Cursor**: Enhanced user interaction
- **Loading Animations**: Smooth loading experience
- **Navigation Dock**: Floating navigation component

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [styled-components](https://styled-components.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://greensock.com/gsap/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `gsap` - Professional animation library
- `styled-components` - CSS-in-JS styling
- `@radix-ui/*` - Accessible UI components

## 🎵 Audio Features

The website includes a music player with support for audio tracks stored in the `/public/tracks/` directory. Make sure to add your audio files there for the music player to work properly.

## 🎨 Customization

### Colors and Themes
- Global styles are defined in `app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- Custom components use a dark theme by default

### Components
Each component in the `/components` directory is modular and can be customized independently:
- `Hero.tsx` - Main landing section
- `MusicPlayer.tsx` - Audio playback functionality
- `Gallery.tsx` - Image showcase
- `Services.tsx` - Service listings

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the generated `.next` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is private. Please contact the repository owner for licensing information.

## 🐛 Troubleshooting

### Common Issues

**Development server won't start:**
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check if port 3000 is available

**Build errors:**
- Run `npm run lint` to check for code issues
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npx tsc --noEmit`

**Styling issues:**
- Make sure Tailwind CSS is properly configured
- Check that all required CSS files are imported

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.