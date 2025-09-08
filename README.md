# 🚀 Next.js + Firebase Template

A modern, production-ready template for building full-stack applications with Next.js 15, Firebase, and TypeScript. This template provides a solid foundation with authentication, user management, and a beautiful UI built with Radix UI and Tailwind CSS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbyte3-it%2Fnext-firebase-template&env=NEXT_PUBLIC_FIREBASE_API_KEY,NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,NEXT_PUBLIC_FIREBASE_PROJECT_ID,NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,NEXT_PUBLIC_FIREBASE_APP_ID,FIREBASE_ADMIN_KEY_BASE64&envDescription=Get%20the%20env%20variables%20on%20Firebase&envLink=https%3A%2F%2Ffirebase.google.com%2F&project-name=byte3-netxtjs-firebase-template&repository-name=byte3-netxtjs-firebase-template)

## ✨ Features

### 🔐 Authentication & User Management

- **Complete Auth Flow**: Login, registration, password reset, and account setup
- **Firebase Authentication**: Secure user authentication with Firebase Auth
- **Protected Routes**: Automatic route protection and redirects
- **User Profile Management**: User details form with validation

### 🎨 Modern UI/UX

- **Dark/Light Mode**: Built-in theme switching with `next-themes`
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Pre-built UI components using [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling**: Advanced forms with React Hook Form and Zod validation
- **Toast Notifications**: User feedback with React Hot Toast

### 🛠️ Developer Experience

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency
- **Turbopack**: Fast development builds
- **React Query**: Powerful data fetching and caching
- **Server Actions**: Modern server-side data mutations

### 🔥 Firebase Integration

- **Firestore**: NoSQL database with security rules
- **Firebase Storage**: File upload and management
- **Firebase Admin**: Server-side Firebase operations
- **Security Rules**: Pre-configured Firestore and Storage rules

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Firebase project
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/next-firebase-template.git
cd next-firebase-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin (Server-side)
FIREBASE_ADMIN_KEY_BASE64=your_base64_encoded_service_account_key
```

### 4. Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore Database
3. Generate a service account key and encode it in base64
4. Deploy Firebase rules:

```bash
npm run firebase:deploy
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── app/               # Protected app pages
│   └── setup-account/     # Account setup flow
├── components/            # Reusable components
│   ├── form/             # Form components
│   └── ui/               # UI component library
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
│   ├── firebase/         # Firebase configuration
│   └── server-actions/   # Server actions
└── types/                # TypeScript type definitions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run firebase:deploy` - Deploy Firebase rules

## 🔧 Configuration

### Firebase Rules

The template includes pre-configured security rules for Firestore and Storage:

- **Firestore**: Basic read/write rules for authenticated users
- **Storage**: File upload rules with size and type restrictions

### Theme Configuration

The app supports system, light, and dark themes. Theme preference is persisted in localStorage.

## 🎯 Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **State Management**: React Query
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Deployment**: Vercel-ready

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ by the BYTE3 team
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
