const PERSON_AGES = [
  'Child',
  'Teen',
  'Adult',
]

const PERSON_OCCUPATIONS = [
  'Post-secondary student',
  'Early-career professional', 
  'Mid-career professional',
  'Late-career professional',
]

const PERSON_GENDERS = [
  'Female',
  'Non-binary',
  'Male',
]

const PERSON_COMMUNITIES = [
  'LGBTQIA2S+',
  'Not a member of the above community',
]

const PERSON_GROUPS = [
  'Black',
  'Indigenous',
  'Not a member of the above groups',
]

export const PERSON_DEMOGRAPHICS = [
  ...PERSON_AGES,
  ...PERSON_OCCUPATIONS,
  ...PERSON_GENDERS,
  ...PERSON_COMMUNITIES,
  ...PERSON_GROUPS,
] as const

type PersonDemographic = typeof PERSON_DEMOGRAPHICS[number]
type PersonDemographics = PersonDemographic[]

export const REGIONS = [
  'NL',
  'Atlantic Canada',
  'Canada',
  'Global',
] as const

type Region = typeof REGIONS[number]

export const FORMATS = [
  'Virtual',
  'In-person',
] as const

type Format = typeof FORMATS[number]
type Formats = Format[]

export const CATEGORIES = [
  'Tech education',
  'Tech community',
  'Tech mentorship',
  'General mentorship',
] as const

type Category = typeof CATEGORIES[number]
type Categories = Category[]

export type Resource = {
  id?: string
  createdAt?: string
  name: string
  email?: string 
  websiteUrl?: string
  slackUrl?: string
  discordUrl?: string
  instagramUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  youtubeUrl?: string
  description: string
  participantDemographics: PersonDemographics
  volunteerDemographics: PersonDemographics
  region: Region
  formats: Formats
  categories: Categories
}

// type NewResource = Resource & {
//   reviewed: boolean
//   deprecated: boolean
//   submittedBy?: string
// }
