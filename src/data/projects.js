import cover from '@/assets/photo/project/project-one/optimized/cover.webp'
import detection from '@/assets/photo/project/project-one/optimized/detection.webp'
import review from '@/assets/photo/project/project-one/optimized/review.webp'
import history from '@/assets/photo/project/project-one/optimized/history.webp'
import report from '@/assets/photo/project/project-one/optimized/report.webp'

export const projects = [
  {
    id: 'industrial-gas-meter-ocr',
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
]
