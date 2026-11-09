import wavelengthCover from '@/assets/photo/playground/wavelength/optimized/cover.webp'
import wavelengthLobby from '@/assets/photo/playground/wavelength/optimized/lobby.webp'
import wavelengthGuessing from '@/assets/photo/playground/wavelength/optimized/guessing.webp'
import wavelengthResult from '@/assets/photo/playground/wavelength/optimized/game-result.webp'

// Personal games stay separate from the main project showcases.
// Entries share the detail and screenshot fields used by src/data/projects.js.
export const playgroundProjects = [
  {
    id: 'wavelength',
    title: 'Wavelength',
    category: 'Personal Project · Board Game Adaptation',
    status: 'Playable Prototype',
    role: 'Solo Developer',
    summary:
      'A Thai two-player adaptation of Wavelength, with clue giving, dial-based guessing, and shared scores for playing with friends.',
    roleDescription:
      'Developed the web adaptation independently, including the React interface, SVG dial, room and round workflows, scoring, and Firebase authentication and database integration.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Vite', 'Firebase Realtime Database', 'Firebase Anonymous Auth', 'SVG'],
    image: wavelengthCover,
    imageAlt: 'Wavelength round-one reveal showing the target bands, guessed needle, clue, both players, and three points awarded to Player B.',
    imageWidth: 1440,
    imageHeight: 810,
    imageCaption: 'A real round reveal captured with demonstration players on Firebase Emulators. Only decorative background below the board was cropped; the original score feedback remains visible.',
    repositoryUrl: 'https://github.com/sirasakswnk/wavelength-boardgame',
    demoUrl: null,
    screenshots: [
      {
        id: 'lobby',
        title: 'Two-player room',
        image: wavelengthLobby,
        imageAlt: 'A Wavelength lobby showing Player A and Player B, a room code, a four-round game, and the host start button.',
        width: 1440,
        height: 1000,
        caption: 'Two isolated browser contexts joined the same four-round room on Firebase Auth and Realtime Database Emulators.',
      },
      {
        id: 'guessing',
        title: 'Read the clue and guess',
        image: wavelengthGuessing,
        imageAlt: 'Player B guessing a position on the Wavelength dial from a Thai clue, with the target hidden and the needle moved away from the center.',
        width: 1440,
        height: 1000,
        caption: 'The guesser view during round one: the clue is visible, the needle has been moved, and the target remains hidden until the answer is revealed.',
      },
      {
        id: 'game-result',
        title: 'Final scores and rematch',
        image: wavelengthResult,
        imageAlt: 'The Wavelength result screen after four rounds, showing Player A winning five to three and the host play-again button.',
        width: 1440,
        height: 1000,
        caption: 'The captured emulator game completed four rounds through the UI, with Player A winning 5–3. The rematch control is shown; a rematch was not exercised during capture.',
      },
    ],
  },
]
