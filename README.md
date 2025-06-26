# Portfolio Starter Template

A modern, responsive portfolio website template built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This template provides a solid foundation for developers to showcase their projects, skills, and professional information.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Server-side rendering and static generation
- **SEO Friendly**: Built-in metadata and optimization
- **Multiple Page Examples**: Home, About, Projects, Contact, and more
- **Supabase Integration**: Ready for backend functionality
- **TypeScript**: Full type safety throughout the application

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio_Starter_template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
Portfolio_Starter_template/
├── app/                    # Next.js 13+ app directory
│   ├── about/             # About page
│   ├── components/        # Reusable components
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── ssg-example/       # Static generation example
│   ├── ssr-example/       # Server-side rendering example
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   └── supabase.ts        # Supabase client configuration
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Environment Variables

This template includes Supabase integration. To use Supabase features, create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Customization

1. **Update Personal Information**: Modify the content in `app/page.tsx` to reflect your personal information
2. **Add Projects**: Update the projects section with your own work
3. **Customize Styling**: Modify `app/globals.css` and Tailwind classes to match your brand
4. **Add Pages**: Create new pages in the `app/` directory following Next.js 13+ conventions

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Configure environment variables (if using Supabase)
   - Click "Deploy"

3. **Environment Variables on Vercel**
   - In your Vercel project dashboard, go to Settings → Environment Variables
   - Add your Supabase credentials:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`

### Other Deployment Options

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

## 📝 Pages Included

- **Home** (`/`) - Landing page with hero section, skills, and featured projects
- **About** (`/about`) - Personal information and background
- **Projects** (`/projects`) - Portfolio of work
- **Contact** (`/contact`) - Contact form and information
- **SSG Example** (`/ssg-example`) - Static generation demonstration
- **SSR Example** (`/ssr-example`) - Server-side rendering demonstration

## 🎨 Styling

This template uses Tailwind CSS for styling. Key features:

- **Responsive Design**: Mobile-first approach
- **Custom Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Color Scheme**: Blue-based color palette (easily customizable)
- **Component Library**: Reusable components with consistent styling

## 🔌 Supabase Integration

The template includes Supabase client configuration in `lib/supabase.ts`. To use Supabase features:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Add them to your environment variables
4. Start building with Supabase's database, auth, and real-time features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and assets from various sources
- Inspired by modern portfolio designs

---

**Happy coding! 🚀**
