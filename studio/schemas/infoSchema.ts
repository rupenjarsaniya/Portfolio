export const infoSchema = {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'firstname',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'surname',
      type: 'string',
      title: 'Surname',
    },
    {
      name: 'designations',
      type: 'array',
      title: 'Designations',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'resume',
      type: 'string',
      title: 'Resume',
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio',
    },
    {
      name: 'languages',
      type: 'array',
      title: 'Languages',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'language',
              type: 'string',
              title: 'Language',
            },
            {
              name: 'level',
              type: 'string',
              title: 'Level',
            },
          ],
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        {
          type: 'document',
          fields: [
            {name: 'collegeName', type: 'string', title: 'College Name'},
            {
              name: 'degree',
              type: 'string',
              title: 'Degree',
            },
            {
              name: 'timePeriod',
              type: 'string',
              title: 'Time Period',
            },
            {
              name: 'universityName',
              type: 'string',
              title: 'University Name',
            },
            {
              name: 'score',
              type: 'string',
              title: 'Score',
            },
          ],
        },
      ],
    },
    {
      name: 'workExperience',
      type: 'array',
      title: 'Work Experience',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'companyName',
              type: 'string',
              title: 'Company Name',
            },
            {
              name: 'timePeriod',
              type: 'string',
              title: 'Time Period',
            },
            {
              name: 'designation',
              type: 'string',
              title: 'Designation',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'companyLogo',
              type: 'string',
              title: 'Company Logo',
            },
            {
              name: 'location',
              type: 'string',
              title: 'Location',
            },
          ],
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'liveLink',
              type: 'string',
              title: 'Live Link',
            },
            {
              name: 'techStack',
              type: 'array',
              title: 'Tech Stack',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'githubLink',
              type: 'string',
              title: 'Github Link',
            },
          ],
        },
      ],
    },
    // Social links with icons and links and name
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link',
            },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon',
            },
          ],
        },
      ],
    },
  ],
}
