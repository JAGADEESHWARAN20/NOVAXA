// // import React, { useState, useEffect, useRef } from 'react';

// // import SplashScreen from './splashscreen';
// // import './Hero.css';
// // import RenderComponent from './Rendercomponent'; // Import the RenderComponent file




// // const Hero = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [activeSection, setActiveSection] = useState('');
// //   const sectionsRef = useRef([]);
// //   const [formData, setFormData] = useState({
// //     Name: '',
// //     Email: '',
// //     Package: '',
// //     PaidMonth: ''
// //   });






// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevFormData) => ({
// //       ...prevFormData,
// //       [name]: value
// //     }));
// //   };


// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setActiveSection(entry.target.id);
// //           }
// //         });
// //       },
// //       {
// //         threshold: 0.6
// //       }
// //     );

// //     sectionsRef.current.forEach((section) => {
// //       observer.observe(section);
// //     });
// //     return () => {
// //       sectionsRef.current.forEach((section) => {
// //         observer.unobserve(section);
// //       });
// //     };
// //   }, []);

// //   const handleNavClick = (index) => {
// //     const section = sectionsRef.current[index];
// //     section.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   const sections = ['Tailwind Styles', 'Javascript Utilization', 'Jquery Utilization', 'Api request', 'DB Connect'];

// //   const handleSubmit = (e) => {
// //     const formele = document.getElementById('forms');
// //     e.preventDefault();
// //     console.log('submitted');
// //     const formData = new FormData(formele);
// //     fetch("https://script.google.com/macros/s/AKfycbwkgVLqPR9fVthAoG_Ox6clQo6xyhoVW_Mfl5FlIfgRVlPP5gxlecOSJSQmR1ZSXWVAzQ/exec", {
// //       method: "POST",
// //       body: formData
// //     });
// //   };





// //   return (
// //     <div className="App">
// //       {loading && <SplashScreen onComplete={() => setLoading(false)} />}
// //       {!loading && (
// //         <>
// //           <nav className="bg-red-700 text-white flex-col flex gap-3 justify-start h-screen fixed items-center w-[15%]">
// //             <h1 className='text-3xl mb-2'>novaxa</h1>
// //             {sections.map((section, index) => (
// //               <div
// //                 key={index}
// //                 className={`nav-item hover:text-black hover:bg-white ${activeSection === `section-${index}` ? 'border-l-2' : ''}`}
// //                 onClick={() => handleNavClick(index)}
// //               >
// //                 {section}
// //               </div>
// //             ))}
// //           </nav>
// //           <div className="sections-container">

// //           <h1 className='text-3xl mb-2 ml-3'>novaxa</h1>

// //             {sections.map((section, index) => (
// //               <div
// //                 key={index}
// //                 id={`section-${index}`}
// //                 ref={(el) => (sectionsRef.current[index] = el)}
// //                 className="section"
// //               >
// //                 {index === 0 ? (
// //                   <>
// //                     <RenderComponent index={0}/>
// //                 </>
// //                 ) : (
// //                   <h2>{section}</h2>
// //                 )}
// //               </div>
// //             ))}
// //             </div>
// //             </>
// //           )}
// //     </div>
// //   );
// // };

// // export default Hero;


// // Hero.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import SplashScreen from './splashscreen';
// import UserSelectDropdown from './components/UserSelectDropdown';
// import ThemeToggle from './components/ThemeToggle';
// import NavItemSelector from './components/NavItemSelector';
// import NavBar from './components/NavBar';
// import './Hero.css'
// import gsap from 'gsap';
// import { HiMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import { Link, useLocation } from 'react-router-dom';
// // import MenuItems from './components/MenuItems';
// // import ProductCard from './components/ProductCard';
// // import SearchBar from './components/SearchBar';
// // import UserProfile from './components/UserProfile';
// // import CollapsibleSidebar from './components/CollapsibleSidebar';
// // import FileUploadWithPreview from './components/FileUploadWithPreview';
// // import DatePickerWithRange from './components/DatePickerWithRange';
// // import FormWithValidation from './components/FormWithValidation';
// // import NotificationBanner from './components/NotificationBanner';
// // import ChatWidget from './components/ChatWidget';
// // import UserProfileCard from './components/UserProfileCard';
// // import ExpandableList from './components/ExpandableList';
// // import PaginationControl from './components/PaginationControl';
// // import DataTable from './components/DataTable';
// // import RatingWithReview from './components/RatingWithReview';
// // import ModalWithForm from './components/ModalWithForm';
// // import LoadingOverlay from './components/LoadingOverlay';
// // import AlertWithActions from './components/AlertWithActions';
// // import ImageCarousel from './components/ImageCarousel';
// // import StepWizard from './components/StepWizard';
// // import TooltipButton from './components/TooltipButton';
// // import CollapsiblePanel from './components/CollapsiblePanel';
// // import ResponsiveGrid from './components/ResponsiveGrid';
// // import SnackbarWithUndo from './components/SnackbarWithUndo';
// // import PriceFilterSlider from './components/PriceFilterSlider';
// // import ChatNotification from './components/ChatNotification';

// // 'MenuItems: A list of menu items for a dropdown or sidebar.',
// // 'ProductCard: Card component for product details with an add-to-cart button.',
// // 'SearchBar: Search input field with a submit button.',
// // 'UserProfile: Displaying user avatar, name, and additional info.',
// // 'CollapsibleSidebar: Sidebar that can be toggled open and closed.',
// // 'FileUploadWithPreview: File upload input with preview of the selected file.',
// // 'DatePickerWithRange: Date picker that allows selecting a range of dates.',
// // 'FormWithValidation: Form component with built-in validation.',
// // 'NotificationBanner: Banner for site-wide notifications.',
// // 'ChatWidget: Embedded chat component for user interaction.',
// // 'UserProfileCard: Card displaying user profile information and actions.',
// // 'ExpandableList: List items that can be expanded to show more details.',
// // 'PaginationControl: Component to navigate through paginated data.',
// // 'DataTable: Table with sortable columns and pagination.',
// // 'RatingWithReview: Star rating component with a review input field.',
// // 'ModalWithForm: Modal dialog containing a form.',
// // 'LoadingOverlay: Full-screen loader overlay.',
// // 'AlertWithActions: Alert message with action buttons.',
// // 'ImageCarousel: Rotating carousel of images.',
// // 'StepWizard: Multi-step form or process component.',
// // 'TooltipButton: Button with a tooltip for additional info.',
// // 'CollapsiblePanel: Panel that can be expanded or collapsed.',
// // 'ResponsiveGrid: Grid layout that adjusts based on screen size.',
// // 'SnackbarWithUndo: Snackbar notification with an undo action.',
// // 'PriceFilterSlider: Slider to filter products by price range.',
// // 'ChatNotification: Popup notification for new chat messages.'



// // 'Description for MenuItems',
// // 'Description for ProductCard',
// // 'Description for SearchBar',
// // 'Description for UserProfile',
// // 'Description for CollapsibleSidebar',
// // 'Description for FileUploadWithPreview',
// // 'Description for DatePickerWithRange',
// // 'Description for FormWithValidation',
// // 'Description for NotificationBanner',
// // 'Description for ChatWidget',
// // 'Description for UserProfileCard',
// // 'Description for ExpandableList',
// // 'Description for PaginationControl',
// // 'Description for DataTable',
// // 'Description for RatingWithReview',
// // 'Description for ModalWithForm',
// // 'Description for LoadingOverlay',
// // 'Description for AlertWithActions',
// // 'Description for ImageCarousel',
// // 'Description for StepWizard',
// // 'Description for TooltipButton',
// // 'Description for CollapsiblePanel',
// // 'Description for ResponsiveGrid',
// // 'Description for SnackbarWithUndo',
// // 'Description for PriceFilterSlider',
// // 'Description for ChatNotification'


// // MenuItems,
// //     ProductCard,
// //     SearchBar,
// //     UserProfile,
// //     CollapsibleSidebar,
// //     FileUploadWithPreview,
// //     DatePickerWithRange,
// //     FormWithValidation,
// //     NotificationBanner,
// //     ChatWidget,
// //     UserProfileCard,
// //     ExpandableList,
// //     PaginationControl,
// //     DataTable,
// //     RatingWithReview,
// //     ModalWithForm,
// //     LoadingOverlay,
// //     AlertWithActions,
// //     ImageCarousel,
// //     StepWizard,
// //     TooltipButton,
// //     CollapsiblePanel,
// //     ResponsiveGrid,
// //     SnackbarWithUndo,
// //     PriceFilterSlider,
// //     ChatNotification

// const Hero = () => {
//   const [loading, setLoading] = useState(true);
//   const [activeNavItem, setActiveNavItem] = useState('appscript');


//   const handleNavbar = () => {
//     setTimeout(() => {
//       setNavOpen(prevState => !prevState);
//     }, 50);

//   };

//   const Navref = useRef(null);
//   const [navOpen, setNavOpen] = useState(false);

//   const sections = { title: ['Tailwind components', 'typescript', 'javascript'] };
//   const Tailwindcomponents = {
//     title: [
//       'UserSelectDropdown: A dropdown to select a user from a list.',
//       'ThemeToggle: A switch to toggle between dark and light modes.',
//       'NavItemSelector: Component to handle navigation item selection.',
//       'NavBar: A complete navigation bar with logo and links.',

//     ],
//     description: [
//       'Description for UserSelectDropdown',
//       'Description for ThemeToggle',
//       'Description for NavItemSelector',
//       'Description for NavBar',
//     ],

//   };


//   useEffect(() => {
//     if (navOpen) {
//       gsap.fromTo(
//         Navref.current,
//         {
//           width: '0px',
//           opacity: 0

//         },
//         {
//           width: window.innerWidth - 80 + 'px',
//           opacity: 1,
//           duration: .1,
//           ease: 'power3.out'
//         },



//       );
//     } else {
//       gsap.fromTo(
//         Navref.current,
//         {
//           width: window.innerWidth - 80 + 'px', // Starting width with px
//           opacity: 1
//         },
//         {
//           width: '0px',
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.in'
//         },

//       );
//     }
//   }, [navOpen]);

//   const navitems = useRef(null);

//   const pageRef = useRef(null);

//   const navData = [
//     { heading: 'Simple Website', items: [<Link ref={pageRef} to={'/hero/navbar'}>Navbar</Link>, 'Home', 'About', 'Projects', 'Skills', 'Form', 'Footer'] },
//     { heading: 'Simple Website', items: [<Link ref={pageRef} to={'/hero/navbar'}>Navbar</Link>, 'Home', 'About', 'Projects', 'Skills', 'Form', 'Footer'] },
//     { heading: 'Simple Website', items: [<Link ref={pageRef} to={'/hero/navbar'}>Navbar</Link>, 'Home', 'About', 'Projects', 'Skills', 'Form', 'Footer'] },
//     { heading: 'Simple Website', items: [<Link ref={pageRef} to={'/hero/navbar'}>Navbar</Link>, 'Home', 'About', 'Projects', 'Skills', 'Form', 'Footer'] },
//     { heading: 'Simple Website', items: [<Link ref={pageRef} to={'/hero/navbar'}>Navbar</Link>, 'Home', 'About', 'Projects', 'Skills', 'Form', 'Footer'] },

//   ];

//   const componentMapping = {
//     UserSelectDropdown,
//     ThemeToggle,
//     NavItemSelector,
//     NavBar,

//   };

//   // const renderContent = () => {
//   //   switch (activeNavItem) {
//   //     case 'Tailwind components':
//   //       return <div className='w-full h-full'>
//   //         <div className="w-full flex flex-col">
//   //           {Tailwindcomponents.title.map((title, index) => {
//   //             const Component = componentMapping[title.split(':')[0]]; // Extract component name
//   //             return (
//   //               <div key={index} className="mb-4 p-4 border rounded-md">
//   //                 <h1 className="text-xl font-bold mb-2">{title}</h1>
//   //                 <p className="mb-2">{Tailwindcomponents.description[index]}</p>
//   //                 <code className="block bg-black text-white rounded">
//   //                   <ComponentShowcase />
//   //                 </code>
//   //               </div>
//   //             );
//   //           })}
//   //         </div>
//   //       </div>;
//   //     case 'typescript':
//   //       return <div>Content for TypeScript</div>;
//   //     case 'javascript':
//   //       return <div>Content for JavaScript</div>;
//   //     default:
//   //       return <div>Select a section</div>;
//   //   }
//   // };

//   const isWideScreen = typeof window !== 'undefined' && window.innerWidth >= 1000;

//   const autoRefresh = () => {
//     window.location = window.location.href
//   }


//   const location = useLocation();

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Animate the current page out
//     tl.to(pageRef.current, {
//       duration: 0.5,
//       opacity: 0,
//       blur: '10px',
//       ease: 'power3.inOut',
//       onComplete: () => {
//         // Set position off-screen for the wipe effect
//         gsap.set(pageRef.current, { xPercent: -100 });
//       }
//     });

//     // Animate the next page in
//     tl.to(pageRef.current, {
//       duration: 0.5,
//       xPercent: 0,
//       opacity: 1,
//       blur: '0px',
//       ease: 'power3.inOut'
//     });

//     return () => {
//       // Ensure the animation runs on the next render
//       tl.restart();
//     };
//   }, [location]);



//   return (
//     <div className="app">
//       {loading ? (
//         <SplashScreen onComplete={() => setLoading(false)} />
//       ) : (
//         <div ref={pageRef} className="flex w-full h-full">
//           <div onClick={handleNavbar} className={`fixed top-[5%] cursor-pointer right-[5%] scale-[2] ${navOpen ? 'text-black duration-300' : 'text-white duration-150'} ${navOpen && isWideScreen ? 'text-black' : 'text-white'} z-[200] w-[20px] h-[20px]`}>
//             {navOpen ? <IoClose /> : <HiMenuAlt3 />}
//           </div>
//           {navOpen && (<>
//             <nav
//               onChange={() => {
//                 setInterval(() => {

//                   document.querySelector('.navitems').classList.add('opacity-100');
//                 }, 50);
//               }}
//               ref={Navref}
//               className="bg-white rounded-md h-[95vh] fixed ml-[20px] mt-[20px] mb-[20px] overflow-scroll   navitems opacity-0 w-0 "
//             >
//               <div className="group w-[100%] flex flex-col items-center">
//                 <h1
//                   className="px-3 pt-[20px] cursor-pointer text-black text-[25px]  uppercase w-full items-center justify-center flex font-medium"
//                   onClick={handleNavbar}
//                 > Novaxa </h1>
//                 <div className="w-[20px] duration-200 group-hover:w-[100px] bg-neutral-900 h-[2px]"></div>
//               </div>

//               <div className={`md:grid md:grid-cols-4  md:grid-rows-2 p-10 list-none gap-5  relative sm:flex sm:flex-row `}>
//                 {navData.map((section, index) => (
//                   <div ref={navitems} key={index} id='navitems' className="mb-6  px-3 py-3 ">
//                     <h1 className=" text-[25px] capitalize font-medium mb-2">{section.heading}</h1>
//                     <ul className="list-none pl-0 cursor-pointer">
//                       {section.items.map((item, i) => (
//                         <li onClick={() => setInterval(autoRefresh, 50)} key={i} className=" mb-1 text-black">
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}

//               </div>

//             </nav>
//           </>)}

//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;




import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import SplashScreen from './splashscreen';
import UserSelectDropdown from './components/UserSelectDropdown';
import ThemeToggle from './components/ThemeToggle';
import NavItemSelector from './components/NavItemSelector';
import NavBar from './components/NavBar';
import './Hero.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import useMediaQuery from '@mui/material/useMediaQuery';


const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('appscript');
  const isDesktop = useMediaQuery('(min-width:1000px)');

  const Navref = useRef(null);
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(pageRef.current, {
      duration: 0.5,
      opacity: 0,
      blur: '10px',
      ease: 'power3.inOut',
      onComplete: () => gsap.set(pageRef.current, { xPercent: -100 })
    })
      .to(pageRef.current, {
        duration: 0.5,
        xPercent: 0,
        opacity: 1,
        blur: '0px',
        ease: 'power3.inOut'
      });

    return () => tl.restart();
  }, [location]);

  useEffect(() => {
    if (navOpen) {
      gsap.fromTo(Navref.current,
        { width: '0px', opacity: 0 },
        { width: window.innerWidth - 80 + 'px', opacity: 1, duration: 0.1, ease: 'power3.out' }
      );
    } else {
      gsap.fromTo(Navref.current,
        { width: window.innerWidth - 80 + 'px', opacity: 1 },
        { width: '0px', opacity: 0, duration: 1, ease: 'power3.in' }
      );
    }
  }, [navOpen]);

  const handleNavbar = () => setNavOpen(prevState => !prevState);

  const sections = [
    { title: 'sample Website', items: ['UserSelectDropdown', 'ThemeToggle', 'NavItemSelector', 'NavBar', 'Hero'] },
    { title: 'TypeScript', items: ['TypeScript Component'] },
    { title: 'JavaScript', items: ['JavaScript Component'] }
  ];

  const componentMapping = {
    UserSelectDropdown,
    ThemeToggle,
    NavItemSelector,
    NavBar
  };

  const handleReload = () => {

    setTimeout(() => {
      window.location.reload(); // Reload the page after navigation
    }, 100); // Small delay to ensure navigation completes
  };

  return (
    <div className="app">
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        <div ref={pageRef} className="flex w-full h-full">


          {
            isDesktop && (
              <>
                <div className="relative w-full h-full mt-[5%] flex flex-col">
                  <div
                    onClick={handleNavbar}
                    className={`absolute top-[5%] cursor-pointer right-[5%] scale-[2] ${navOpen ? 'text-slate-600 duration-300' : 'text-white duration-150'} ${navOpen ? 'text-slate-600' : 'text-white'} z-[200] w-[20px] h-[20px]`}
                  >
                    {navOpen ? <IoClose /> : <HiMenuAlt3 />}
                  </div>
                  <div className="w-full bg-transparent h-full text-white">
                    <div className="ml-[20%] mt-[5%] flex flex-col gap-6 justify-evenly items-start  ">
                      <h1 className='text-[75px] font-[poppins] flex flex-col'>Global Library

                        <span className=' text-[32px] font-sans font-[200]'>For Creating Web apps</span>
                      </h1>
                      <div className="bg-white px-3 py-2 text-black rounded-md cursor-pointer">Documentation</div>
                    </div>
                  </div>
                </div>

              </>
            )
          }

          {navOpen && (
            <nav
              ref={Navref}
              className="bg-white rounded-md h-[95vh] fixed ml-[20px] mt-[20px] mb-[20px] overflow-scroll navitems opacity-0"
            >
              <div className="group w-[100%] flex flex-col items-center">
                <h1
                  className="px-3 pt-[20px] cursor-pointer text-black text-[25px] uppercase w-full items-center justify-center flex font-medium"
                  onClick={handleNavbar}
                >
                  Novaxa
                </h1>
                <div className="w-[20px] duration-200 group-hover:w-[100px] bg-neutral-900 h-[2px]"></div>
              </div>

                <div className="md:grid md:grid-cols-4 md:grid-rows-2 p-10 list-none gap-5 relative sm:flex sm:flex-row">
                  {sections.map((section, index) => (
                    <div key={index} className="mb-6 px-3 py-3">
                      <h1 className="text-[25px] capitalize font-medium mb-2">{section.title}</h1>
                      <ul className="list-none pl-0 cursor-pointer">
                        {section.items.map((item, i) => (
                          <li key={i} className="mb-1 text-black">
                            <Link
                              to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={handleReload}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
            </nav>
          )}
        </div>
      )}

    </div>
  );
};

export default Hero;
