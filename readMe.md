# Product App with Typescript, Express and MongoDB

A web application built with TypeScript, Express.js, and MongoDB, following MVC architecture and using EJS templates with Tailwind CSS for styling.


### Directory Details

# PRODUCT-APP Directory Structure
```
📦 PRODUCT-APP
├── 📂 node_modules/            # Project dependencies
├── 📂 src/
│   ├── 📂 config/
│   │   └── 📄 db.ts            # Database configuration
│   │
│   ├── 📂 controllers/
│   │   └── 📄 productController.ts  # Product business logic
│   │
│   ├── 📂 models/
│   │   └── 📄 Products.ts       # Product database schema
│   │
│   ├── 📂 public/
│   │   └── 📂 css/
│   │       ├── 📄 output.css    # Compiled Tailwind CSS
│   │       └── 📄 styles.css    # Custom styles
│   │
│   ├── 📂 routes/
│   │   └── 📄 productRoutes.ts  # API routes definition
│   │
│   ├── 📂 views/
│   │   ├── 📂 partials/         # Reusable EJS components
│   │   ├── 📄 add-product.ejs   # Add product form view
│   │   ├── 📄 edit-product.ejs  # Edit product form view
│   │   ├── 📄 index.ejs         # Home page view
│   │   └── 📄 product.ejs       # Single product view
│   │
│   ├── 📄 app.ts               # Express app configuration
│   └── 📄 server.ts            # Server entry point
│
├── 📄 .env                    # Environment variables
├── 📄 .gitignore              # Git ignore rules
├── 📄 package-lock.json       # Dependency lock file
├── 📄 package.json            # Project configuration
├── 📄 README.md               # Project documentation
├── 📄 tailwind.config.js      # Tailwind CSS configuration
└── 📄 tsconfig.json           # TypeScript configuration
```

- **src/**: Main source code directory
  - **config/**: Configuration files and setup
  - **controllers/**: Business logic and request handlers
  - **models/**: Database schemas and models
  - **public/**: Static assets and compiled styles
  - **routes/**: API route definitions
  - **views/**: EJS templates and components

- **Root Files**:
  - **.env**: Environment configuration
  - **package.json**: Project dependencies and scripts
  - **tsconfig.json**: TypeScript configuration
  - **tailwind.config.js**: Tailwind CSS settings

## Technology Stack

- **Backend Framework**: Express.js with TypeScript
- **Database**: MongoDB
- **Template Engine**: EJS
- **CSS Framework**: Tailwind CSS
- **Language**: TypeScript

## Key Features

1. **TypeScript Integration**
   - Strongly typed codebase
   - Enhanced developer experience
   - Better error catching

2. **MVC Architecture**
   - Models: Database schemas and data logic
   - Views: EJS templates for rendering
   - Controllers: Business logic handling

3. **Database Integration**
   - MongoDB connection setup
   - Product model implementation
   - CRUD operations support

4. **View Templates**
   - Responsive layouts
   - Product management interfaces
   - Reusable partial components

5. **Styling**
   - Tailwind CSS integration
   - Custom CSS support
   - Responsive design

## Getting Started

1. Install dependencies:
```bash
npm install

PORT=3000
MONGODB_URI=your_mongodb_connection_string

npm run dev
