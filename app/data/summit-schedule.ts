// Envision Supplier Summit 2026 – Program Schedule
// April 22–23, 2026

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  location?: string;
}

export interface DaySchedule {
  day: string;
  date: string;
  venue: string;
  address: string;
  sessions: ScheduleItem[];
}

export interface EventExperience {
  title: string;
  description: string;
  venue: string;
  address: string;
  sessions: ScheduleItem[];
}

export interface BeyondTheSummit {
  title: string;
  subtitle: string;
  intro: string;
  events: EventExperience[];
  registrationNote: string;
  registrationContact: string;
}

export const mainSchedule: DaySchedule[] = [
  {
    day: "Wednesday",
    date: "April 22, 2026",
    venue: "Hotel DAX",
    address: "14315 Midway Road, Addison, TX 75001",
    sessions: [
      {
        time: "1:00 PM – 2:30 PM",
        title: "Opening Remarks — Executive Leadership Presentations",
        description:
          "Hear directly from Envision's executive team as they set strategic direction, define growth priorities, and establish the future of our partnership. A candid, forward-looking discussion of where we're headed, what we're prioritizing, and how we expect to work together moving forward.",
      },
      {
        time: "2:30 PM – 3:30 PM",
        title: "Networking & Strategic Collaborations",
        description:
          "Dedicated time to connect directly with Envision leadership and fellow suppliers. Exchange ideas, explore partnership opportunities, and align on strategic priorities in a focused, conversational setting.",
      },
      {
        time: "3:30 PM – 5:00 PM",
        title: "Opening Reception",
        description:
          "A premier reception featuring hand-crafted cocktails, chef-curated hors d'oeuvres, and live conversation with the people who matter most to your business. Strategy meets relationship in a refined, high-energy atmosphere.",
      },
    ],
  },
  {
    day: "Thursday",
    date: "April 23, 2026",
    venue: "Envision, Dallas Campus",
    address: "1801 Valley View Lane, Farmers Branch, TX 75234",
    sessions: [
      {
        time: "7:30 AM – 9:30 AM",
        title: "Continental Breakfast",
        description:
          "Start the morning with a light breakfast and informal conversation before sessions begin.",
        location: "2nd Floor Administrative Lobby",
      },
      {
        time: "8:00 AM – 11:00 AM",
        title: "One-on-One Supply Chain Meetings",
        description:
          "Focused time with Envision's supply chain and operations leaders. Structured 15-minute sessions designed to align on current work, address operational priorities, and identify opportunities to move forward together.",
        location: "2nd Floor Administrative Lobby",
      },
      {
        time: "8:00 AM – 11:00 AM",
        title: "Plant Tours",
        description:
          "Walk the floors of Envision's Dallas manufacturing and logistics facility and experience the operation firsthand. Tours depart hourly at 8:00, 9:00, and 10:00 AM.",
        location: "2nd Floor Administrative Lobby",
      },
    ],
  },
];

export const beyondTheSummit: BeyondTheSummit = {
  title: "Beyond the Summit",
  subtitle: "Tournament Experience",
  intro:
    "Extend the summit experience beyond the meeting room while helping raise critical funds for Envision's Dallas Foundation. Join us in a relaxed, high-quality setting where meaningful conversations continue, relationships deepen, and your participation directly supports programs that drive lasting impact.",
  events: [
    {
      title: "Fore Vision Golf Tournament",
      description:
        "7th Annual ForeVision Golf Tournament benefiting Envision's Dallas Foundation.",
      venue: "Cowboys Golf Club",
      address: "1600 Fairway Dr, Grapevine, TX 76051",
      sessions: [
        {
          time: "12:00 PM",
          title: "Check-in & Lunch",
          description: "Check-in and lunch begin at noon ahead of the afternoon round.",
        },
        {
          time: "1:30 PM",
          title: "Shotgun Start",
          description:
            "All players tee off simultaneously across the course. A relaxed, high-energy environment designed for continued conversation and connection.",
        },
        {
          time: "6:00 PM",
          title: "Awards Dinner",
          description:
            "Close out the tournament with dinner, recognition, and continued conversation following the day's play.",
        },
      ],
    },
  ],
  registrationNote:
    "Pre-registration is required for the foundation event.",
  registrationContact: "Larissa.Roman@envisionus.com",
};

// Flat text version for the AI agent to reference
export const scheduleContext = `
ENVISION SUPPLIER SUMMIT 2026
April 22–23, 2026

=== WEDNESDAY, APRIL 22, 2026 ===
Venue: Hotel DAX
Address: 14315 Midway Road, Addison, TX 75001

1:00 PM – 2:30 PM | Opening Remarks — Executive Leadership Presentations
Hear directly from Envision's executive team as they set strategic direction, define growth priorities, and establish the future of our partnership. A candid, forward-looking discussion of where we're headed, what we're prioritizing, and how we expect to work together moving forward.

2:30 PM – 3:30 PM | Networking & Strategic Collaborations
Dedicated time to connect directly with Envision leadership and fellow suppliers. Exchange ideas, explore partnership opportunities, and align on strategic priorities.

3:30 PM – 5:00 PM | Opening Reception
A premier reception featuring hand-crafted cocktails, chef-curated hors d'oeuvres, and live conversation. Strategy meets relationship in a refined, high-energy atmosphere.

=== THURSDAY, APRIL 23, 2026 ===
Venue: Envision, Dallas Campus
Address: 1801 Valley View Lane, Farmers Branch, TX 75234

7:30 AM – 9:30 AM | Continental Breakfast
Start the morning with a light breakfast and informal conversation before sessions begin.
Location: 2nd Floor Administrative Lobby

8:00 AM – 11:00 AM | One-on-One Supply Chain Meetings
Topics: Current work · Operational alignment · Growth opportunities
Focused time with Envision's supply chain and operations leaders. Structured 15-minute sessions designed to align on current work, address operational priorities, and identify opportunities to move forward together.
Location: 2nd Floor Administrative Lobby

8:00 AM – 11:00 AM | Plant Tours
Walk the floors of Envision's Dallas manufacturing and logistics facility and experience the operation firsthand. Tours depart hourly at 8:00, 9:00, and 10:00 AM.
Location: 2nd Floor Administrative Lobby

=== BEYOND THE SUMMIT: Tournament Experience ===

THURSDAY – April 23, 2026
Fore Vision Golf Tournament (7th Annual)
Venue: Cowboys Golf Club
Address: 1600 Fairway Dr, Grapevine, TX 76051
Benefiting Envision's Dallas Foundation.
12:00 PM – Check-in & Lunch
1:30 PM – Shotgun Start (all players tee off simultaneously)
6:00 PM – Awards Dinner

Pre-registration is required for the foundation event.
For last-minute sign-ups, contact: Larissa.Roman@envisionus.com
`.trim();
