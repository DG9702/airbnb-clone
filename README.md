Rently Pro
A Scalable Real Estate Application

Table of Contents
Rently Pro
Table of Contents
Overview
Features
Technology Stack
Frontend
Backend
Authentication
Architecture Overview
Getting Started
Prerequisites
Installation
Overview
Rently Pro is an enterprise-grade, scalable real estate application designed to streamline the rental process for property managers, landlords, and tenants. Built with modern technologies such as Next.js, Node.js, and AWS, Rently Pro delivers a robust, secure, and user-friendly platform for managing rental properties, listings, and tenant interactions.

Features
Property Listings: Easily create, update, and manage rental property listings with rich media support.
Advanced Search: Filter properties by location, price, amenities, and more using interactive maps.
Secure Authentication: User registration and login powered by AWS Cognito.
Responsive UI: Modern, mobile-friendly interface built with Tailwind CSS and Shadcn components.
Real-Time Updates: Instant notifications and updates for property status and tenant communications.
File Management: Upload and preview images and documents with FilePond integration.
Analytics Dashboard: Visualize key metrics and trends for your rental business.
Scalable Infrastructure: Deployed on AWS for high availability and performance.
Technology Stack
Frontend
Framework: Next.js (React, SSR/SSG)
State Management: Redux Toolkit, Redux Toolkit Query
Styling: Tailwind CSS, Shadcn UI
Type Checking: TypeScript
Animations: Framer Motion
Forms & Validation: React Hook Form, Zod, @hookform/resolvers
Maps: Mapbox GL, Mapbox React GL
Utilities: Date-fns, Lodash, Dotenv
File Uploads: FilePond, React FilePond, FilePond Plugin Image EXIF Orientation, FilePond Plugin Image Preview
Icons: Lucide React
Backend
Runtime: Node.js
Framework: Express.js
Database: PostgreSQL (with PostGIS), managed via AWS RDS
ORM: Prisma

Frontend: Deployed as a static site or SSR app via AWS.
Backend: RESTful API built with Express.js.
Database: PostgreSQL with spatial extensions (PostGIS) for advanced geolocation queries.
Getting Started
Prerequisites
Node.js (v16+)
npm or yarn
PostgreSQL Database
Installation
Clone the repository:

git clone https://github.com/dipaloke/real-estate-prod.git
Install dependencies:

 cd client
 npm install
 or
 yarn install
Configure environment variables:

Copy .env.example to .env and fill in your credentials.
Run the development server:

npm run dev
# or
yarn dev
Access the application:

Open http://localhost:3000 in your browser.

GitHub: Rently Pro
Rently Pro is open-source and welcomes contributions from the community. Please refer to the CONTRIBUTING.md for guidelines. Feel free to use any portion or whole project as your necessity.
