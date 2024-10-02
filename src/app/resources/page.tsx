import type { Resource } from '@/types/resources';
import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = createClient();
  const { data: resources } = await supabase
    .from('resources')
    .select()
    .eq('reviewed', true)
    .eq('deprecated', false)

  return (
    <div className="flex flex-col items-start justify-start space-y-16">
      {resources?.map(({
        id,
        name,
        email, 
        websiteUrl,
        slackUrl,
        discordUrl,
        instagramUrl,
        facebookUrl,
        twitterUrl,
        linkedinUrl,
        youtubeUrl,
        description,
        participantDemographics,
        volunteerDemographics,
        region,
        formats,
        categories,
      }: Resource) => (
        <div className="flex flex-col space-y-8" key={id}>
          <span>{name}</span>
          <div className="flex space-x-2">
            <span>{email}</span>
            <span>{websiteUrl}</span>
            <span>{slackUrl}</span>
            <span>{discordUrl}</span>
          </div>
          <div className="flex space-x-2">
            <span>{instagramUrl}</span>
            <span>{facebookUrl}</span>
            <span>{twitterUrl}</span>
            <span>{linkedinUrl}</span>
            <span>{youtubeUrl}</span>
          </div>
          <span>{description}</span>
          <div>
            {
            participantDemographics
              ?.map((participantDemographic) => (
                <span key={`${id}-${participantDemographic}`}>{`(${participantDemographic}) `}</span>
              ))
            }
          </div>
          <div>
            {
              volunteerDemographics
                ?.map((volunteerDemographic) => (
                  <span key={`${id}-${volunteerDemographic}`}>{`[${volunteerDemographic}] `}</span>
                ))
            }
          </div>
          <div className="flex space-x-2">
            <span>{region}</span>
            <div>
              {
                formats
                  ?.map((format) => (
                    <span key={`${id}-${format}`}>{`(${format}) `}</span>
                  ))
              }
            </div>
          </div>
          <div>
            {
              categories
                ?.map((category) => (
                  <span key={`${id}-${category}`}>{`[${category}] `}</span>
                ))
            }
          </div>
          <span>----</span>
        </div>
      ))}
    </div>
  );
}
