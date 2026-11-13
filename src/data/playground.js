import wavelengthCover from '@/assets/photo/playground/wavelength/optimized/cover.webp'
import wavelengthLobby from '@/assets/photo/playground/wavelength/optimized/lobby.webp'
import wavelengthGuessing from '@/assets/photo/playground/wavelength/optimized/guessing.webp'
import wavelengthResult from '@/assets/photo/playground/wavelength/optimized/game-result.webp'
import merchantsBluffCover from '@/assets/photo/playground/merchants-bluff/optimized/cover.webp'
import merchantsBluffDecision from '@/assets/photo/playground/merchants-bluff/optimized/sheriff-decision.webp'
import merchantsBluffInspection from '@/assets/photo/playground/merchants-bluff/optimized/inspection-result.webp'
import merchantsBluffRanking from '@/assets/photo/playground/merchants-bluff/optimized/ranking-and-rules.webp'
import inSyncCover from '@/assets/photo/playground/in-sync/optimized/cover.webp'
import inSyncLobby from '@/assets/photo/playground/in-sync/optimized/lobby.webp'
import inSyncReveal from '@/assets/photo/playground/in-sync/optimized/round-reveal.webp'
import inSyncResults from '@/assets/photo/playground/in-sync/optimized/game-results.webp'
import whoAreYouCover from '@/assets/photo/playground/who-are-you-really/optimized/cover.webp'
import whoAreYouLobby from '@/assets/photo/playground/who-are-you-really/optimized/lobby.webp'
import whoAreYouRound from '@/assets/photo/playground/who-are-you-really/optimized/round-reveal.webp'
import whoAreYouResults from '@/assets/photo/playground/who-are-you-really/optimized/match-result.webp'
import imTheBossCover from '@/assets/photo/playground/im-the-boss/optimized/cover.webp'
import imTheBossOffers from '@/assets/photo/playground/im-the-boss/optimized/boss-offers.webp'
import imTheBossAction from '@/assets/photo/playground/im-the-boss/optimized/action-card.webp'
import imTheBossResults from '@/assets/photo/playground/im-the-boss/optimized/final-score.webp'

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
  {
    id: 'in-sync',
    title: 'IN SYNC',
    category: 'Personal Project · Board Game',
    status: 'Completed · Playable',
    role: 'Solo Developer',
    summary:
      'A two-player game for ranking preferences and guessing your partner’s choices. Screenshots show a local Design Preview with sample data.',
    roleDescription:
      'Developed the game independently, including the Next.js interface, ranking interactions, round and scoring logic, server-side commands, and Firebase authentication and realtime state.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'React', '@dnd-kit', 'CSS Modules'],
    image: inSyncCover,
    imageAlt: 'IN SYNC Design Preview cover with the five-card guessing board and a cropped sample summary showing scores of 16 and 22.',
    imageWidth: 1600,
    imageHeight: 900,
    imageCaption: 'Design Preview · A composition of the original mobile guessing screen and a crop of the sample results screen.',
    repositoryUrl: 'https://github.com/sirasakswnk/In-sync-boardgame',
    demoUrl: 'https://heartsyncboardgamebymingmx.vercel.app/',
    screenshots: [
      {
        id: 'lobby',
        title: 'Room and question decks · Design Preview',
        image: inSyncLobby,
        imageAlt: 'The IN SYNC preview lobby with two sample players, a six-character room code, selectable question decks, one ready player, and a disabled start button.',
        width: 860,
        height: 2360,
        caption: 'Design Preview · Two sample players with one ready. The selected question decks and waiting-to-start state follow the original preview fixture.',
      },
      {
        id: 'round-reveal',
        title: 'Rank comparison · Design Preview',
        image: inSyncReveal,
        imageAlt: 'All five sample answer cards revealed, comparing actual and guessed ranks with per-card points and a round score of eight out of ten.',
        width: 860,
        height: 2520,
        caption: 'Design Preview · Five revealed cards compare the actual and guessed positions. The sample round awards 8/10 points using the existing scoring logic.',
      },
      {
        id: 'game-results',
        title: 'Game summary · Design Preview',
        image: inSyncResults,
        imageAlt: 'The sample IN SYNC game summary with scores of 16 and 22 out of 30, a rematch control, best-round notes, and seven exact guesses for each player.',
        width: 860,
        height: 2520,
        caption: 'Design Preview · Sample totals of 16–22, best-round notes, and exact-guess counts. These values come from the local preview scenario.',
      },
    ],
  },
  {
    id: 'who-are-you-really',
    title: 'Who Are You Really?',
    category: 'Personal Project · Board Game',
    status: 'Completed · Playable',
    role: 'Solo Developer',
    summary:
      'A two-player deduction game with secret roles, scenario-based clues, and detective case files. Screenshots show a Design Preview with sample data.',
    roleDescription:
      'Developed the game independently, including the Next.js interface, secret-role and deduction workflows, round scoring, server-side commands, Firebase authentication and realtime state, and match history and rematch features.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'React', 'CSS Modules', 'Firebase Realtime Database', 'Firebase Anonymous Auth'],
    image: whoAreYouCover,
    imageAlt: 'Who Are You Really? Design Preview cover showing a sample statement and scenario question above the selected Spy and unselected Vampire suspect cards.',
    imageWidth: 1600,
    imageHeight: 900,
    imageCaption: 'Design Preview · Two crops from the same role-guessing screen, showing the evidence review and two suspect cards with Spy selected. The screen uses sample data.',
    repositoryUrl: 'https://github.com/sirasakswnk/Who-Are-You-Really-BoardGame',
    demoUrl: 'https://who-are-you-really-board-game.vercel.app/',
    screenshots: [
      {
        id: 'lobby',
        title: 'Two-player case room · Design Preview',
        image: whoAreYouLobby,
        imageAlt: 'The Who Are You Really? preview lobby with room code DEMOUI, sample players Mali and Ton, both ready, and an enabled start button.',
        width: 2048,
        height: 2304,
        caption: 'Design Preview · Both sample players are ready after using the preview ready control. The room code, presence, and ready states are demonstration data.',
      },
      {
        id: 'round-reveal',
        title: 'Roles, guesses, and round scores · Design Preview',
        image: whoAreYouRound,
        imageAlt: 'The sample round-two report revealing Alien and Spy roles, both guesses, four and three points awarded, and cumulative scores of nine to three.',
        width: 1288,
        height: 2224,
        caption: 'Design Preview · The round-two fixture reveals both roles and guesses, explains the sample awards of +4 and +3, and shows cumulative scores of 9–3.',
      },
      {
        id: 'match-result',
        title: 'Match results and history · Design Preview',
        image: whoAreYouResults,
        imageAlt: 'The sample four-round match summary showing Mali winning eleven to ten, all four round score rows, and rematch and home controls.',
        width: 1288,
        height: 2086,
        caption: 'Design Preview · Sample totals of 11–10 with four round summaries and a rematch control. These scores are provided by the preview fixture.',
      },
    ],
  },
  {
    id: 'im-the-boss',
    title: 'I’m The BOSS',
    category: 'Personal Project · Board Game',
    status: 'Completed · Playable',
    role: 'Solo Developer',
    summary:
      'A 3–6 player negotiation game with investor offers, influence cards, and profit sharing. Screenshots include emulator gameplay and Design Preview.',
    roleDescription:
      'Developed the game independently, including the React interface, TypeScript game engine, offer and influence-card workflows, Firebase room synchronization, and host migration.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'Firebase Realtime Database', 'Firebase Anonymous Auth'],
    image: imTheBossCover,
    imageAlt: 'I’m The BOSS cover with a four-player emulator table showing an open deal, one accepted offer, one pending offer, and the player’s hand.',
    imageWidth: 1600,
    imageHeight: 900,
    imageCaption: 'Firebase Emulators · A composition using the original four-player table screenshot. The deal has two accepted shares out of five and one pending offer. The boss’s balance remains at zero while the deal is open.',
    repositoryUrl: 'https://github.com/sirasakswnk/I-m-The-BOSS-BoardGame',
    demoUrl: 'https://im-the-boss-boardgame.vercel.app/',
    screenshots: [
      {
        id: 'boss-offers',
        title: 'Review offers · Design Preview',
        image: imTheBossOffers,
        imageAlt: 'A sample boss offer-review dialog with one accepted and one pending offer using the same red investor, proposed payouts, and a conflict-resolution control.',
        width: 1736,
        height: 1554,
        caption: 'Design Preview · Sample offers illustrate share allocation, proposed payouts, and a red-investor conflict. This UI scenario comes from the preview fixture.',
      },
      {
        id: 'action-card',
        title: 'Choose an influence card and target',
        image: imTheBossAction,
        imageAlt: 'An emulator player selecting a blue vacation card and the boss’s blue investor as its target, with the play-card button enabled before confirmation.',
        width: 1776,
        height: 1228,
        caption: 'Firebase Emulators · A participant selects a vacation card and the boss’s blue investor through the UI. Captured before confirming the card action.',
      },
      {
        id: 'final-score',
        title: 'Final rankings · Design Preview',
        image: imTheBossResults,
        imageAlt: 'A sample final ranking with all four balances revealed: Nok wins with 55 million, followed by 41, 36, and 12 million, with a rematch button below.',
        width: 1456,
        height: 1324,
        caption: 'Design Preview · Sample final balances of 55, 41, 36, and 12 million, with all four ranks revealed and a rematch control. These values come from the preview fixture.',
      },
    ],
  },
]
