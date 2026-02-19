import { LineageContent, LineageKey, TreeNodeData } from './types';

export const lineageData: Record<LineageKey, LineageContent> = {
  france: {
    title: "🇫🇷 The French Connection: DuBose & Couillandeau",
    subtitle: "From the Seigneurs of Dieppe to the Swamps of Santee",
    color: "blue",
    contentPoints: [
      {
        index: 1,
        title: "Isaac DuBose (DuBosc) (b. ~1665)",
        description: "The Emigrant. Fled the persecution in France to become a pioneer in South Carolina.",
        badgeColor: "bg-blue-100 text-blue-600"
      },
      {
        index: 2,
        title: "Suzanne Couillandeau (b. ~1663)",
        description: "\"The Matriarch of the Swamp.\" After Isaac died in 1718, she managed the plantation alone for 24 years, transitioning the family from refugees to political power players.",
        badgeColor: "bg-pink-100 text-pink-600"
      }
    ],
    timeline: [
      { year: "1665", location: "Dieppe, Normandy", description: "Noble origins. The Edict of Nantes is revoked." },
      { year: "1685", location: "The Escape", description: "Fleeing to South Carolina via London." },
      { year: "1718", location: "Santee, SC", description: "Establishing the \"French Santee\" community." }
    ],
    sideBoxTitle: "The Migration Path"
  },
  ireland: {
    title: "🇮🇪 The Irish Barons: Le Poer (Power)",
    subtitle: "Curraghmore House & The Rebellion of 1641",
    color: "green",
    contentPoints: [
      {
        index: 1,
        title: "John Power (The Baron)",
        description: "Suffered a debilitating infection (\"lunacy\") that left the estate vulnerable.",
        badgeColor: "bg-green-100 text-green-600"
      },
      {
        index: 2,
        title: "Lady Ruth le Poer",
        description: "Fled the Irish Rebellion of 1641 to Virginia. She is the bridge between Irish Nobility and American pioneers.",
        badgeColor: "bg-green-100 text-green-600"
      }
    ],
    timeline: [],
    sideBoxTitle: "Curraghmore House",
    sideBoxContent: "Ancestral Seat of the Powers. \"Do not approach as a claimant, but as a cousin.\""
  },
  england: {
    title: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 The English Defenders: Woodson",
    subtitle: "The Potato Hole & The Roasting Spit",
    color: "red",
    contentPoints: [
      {
        index: 1,
        title: "Sarah Woodson",
        description: "Defended her home with a roasting spit against attackers during the 1644 Massacre.",
        badgeColor: "bg-red-100 text-red-600"
      },
      {
        index: 2,
        title: "The \"Potato Hole\" Son",
        description: "You descend specifically from the boy Sarah hid in the potato cellar. If he had sneezed, you would not exist.",
        badgeColor: "bg-red-100 text-red-600"
      }
    ],
    timeline: [],
    sideBoxTitle: "The Filter Event",
    sideBoxContent: "Genealogists call this a \"Filter Event\"—a moment where a bloodline is nearly extinguished. Your existence proves their success."
  },
  scotland: {
    title: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 The Scottish Chiefs: MacDonald / McCoy",
    subtitle: "The Battle of the Shirts & Highland Grit",
    color: "stone",
    contentPoints: [], // Using custom layout for Scotland in component if needed, or mapping generic
    timeline: [
        { year: "1544", location: "Battle of the Shirts", description: "Ancestors fought in linen shirts due to heat." },
        { year: "1800s", location: "Migration to GA", description: "Settling the pine forests." },
        { year: "1948", location: "Grandpa Leo McCoy", description: "The \"Shep\" dog story & rural resilience." }
    ],
    sideBoxTitle: "Highland Origins"
  }
};

export const familyTreeData: TreeNodeData = {
  name: "Timothy Christian Spurlin",
  title: "The Survivor",
  date: "1993",
  type: "self",
  children: [
    {
      name: "Timothy Leo Spurlin",
      title: "Father",
      type: "parent",
      children: [
        {
          name: "Aldwin Leo McCoy",
          title: "Grandfather",
          date: "1948-2000",
          info: "Had the dog 'Shep'",
          type: "ancestor",
          children: [
            {
              name: "Eugene McCoy",
              title: "Great-Grandfather",
              date: "1916-1974",
              type: "ancestor",
              children: [
                {
                  name: "William M.C. McCoy",
                  title: "Civil War Era",
                  date: "1830-1925",
                  type: "root",
                  children: []
                }
              ]
            },
            {
              name: "Betty Merle Croft",
              title: "Grandma Merle",
              date: "The Safe Haven",
              type: "ancestor",
              info: "Bought the heavy bag",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Mother (Native Descent)",
      title: "Mother",
      type: "parent",
      children: [
        {
          name: "Maternal Grandfather",
          title: "Native Heritage",
          type: "ancestor",
          children: []
        },
        {
          name: "Maternal Grandmother",
          title: "Grandmother",
          type: "ancestor",
          children: [
            {
              name: "Aunt Connie",
              title: "Half-Aunt",
              info: "The Bootcamp Era",
              type: "relative",
              children: []
            }
          ]
        }
      ]
    }
  ]
};

// Data for Radar Chart
export const skillsData = [
  { subject: 'Tech/Coding', A: 85, fullMark: 100 },
  { subject: 'Trades (Welding)', A: 90, fullMark: 100 },
  { subject: 'Intel Analysis', A: 80, fullMark: 100 },
  { subject: 'Music/Arts', A: 75, fullMark: 100 },
  { subject: 'Natural Medicine', A: 70, fullMark: 100 },
  { subject: 'Languages', A: 40, fullMark: 100 },
];

// Data for Timeline Chart
export const timelineData = [
  { year: '1544', intensity: 80, event: 'Battle of the Shirts (Scotland)' },
  { year: '1641', intensity: 90, event: 'Irish Rebellion (Lady Ruth flees)' },
  { year: '1644', intensity: 95, event: 'The Massacre (Potato Hole)' },
  { year: '1685', intensity: 85, event: 'Edict of Nantes Revoked (France)' },
  { year: '1948', intensity: 40, event: 'Grandpa Leo Born' },
  { year: '2001', intensity: 60, event: '9/11: The Empathy Spark' },
  { year: '2003', intensity: 85, event: 'Foster Care Trauma' },
  { year: '2012', intensity: 50, event: 'USAF Intel Service' },
  { year: '2026', intensity: 20, event: 'Full-Stack Humanity' },
];
