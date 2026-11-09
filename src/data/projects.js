import cover from '@/assets/photo/project/project-one/optimized/cover.webp'
import systemOverview from '@/assets/photo/project/project-one/optimized/system-overview.webp'
import detection from '@/assets/photo/project/project-one/optimized/detection.webp'
import review from '@/assets/photo/project/project-one/optimized/review.webp'
import history from '@/assets/photo/project/project-one/optimized/history.webp'
import report from '@/assets/photo/project/project-one/optimized/report.webp'
import munbotCover from '@/assets/photo/project/project-two/optimized/cover.webp'
import munbotOverview from '@/assets/photo/project/project-two/optimized/system-overview.jpg'
import munbotDiagnosis from '@/assets/photo/project/project-two/optimized/line-diagnosis.webp'
import munbotRag from '@/assets/photo/project/project-two/optimized/rag-chatbot.webp'
import munbotSurveyDetails from '@/assets/photo/project/project-two/optimized/field-survey-details.jpg'
import munbotSurveyImages from '@/assets/photo/project/project-two/optimized/field-survey-images.jpg'
import munbotSurveyPrediction from '@/assets/photo/project/project-two/optimized/field-survey-prediction.jpg'
import munbotMap from '@/assets/photo/project/project-two/optimized/disease-map.jpg'
import munbotSeverity from '@/assets/photo/project/project-two/optimized/disease-severity.jpg'
import munbotModels from '@/assets/photo/project/project-two/optimized/model-management.webp'
import munbotEvaluation from '@/assets/photo/project/project-two/optimized/model-evaluation.webp'
import kemiCover from '@/assets/photo/project/project-three/optimized/cover.webp'
import kemiOverview from '@/assets/photo/project/project-three/optimized/system-overview.webp'
import kemiClassroom from '@/assets/photo/project/project-three/optimized/student-classroom.jpg'
import kemiSubmission from '@/assets/photo/project/project-three/optimized/assignment-submission.jpg'
import kemiGrading from '@/assets/photo/project/project-three/optimized/teacher-grading.jpg'
import kemiGradebook from '@/assets/photo/project/project-three/optimized/gradebook.jpg'
import kemiDraw from '@/assets/photo/project/project-three/optimized/charm-draw.jpg'
import kemiResult from '@/assets/photo/project/project-three/optimized/charm-result.jpg'
import kemiCollection from '@/assets/photo/project/project-three/optimized/charm-collection.jpg'
import kemiRoster from '@/assets/photo/project/project-three/optimized/roster-import.jpg'
import kemiMonitoring from '@/assets/photo/project/project-three/optimized/admin-monitoring.webp'
import nongwasteCover from '@/assets/photo/project/project-four/optimized/cover.webp'
import nongwasteOverview from '@/assets/photo/project/project-four/optimized/system-overview.webp'
import nongwasteLine from '@/assets/photo/project/project-four/optimized/line-detection.webp'
import nongwasteLocation from '@/assets/photo/project/project-four/optimized/location-report.webp'
import nongwasteLocationConfirmation from '@/assets/photo/project/project-four/optimized/location-report2.webp'
import nongwasteMap from '@/assets/photo/project/project-four/optimized/waste-map.webp'
import nongwasteCleanup from '@/assets/photo/project/project-four/optimized/cleanup-report.webp'
import nongwasteDetection from '@/assets/photo/project/project-four/optimized/plastic-detection.jpg'
import nongwasteMascots from '@/assets/photo/project/project-four/optimized/mascot-poses.webp'
import monoshopCover from '@/assets/photo/project/project-five/optimized/cover.webp'
import monoshopOverview from '@/assets/photo/project/project-five/optimized/system-overview.webp'
import monoshopHome from '@/assets/photo/project/project-five/optimized/home.webp'
import monoshopCatalog from '@/assets/photo/project/project-five/optimized/product-catalog.webp'
import monoshopDetail from '@/assets/photo/project/project-five/optimized/product-detail.webp'
import monoshopCart from '@/assets/photo/project/project-five/optimized/cart.webp'
import monoshopOrders from '@/assets/photo/project/project-five/optimized/my-orders.webp'
import monoshopAdmin from '@/assets/photo/project/project-five/optimized/admin-orders.webp'
import monoshopEdit from '@/assets/photo/project/project-five/optimized/product-edit.webp'

export const projects = [
  {
    id: 'industrial-gas-meter-ocr',
    featured: true,
    title: 'Industrial Gas Meter OCR',
    category: 'Cooperative Education Project',
    status: 'Completed (Prototype)',
    role: 'Solo Developer',
    summary:
      'A cooperative education prototype for reading industrial gas meter values from images, with screen detection, perspective correction, user review, reading history, and PDF reporting.',
    roleDescription:
      'Developed the prototype end to end, including the detection and OCR pipeline, web interface, data storage, and PDF reporting.',
    technologies: ['Python', 'FastAPI', 'YOLO-OBB', 'OpenCV', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    image: cover,
    imageAlt: 'Demo interface showing an uploaded gas meter image and extracted readings for user review.',
    imageWidth: 1600,
    imageHeight: 1500,
    imageCaption: 'Application walkthrough with simulated OCR readings.',
    repositoryUrl: null,
    demoUrl: null,
    screenshots: [
      {
        id: 'system-overview',
        title: 'System overview',
        image: systemOverview,
        imageAlt: 'System workflow from browser image upload to a local FastAPI server, YOLO screen detection and image preparation, cloud Gemini reading, result validation, database storage, and display.',
        width: 1920,
        height: 1080,
        caption: 'System architecture and reading workflow across the browser, local server, and Gemini cloud service.',
      },
      {
        id: 'detection',
        title: 'Screen detection',
        image: detection,
        imageAlt: 'Recorded YOLO-OBB output comparing a detected meter screen with its perspective-corrected crop.',
        width: 1600,
        height: 1000,
        caption: 'Recorded YOLO-OBB detection and perspective correction output.',
      },
      {
        id: 'review',
        title: 'Reading review',
        image: review,
        imageAlt: 'Demo gas meter values in editable digit fields with their measurement units.',
        width: 762,
        height: 984,
        caption: 'Demo readings can be reviewed and edited before saving.',
      },
      {
        id: 'history',
        title: 'Reading history',
        image: history,
        imageAlt: 'Reading history for a demo meter run, with a filter, record details, and PDF actions.',
        width: 1600,
        height: 1000,
        caption: 'Reading history populated with demo records.',
      },
      {
        id: 'report',
        title: 'PDF reporting',
        image: report,
        imageAlt: 'Example gas usage report showing previous readings, current readings, and their differences using demo data.',
        width: 1191,
        height: 1684,
        caption: 'Example gas usage report generated with demo data.',
      },
    ],
  },
  {
    id: 'munbot',
    featured: false,
    title: 'MunBOT',
    category: 'Computer Science Project · Team of Two',
    status: null,
    role: 'AI & Chatbot Developer',
    summary:
      'A cassava disease analysis and field survey system combining image classification, a LINE chatbot with retrieval-augmented answers, and survey records with disease mapping.',
    roleDescription:
      'Responsible for the LINE chatbot, retrieval-augmented generation (RAG), and training the cassava leaf disease classification model as part of a two-person team.',
    technologies: ['Python', 'Vision Transformer', 'LINE Messaging API', 'RAG', 'n8n', 'Gemini', 'Pinecone', 'FastAPI', 'PostgreSQL'],
    image: munbotCover,
    imageAlt: 'MunBOT project cover combining LINE disease analysis and a field survey map.',
    imageWidth: 1600,
    imageHeight: 1000,
    imageCaption: 'MunBOT: cassava disease analysis, a RAG chatbot, and field surveys through LINE.',
    repositoryUrl: null,
    demoUrl: null,
    screenshots: [
      {
        id: 'system-overview',
        title: 'System overview',
        image: munbotOverview,
        imageAlt: 'MunBOT architecture connecting farmers through LINE, plant pathologists through LIFF, and administrators through web services to a server, chatbot, prediction model, and database.',
        width: 1269,
        height: 714,
        caption: 'System architecture connecting LINE, LIFF, web administration, AI services, and data storage.',
      },
      {
        id: 'line-diagnosis',
        title: 'Disease analysis in LINE',
        image: munbotDiagnosis,
        imageAlt: 'A cassava leaf photo in LINE with a mosaic disease prediction, a confidence score, and an informational disease card.',
        width: 536,
        height: 1202,
        caption: 'Image-based disease classification in LINE. The displayed percentage is prediction confidence for this image.',
      },
      {
        id: 'rag-chatbot',
        title: 'RAG-powered chatbot',
        image: munbotRag,
        imageAlt: 'A LINE conversation asking about cassava mosaic disease and receiving an explanation of its symptoms.',
        width: 477,
        height: 1169,
        caption: 'A LINE conversation illustrating the RAG-based question-and-answer feature for cassava disease information.',
      },
      {
        id: 'survey-details',
        title: 'Field survey details',
        image: munbotSurveyDetails,
        imageAlt: 'A LINE LIFF survey form containing GPS coordinates, field location, planting details, and surrounding vegetation.',
        width: 1024,
        height: 4128,
        caption: 'LIFF survey form for recording field location, planting information, and surrounding conditions.',
      },
      {
        id: 'survey-images',
        title: 'Survey images and severity',
        image: munbotSurveyImages,
        imageAlt: 'A survey form with uploaded cassava leaf images, disease labels, affected plant counts, and a severity slider.',
        width: 1184,
        height: 3584,
        caption: 'Survey images with disease labels, affected plant counts, and recorded severity levels.',
      },
      {
        id: 'survey-prediction',
        title: 'AI analysis during a survey',
        image: munbotSurveyPrediction,
        imageAlt: 'A cassava leaf image in the survey form with a healthy prediction, confidence score, plant count, and severity controls.',
        width: 329,
        height: 627,
        caption: 'An example of image classification within the LIFF survey workflow, alongside editable survey fields.',
      },
      {
        id: 'disease-map',
        title: 'Disease survey map',
        image: munbotMap,
        imageAlt: 'A field survey map with a location marker, a disease legend, and severity summaries.',
        width: 397,
        height: 861,
        caption: 'Recorded survey locations on a map with disease categories and severity summaries.',
      },
      {
        id: 'disease-severity',
        title: 'Severity statistics',
        image: munbotSeverity,
        imageAlt: 'Tables summarizing plant counts by disease severity level and calculating average severity.',
        width: 385,
        height: 734,
        caption: 'Severity distributions and calculated averages for the displayed survey records.',
      },
      {
        id: 'model-management',
        title: 'Model and dataset management',
        image: munbotModels,
        imageAlt: 'An administration page showing expert-labeled dataset counts, dataset export, model upload, and model activation controls.',
        width: 1772,
        height: 1038,
        caption: 'Project administration interface for exporting labeled data and managing uploaded model versions.',
      },
      {
        id: 'model-evaluation',
        title: 'Model evaluation',
        image: munbotEvaluation,
        imageAlt: 'Evaluation table listing 2,774 test images, 2,587 correct predictions, and per-class recall and precision for Healthy, Mosaic Disease, and Brown Streak Disease.',
        width: 557,
        height: 177,
        caption: 'Reported overall accuracy: 93.3% on 2,774 test images across three classes. Bacterial Blight was not represented in this test set.',
      },
    ],
  },
  {
    id: 'kemi-classroom',
    featured: false,
    title: 'Kemi Classroom',
    category: 'Education Platform',
    status: 'Deployed · Pilot Preparation',
    role: 'Solo Full-stack Developer',
    summary:
      'A chemistry classroom platform for image and PDF assignments, teacher grading, private feedback, and collectible rewards. Deployed and preparing for a classroom pilot.',
    roleDescription:
      'Designed and developed the project independently, including the React interface, Supabase authentication and database rules, assignment and grading workflows, token and charm rewards, file storage, and deployment.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vite', 'Cloudflare Pages', 'Backblaze B2', 'Google OAuth', 'GitHub Actions'],
    image: kemiCover,
    imageAlt: 'Kemi Classroom project cover combining a student classroom on mobile and a teacher grading workspace on desktop.',
    imageWidth: 1600,
    imageHeight: 1000,
    imageCaption: 'Student and teacher views from the test environment, using demonstration data.',
    repositoryUrl: null,
    demoUrl: null,
    screenshots: [
      {
        id: 'system-overview',
        title: 'System overview',
        image: kemiOverview,
        imageAlt: 'Kemi Classroom architecture connecting a React application to Supabase authentication, PostgreSQL with RLS, Edge Functions, private Backblaze B2 files, scheduled jobs, and encrypted backups.',
        width: 1920,
        height: 1280,
        caption: 'Architecture overview based on the project documentation and source code, including file access, background jobs, and backup workflows.',
      },
      {
        id: 'student-classroom',
        title: 'Student classroom',
        image: kemiClassroom,
        imageAlt: 'A mobile chemistry classroom showing assignment tabs, due dates, pending work, and a submitted assignment.',
        width: 390,
        height: 896,
        caption: 'Test classroom with sample assignments, due dates, and submission statuses.',
      },
      {
        id: 'assignment-submission',
        title: 'Assignment submission',
        image: kemiSubmission,
        imageAlt: 'A mobile assignment page showing the task, attached files, a revised submission, the recorded grade, reward tokens, and private feedback.',
        width: 390,
        height: 1994,
        caption: 'A sample assignment in the test environment, showing submitted files, revision controls, grading, and private feedback.',
      },
      {
        id: 'teacher-grading',
        title: 'Teacher grading and feedback',
        image: kemiGrading,
        imageAlt: 'A teacher workspace with a sample submitted image, manual grading controls, submission revision controls, and a private comment thread.',
        width: 2434,
        height: 1329,
        caption: 'Test environment showing a sample submission alongside manual grading controls and private feedback.',
      },
      {
        id: 'gradebook',
        title: 'Class gradebook',
        image: kemiGradebook,
        imageAlt: 'A chemistry gradebook with simulated students, assignment scores, pending and late statuses, room and term filters, and CSV export.',
        width: 2434,
        height: 1322,
        caption: 'The current gradebook UI rendered with simulated student names, scores, and assignment statuses for demonstration.',
      },
      {
        id: 'charm-draw',
        title: 'Token and charm rewards',
        image: kemiDraw,
        imageAlt: 'A chemistry-themed charm draw page showing the token balance, draw button, rarity probabilities, and collection progress.',
        width: 390,
        height: 1105,
        caption: 'Test environment showing token-based charm draws, rarity probabilities, and collection progress.',
      },
      {
        id: 'charm-result',
        title: 'Charm draw result',
        image: kemiResult,
        imageAlt: 'A charm draw result dialog displaying the awarded chemistry charm, its rarity and description, and collection or profile display actions.',
        width: 390,
        height: 844,
        caption: 'An example charm draw result captured in the test environment.',
      },
      {
        id: 'charm-collection',
        title: 'Personal charm collection',
        image: kemiCollection,
        imageAlt: 'A personal chemistry charm collection with owned and locked items, rarity labels, progress, and a selected charm for display beside the student name.',
        width: 440,
        height: 1646,
        caption: 'Test collection showing owned charms, collection progress, and the selected profile charm.',
      },
      {
        id: 'roster-import',
        title: 'Excel roster import',
        image: kemiRoster,
        imageAlt: 'An Excel roster import preview showing sample student records, column mapping, and a validation warning for a name containing spaces.',
        width: 2434,
        height: 1384,
        caption: 'Excel import preview with sample roster data, column mapping, and validation warnings.',
      },
      {
        id: 'admin-monitoring',
        title: 'Administration and monitoring',
        image: kemiMonitoring,
        imageAlt: 'The test administration dashboard with backup status warnings, file storage usage, background-job status, and teacher account management.',
        width: 2536,
        height: 1338,
        caption: 'Test environment monitoring view with backup warnings, storage usage, and background-job status.',
      },
    ],
  },
  {
    id: 'nongwaste',
    featured: false,
    title: 'Nongwaste',
    category: 'Super AI Engineer Season 5 · Team Project',
    status: 'Completed (Prototype)',
    role: 'LINE & Frontend Developer',
    summary:
      'A LINE chatbot and public waste map for identifying plastic waste, reporting waste locations with photos and GPS, and submitting cleanup evidence.',
    roleDescription:
      'Responsible for the LINE chatbot experience and web frontend as part of a team, connecting user-facing workflows for plastic analysis, waste location reporting, and cleanup evidence.',
    technologies: ['LINE Messaging API', 'JavaScript', 'HTML', 'CSS', 'Google Maps JavaScript API', 'Firebase Realtime Database', 'Python', 'FastAPI', 'Ultralytics YOLO', 'Google Cloud Storage'],
    image: nongwasteCover,
    imageAlt: 'Nongwaste project cover with the bottle mascot, a plastic analysis conversation in LINE, and the public waste map.',
    imageWidth: 1600,
    imageHeight: 1000,
    imageCaption: 'Project screenshots showing plastic analysis in LINE and reported waste locations, alongside the Nongwaste mascot.',
    repositoryUrl: 'https://github.com/sirasakswnk/nongwasteLineChatBot',
    demoUrl: null,
    screenshots: [
      {
        id: 'system-overview',
        title: 'System overview',
        image: nongwasteOverview,
        imageAlt: 'Nongwaste architecture connecting LINE and a public Google Maps frontend to FastAPI, Ultralytics YOLO, Google Cloud Storage, and Firebase Realtime Database.',
        width: 1920,
        height: 1280,
        caption: 'Source-based architecture covering plastic analysis, waste reporting, and cleanup evidence. The public map reads location records directly from Firebase.',
      },
      {
        id: 'line-detection',
        title: 'Plastic analysis in LINE',
        image: nongwasteLine,
        imageAlt: 'A LINE conversation with an uploaded plastic cup photo, an annotated segmentation result, and a response identifying one single-use plastic item.',
        width: 665,
        height: 1292,
        caption: 'An image-based plastic analysis response in LINE, with an annotated result, a plastic category, and an object count. The displayed score is prediction confidence for this example.',
      },
      {
        id: 'location-report',
        title: 'Waste reporting · Photo and GPS',
        image: nongwasteLocation,
        imageAlt: 'The LINE waste reporting workflow requesting a photo, GPS location, and description, followed by an uploaded waste photo and shared map location.',
        width: 665,
        height: 1265,
        caption: 'The first part of a location report: start the reporting workflow, send a waste photo, and share the location through LINE.',
      },
      {
        id: 'location-confirmation',
        title: 'Waste reporting · Confirmation',
        image: nongwasteLocationConfirmation,
        imageAlt: 'The continuation of the LINE location report, acknowledging the shared location and confirming that the report has been saved.',
        width: 667,
        height: 1262,
        caption: 'The continuation of the same reporting workflow, showing location acknowledgement and the saved-report confirmation.',
      },
      {
        id: 'waste-map',
        title: 'Public waste map',
        image: nongwasteMap,
        imageAlt: 'The Nongwaste public map viewed on mobile, with markers for reported waste locations.',
        width: 666,
        height: 1271,
        caption: 'Reported waste locations displayed as markers on a Google Maps web interface.',
      },
      {
        id: 'cleanup-report',
        title: 'Location details and cleanup evidence',
        image: nongwasteCleanup,
        imageAlt: 'A waste map marker popup with a reported waste photo, location details, a file picker, and a button for submitting cleanup evidence.',
        width: 666,
        height: 1271,
        caption: 'A location popup showing the reported waste and controls for uploading cleanup evidence. This screenshot shows the submission interface.',
      },
      {
        id: 'plastic-detection',
        title: 'Plastic detection and segmentation examples',
        image: nongwasteDetection,
        imageAlt: 'A model validation image mosaic with plastic objects, predicted bounding boxes, segmentation masks, class labels, and confidence scores.',
        width: 1920,
        height: 1920,
        caption: 'Saved model validation predictions illustrating plastic detection and segmentation. These examples and their confidence scores do not represent overall model accuracy.',
      },
      {
        id: 'mascot-poses',
        title: 'Nongwaste mascot',
        image: nongwasteMascots,
        imageAlt: 'Three supplied Nongwaste bottle mascot illustrations: giving a thumbs-up, recycling a bottle, and raising both hands.',
        width: 1600,
        height: 760,
        caption: 'The supplied project mascot in three poses, presented together as part of the Nongwaste visual identity.',
      },
    ],
  },
  {
    id: 'monoshop',
    featured: false,
    title: 'MonoShop',
    category: 'Academic Project',
    status: 'Completed (Academic Project)',
    role: 'Backend Developer',
    summary:
      'An Art Toy storefront with product search, member accounts, shopping carts, customer order history, and administrator order management.',
    roleDescription:
      'Developed the entire backend, including Express REST APIs, PostgreSQL data access, member authentication, product endpoints, cart and order workflows, administrator checks, and member image uploads.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt', 'Multer', 'JavaScript', 'Vue', 'Pinia', 'Bootstrap'],
    image: monoshopCover,
    imageAlt: 'MonoShop project cover combining the Art Toy storefront and product detail screens with a summary of backend responsibilities.',
    imageWidth: 1600,
    imageHeight: 1000,
    imageCaption: 'Application screens captured with demonstration data through the real backend and an isolated PostgreSQL database.',
    repositoryUrl: 'https://github.com/sirasakswnk/Monoshop',
    demoUrl: null,
    screenshots: [
      {
        id: 'system-overview',
        title: 'System overview',
        image: monoshopOverview,
        imageAlt: 'MonoShop architecture showing customer and administrator views, Vue and Pinia, an Express API, PostgreSQL, member image storage, and authentication.',
        width: 1920,
        height: 1280,
        caption: 'Source-based architecture for member accounts, products, carts, orders, and authentication. The original application uses the MonoCraft brand in its UI.',
      },
      {
        id: 'home',
        title: 'Art Toy storefront',
        image: monoshopHome,
        imageAlt: 'A pastel Art Toy storefront with navigation, a featured character, and three recommended product cards.',
        width: 1920,
        height: 1536,
        caption: 'The original storefront interface, captured with a demonstration catalog in an isolated PostgreSQL database.',
      },
      {
        id: 'product-catalog',
        title: 'Product catalog and search',
        image: monoshopCatalog,
        imageAlt: 'The product catalog showing a search for figure and three matching Art Toy products with images, names, and prices.',
        width: 1600,
        height: 1050,
        caption: 'A search for "figure" returning three catalog entries through the Express search API in the demonstration environment.',
      },
      {
        id: 'product-detail',
        title: 'Product details',
        image: monoshopDetail,
        imageAlt: 'The Mr.Apeone product page with its image, price, brand, material, size, series, description, quantity selector, and add-to-cart button.',
        width: 1600,
        height: 1120,
        caption: 'Product information retrieved from the backend, alongside quantity and cart controls for the demonstration customer.',
      },
      {
        id: 'cart',
        title: 'Shopping cart',
        image: monoshopCart,
        imageAlt: 'A demonstration shopping cart with three product lines, four items, quantity controls, removal buttons, an order confirmation button, and a total of 28,270 baht.',
        width: 1600,
        height: 1000,
        caption: 'Three product lines added through the UI and persisted by the backend, totaling four items and 28,270 baht in the demonstration cart.',
      },
      {
        id: 'my-orders',
        title: 'Customer order history',
        image: monoshopOrders,
        imageAlt: 'The demonstration customer order history with an expanded order showing item quantities and prices, plus two seeded historical orders.',
        width: 1600,
        height: 1050,
        caption: 'A demo order created through cart confirmation, alongside two seeded historical orders. Displayed totals are recalculated from order details; an order-header totals issue is documented in the capture notes.',
      },
      {
        id: 'admin-orders',
        title: 'Administrator order management',
        image: monoshopAdmin,
        imageAlt: 'The demonstration administrator order page with statuses, totals, expanded product details, and confirm and delete controls.',
        width: 1600,
        height: 1280,
        caption: 'Administrator view of demonstration orders, with totals calculated from line items. Status changes and deletion were not exercised during capture.',
      },
      {
        id: 'product-edit',
        title: 'Administrator product editing',
        image: monoshopEdit,
        imageAlt: 'The administrator product edit form for Mr.Apeone, with name, price, material, size, description, and save and cancel controls.',
        width: 1600,
        height: 1240,
        caption: 'The existing product edit form opened with a demonstration administrator account. No product changes were saved during capture.',
      },
    ],
  },
]
