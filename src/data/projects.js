import cover from '@/assets/photo/project/project-one/optimized/cover.webp'
import systemOverview from '@/assets/photo/project/project-one/optimized/system-overview.webp'
import detection from '@/assets/photo/project/project-one/optimized/detection.webp'
import review from '@/assets/photo/project/project-one/optimized/review.webp'
import history from '@/assets/photo/project/project-one/optimized/history.webp'
import report from '@/assets/photo/project/project-one/optimized/report.webp'
import munbotCover from '@/assets/photo/project/project-two/optimized/cover.webp'
import munbotOverview from '@/assets/photo/project/project-two/optimized/system-overview.jpg'
import munbotDiagnosis from '@/assets/photo/project/project-two/optimized/line-diagnosis.jpg'
import munbotRag from '@/assets/photo/project/project-two/optimized/rag-chatbot.jpg'
import munbotSurveyDetails from '@/assets/photo/project/project-two/optimized/field-survey-details.jpg'
import munbotSurveyImages from '@/assets/photo/project/project-two/optimized/field-survey-images.jpg'
import munbotSurveyPrediction from '@/assets/photo/project/project-two/optimized/field-survey-prediction.jpg'
import munbotMap from '@/assets/photo/project/project-two/optimized/disease-map.jpg'
import munbotSeverity from '@/assets/photo/project/project-two/optimized/disease-severity.jpg'
import munbotModels from '@/assets/photo/project/project-two/optimized/model-management.jpg'
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
        width: 237,
        height: 531,
        caption: 'Image-based disease classification in LINE. The displayed percentage is prediction confidence for this image.',
      },
      {
        id: 'rag-chatbot',
        title: 'RAG-powered chatbot',
        image: munbotRag,
        imageAlt: 'A LINE conversation asking about cassava mosaic disease and receiving an explanation of its symptoms.',
        width: 609,
        height: 1492,
        caption: 'A LINE conversation illustrating the RAG-based question-and-answer feature for cassava disease information.',
      },
      {
        id: 'survey-details',
        title: 'Field survey details',
        image: munbotSurveyDetails,
        imageAlt: 'A LINE LIFF survey form containing GPS coordinates, field location, planting details, and surrounding vegetation.',
        width: 202,
        height: 808,
        caption: 'LIFF survey form for recording field location, planting information, and surrounding conditions.',
      },
      {
        id: 'survey-images',
        title: 'Survey images and severity',
        image: munbotSurveyImages,
        imageAlt: 'A survey form with uploaded cassava leaf images, disease labels, affected plant counts, and a severity slider.',
        width: 209,
        height: 836,
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
        width: 554,
        height: 326,
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
]
