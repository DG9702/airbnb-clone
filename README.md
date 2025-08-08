
# **Rently Pro**

**A Scalable Real Estate Application**

---

## Table of Contents

- [**Rently Pro**](#rently-pro)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technology Stack](#technology-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Authentication](#authentication)
  - [Architecture Overview](#architecture-overview)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Useful Links](#useful-links)
    - [AWS](#aws)
    - [Frontend Resources](#frontend-resources)
    - [Backend Resources](#backend-resources)
    - [ShadCN Components](#shadcn-components)
    - [Database Entity Relationship Diagram](#database-entity-relationship-diagram)
  - [Authentication Flow](#authentication-flow)
    - [Phase 1: User Authentication](#phase-1-user-authentication)
    - [Phase 2: User Data Storage](#phase-2-user-data-storage)
  - [Contact](#contact)

---

## Overview

**Rently Pro** is an enterprise-grade, scalable real estate application designed to streamline the rental process for property managers, landlords, and tenants. Built with modern technologies such as **Next.js**, **Node.js**, and **AWS**, Rently Pro delivers a robust, secure, and user-friendly platform for managing rental properties, listings, and tenant interactions.

## Features

- **Property Listings:** Easily create, update, and manage rental property listings with rich media support.
- **Advanced Search:** Filter properties by location, price, amenities, and more using interactive maps.
- **Secure Authentication:** User registration and login powered.
- **Responsive UI:** Modern, mobile-friendly interface built with Tailwind CSS and Shadcn components.
- **Real-Time Updates:** Instant notifications and updates for property status and tenant communications.
- **File Management:** Upload and preview images and documents with FilePond integration.
- **Analytics Dashboard:** Visualize key metrics and trends for your rental business.

---

## Technology Stack

### Frontend

- **Framework:** Next.js (React, SSR/SSG)
- **State Management:** Redux Toolkit, Redux Toolkit Query
- **Styling:** Tailwind CSS, Shadcn UI
- **Type Checking:** TypeScript
- **Animations:** Framer Motion
- **Forms & Validation:** React Hook Form, Zod, @hookform/resolvers
- **Maps:** Mapbox GL, Mapbox React GL
- **Utilities:** Date-fns, Lodash, Dotenv
- **File Uploads:** FilePond, React FilePond, FilePond Plugin Image EXIF Orientation, FilePond Plugin Image Preview
- **Icons:** Lucide React

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (with PostGIS)
- **ORM:** Prisma

### Authentication

- **User Management:** AWS Cognito
- **Amplify Integration:** Amplify UI, Amplify JS, Amplify React

---

## Architecture Overview

The application follows a modern microservices-inspired architecture, leveraging AWS services for scalability and reliability.

- **Frontend:** Deployed as a static site or SSR app via AWS.
- **Backend:** RESTful API built with Express.js, hosted on AWS EC2 behind API Gateway.
- **Database:** PostgreSQL with spatial extensions (PostGIS) for advanced geolocation queries.
- **Storage:** AWS S3 for media and document storage.
- **Authentication:** AWS Cognito for secure, scalable user management.
- **CI/CD:** Automated deployments using AWS Amplify and GitHub Actions.

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- AWS Account
- PostgreSQL Database

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/dipaloke/real-estate-prod.git
    ```

2. **Install dependencies:**

   ```bash
    cd client
    npm install
    or
    yarn install
    ```

3. **Configure environment variables:**
    - Copy `.env.example` to `.env` and fill in your credentials.

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Access the application:**
    - Open [http://localhost:3000](http://localhost:3000) in your browser.

---
---

*Rently Pro is open-source and welcomes contributions from the community. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Feel free to use any portion or whole project as your necessity.*
