import React, {useState} from "react";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";

const projects = [
  {
    title: "Bookshelf",
    description:
      "A full-stack MERN app to organize, track, and explore your personal reading collection with full CRUD functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind"],
    live: "https://emons-bookshelf.netlify.app",
    github: "https://github.com/K-emon22/BookShelf.git",
    image: [
      "https://i.ibb.co/HfGd82B4/Screenshot-2025-06-30-at-2-14-21-PM.png",
      "https://i.ibb.co/4g3dBKDP/Screenshot-2025-06-30-at-2-14-37-PM.png",
      "https://i.ibb.co/fzKQc5WP/Screenshot-2025-06-30-at-2-14-14-PM.png",
      "https://i.ibb.co/Y70dP1km/Screenshot-2025-06-30-at-2-18-55-PM.png",
    ],
    features: [
      "Firebase authentication with JWT-secured routes",
      "Filter books by status (reading, plan to read, finished)",
      "Full CRUD operations on book data",
      "Responsive UI with Tailwind & Framer Motion",
      "Search and sort functionality",
      "Secure deployment and environment variables",
    ],
    upcomingFeatures: [
      "Reading progress tracker with statistics",
      "Book recommendations based on genre",
    ],
    details: (
      <>
        <p className="mb-2">
          Virtual Bookshelf helps users manage their reading goals by letting
          them add, edit, or delete books. It supports login and status filters.
        </p>
        <h4 className="font-semibold mt-4">Challenge</h4>
        <p className="text-sm mb-2">
          Handling JWT verification on route protection was tricky. I learned to
          securely verify tokens using Express middleware and protected
          endpoints.
        </p>
        <h4 className="font-semibold mt-4">Funny Mistakes</h4>
        <p className="text-sm">
          Initially, I forgot to make the "Add Book" button actually add a book.
          It just cleared the form and smiled at me.
        </p>
      </>
    ),
  },
  {
    title: "Recipe Book App",
    description:
      "A global cuisine recipe hub where users can browse, filter, and manage personal recipes via a secure dashboard.",
    tech: ["React", "Tailwind", "DaisyUI", "Express", "MongoDB"],
    live: "https://emons-recipe-book.netlify.app/",
    github: "https://github.com/K-emon22/Recipe-Book.git",
    image: [
      "https://i.ibb.co/9kM0R0zM/Screenshot-2025-06-30-at-12-55-47-PM.png",
      "https://i.ibb.co/DDxh13p2/Screenshot-2025-06-30-at-12-56-19-PM.png",
      "https://i.ibb.co/938cC3nS/Screenshot-2025-06-30-at-12-56-26-PM.png",
    ],
    features: [
      "User authentication with Firebase & Google social login",
      "Dynamic recipe management with image uploads and categorization",
      "Top recipes section with real-time like counts",
      "Comprehensive filtering by cuisine and category",
      "User dashboard for managing personal recipes securely",
      "Private routes with redirect to login for unauthorized access",
      "Dark/light theme toggle and interactive UI animations",
      "Custom 404 page and polished error handling",
      "Secure deployment with environment variables",
    ],
    upcomingFeatures: [
      "Image upload support for user-submitted recipes",
      "Ratings & reviews system",
    ],
    details: (
      <>
        <p className="mb-2">
          Users can explore recipes by cuisine, view full details, and manage
          their own recipes securely after login.
        </p>
        <h4 className="font-semibold mt-4">Challenge</h4>
        <p className="text-sm mb-2">
          Implementing category-based filtering in the frontend while syncing
          with MongoDB queries required careful state handling and optimization.
        </p>
        <h4 className="font-semibold mt-4">Funny Mistakes</h4>
        <p className="text-sm">
          I once made every cuisine page load the same three recipes—turns out I
          forgot to send <code>req.params</code> to the backend!
        </p>
      </>
    ),
  },
  {
    title: "ChillBill (Bill Manager)",
    description:
      "A modern utility bill manager that tracks payments, due dates, and lets users download billing history.",
    tech: ["React", "Firebase", "Tailwind", "DaisyUI"],
    live: "https://chill-bill.netlify.app/",
    github: "https://github.com/K-emon22/Chill-bill.git",
    image: [
      "https://i.ibb.co/MDqJ4Qtt/Screenshot-2025-06-30-at-12-50-19-PM.png",
      "https://i.ibb.co/svp9qYqC/Screenshot-2025-06-30-at-12-50-09-PM.png",
      "https://i.ibb.co/vGPVR62/Screenshot-2025-06-30-at-12-50-42-PM.png",
    ],
    features: [
      "Secure login with Firebase Authentication",
      "Dashboard with upcoming and paid bills",
      "Downloadable bill history",
      "Fully mobile-responsive interface",
      "Email reminders for due bills",
      "Monthly bill analysis with charts",
    ],
    upcomingFeatures: [
      "Email reminders for due bills",
      "Monthly bill analysis with charts",
    ],
    details: (
      <>
        <p className="mb-2">
          ChillBill makes it easy to keep up with monthly utility payments.
          Users can log in, view bills, and download PDFs.
        </p>
        <h4 className="font-semibold mt-4">Challenge</h4>
        <p className="text-sm mb-2">
          Formatting and exporting the bill data to printable PDFs required a
          good grasp of libraries like jsPDF and handling dynamic tables.
        </p>
        <h4 className="font-semibold mt-4">Funny Mistakes</h4>
        <p className="text-sm">
          Once, the “Pay Now” button did nothing—because I accidentally wrapped
          it in a <code>div</code> instead of a <code>form</code>!
        </p>
      </>
    ),
  },
];

const Project = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="px-[2%] lg:px-[5%] mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg border border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row overflow-hidden bg-white transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300"
          >
            <div className="w-full ">
              <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 2000, disableOnInteraction: false}}
                loop={true}
                slidesPerView={1}
                className="h-full"
              >
                {project.image.map((imgUrl, i) => (
                  <SwiperSlide key={i}>
                    <div className="p-5 w-fit h-full ">
                      {" "}
                      <img
                        src={imgUrl}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-full object-cover  border-2 rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-6 flex flex-col justify-between w-full lg:col-span-2">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-col space-y-3 max-w-xs mb-6">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-24 text-xs font-semibold text-blue-700">
                        {tech}
                      </span>
                      <div className="flex-1 h-2 bg-blue-100 rounded overflow-hidden">
                        <div
                          className="h-2 bg-blue-600 rounded transition-all duration-700"
                          style={{
                            width: `${Math.floor(Math.random() * 40) + 60}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">
                    Features:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 max-w-md">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live
                </a>
                <button
                  onClick={() => setSelected(project)}
                  className="btn btn-sm btn-primary"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <dialog
          open
          className="modal modal-open"
          onClick={() => setSelected(null)}
          tabIndex={-1}
        >
          <div
            className="modal-box max-w-2xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <Swiper
              modules={[Autoplay]}
              autoplay={{delay: 2000, disableOnInteraction: false}}
              loop={true}
              slidesPerView={1}
              className="rounded mb-4"
            >
              {selected.image.map((imgUrl, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={imgUrl}
                    alt={`${selected.title} ${i + 1}`}
                    className="w-full h-64 object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-gray-700 text-sm mb-4">{selected.details}</div>
            <div className="mb-4 text-gray-700 text-sm max-w-md">
              <h4 className="font-semibold mb-2 text-gray-800">Features:</h4>
              <ul className="list-disc list-inside space-y-1">
                {selected.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-800">
                Upcoming Features:
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 max-w-md">
                {selected.upcomingFeatures.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 justify-end mt-6">
              <a
                href={selected.github}
                target="_blank"
                className="btn btn-sm btn-outline"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={selected.live}
                target="_blank"
                className="btn btn-sm btn-outline"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <button
                className="btn btn-sm btn-error text-white"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Project;
