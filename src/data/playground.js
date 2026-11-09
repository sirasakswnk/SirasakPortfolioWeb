import wavelengthCover from '@/assets/photo/playground/wavelength/optimized/cover.webp'
import wavelengthLobby from '@/assets/photo/playground/wavelength/optimized/lobby.webp'
import wavelengthGuessing from '@/assets/photo/playground/wavelength/optimized/guessing.webp'
import wavelengthResult from '@/assets/photo/playground/wavelength/optimized/game-result.webp'
import merchantsBluffCover from '@/assets/photo/playground/merchants-bluff/optimized/cover.webp'
import merchantsBluffDecision from '@/assets/photo/playground/merchants-bluff/optimized/sheriff-decision.webp'
import merchantsBluffInspection from '@/assets/photo/playground/merchants-bluff/optimized/inspection-result.webp'
import merchantsBluffRanking from '@/assets/photo/playground/merchants-bluff/optimized/ranking-and-rules.webp'

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
    demoUrl: 'https://wavelengthboardgamebymingmx.vercel.app/',
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
  {
    id: 'merchants-bluff',
    title: 'Merchant’s Bluff',
    category: 'Personal Project · Board Game',
    status: 'Playable Prototype',
    role: 'Solo Developer',
    summary:
      'A Thai bluffing game for 4–6 friends, with hidden goods, offers, and sheriff decisions. Design Preview screenshots use sample data.',
    roleDescription:
      'Developed the project independently, including the Next.js interface, game engine, server-side command validation, and Firebase-backed room state and authentication.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'React', 'Firebase Realtime Database', 'Firebase Anonymous Auth', 'Zod'],
    image: merchantsBluffCover,
    imageAlt: 'Merchant’s Bluff Design Preview cover combining crops of the four-player table and the merchant card-packing controls from the same sample screen.',
    imageWidth: 1600,
    imageHeight: 900,
    imageCaption: 'Design Preview · Sample data, not a multiplayer playtest. The cover combines table and packing-area crops from one local preview screenshot.',
    repositoryUrl: 'https://github.com/sirasakswnk/Merchant-s-Bluff',
    demoUrl: 'https://merchant-s-bluff.vercel.app/',
    screenshots: [
      {
        id: 'sheriff-decision',
        title: 'Sheriff decisions · Design Preview',
        image: merchantsBluffDecision,
        imageAlt: 'The sample sheriff panel showing merchant selection, a declaration of three apples, a four-coin offer, and pass or inspect controls.',
        width: 1073,
        height: 440,
        caption: 'Design Preview · The sheriff selection and decision panel with sample declarations and offers. This capture illustrates the UI rather than a multiplayer game outcome.',
      },
      {
        id: 'inspection-result',
        title: 'Inspection result · Design Preview',
        image: merchantsBluffInspection,
        imageAlt: 'A four-player design-preview table and inspection result showing revealed goods, seized contraband, a sample fine, and the next-merchant control.',
        width: 1440,
        height: 2030,
        caption: 'Design Preview · Sample inspection resolution with revealed goods, confiscation, and a fine, using the existing preview scenario.',
      },
      {
        id: 'ranking-and-rules',
        title: 'Ranking and rules · Design Preview',
        image: merchantsBluffRanking,
        imageAlt: 'Two separate design-preview captures: a ranking popup displaying rank and cash, and an expanded rules panel containing the scoring formula.',
        width: 1760,
        height: 950,
        caption: 'Design Preview · Two separate UI captures. The captured popup shows rank and cash only; total scores, item and bonus breakdowns, and market-leader awards are absent from that popup. The scoring rules are shown separately.',
      },
    ],
  },
]
