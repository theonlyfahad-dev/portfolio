# Developer Portfolio

A premium, highly interactive software engineer portfolio built with a modern web stack. It features a sleek "Premium Light Editorial" theme, dynamic 3D card flips, masonry layouts, and smooth framer-motion animations.

## Preview

### Hero & About Sections
![Hero Section](/images/preview-1.png)

### Experience & Timeline
![Experience Section](/images/preview-2.png)
![Experience Details](/images/preview-3.png)

### Skills & Tech Arsenal
![Skills Section](/images/preview-4.png)

### Certifications & Achievements
![Certifications Section](/images/preview-5.png)

## Technologies Used

* **Framework**: Next.js (App Router)
* **Library**: React 19
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Language**: TypeScript

## How to Use It

If you want to use this portfolio template for yourself, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Update Your Data**
   All the content (your name, experience, projects, skills, etc.) is centralized in one file.
   Open `src/data/resume.ts` and replace the placeholder data with your own information.

4. **Add Your Images**
   Replace the images in the `public/images/` folder with your own (e.g., `hero_portrait_whitebg.jpg`, project screenshots, and certificate images). Ensure your certificate images match the paths you set in `resume.ts`.

5. **Run the Development Server**
   Start the local server to see your changes in real-time:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

6. **Deploy**
   The easiest way to deploy this portfolio is by pushing your code to GitHub and importing the repository into [Vercel](https://vercel.com).
