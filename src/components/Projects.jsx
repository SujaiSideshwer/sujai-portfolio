import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projectData = [
    {
      title: "Netflix-Style YouTube Web App",
      description: `
       • Developed a full-stack web application with a Netflix-inspired UI that allows users to search and watch YouTube videos, leveraging the PERN stack (PostgreSQL, Express, React, Node.js).

• Integrated the YouTube API using Axios to fetch and display videos, enabling seamless search functionality and real-time video playback with react-player.

• Implemented personalized features such as:
  – Trending videos displayed on the homepage.
  – Similar video suggestions when a video is clicked.
  – Search history tracking with the ability to delete entries, enhancing user control and privacy.

• Designed a responsive and modern UI using Tailwind CSS and Lucide-react for icons, ensuring a seamless experience across devices.

• Enhanced user experience with react-hot-toast for notifications and Zustand for state management, reducing UI complexity by 25%.

• Secured the application with JWT-based authentication using jsonwebtoken, bcryptjs for password hashing, and cookie-parser for secure cookie management.

• Utilized dotenv for environment variable management, ensuring secure configuration and deployment.
      `,
      repo: "https://github.com/SujaiSideshwer/Youtube-Netflix-Clone-PERN-Stack",
      media: [
        {
          src: "images/netflix-clone/authscreen-1.JPG",
          caption: "Authentication Screen",
        },
        {
          src: "images/netflix-clone/signup-1.JPG",
          caption: "Signup Page",
        },
        {
          src: "images/netflix-clone/homescreen-1.JPG",
          caption: "Home Screen",
        },
        {
          src: "images/netflix-clone/homescreen-2.JPG",
          caption: "Home Screen - Shows videos that are trending in youtube",
        },
        {
          src: "images/netflix-clone/Playscreen-1.JPG",
          caption:
            "Play Screen (1) - On clicking any video it leads to this page where videos can be played",
        },
        {
          src: "images/netflix-clone/Playscreen-2.JPG",
          caption:
            "Play Screen (2) - Shows videos similar to the one being played",
        },
        {
          src: "images/netflix-clone/searchhistory-1.JPG",
          caption: "Search History Page - To audit search history",
        },
        {
          src: "images/netflix-clone/searchscreen-1.JPG",
          caption: "Search Screen - To search videos",
        },
        // "/assets/youtube-clone-demo.mp4",
      ],
    },
    {
      title: "Eventify - Event Management App",
      description: `
       • Built a responsive and scalable event booking platform using the PERN stack (PostgreSQL, Express, React + Vite, Node.js) for users to browse, book, and manage event tickets.

• Implemented protected authentication using JWT and bcryptjs, along with secure cookie-based sessions via cookie-parser for persistent login.

• Designed separate user and organizer flows:
  – Users can view upcoming events, book tickets, cancel bookings, and download PDF tickets.
  – Organizers can list shows, track bookings (in future updates), and manage events through a separate dashboard.

• Used Zustand for global state management and react-hot-toast for user feedback, enhancing user interactions and reducing state complexity.

• Integrated RESTful APIs to enable full CRUD operations for events and bookings, improving backend performance and modularity.

• Prioritized performance with Vite for faster development and Tailwind CSS for responsive, mobile-first design.

• Designed the app for scalability by structuring routes for future enhancements like payment gateway integration and event analytics.

• Deployed on production-ready environments with .env configuration and GitHub for version control.
      `,
      repo: "https://github.com/SujaiSideshwer/PERN-Stack-Event-App",
      media: [
        {
          src: "images/event-app/loginscreen.JPG",
          caption: "Login Page",
        },
        {
          src: "images/event-app/signupscreen.JPG",
          caption: "Signup Page",
        },
        {
          src: "images/event-app/eventscreen-1.JPG",
          caption:
            "Events Page - Lists all enlisted events available for booking",
        },
        {
          src: "images/event-app/eventpage-1.JPG",
          caption:
            "Event Page (1) - Shows this screen on clicking each event, allowing audience to select from the available seats (Booked ones are highlighted)",
        },
        {
          src: "images/event-app/eventpage-2.JPG",
          caption:
            "Event Page (2) - This is how seats get selected for booking",
        },
        {
          src: "images/event-app/ticketbooking-1.JPG",
          caption:
            "A ticket gets automatically downloaded on proceeding to book and the seats are booked under your name",
        },
        {
          src: "images/event-app/mybookingspage.JPG",
          caption:
            "My Bookings Page - Shows events booked by you and also allows cancellation",
        },
        // "/assets/eventify-demo.mp4",
      ],
    },
  ];

  return (
    <section id="projects" className="py-12 space-y-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
